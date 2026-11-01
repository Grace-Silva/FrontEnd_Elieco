import Link from "next/link";
import { MAIN_NAV } from "@/config/navigation";
import { footerNavLinkClass, headerNavLinkClass } from "@/components/layout/styles";

type MainNavLinksProps = {
  variant: "header" | "footer";
  className?: string;
  listClassName?: string;
};

export function MainNavLinks({ variant, className, listClassName }: MainNavLinksProps) {
  const linkClass = variant === "header" ? headerNavLinkClass : footerNavLinkClass;

  return (
    <nav className={className} aria-label="Navegación principal">
      <ul className={`flex flex-wrap items-center gap-[16px] px-[16px] py-[8px] ${listClassName ?? ""}`}>
        {MAIN_NAV.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={linkClass}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
