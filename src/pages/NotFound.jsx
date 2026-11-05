import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function NotFound({ product = false }) {
  useDocumentTitle(product ? 'Producto no encontrado' : 'Página no encontrada');
  return (
    <section className="container-x py-24 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="title-xl mt-3">{product ? 'Esta prenda no existe' : 'Página no encontrada'}</h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-ink/70">
        {product ? 'La prenda que buscas no está disponible o el enlace es incorrecto.' : 'La dirección que visitaste no existe o fue movida.'}
      </p>
      <Link to={product ? '/tienda' : '/'} className="btn-primary mt-8">{product ? 'Volver a la tienda' : 'Ir al inicio'}</Link>
    </section>
  );
}
