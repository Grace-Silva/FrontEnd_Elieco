import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { loadProjectEnv } from './load-env.mjs';
import { products } from '../src/data/products.js';
import { allIndexablePaths } from './seo-routes.mjs';

loadProjectEnv();

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, '..', 'dist');
const serverEntry = path.join(dist, 'server', 'entry-server.js');
const templatePath = path.join(dist, 'index.html');

const { render } = await import(pathToFileURL(serverEntry).href);

/** Plantilla Vite limpia (sin SEO inyectado de una corrida anterior). */
function loadShellTemplate() {
  const raw = readFileSync(templatePath, 'utf8');
  let shell = raw.replace(/<div id="root">[\s\S]*?<\/div>/, '<div id="root"></div>');
  shell = shell.replace(/<title>[\s\S]*?<\/title>\s*/i, '');
  shell = shell.replace(/<meta name="description"[^>]*>\s*/i, '');
  shell = shell.replace(
    /(<link rel="stylesheet"[^>]*>)\s*[\s\S]*?(\n\s*<\/head>)/i,
    '$1$2'
  );
  return shell;
}

const templateBase = loadShellTemplate();

const HEAD_EXTRACTORS = [
  /<link rel="preload"[^>]*>/gi,
  /<title>[\s\S]*?<\/title>/gi,
  /<meta[^>]+>/gi,
  /<link rel="canonical"[^>]*>/gi,
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/gi,
];

function helmetTags(helmet) {
  if (!helmet) return '';
  return [helmet.title, helmet.meta, helmet.link, helmet.script]
    .filter(Boolean)
    .map((part) => (typeof part.toString === 'function' ? part.toString() : ''))
    .join('\n');
}

/** React 19 + Helmet: meta suele ir en el HTML del body; extraer al &lt;head&gt;. */
function splitAppHtml(appHtml) {
  const tags = [];
  let body = appHtml;
  for (const pattern of HEAD_EXTRACTORS) {
    body = body.replace(pattern, (match) => {
      tags.push(match);
      return '';
    });
  }
  return { tags: tags.join('\n'), body: body.trim() };
}

function buildPage(appHtml, helmet) {
  let headExtra = helmetTags(helmet);
  let body = appHtml;
  if (!headExtra.trim()) {
    const split = splitAppHtml(appHtml);
    headExtra = split.tags;
    body = split.body;
  }

  let html = templateBase;
  html = html.replace(/<title>[\s\S]*?<\/title>\s*/i, '');
  html = html.replace(/<meta name="description"[^>]*>\s*/i, '');
  html = html.replace('</head>', `${headExtra}\n</head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

function outFile(route) {
  if (route === '/') return path.join(dist, 'index.html');
  return path.join(dist, route.slice(1), 'index.html');
}

const routes = allIndexablePaths(products);
for (const route of routes) {
  const { html, helmet } = render(route);
  const file = outFile(route);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, buildPage(html, helmet), 'utf8');
}

console.log(`Prerender: ${routes.length} rutas en dist/`);
