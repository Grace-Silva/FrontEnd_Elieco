import Image from "next/image";
import { SOCIAL_LINKS } from "@/config/social";

export function FooterSocial() {
  return (
    <div className="flex w-full flex-1 items-center gap-[32px] px-[8px] py-[16px]">
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 transition-opacity hover:opacity-80"
          aria-label={item.label}
        >
          <Image
            src={item.icon}
            alt=""
            width={16}
            height={16}
            className="size-[16px] brightness-0 invert"
          />
        </a>
      ))}
    </div>
  );
}
