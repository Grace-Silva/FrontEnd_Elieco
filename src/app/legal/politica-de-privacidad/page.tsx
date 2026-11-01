import type { Metadata } from "next";
import { LegalStub } from "@/components/legal/LegalStub";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function Page() {
  return <LegalStub title="Política de privacidad" />;
}
