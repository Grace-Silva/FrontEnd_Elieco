import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { defaultOgImage, siteName } from '../../config/seo.js';
import { canonicalForPathname } from '../../utils/seo.js';

export default function PageMeta({
  title,
  description,
  ogImage = defaultOgImage,
  ogType = 'website',
  noindex = false,
  canonicalPath,
}) {
  const { pathname } = useLocation();
  const canonical = canonicalForPathname(canonicalPath ?? pathname);
  const robots = noindex ? 'noindex, follow' : 'index, follow';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robots} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:type" content={ogType === 'product' ? 'product' : ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
