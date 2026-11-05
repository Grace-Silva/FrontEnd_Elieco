// Configuración centralizada de la comunicación con el backend.
const rawBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export const API_URL = rawBase.replace(/\/+$/, '');

export class ApiError extends Error {
  constructor(message, { status = 0, code = 'NETWORK_ERROR', errors = [] } = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.errors = errors;
  }
}

// POST JSON. Lanza ApiError ante errores HTTP o de conexión.
export async function postJson(path, body, { timeoutMs = 15000 } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch (err) {
    throw new ApiError(
      err.name === 'AbortError'
        ? 'El servidor tardó demasiado en responder. Intenta de nuevo.'
        : 'No pudimos conectarnos con el servidor. Revisa tu conexión e intenta de nuevo.',
      { code: err.name === 'AbortError' ? 'TIMEOUT' : 'NETWORK_ERROR' }
    );
  } finally {
    clearTimeout(timer);
  }

  let data = null;
  try {
    data = await response.json();
  } catch {
    /* respuesta sin JSON */
  }

  if (!response.ok || !data?.success) {
    throw new ApiError(data?.message || 'Ocurrió un error inesperado en el servidor.', {
      status: response.status,
      code: data?.code || 'SERVER_ERROR',
      errors: Array.isArray(data?.errors) ? data.errors : [],
    });
  }
  return data;
}
