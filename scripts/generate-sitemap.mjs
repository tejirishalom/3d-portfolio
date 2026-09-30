import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SitemapStream, streamToPromise } from 'sitemap'

const defaultSiteUrl = 'https://shalom-co.vercel.app'
const siteUrl = new URL(process.env.SITE_URL || defaultSiteUrl)

if (
  !['http:', 'https:'].includes(siteUrl.protocol) ||
  siteUrl.username ||
  siteUrl.password ||
  siteUrl.pathname !== '/' ||
  siteUrl.search ||
  siteUrl.hash
) {
  throw new Error('SITE_URL must be an HTTP(S) origin, such as https://shalom-co.vercel.app')
}

const hostname = siteUrl.origin
const routes = [
  '/',
  '/about',
  '/projects',
  '/testimonial',
  '/contact',
  '/privacy-statement',
]

const sitemap = new SitemapStream({ hostname })

for (const route of routes) {
  sitemap.write({ url: route })
}

sitemap.end()

const xml = await streamToPromise(sitemap)
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const outputDirectory = path.resolve(scriptDirectory, '..', 'public')

await mkdir(outputDirectory, { recursive: true })
await writeFile(path.join(outputDirectory, 'sitemap.xml'), `${xml.toString()}\n`)
