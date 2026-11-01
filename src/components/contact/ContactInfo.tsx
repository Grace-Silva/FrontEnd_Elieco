import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/config/contact";
import { SOCIAL_LINKS } from "@/config/social";

type ContactRowProps = {
  title: string;
  icon: string;
  children: ReactNode;
};

function ContactRow({ title, icon, children }: ContactRowProps) {
  return (
    <div className="flex w-full max-w-[350px] flex-col gap-2">
      <h3 className="font-display text-[20px] font-bold uppercase leading-normal text-elieco-ink">
        {title}
      </h3>
      <div className="flex items-center gap-4">
        <Image src={icon} alt="" width={24} height={24} className="size-6 shrink-0" />
        <div className="font-sans text-base font-light uppercase leading-normal text-elieco-ink">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8 p-4 sm:p-8 lg:max-w-md">
      <ContactRow title="correo" icon="/icons/mail.svg">
        <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-elieco-green">
          {CONTACT_INFO.email}
        </a>
      </ContactRow>

      <ContactRow title="whatsapp" icon="/icons/whatsapp.svg">
        <a
          href={CONTACT_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-elieco-green"
        >
          {CONTACT_INFO.whatsapp}
        </a>
      </ContactRow>

      <ContactRow title="celular" icon="/icons/phone.svg">
        <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="hover:text-elieco-green">
          {CONTACT_INFO.phone}
        </a>
      </ContactRow>

      <div className="flex items-center gap-8 px-0 py-2">
        {SOCIAL_LINKS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 transition-opacity hover:opacity-70"
            aria-label={item.label}
          >
            <Image src={item.icon} alt="" width={20} height={20} className="size-5" />
          </Link>
        ))}
      </div>
    </div>
  );
}
