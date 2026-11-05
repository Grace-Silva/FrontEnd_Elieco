
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark text-white">

      {/* Imagen completa del Hero */}
      <img
        src="/images/hero/modelo.jpeg"
        alt="Modelo vistiendo una prenda estampada de ELIECO en un entorno natural"
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Degradado oscuro para destacar el texto */}
      <div
        className="
          absolute
          inset-0
          z-10
          bg-gradient-to-r
          from-black/65
          via-black/30
          to-transparent
        "
      />

      {/* Contenido del Hero */}
      <div className="
        container-x
        relative
        z-20
        flex
        min-h-[420px]
        flex-col
        justify-center
        py-16
        sm:min-h-[520px]
      ">

        {/* Título principal */}
<h1 className="
  max-w-3xl
  font-serif
  text-5xl
  font-semibold
  uppercase
  leading-tight
  sm:text-7xl
">
  ELIECO
</h1>

{/* Eslogan */}
<p className="
  mt-4
  max-w-2xl
  font-serif
  text-2xl
  font-medium
  leading-relaxed
  sm:text-4xl
">
  Moda que inspira,
  <br />
  naturaleza que respira
</p>

        {/* Botones */}
        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            to="/tienda"
            className="btn-primary border border-brand-dark"
          >
            Elige tu prenda
            <ShoppingBag size={16} />
          </Link>

          <Link
            to="/nosotros"
            className="btn-outline"
          >
            Conoce ELIECO
            <ArrowRight size={16} />
          </Link>

        </div>
      </div>
    </section>
  );
}
