import { Sprout, Users, Package, Tag } from "lucide-react";
import PageMeta from "../components/seo/PageMeta.jsx";
import { formatPageTitle, routeMeta } from "../config/seo.js";

const features = [
  {
    Icon: Sprout,
    title: "Materiales sostenibles",
    lines: [
      "Hilos ecológicos, fibras recicladas y componentes de bajo impacto.",
      "Botones y accesorios amigables con el ambiente.",
    ],
  },
  {
    Icon: Users,
    title: "Confección con propósito social",
    lines: [
      "Apoyamos a mujeres cabeza de familia y talento con experiencia.",
      "Producción local que fortalece comunidades en Colombia.",
    ],
  },
  {
    Icon: Package,
    title: "Empaques biodegradables",
    lines: ["Empaques en fibra de gelatina y bio cambrel que reducen residuos plásticos."],
  },
  {
    Icon: Tag,
    title: "Etiquetas con semillas",
    lines: [
      "Etiquetas plantables que incentivan la agricultura urbana y un ciclo más consciente.",
    ],
  },
];

export default function About() {
  const meta = routeMeta.nosotros;
  return (
    <>
      <PageMeta title={formatPageTitle(meta.title)} description={meta.description} ogType={meta.ogType} />
      <section className="relative isolate flex min-h-[260px] items-center justify-center overflow-hidden sm:min-h-[520px]">
        <img
          src="/images/nosotros/banner.jpeg"
          alt="Stand ELIECO de ropa ecológica y plantas en feria de moda sostenible en Colombia"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        <div
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/75 via-black/45 to-black/70"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"
          aria-hidden
        />

        <div className="relative z-10 flex flex-col items-center justify-center px-5 text-center">
          <p className="eyebrow text-white/90">Nosotros</p>
          <h1 className="mt-2 max-w-4xl font-serif text-3xl font-semibold uppercase leading-tight text-white sm:text-5xl">
            Moda sostenible con elegancia y exclusividad
          </h1>
          <p className="mt-4 max-w-3xl font-serif text-xl font-medium leading-relaxed text-white sm:text-2xl">
            Moda que inspira,
            <br />
            naturaleza que respira
          </p>
        </div>
      </section>

      <section className="container-x grid items-center gap-10 py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow">Sostenibilidad</p>
          <h2 className="title-xl mt-2">Nuestra forma de hacer moda consciente</h2>
          <p className="spaced mt-10 max-w-xl text-ink/80">
            ELIECO nace en Bogotá como marca de moda sostenible bajo pedido. Diseñamos prendas femeninas que combinan
            estilo, hilos ecológicos, fibras responsables y empaques biodegradables. Vestir con elegancia puede impulsar
            un cambio real: menos inventario innecesario, más transparencia en materiales y procesos que apoyan a mujeres
            en la confección.
          </p>
        </div>
        <img
          src="/images/nosotros/procesos.jpeg"
          alt="Prenda tejida verde de moda sostenible ELIECO en exhibición"
          width={480}
          height={480}
          loading="lazy"
          decoding="async"
          className="mx-auto aspect-square w-full max-w-sm object-cover"
        />
      </section>

      <section className="bg-[#2A2118] text-white" aria-label="Características de ELIECO">
        <ul className="container-x grid grid-cols-1 divide-y divide-white/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {features.map(({ Icon, title, lines }) => (
            <li
              key={title}
              className="px-4 py-8 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-white/15 sm:[&:nth-child(-n+2)]:border-b sm:[&:nth-child(-n+2)]:border-white/15 lg:border-b-0 lg:border-r-0 lg:[&:nth-child(n+2)]:border-l lg:[&:nth-child(n+2)]:border-white/15"
            >
              <h3 className="flex items-center gap-3 font-serif text-sm font-semibold uppercase">
                <Icon size={18} aria-hidden="true" />
                {title}
              </h3>
              <ul className="spaced mt-4 list-disc space-y-2 pl-5 text-white/85">
                {lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x py-16">
        <p className="eyebrow">Comunidad</p>
        <h2 className="title-xl mt-2">Confianza que se construye prenda a prenda</h2>
        <p className="spaced mt-6 max-w-3xl text-ink/80">
          Las clientas de ELIECO valoran la calidad, la apariencia y la posibilidad de personalizar. Compartimos el
          proceso de elaboración, los materiales y el cuidado de cada prenda para que compres moda sostenible con
          confianza, no solo con una promesa ambiental.
        </p>
      </section>
    </>
  );
}
