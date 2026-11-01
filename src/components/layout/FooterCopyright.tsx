"use client";

import { useEffect, useState } from "react";
import { footerCopyrightClass } from "@/components/layout/styles";

export function FooterCopyright() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <p className={footerCopyrightClass}>
      © {year} ELIECO Moda. Todos los derechos reservados.
    </p>
  );
}
