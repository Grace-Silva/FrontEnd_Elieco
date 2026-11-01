/** Contrato alineado con `validateContact.js` del backend. */
export type ContactPayload = {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje: string;
  /** Campo trampa anti-bots; debe ir vacío en envíos legítimos. */
  website?: string;
};

export const CONTACT_LIMITS = {
  nombre: { min: 2, max: 100 },
  email: { max: 254 },
  telefono: { max: 20, minDigits: 7, maxDigits: 15 },
  mensaje: { min: 5, max: 2000 },
} as const;
