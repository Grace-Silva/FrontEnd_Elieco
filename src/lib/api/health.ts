import { apiFetch } from "@/lib/api/client";
import type { HealthResponse } from "@/types/api";

export async function getHealth(): Promise<HealthResponse> {
  return apiFetch<HealthResponse>("/api/health");
}
