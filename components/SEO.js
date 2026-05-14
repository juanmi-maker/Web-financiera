import Head from 'next/head';
import siteConfig from '../lib/config';

export default function SEO({ title, description, canonical, image, type = 'website', article = null, noindex = false }) {
  const fullTitle    = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
  const metaDesc     = description || siteConfig.description;
  const metaImage    = image || `${siteConfig.url}/og-default.png`;
  const canonicalUrl = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description"    content={metaDesc} />
      <meta name="robots"         content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical"       href={canonicalUrl} />
      <meta charSet="utf-8" />
      <meta name="viewport"       content="width=device-width, initial-scale=1" />
      <meta name="theme-color"    content="#064E3B" />

      {/* Open Graph */}
      <meta property="og:type"        content={type} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image"       content={metaImage} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:site_name"   content={siteConfig.name} />
      <meta property="og:locale"      content={siteConfig.locale} />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image"       content={metaImage} />

      {/* Article */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          <meta property="article:author" content={article.author || siteConfig.author} />
          {article.tags?.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
        </>
      )}

      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💸</text></svg>" />
    </Head>
  );
}
