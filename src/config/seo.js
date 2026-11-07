import { site } from './site.js';

const DEFAULT_SITE_URL = 'https://elieco.com.co';

export const siteUrl = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');

export const defaultOgImage = `${siteUrl}/images/nosotros/banner.jpeg`;

export const siteName = site.name;
export const defaultTitle = `${site.name} | Moda sostenible femenina y bajo pedido en Colombia`;
export const defaultDescription =
  'Marca colombiana de moda sostenible: prendas exclusivas con hilos ecológicos, personalización por WhatsApp y envío gratis en Colombia desde $200.000. Elige con propósito.';

/** @type {Record<string, { title: string; description: string; ogType?: string; noindex?: boolean }>} */
export const routeMeta = {
  home: {
    title: defaultTitle,
    description: defaultDescription,
    ogType: 'website',
  },
  tienda: {
    title: 'Tienda de moda sostenible — prendas bajo pedido',
    description:
      'Explora vestidos, blusas, pantalones y conjuntos de moda ecológica femenina. Talla, color y personalización. Envío gratis en Colombia desde $200.000.',
    ogType: 'website',
  },
  nosotros: {
    title: 'Historia y proceso — moda sostenible con impacto social',
    description:
      'ELIECO en Bogotá: moda sostenible bajo pedido, hilos ecológicos, empaques biodegradables y confección con impacto social en Colombia.',
    ogType: 'website',
  },
  contacto: {
    title: 'Contacto — pedidos personalizados y asesoría WhatsApp',
    description:
      'Escríbenos para cotizar prendas personalizadas, resolver dudas sobre tallas, materiales o envíos a todo Colombia. WhatsApp, correo y formulario.',
    ogType: 'website',
  },
  notFound: {
    title: 'Página no encontrada',
    description:
      'Esta página no está en el sitio de ELIECO. Vuelve al inicio o explora la tienda de moda sostenible femenina.',
    noindex: true,
  },
  productNotFound: {
    title: 'Producto no encontrado',
    description: 'Esta prenda no está en el catálogo. Descubre otra ropa ecológica femenina en la tienda sostenible de ELIECO.',
    noindex: true,
  },
};

/**
 * @param {string} suffix
 * @returns {string}
 */
export function formatPageTitle(suffix) {
  if (!suffix) return defaultTitle;
  return `${suffix} | ${site.name}`;
}

/**
 * @param {string} text
 * @param {number} max
 */
export function truncateMeta(text, max = 155) {
  if (!text || text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}

/**
 * @param {{ nombre: string; descripcion: string; categoria: string; imagen: string }} product
 */
export function productMeta(product) {
  return {
    title: formatPageTitle(product.nombre),
    description: truncateMeta(
      `${product.nombre} — ${product.categoria}. ${product.descripcion} Compra moda sostenible ELIECO.`
    ),
    ogType: 'product',
    ogImage: product.imagen.startsWith('http') ? product.imagen : `${siteUrl}${product.imagen}`,
  };
}
