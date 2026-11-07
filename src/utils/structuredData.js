import { site } from '../config/site.js';
import { siteUrl, siteName, defaultDescription } from '../config/seo.js';
import { absoluteUrl } from './seo.js';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ClothingStore'],
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    email: site.email,
    telephone: site.phoneTel,
    logo: absoluteUrl('/logo/logos.png'),
    sameAs: [site.social.instagram, site.social.facebook].filter((u) => u && u !== '#'),
    slogan: site.tagline,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    inLanguage: 'es-CO',
    publisher: { '@type': 'Organization', name: siteName, url: siteUrl },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/tienda?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * @param {{ q: string; a: string }[]} faqs
 */
export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/**
 * @param {{ id: string; nombre: string; descripcion: string; categoria: string; precio: number; imagen: string; imagenes?: string[] }} product
 */
export function productSchema(product) {
  const images = product.imagenes?.length ? product.imagenes : [product.imagen];
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.nombre,
    description: product.descripcion,
    image: images.map((src) => (src.startsWith('http') ? src : absoluteUrl(src))),
    brand: { '@type': 'Brand', name: siteName },
    category: product.categoria,
    offers: {
      '@type': 'Offer',
      url: absoluteUrl(`/producto/${product.id}`),
      priceCurrency: 'COP',
      price: product.precio,
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: siteName },
    },
  };
}

/**
 * @param {{ name: string; url: string }[]} items
 */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
