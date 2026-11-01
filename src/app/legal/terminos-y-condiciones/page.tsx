import type { Metadata } from "next";
import { LegalStub } from "@/components/legal/LegalStub";

export const metadata: Metadata = { title: "Términos y condiciones" };

export default function Page() {
  return <LegalStub title="Términos y condiciones" />;
}
