import { Link } from 'react-router-dom';
import ColorSwatches from '../common/ColorSwatches.jsx';
import { formatCOP } from '../../utils/format.js';

export default function ProductCard({ product }) {
  return (
    <article className="group">
      <Link to={`/producto/${product.id}`} aria-label={`Ver ${product.nombre}`} className="block">
        <div className="aspect-[3/4] overflow-hidden bg-brand-cream">
          <img src={product.imagen} alt={product.nombre} loading="lazy" className="h-full w-full object-contain transition duration-500 group-hover:scale-105" />
        </div>
      </Link>
      <div className="mt-3"><ColorSwatches colors={product.colores} size="h-7 w-7" /></div>
      <Link to={`/producto/${product.id}`}>
        <p className="mt-4 text-[11px] uppercase tracking-wide text-ink/80 group-hover:underline">{product.nombre}</p>
        <p className="mt-1 text-lg font-medium">{formatCOP(product.precio)}</p>
      </Link>
    </article>
  );
}
