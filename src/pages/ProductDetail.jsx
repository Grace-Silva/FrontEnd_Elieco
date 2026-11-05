import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductGallery from '../components/products/ProductGallery.jsx';
import ProductGrid from '../components/products/ProductGrid.jsx';
import { WhatsAppIcon } from '../components/common/SocialIcons.jsx';
import { getProductById, getRelated } from '../data/products.js';
import { formatCOP } from '../utils/format.js';
import { openWhatsapp, isWhatsappConfigured, buildProductMessage } from '../services/whatsappService.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import NotFound from './NotFound.jsx';

function Selector({ id, product }) {
  // Estado por producto (la key en el padre reinicia al cambiar de prenda)
  const [talla, setTalla] = useState(product.tallas[0] ?? '');
  const [color, setColor] = useState(product.colores[0]?.nombre ?? '');
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');
  const configured = isWhatsappConfigured();

  const onContact = () => {
    setError('');
    const ok = openWhatsapp(buildProductMessage({ producto: product.nombre, talla, color, nombre: nombre.trim() }));
    if (!ok) setError('El número de WhatsApp de ELIECO aún no está configurado (VITE_WHATSAPP_NUMBER).');
  };

  const sizeBtn = (active) => `min-w-9 border px-3 py-1.5 text-xs transition ${active ? 'border-ink bg-ink text-white' : 'border-black/25 hover:border-ink'}`;

  return (
    <div>
      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase">Talla</h2>
        <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Talla">
          {product.tallas.map((t) => (
            <button key={t} type="button" role="radio" aria-checked={talla === t} onClick={() => setTalla(t)} className={sizeBtn(talla === t)}>{t}</button>
          ))}
          <button type="button" role="radio" aria-checked={talla === 'Personalizado'} onClick={() => setTalla('Personalizado')} className={`${sizeBtn(talla === 'Personalizado')} uppercase`}>Personalizado</button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-sm font-semibold uppercase">Color{color && <span className="ml-2 font-normal normal-case text-muted">{color}</span>}</h2>
        <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Color">
          {product.colores.map((c) => (
            <button key={c.nombre} type="button" role="radio" aria-checked={color === c.nombre} aria-label={c.nombre} title={c.nombre} onClick={() => setColor(c.nombre)}
              className={`h-8 w-8 border-2 ${color === c.nombre ? 'border-ink ring-2 ring-white ring-offset-1 ring-offset-ink' : 'border-black/10'}`} style={{ backgroundColor: c.codigo }} />
          ))}
          <button type="button" role="radio" aria-checked={color === 'Personalizado'} onClick={() => setColor('Personalizado')} className={`${sizeBtn(color === 'Personalizado')} uppercase`}>Personalizado</button>
        </div>
      </div>
      <div className="mt-8">
        <label htmlFor={`${id}-nombre`} className="text-sm font-semibold uppercase">Indícanos tu nombre</label>
        <input id={`${id}-nombre`} value={nombre} maxLength={60} onChange={(e) => setNombre(e.target.value)} className="mt-3 block w-full max-w-xs border border-black/25 bg-white px-3 py-2 text-sm" />
      </div>
      <button type="button" onClick={onContact} disabled={!configured} className="mt-10 flex w-full items-center justify-center gap-3 bg-brand-dark px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60">
        Lo quiero!! Contactar ahora <WhatsAppIcon width={22} height={22} />
      </button>
      {!configured && <p role="status" className="mt-2 text-xs text-muted">El WhatsApp de la empresa aún no está configurado (VITE_WHATSAPP_NUMBER).</p>}
      {error && <p role="alert" className="mt-2 text-xs text-red-700">{error}</p>}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  useDocumentTitle(product?.nombre ?? 'Producto no encontrado');
  if (!product) return <NotFound product />;

  return (
    <>
      <section className="container-x py-10">
        <Link to="/tienda" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide hover:text-brand"><ArrowLeft size={14} /> Volver a la tienda</Link>
        <h1 className="title-xl mt-4">{product.nombre}</h1>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
          <div className="border border-black/10 bg-white p-4 sm:p-6">
            <ProductGallery images={product.imagenes} alt={product.nombre} />
            <ul className="mt-4 grid grid-cols-3 bg-[#2A2118] text-center text-white" aria-label="Impacto de la prenda">
              <li className="px-2 py-4"><strong className="block text-sm">{product.impacto.botellas}</strong><span className="text-[10px] uppercase leading-tight">Botellas de agua</span></li>
              <li className="border-x border-white/15 px-2 py-4"><strong className="block text-sm">{product.impacto.litros}</strong><span className="text-[10px] uppercase leading-tight">Litros de agua</span></li>
              <li className="px-2 py-4"><strong className="block text-sm">{product.impacto.amor}%</strong><span className="text-[10px] uppercase leading-tight">de amor</span></li>
            </ul>
            <h2 className="mt-4 text-xs font-semibold uppercase">Resumen del diseño</h2>
            <p className="spaced mt-1 text-ink/70">{product.nombre}, {product.categoria.toLowerCase()}, en stock.</p>
          </div>

          <div>
            <p className="inline-block border border-[#C8A15A] px-4 py-1.5 text-[11px] uppercase tracking-wide text-[#B08A3E]">{product.coleccion}</p>
            <p className="mt-8 text-[11px] uppercase tracking-wide text-ink/70">{product.nombre}</p>
            <p className="mt-1 font-serif text-2xl font-semibold">{formatCOP(product.precio)}</p>
            <p className="spaced mt-8 max-w-lg text-ink/80">{product.descripcion}</p>
            <Selector key={product.id} id={product.id} product={product} />
          </div>
        </div>
      </section>

      <section className="container-x py-12" aria-labelledby="esenciales">
        <h2 id="esenciales" className="title-xl">Prendas exclusivas</h2>
        <div className="mt-10"><ProductGrid products={getRelated(product.id, 4)} cols="grid-cols-2 lg:grid-cols-4" /></div>
      </section>
    </>
  );
}
