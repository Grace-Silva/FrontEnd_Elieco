import { loadProjectEnv } from './load-env.mjs';

/** Rutas indexables compartidas por sitemap y prerender. */
export const staticRoutes = ['/', '/tienda', '/nosotros', '/contacto'];

/**
 * @param {{ id: string }[]} products
 */
export function allIndexablePaths(products) {
  const productPaths = products.map((p) => `/producto/${p.id}`);
  return [...staticRoutes, ...productPaths];
}

export function getSiteUrlFromEnv() {
  loadProjectEnv();
  return (process.env.VITE_SITE_URL || 'https://elieco.com.co').replace(/\/$/, '');
}
