import { apiFetch } from "@/lib/api/client";
import type { ApiSuccessResponse } from "@/types/api";
import type { ContactPayload } from "@/types/contact";

export async function submitContact(
  payload: ContactPayload,
): Promise<ApiSuccessResponse> {
  return apiFetch<ApiSuccessResponse>("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      website: payload.website ?? "",
    }),
  });
}
