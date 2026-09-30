import { writeFileSync, mkdirSync } from 'node:fs'
import { SitemapStream, streamToPromise } from 'sitemap'

const hostname = 'https://shalom-co.vercel.app'

const routes = [
  '/',
  '/about',
  '/projects',
  '/contact',
]

const sitemap = new SitemapStream({ hostname })

for (const route of routes) {
  sitemap.write({ url: route })
}

sitemap.end()

const xml = await streamToPromise(sitemap)

mkdirSync('public', { recursive: true })

writeFileSync('public/sitemap.xml', xml.toString())

