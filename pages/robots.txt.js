// pages/robots.txt.js
import siteConfig from '../lib/config';
export default function Robots() {}
export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(`User-agent: *\nAllow: /\nSitemap: ${siteConfig.url}/sitemap.xml\nDisallow: /api/\n`);
  res.end();
  return { props: {} };
}
