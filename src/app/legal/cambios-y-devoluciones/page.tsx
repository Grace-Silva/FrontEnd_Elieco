import type { Metadata } from "next";
import { LegalStub } from "@/components/legal/LegalStub";

export const metadata: Metadata = { title: "Cambios y devoluciones" };

export default function Page() {
  return <LegalStub title="Cambios y devoluciones" />;
}
