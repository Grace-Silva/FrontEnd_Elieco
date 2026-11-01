import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  className?: string;
};

/** Logo ELIECO (Figma `logo-container`, ~115×103px). */
export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={`flex h-[103.344px] shrink-0 flex-col items-center justify-center px-[16px] py-[8px] ${className ?? ""}`}
      aria-label="ELIECO — inicio"
    >
      <Image
        src="/brand/logo.png"
        alt="ELIECO"
        width={500}
        height={500}
        priority
        className="aspect-[488/512] h-full w-auto max-h-[87px] object-contain"
      />
    </Link>
  );
}
