import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products, cols = 'grid-cols-2 lg:grid-cols-3' }) {
  return (
    <div className={`grid gap-x-5 gap-y-10 ${cols}`}>
      {products.map((p) => (<ProductCard key={p.id} product={p} />))}
    </div>
  );
}
