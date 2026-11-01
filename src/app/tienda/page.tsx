import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tienda",
};

export default function TiendaPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-16">
      <h1 className="font-display text-3xl font-semibold uppercase">Tienda</h1>
      <p className="mt-4 text-elieco-ink/80">Catálogo — próximamente.</p>
    </section>
  );
}
