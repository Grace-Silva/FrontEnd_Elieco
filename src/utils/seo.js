import { siteUrl } from '../config/seo.js';

/**
 * @param {string} path
 */
export function absoluteUrl(path = '/') {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${p}`;
}

/**
 * Canonical URL for SPA routes (strips query on /tienda).
 * @param {string} pathname
 */
export function canonicalForPathname(pathname) {
  if (pathname === '/tienda' || pathname.startsWith('/tienda')) {
    return absoluteUrl('/tienda');
  }
  if (pathname !== '/' && pathname.endsWith('/')) {
    return absoluteUrl(pathname.slice(0, -1));
  }
  return absoluteUrl(pathname || '/');
}
