import { Sprout, Users, Package, Tag } from "lucide-react";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

const features = [
  {
    Icon: Sprout,
    title: "Materiales",
    lines: [
      "Prendas tejidas con hilos ecológicos.",
      "Botones y accesorios amigables con el ambiente.",
    ],
  },
  {
    Icon: Users,
    title: "Proceso",
    lines: [
      "Apoyamos a mamitas cabeza de familia, cuidadoras o mujeres talentosas que por su edad ya no son contratadas en las empresas.",
    ],
  },
  {
    Icon: Package,
    title: "Empaques",
    lines: ["Empaques elaborados en fibra de gelatina y bio cambrel."],
  },
  {
    Icon: Tag,
    title: "Etiquetas",
    lines: [
      "Incentivamos la agricultura urbana a través de etiquetas con semillas.",
    ],
  },
];

// CONTENIDO DE EJEMPLO: no son testimonios de clientes reales. Reemplazar cuando existan testimonios autorizados.
const community = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  quote:
    "Incentivamos la agricultura urbana a través de etiquetas con semillas.",
  name: "ELIECO",
  place: "Comunidad",
}));

export default function About() {
  useDocumentTitle("Nosotros");
  return (
    <>
      <section className="relative isolate flex min-h-[260px] items-center justify-center overflow-hidden sm:min-h-[520px]">
        <img
          src="/images/nosotros/banner.jpeg"
          alt="Stand de ELIECO con prendas y plantas"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-black/25" />

        {/* Contenido del banner */}
        <div
          className="
    relative
    z-10
    flex
    flex-col
    items-center
    justify-center
    px-5
    text-center
  "
        >
          {/* Título principal */}
          <h1
            className="
      font-serif
      text-5xl
      font-semibold
      uppercase
      leading-tight
      text-white
      sm:text-7xl
    "
          >
            ELIECO
          </h1>

          {/* Eslogan */}
          <p
            className="
      mt-4
      max-w-3xl
      font-serif
      text-2xl
      font-medium
      leading-relaxed
      text-white
      sm:text-4xl
    "
          >
            Moda que inspira,
            <br />
            naturaleza que respira
          </p>
        </div>
      </section>

      <section className="container-x grid items-center gap-10 py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow">Sostenibilidad</p>
          <h2 className="title-xl mt-2">Procesos responsables</h2>
          <p className="spaced mt-10 max-w-xl text-ink/80">
            ELIECO es una empresa creada por mujeres emprendedoras comprometidas
            con el cuidado del medio ambiente y el desarrollo social. Diseñamos
            y confeccionamos prendas femeninas elegantes utilizando hilos
            ecológicos, fibras recicladas y materiales biodegradables. Creemos
            que vestir con estilo no debe significar contaminar.
          </p>
        </div>
        <img
          src="/images/nosotros/procesos.jpeg"
          alt="Prenda tejida verde de ELIECO en exhibición"
          loading="lazy"
          className="mx-auto aspect-square w-full max-w-sm object-cover"
        />
      </section>

      <section
        className="bg-[#2A2118] text-white"
        aria-label="Características de ELIECO"
      >
        <ul className="container-x grid divide-white/15 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {features.map(({ Icon, title, lines }) => (
            <li key={title} className="px-4 py-8">
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
        <h2 className="title-xl mt-2">Comunidad ELIECO</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {community.map((c) => (
            <li
              key={c.id}
              className="flex items-center gap-4 border border-black/10 bg-white p-5"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-light font-serif text-lg text-brand-dark"
                aria-hidden="true"
              >
                E
              </span>
              <div>
                <p className="spaced italic text-ink/80">“{c.quote}”</p>
                <p className="mt-2 text-[11px] uppercase">
                  <strong>{c.name}</strong>{" "}
                  <span className="ml-2 text-ink/60">{c.place}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
