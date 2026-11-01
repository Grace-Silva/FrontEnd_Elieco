import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export function ContactSection() {
  return (
    <section className="relative min-h-[720px] w-full overflow-hidden">
      <Image
        src="/backgrounds/cloth-bg.png"
        alt=""
        fill
        priority
        className="-z-10 object-cover object-center"
        sizes="100vw"
      />

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-8 px-4 py-12 sm:px-16 sm:py-16">
        <header className="flex max-w-4xl flex-col gap-2">
          <p className="px-2 py-4 font-sans text-sm font-medium uppercase tracking-wide text-[#686868]">
            contacto
          </p>
          <h1 className="font-display text-2xl font-bold uppercase leading-tight text-elieco-ink sm:text-4xl">
            ¿tienes alguna duda, pedido o idea maravillosa?
          </h1>
        </header>

        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
