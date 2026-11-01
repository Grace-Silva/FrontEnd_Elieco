export const MAIN_NAV = [
  { href: "/", label: "Inicio" },
  { href: "/tienda", label: "Tienda" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const LEGAL_NAV = [
  { href: "/legal/envio-y-entrega", label: "Envío y entrega" },
  { href: "/legal/pagos", label: "Pagos" },
  { href: "/legal/cambios-y-devoluciones", label: "Cambios y devoluciones" },
  { href: "/legal/terminos-y-condiciones", label: "Términos y condiciones" },
  { href: "/legal/politica-de-privacidad", label: "Política de privacidad" },
] as const;

export type MainNavItem = (typeof MAIN_NAV)[number];
export type LegalNavItem = (typeof LEGAL_NAV)[number];
