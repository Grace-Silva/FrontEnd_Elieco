import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
};

export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-16">
      <h1 className="font-display text-3xl font-semibold uppercase">Nosotros</h1>
      <p className="mt-4 text-elieco-ink/80">Contenido — próximamente.</p>
    </section>
  );
}
