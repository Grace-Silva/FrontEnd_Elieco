import { postJson } from './api.js';

// Reglas idénticas a las del backend (utils/validateContact.js) para validar antes de enviar.
const EMAIL_REGEX =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

export function validateContactForm({ nombre, email, telefono, mensaje }) {
  const errors = {};
  const n = nombre.replace(/\s+/g, ' ').trim();
  if (!n) errors.nombre = 'El nombre es obligatorio.';
  else if (n.length < 2) errors.nombre = 'Debe tener al menos 2 caracteres.';
  else if (n.length > 100) errors.nombre = 'Debe tener máximo 100 caracteres.';

  const e = email.trim();
  if (!e) errors.email = 'El correo electrónico es obligatorio.';
  else if (e.length > 254 || e.includes('..') || !EMAIL_REGEX.test(e))
    errors.email = 'El correo electrónico no tiene un formato válido.';

  const t = telefono.trim();
  if (t) {
    const digits = t.replace(/\D/g, '');
    if (t.length > 20 || !/^\+?[\d\s().-]+$/.test(t) || digits.length < 7 || digits.length > 15)
      errors.telefono = 'Usa entre 7 y 15 dígitos; puedes incluir +, espacios o guiones.';
  }

  const m = mensaje.trim();
  if (!m) errors.mensaje = 'El mensaje es obligatorio.';
  else if (m.length < 5) errors.mensaje = 'Debe tener al menos 5 caracteres.';
  else if (m.length > 2000) errors.mensaje = 'Debe tener máximo 2000 caracteres.';

  return errors;
}

// POST /api/contact. Resuelve con la respuesta del backend o lanza ApiError.
export function sendContact({ nombre, email, telefono, mensaje, website }) {
  return postJson('/api/contact', {
    nombre: nombre.trim(),
    email: email.trim(),
    telefono: telefono.trim(),
    mensaje: mensaje.trim(),
    website, // campo trampa: debe viajar vacío en personas reales
  });
}
