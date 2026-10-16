import { createServer } from 'node:http'
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'
import { sitePages, siteRoutes } from '../src/constants/siteRoutes.js'

const projectDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outputDirectory = path.join(projectDirectory, 'dist')
const routeSet = new Set(siteRoutes)
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.glb': 'model/gltf-binary',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.wasm': 'application/wasm',
  '.webp': 'image/webp',
}

const seoTagPattern = /<(?:title\b[^>]*>[\s\S]*?<\/title>|meta\b[^>]*>|link\b[^>]*>)/gi

const indexHtml = await readFile(path.join(outputDirectory, 'index.html'))

function cleanSeoTags(html) {
  return html.replace(seoTagPattern, (tag) => {
    if (/^<title\b/i.test(tag)) return ''

    const name = tag.match(/\bname=["']([^"']+)["']/i)?.[1]?.toLowerCase()
    const property = tag.match(/\bproperty=["']([^"']+)["']/i)?.[1]?.toLowerCase()
    const rel = tag.match(/\brel=["']([^"']+)["']/i)?.[1]?.toLowerCase()

    const isSeoMeta = (
      name === 'description' ||
      name === 'robots' ||
      name?.startsWith('twitter:') ||
      property?.startsWith('og:')
    )

    return isSeoMeta || rel === 'canonical' ? '' : tag
  })
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function createSeoMarkup(route, page) {
  const canonical = new URL(route, 'https://shalom-co.vercel.app').href
  const image = 'https://shalom-co.vercel.app/og-image.png'
  const title = escapeHtml(page.title)
  const description = escapeHtml(page.description)

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    '<meta name="robots" content="index, follow">',
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:url" content="${canonical}">`,
    '<meta property="og:type" content="website">',
    `<meta property="og:image" content="${image}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
    `<meta name="twitter:image" content="${image}">`,
  ].join('\n')
}

const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname

  if (pathname.startsWith('/_vercel/')) {
    response.writeHead(204)
    response.end()
    return
  }

  if (routeSet.has(pathname)) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
    response.end(indexHtml)
    return
  }

  let decodedPath
  try {
    decodedPath = decodeURIComponent(pathname)
  } catch {
    response.writeHead(400)
    response.end('Bad request')
    return
  }

  const filePath = path.resolve(outputDirectory, `.${decodedPath}`)
  if (!filePath.startsWith(`${outputDirectory}${path.sep}`)) {
    response.writeHead(404)
    response.end('Not found')
    return
  }

  try {
    const fileStat = await stat(filePath)
    if (!fileStat.isFile()) {
      response.writeHead(404)
      response.end('Not found')
      return
    }

    response.writeHead(200, {
      'content-type': mimeTypes[path.extname(filePath)] || 'application/octet-stream',
    })
    response.end(await readFile(filePath))
  } catch (error) {
    if (error.code !== 'ENOENT') {
      response.writeHead(500)
      response.end('Unable to serve prerender asset')
      console.error(`Failed to serve prerender asset "${filePath}":`, error)
      return
    }

    response.writeHead(404)
    response.end('Not found')
  }
})

async function launchBrowser() {
  // On Vercel / Linux, full puppeteer's Chrome needs system libs
  // (libnspr4.so, etc.) that are not installed, causing exit code 127.
  // @sparticuz/chromium ships a serverless-compatible binary instead.
  const isServerless = Boolean(process.env.VERCEL) || process.platform === 'linux'

  if (isServerless) {
    const executablePath = await chromium.executablePath()
    return puppeteer.launch({
      args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: chromium.headless,
    })
  }

  // Local dev (Windows/macOS): use the installed Chrome instead of
  // downloading Chromium, so `npm run build` works without extra setup.
  return puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    channel: 'chrome',
    headless: true,
  })
}

async function writeStaticFallback(reason) {
  console.warn(`Prerender browser unavailable, using static fallback: ${reason}`)
  const baseHtml = cleanSeoTags(indexHtml.toString())

  for (const route of siteRoutes) {
    const html = baseHtml.replace(
      '</head>',
      `${createSeoMarkup(route, sitePages[route])}\n</head>`,
    )
    const routeDirectory = route === '/'
      ? outputDirectory
      : path.join(outputDirectory, route.slice(1))

    await mkdir(routeDirectory, { recursive: true })
    await writeFile(path.join(routeDirectory, 'index.html'), html)
    console.log(`Pre-rendered ${route} (static fallback)`)
  }
}

let browser
try {
  browser = await launchBrowser()
} catch (error) {
  await writeStaticFallback(error?.message || error)
  process.exit(0)
}

try {
  await new Promise((resolve, reject) => {
    server.once('error', reject)
    server.listen(0, '127.0.0.1', resolve)
  })

  const address = server.address()
  if (!address || typeof address === 'string') {
    throw new Error('Could not determine the prerender server address')
  }

  const origin = `http://127.0.0.1:${address.port}`
  const page = await browser.newPage()
  page.on('pageerror', (error) => console.error('Prerender page error:', error))
  page.on('console', (message) => {
    if (message.type() === 'error') console.error('Prerender browser console:', message.text())
  })
  page.on('requestfailed', (request) => {
    console.error('Prerender request failed:', request.url(), request.failure()?.errorText)
  })

  await page.goto(`${origin}/`, { waitUntil: 'domcontentloaded', timeout: 120000 })

  for (const route of siteRoutes) {
    if (route !== '/') {
      await page.evaluate((pathname) => {
        window.history.pushState({}, '', pathname)
        window.dispatchEvent(new PopStateEvent('popstate'))
      }, route)
    }

    try {
      await page.waitForFunction(
        ({ pathname }) =>
          document.documentElement.dataset.appPath === pathname,
        { timeout: 30000 },
        { pathname: route },
      )
    } catch (error) {
      const state = await page.evaluate(() => ({
        url: location.href,
        renderedPath: document.documentElement.dataset.appPath,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        title: document.title,
        text: document.querySelector('#root')?.innerText?.slice(0, 300),
      }))
      console.error(`Prerender did not reach route "${route}":`, state)
      throw error
    }

    const html = cleanSeoTags(await page.content())
      .replace('</head>', `${createSeoMarkup(route, sitePages[route])}\n</head>`)
    const routeDirectory = route === '/'
      ? outputDirectory
      : path.join(outputDirectory, route.slice(1))

    await mkdir(routeDirectory, { recursive: true })
    await writeFile(path.join(routeDirectory, 'index.html'), html)
    console.log(`Pre-rendered ${route}`)
  }
} catch (error) {
  console.error('Browser prerender failed, falling back to static HTML:', error)
  await writeStaticFallback(error?.message || error)
} finally {
  if (browser) {
    await browser.close().catch(() => {})
  }
  await new Promise((resolve) => {
    if (server.listening) {
      server.close(() => resolve())
    } else {
      resolve()
    }
  })
}
