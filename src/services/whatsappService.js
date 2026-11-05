// Click to Chat: https://wa.me/NUMERO?text=MENSAJE
const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '';

// Deja solo dígitos (quita +, espacios, guiones, paréntesis).
export const sanitizeNumber = (value) => String(value || '').replace(/\D/g, '');

export const WHATSAPP_NUMBER = sanitizeNumber(rawNumber);
// Formato internacional válido: 8 a 15 dígitos (ej. 573001234567).
export const isWhatsappConfigured = () => /^\d{8,15}$/.test(WHATSAPP_NUMBER);

// Devuelve la URL o null si el número no está bien configurado.
export function buildWhatsappLink(message = '') {
  if (!isWhatsappConfigured()) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${WHATSAPP_NUMBER}${text}`;
}

// Abre WhatsApp en una pestaña nueva. Devuelve false si no hay número configurado.
export function openWhatsapp(message = '') {
  const url = buildWhatsappLink(message);
  if (!url) return false;
  window.open(url, '_blank', 'noopener,noreferrer');
  return true;
}

export function buildProductMessage({ producto, talla, color, nombre }) {
  const parts = [`Hola, estoy interesado(a) en la prenda ${producto} de ELIECO.`];
  if (talla) parts.push(`Talla: ${talla}.`);
  if (color) parts.push(`Color: ${color}.`);
  if (nombre) parts.push(`Mi nombre es ${nombre}.`);
  parts.push('Me gustaría recibir más información sobre disponibilidad, tallas y precio.');
  return parts.join(' ');
}
