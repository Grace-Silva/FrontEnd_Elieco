"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { MAIN_NAV } from "@/config/navigation";

function MenuIcon() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="text-elieco-ink"
    >
      <path d="M4 7h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="text-elieco-surface"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MobileNavMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const drawer =
    open && mounted ? (
      <div
        id={panelId}
        className="fixed inset-0 z-[200] flex flex-col bg-elieco-green lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="flex shrink-0 items-center justify-between px-6 pb-2 pt-6 sm:px-10">
          <span className="font-display text-[22px] font-semibold uppercase tracking-wide text-elieco-surface">
            ELIECO
          </span>
          <button
            type="button"
            className="flex size-10 items-center justify-center"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <nav
          className="min-h-0 flex-1 overflow-y-auto px-6 pb-10 sm:px-10"
          aria-label="Navegación principal"
        >
          <ul>
            {MAIN_NAV.map((item, index) => {
              const number = String(index + 1).padStart(2, "0");
              return (
                <li key={item.href} className="border-b border-elieco-surface/20">
                  <Link
                    href={item.href}
                    className="flex items-baseline gap-6 py-5 font-display text-[22px] font-normal leading-none text-elieco-surface transition-opacity hover:opacity-90 sm:gap-8 sm:py-6 sm:text-[26px]"
                    onClick={() => setOpen(false)}
                  >
                    <span className="tabular-nums">{number}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    ) : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="flex size-11 items-center justify-center rounded-md text-elieco-ink transition-colors hover:bg-elieco-ink/5"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Abrir menú"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </button>
      {drawer ? createPortal(drawer, document.body) : null}
    </div>
  );
}
