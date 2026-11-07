import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/home/Hero.jsx';
import ProductGrid from '../components/products/ProductGrid.jsx';
import { getFeatured } from '../data/products.js';
import PageMeta from '../components/seo/PageMeta.jsx';
import JsonLd from '../components/seo/JsonLd.jsx';
import { routeMeta } from '../config/seo.js';
import { websiteSchema } from '../utils/structuredData.js';

export default function Home() {
  const featured = getFeatured(3);
  const meta = routeMeta.home;
  return (
    <>
      <PageMeta title={meta.title} description={meta.description} ogType={meta.ogType} />
      <JsonLd data={websiteSchema()} />
      <Hero />
      <section className="container-x py-16 sm:py-20" aria-labelledby="destacados">
        <p className="eyebrow">Colección destacada</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2 id="destacados" className="title-xl">Prendas exclusivas de moda consciente</h2>
          <Link to="/tienda" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide hover:text-brand">Ver toda la tienda <ArrowRight size={14} /></Link>
        </div>
        <div className="mt-12 px-0 sm:px-8"><ProductGrid products={featured} cols="grid-cols-1 sm:grid-cols-3" /></div>
      </section>
      <section className="bg-[#F5F6EC] py-16 sm:py-20">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-6">Sostenibilidad</p>
            <h2 className="font-serif text-3xl font-semibold uppercase leading-tight text-brand-dark sm:text-4xl">Más que ropa ecológica: una experiencia con propósito</h2>
          </div>
          <div>
            <p className="spaced max-w-md text-ink/80">
              En ELIECO trabajamos bajo pedido para evitar desperdicio. Cada prenda une diseño exclusivo, materiales
              sostenibles, etiquetas con semillas y empaques biodegradables, con confección que valora el talento de
              mujeres en Colombia.
            </p>
            <Link to="/nosotros" className="btn-primary mt-6">Nuestra historia sostenible <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
