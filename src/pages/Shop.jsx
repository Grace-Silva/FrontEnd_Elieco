import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductFilters from '../components/products/ProductFilters.jsx';
import ProductGrid from '../components/products/ProductGrid.jsx';
import { getProducts } from '../data/products.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const PAGE_SIZE = 6;
const list = (sp, key) => (sp.get(key) ? sp.get(key).split(',').filter(Boolean) : []);
const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export default function Shop() {
  useDocumentTitle('Tienda');
  const [sp, setSp] = useSearchParams();
  const [panel, setPanel] = useState(false);

  const filters = { prenda: list(sp, 'prenda'), talla: list(sp, 'talla'), color: list(sp, 'color') };
  const q = sp.get('q') || '';
  const page = Math.max(1, parseInt(sp.get('page') || '1', 10) || 1);
  const hasFilters = Boolean(q || filters.prenda.length || filters.talla.length || filters.color.length);

  const update = (mutate) => {
    const next = new URLSearchParams(sp);
    mutate(next);
    next.delete('page'); // al cambiar filtros se vuelve a la página 1
    setSp(next, { replace: true });
  };

  const onToggle = (key, value) =>
    update((next) => {
      const cur = list(sp, key);
      const arr = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
      if (arr.length) next.set(key, arr.join(',')); else next.delete(key);
    });
  const onClear = () => setSp({}, { replace: true });

  const filtered = useMemo(() => {
    const term = norm(q.trim());
    return getProducts().filter((p) =>
      (!filters.prenda.length || filters.prenda.includes(p.categoria)) &&
      (!filters.talla.length || p.tallas.some((t) => filters.talla.includes(t))) &&
      (!filters.color.length || p.colores.some((c) => filters.color.includes(c.nombre))) &&
      (!term || norm(`${p.nombre} ${p.categoria} ${p.descripcion}`).includes(term))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sp]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const goPage = (n) => {
    const next = new URLSearchParams(sp);
    if (n > 1) next.set('page', String(n)); else next.delete('page');
    setSp(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filterUI = <ProductFilters filters={filters} onToggle={onToggle} onClear={onClear} hasFilters={hasFilters} />;
  const pageBtn = 'flex h-8 w-8 items-center justify-center border text-xs transition';

  return (
    <section className="container-x py-10 sm:py-14">
      <p className="eyebrow">Tienda</p>
      <h1 className="title-xl mt-2">Viste con propósito</h1>
      {q && <p className="mt-3 text-sm text-ink/70">Resultados para “{q}”</p>}

      <button type="button" onClick={() => setPanel(true)} className="mt-6 inline-flex items-center gap-2 border border-black/20 px-4 py-2 text-xs uppercase lg:hidden">
        <SlidersHorizontal size={14} /> Filtros
      </button>

      <div className="mt-8 grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block" aria-label="Filtros">{filterUI}</aside>

        {panel && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filtros">
            <div className="absolute inset-0 bg-black/40" onClick={() => setPanel(false)} />
            <div className="absolute inset-y-0 left-0 w-72 max-w-[85%] overflow-y-auto bg-white p-6">
              <button type="button" onClick={() => setPanel(false)} aria-label="Cerrar filtros" className="mb-4 ml-auto block"><X /></button>
              {filterUI}
              <button type="button" onClick={() => setPanel(false)} className="btn-primary mt-6 w-full">Ver {filtered.length} prendas</button>
            </div>
          </div>
        )}

        <div>
          {visible.length ? (
            <ProductGrid products={visible} />
          ) : (
            <div className="border border-dashed border-black/20 p-10 text-center">
              <p className="font-serif text-lg">No encontramos prendas con esos filtros.</p>
              <button type="button" onClick={onClear} className="btn-primary mt-5">Limpiar filtros</button>
            </div>
          )}

          {totalPages > 1 && (
            <nav aria-label="Paginación" className="mt-12 flex items-center justify-center gap-3">
              <button type="button" aria-label="Página anterior" disabled={current === 1} onClick={() => goPage(current - 1)} className="p-1 disabled:opacity-30"><ChevronLeft /></button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button key={n} type="button" aria-current={n === current ? 'page' : undefined} onClick={() => goPage(n)}
                  className={`${pageBtn} ${n === current ? 'border-[#666] bg-[#666] text-white' : 'border-black/30 hover:bg-black/5'}`}>{n}</button>
              ))}
              <button type="button" aria-label="Página siguiente" disabled={current === totalPages} onClick={() => goPage(current + 1)} className="p-1 disabled:opacity-30"><ChevronRight /></button>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
