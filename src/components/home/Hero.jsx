
import { Link } from 'react-router-dom';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { buildWhatsappLink } from '../../services/whatsappService.js';
import { whatsappDefaultMessage } from '../../config/site.js';

export default function Hero() {
  const wa = buildWhatsappLink(whatsappDefaultMessage);

  return (
    <section className="relative isolate overflow-hidden bg-brand-dark text-white">
      <img
        src="/images/hero/modelo.jpeg"
        alt="Moda sostenible femenina ELIECO: prenda tejida con materiales ecológicos en entorno natural"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/25 to-black/40"
        aria-hidden
      />

      <div className="container-x relative z-20 flex min-h-[420px] flex-col justify-center py-16 sm:min-h-[520px]">
        <h1 className="max-w-4xl font-serif text-3xl font-semibold uppercase leading-tight sm:text-5xl lg:text-6xl">
          ELIECO · Moda sostenible femenina bajo pedido
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
          Diseñamos prendas exclusivas con hilos ecológicos y procesos responsables. Configura talla y color en la
          tienda o pide tu prenda personalizada por WhatsApp con asesoría cercana.
        </p>

        <p className="mt-4 max-w-2xl font-serif text-xl font-medium leading-relaxed sm:text-2xl">
          Moda que inspira,
          <br />
          naturaleza que respira
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/tienda" className="btn-primary border border-brand-dark">
            Explorar la tienda sostenible
            <ShoppingBag size={16} />
          </Link>
          {wa ? (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Personaliza por WhatsApp
              <MessageCircle size={16} />
            </a>
          ) : (
            <Link to="/contacto" className="btn-outline">
              Personaliza por WhatsApp
              <MessageCircle size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
