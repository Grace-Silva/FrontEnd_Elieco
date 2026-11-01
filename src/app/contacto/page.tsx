import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | ELIECO",
  description: "Formulario de contacto (próximamente).",
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Contacto</h1>
      <p className="mt-4 text-zinc-600">
        Aquí irá el formulario conectado a{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">POST /api/contact</code> del
        backend. Los tipos y el cliente HTTP ya están en{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">src/lib/api/contact.ts</code>.
      </p>
    </section>
  );
}
