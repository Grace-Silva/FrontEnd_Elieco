import { getApiUrl } from "@/lib/env";
import type { ApiErrorResponse } from "@/types/api";

export class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly errors?: ApiErrorResponse["errors"];

  constructor(status: number, body: ApiErrorResponse) {
    super(body.message);
    this.name = "ApiError";
    this.status = status;
    this.code = body.code;
    this.errors = body.errors;
  }
}

type JsonBody = ApiErrorResponse | { success: true; [key: string]: unknown };

export async function apiFetch<T extends JsonBody>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const url = `${getApiUrl()}${path.startsWith("/") ? path : `/${path}`}`;

  const response = await fetch(url, {
    ...init,
    headers: {
      Accept: "application/json",
      ...init?.headers,
    },
    cache: init?.cache ?? "no-store",
  });

  let body: JsonBody;
  try {
    body = (await response.json()) as JsonBody;
  } catch {
    throw new ApiError(response.status, {
      success: false,
      code: "INVALID_JSON",
      message: "La respuesta del servidor no es JSON válido.",
    });
  }

  if (!response.ok || body.success === false) {
    throw new ApiError(response.status, body as ApiErrorResponse);
  }

  return body as T;
}
