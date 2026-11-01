const DEFAULT_API_URL = "http://localhost:5000";

/** Base URL del backend (sin barra final). */
export function getApiUrl(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim() || DEFAULT_API_URL;
  return raw.replace(/\/+$/, "");
}
