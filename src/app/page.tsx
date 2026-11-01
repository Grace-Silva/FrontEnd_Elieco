import { Suspense } from "react";
import { getHealth } from "@/lib/api/health";
import { getApiUrl } from "@/lib/env";

async function BackendStatus() {
  try {
    const health = await getHealth();
    return (
      <p className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
        Backend conectado: <span className="font-medium">{health.status}</span> (
        {getApiUrl()})
      </p>
    );
  } catch {
    return (
      <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        No se pudo contactar el backend en {getApiUrl()}. Arranca{" "}
        <code className="rounded bg-amber-100 px-1">BackEnd_Elieco</code> con{" "}
        <code className="rounded bg-amber-100 px-1">npm run dev</code> y revisa CORS (
        <code className="rounded bg-amber-100 px-1">FRONTEND_ORIGIN</code>).
      </p>
    );
  }
}

export default function Home() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-16">
      <p className="font-sans text-sm font-medium uppercase tracking-widest text-elieco-ink/60">
        ELIECO Moda
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold uppercase sm:text-5xl">
        Inicio
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-elieco-ink/80">
        Estructura inicial de la aplicación.
      </p>

    </section>
  );
}
