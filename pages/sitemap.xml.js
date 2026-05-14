// pages/sitemap.xml.js
import { getAllPosts } from '../lib/posts';
import siteConfig from '../lib/config';

export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts();
  const base  = siteConfig.url;
  const now   = new Date().toISOString();

  const statics = [
    { url: '/',               priority: '1.0', freq: 'daily' },
    { url: '/articulos',      priority: '0.9', freq: 'daily' },
    { url: '/sobre-nosotros', priority: '0.5', freq: 'monthly' },
    { url: '/contacto',       priority: '0.4', freq: 'monthly' },
    { url: '/categoria/ahorro',    priority: '0.8', freq: 'weekly' },
    { url: '/categoria/inversion', priority: '0.8', freq: 'weekly' },
    { url: '/categoria/deudas',    priority: '0.8', freq: 'weekly' },
    { url: '/categoria/basicos',   priority: '0.8', freq: 'weekly' },
    { url: '/categoria/vivienda',  priority: '0.7', freq: 'weekly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${statics.map(({ url, priority, freq }) => `  <url>
    <loc>${base}${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
${posts.map(p => `  <url>
    <loc>${base}/articulos/${p.slug}</loc>
    <lastmod>${p.updatedDate || p.date || now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400');
  res.write(xml);
  res.end();
  return { props: {} };
}
