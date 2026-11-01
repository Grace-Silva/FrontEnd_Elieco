"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";
import { ApiError } from "@/lib/api/client";
import { submitContact } from "@/lib/api/contact";
import { CONTACT_LIMITS } from "@/types/contact";

type FieldErrors = Partial<Record<"nombre" | "email" | "telefono" | "mensaje", string>>;

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-display text-[20px] font-bold uppercase leading-normal text-elieco-ink"
    >
      {children}
    </label>
  );
}

const inputClass =
  "w-full border-0 border-b border-elieco-ink/20 bg-transparent px-0 font-sans text-base font-light text-elieco-ink outline-none placeholder:text-elieco-ink/40 focus:border-elieco-green";

export function ContactForm() {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setFormError(null);
    setSuccess(null);
    setFieldErrors({});

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await submitContact({
        nombre: String(data.get("nombre") ?? ""),
        email: String(data.get("email") ?? ""),
        telefono: String(data.get("telefono") ?? "") || undefined,
        mensaje: String(data.get("mensaje") ?? ""),
        website: String(data.get("website") ?? ""),
      });
      setSuccess(response.message);
      form.reset();
    } catch (error) {
      if (error instanceof ApiError) {
        setFormError(error.message);
        if (error.errors?.length) {
          const next: FieldErrors = {};
          for (const item of error.errors) {
            const key = item.field as keyof FieldErrors;
            if (key === "nombre" || key === "email" || key === "telefono" || key === "mensaje") {
              next[key] = item.message;
            }
          }
          setFieldErrors(next);
        }
      } else {
        setFormError("No pudimos enviar tu mensaje. Intenta de nuevo.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[720px] flex-col gap-4 border border-elieco-ink/20 bg-elieco-surface p-6 sm:p-8"
      noValidate
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="flex flex-col gap-1">
        <FieldLabel htmlFor="nombre">Nombre completo</FieldLabel>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          maxLength={CONTACT_LIMITS.nombre.max}
          className={`${inputClass} h-[60px]`}
          aria-invalid={Boolean(fieldErrors.nombre)}
        />
        {fieldErrors.nombre ? (
          <p className="text-sm text-red-700">{fieldErrors.nombre}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1">
        <FieldLabel htmlFor="email">correo electrónico</FieldLabel>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={CONTACT_LIMITS.email.max}
          className={`${inputClass} h-[60px]`}
          aria-invalid={Boolean(fieldErrors.email)}
        />
        {fieldErrors.email ? <p className="text-sm text-red-700">{fieldErrors.email}</p> : null}
      </div>

      <div className="flex flex-col gap-1">
        <FieldLabel htmlFor="telefono">celular/teléfono</FieldLabel>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          maxLength={CONTACT_LIMITS.telefono.max}
          className={`${inputClass} h-[60px]`}
          aria-invalid={Boolean(fieldErrors.telefono)}
        />
        {fieldErrors.telefono ? (
          <p className="text-sm text-red-700">{fieldErrors.telefono}</p>
        ) : null}
      </div>

      <div className="flex min-h-[120px] flex-col gap-1">
        <FieldLabel htmlFor="mensaje">¿qué quieres decirnos?</FieldLabel>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          maxLength={CONTACT_LIMITS.mensaje.max}
          rows={4}
          className={`${inputClass} min-h-[80px] resize-y py-2`}
          aria-invalid={Boolean(fieldErrors.mensaje)}
        />
        {fieldErrors.mensaje ? (
          <p className="text-sm text-red-700">{fieldErrors.mensaje}</p>
        ) : null}
      </div>

      {formError ? (
        <p className="font-sans text-sm text-red-700" role="alert">
          {formError}
        </p>
      ) : null}
      {success ? (
        <p className="font-sans text-sm text-elieco-green" role="status">
          {success}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-fit items-center gap-4 bg-elieco-green px-6 py-4 font-sans text-[20px] font-medium uppercase text-elieco-surface transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? "Enviando…" : "enviar"}
        <Image src="/icons/send.svg" alt="" width={16} height={16} className="size-4 brightness-0 invert" />
      </button>
    </form>
  );
}
