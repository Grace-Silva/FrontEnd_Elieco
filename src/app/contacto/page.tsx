import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos — dudas, pedidos e ideas.",
};

export default function ContactoPage() {
  return <ContactSection />;
}
