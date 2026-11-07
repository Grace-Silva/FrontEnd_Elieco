import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { loadProjectEnv } from './load-env.mjs';
import { products } from '../src/data/products.js';
import { allIndexablePaths, getSiteUrlFromEnv } from './seo-routes.mjs';

loadProjectEnv();

const root = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(root, '..', 'public', 'sitemap.xml');
const siteUrl = getSiteUrlFromEnv();
const paths = allIndexablePaths(products);
const lastmod = new Date().toISOString().slice(0, 10);

const urls = paths
  .map((loc) => {
    const priority = loc === '/' ? '1.0' : loc.startsWith('/producto/') ? '0.8' : '0.9';
    const changefreq = loc.startsWith('/producto/') ? 'weekly' : 'monthly';
    const full = `${siteUrl}${loc === '/' ? '' : loc}`;
    return `  <url>
    <loc>${full}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robotsPath = path.join(root, '..', 'public', 'robots.txt');
const robots = `# ELIECO
User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

mkdirSync(path.dirname(outPath), { recursive: true });
writeFileSync(outPath, xml, 'utf8');
writeFileSync(robotsPath, robots, 'utf8');
console.log(`sitemap.xml (${paths.length} URLs) → public/sitemap.xml`);
console.log('robots.txt → public/robots.txt');
