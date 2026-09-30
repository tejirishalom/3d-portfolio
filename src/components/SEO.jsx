import { Helmet } from 'react-helmet-async'

export default function SEO({
  title,
  description,
  canonical,
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonical}
      />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
        <meta
    property="og:image"
    content="https://shalom-co.vercel.app/og-image.png"
  />

  <meta name="twitter:card" content="summary_large_image" />

    </Helmet>
  )
}