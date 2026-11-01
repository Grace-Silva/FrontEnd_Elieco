import type { ReactNode } from "react";
import Link from "next/link";
import { LEGAL_NAV, MAIN_NAV } from "@/config/navigation";
import { FooterCopyright } from "@/components/layout/FooterCopyright";
import { FooterSocial } from "@/components/layout/FooterSocial";
import { SiteLogo } from "@/components/layout/SiteLogo";
import {
  footerContactLineClass,
  footerNavLinkClass,
  footerSloganClass,
  footerTitleClass,
} from "@/components/layout/styles";

function FooterColumnTitle({ children }: { children: ReactNode }) {
  return <h2 className={footerTitleClass}>{children}</h2>;
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={footerNavLinkClass}>
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-elieco-ink text-elieco-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-[32px] p-[32px] sm:p-[64px] xl:flex-row xl:gap-[16px]">
        <div className="flex flex-col items-start justify-center gap-[16px]">
          <SiteLogo />
          <p className={footerSloganClass}>Moda que inspira, naturaleza que respira</p>
        </div>

        <div className="flex flex-col items-start gap-[8px] self-stretch p-[8px]">
          <FooterColumnTitle>Enlaces</FooterColumnTitle>
          <nav aria-label="Enlaces del sitio" className="flex flex-col items-start">
            {MAIN_NAV.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start gap-[8px] self-stretch p-[8px]">
          <FooterColumnTitle>Ayuda</FooterColumnTitle>
          <nav aria-label="Información legal" className="flex flex-col items-start">
            {LEGAL_NAV.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start gap-[8px] self-stretch p-[8px]">
          <FooterColumnTitle>Contacto</FooterColumnTitle>
          <p className={footerContactLineClass}>eliecomodasostenible@gmail.com</p>
          <p className={`${footerContactLineClass} whitespace-pre-wrap`}>+57 300 520 08 83</p>
          <p className={footerContactLineClass}>dirección física — por definir</p>
          <FooterSocial />
        </div>
      </div>
      <div className="border-t border-elieco-surface/15">
        <div className="mx-auto max-w-[1440px] px-[32px] sm:px-[64px]">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}
