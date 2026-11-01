import type { Metadata } from "next";
import { LegalStub } from "@/components/legal/LegalStub";

export const metadata: Metadata = { title: "Personaliza" };

export default function Page() {
  return <LegalStub title="Personaliza" />;
}
