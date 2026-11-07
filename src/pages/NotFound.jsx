import { Link } from 'react-router-dom';
import PageMeta from '../components/seo/PageMeta.jsx';
import { formatPageTitle, routeMeta } from '../config/seo.js';

export default function NotFound({ product = false }) {
  const meta = product ? routeMeta.productNotFound : routeMeta.notFound;
  return (
    <section className="container-x py-24 text-center">
      <PageMeta
        title={formatPageTitle(meta.title)}
        description={meta.description}
        noindex
      />
      <p className="eyebrow">Error 404</p>
      <h1 className="title-xl mt-3">{product ? 'Esta prenda no existe' : 'Página no encontrada'}</h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-ink/70">
        {product
          ? 'La prenda que buscas no está en nuestro catálogo de moda sostenible o el enlace es incorrecto.'
          : 'Esta página no está en el sitio de ELIECO. Vuelve al inicio o explora la tienda de ropa ecológica femenina.'}
      </p>
      <Link to={product ? '/tienda' : '/'} className="btn-primary mt-8">
        {product ? 'Ir a la tienda sostenible' : 'Ir al inicio'}
      </Link>
    </section>
  );
}
