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
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">ELIECO Moda</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        Base del frontend en Next.js
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
        Estructura inicial con App Router, TypeScript y Tailwind. El cliente API apunta al backend
        Express en <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">/api/health</code> y{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">/api/contact</code>.
      </p>
      <Suspense
        fallback={
          <p className="mt-6 text-sm text-zinc-500">Comprobando conexión con el backend…</p>
        }
      >
        <BackendStatus />
      </Suspense>
    </section>
  );
}
