import { createServer } from 'node:http'
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'
import { siteRoutes } from '../src/constants/siteRoutes.js'

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

const seoTagPattern = /<(?:meta\b[^>]*>|link\b[^>]*>)/gi

const indexHtml = await readFile(path.join(outputDirectory, 'index.html'))

function removeUnmanagedSeoTags(html) {
  return html.replace(seoTagPattern, (tag) => {
    if (/\bdata-rh=["']true["']/i.test(tag)) return tag

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

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: true,
})

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
    const expectedCanonical = new URL(route, 'https://shalom-co.vercel.app').href

    if (route !== '/') {
      await page.evaluate((pathname) => {
        window.history.pushState({}, '', pathname)
        window.dispatchEvent(new PopStateEvent('popstate'))
      }, route)
    }

    try {
      await page.waitForFunction(
        ({ canonical }) =>
          document.documentElement.dataset.appMounted === 'true' &&
          [...document.querySelectorAll('link[rel="canonical"]')]
            .some((link) => link.href === canonical),
        { timeout: 30000 },
        { canonical: expectedCanonical },
      )
    } catch (error) {
      const state = await page.evaluate(() => ({
        url: location.href,
        mounted: document.documentElement.dataset.appMounted,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        title: document.title,
        text: document.querySelector('#root')?.innerText?.slice(0, 300),
      }))
      console.error(`Prerender did not reach route "${route}":`, state)
      throw error
    }

    const html = removeUnmanagedSeoTags(await page.content())
    const routeDirectory = route === '/'
      ? outputDirectory
      : path.join(outputDirectory, route.slice(1))

    await mkdir(routeDirectory, { recursive: true })
    await writeFile(path.join(routeDirectory, 'index.html'), html)
    console.log(`Pre-rendered ${route}`)
  }
} finally {
  await browser.close()
  await new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve())
  })
}
