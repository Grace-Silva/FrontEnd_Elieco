import { DeliveryBar } from "@/components/layout/DeliveryBar";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { MainNavLinks } from "@/components/layout/MainNavLinks";
import { MobileNavMenu } from "@/components/layout/MobileNavMenu";
import { SiteLogo } from "@/components/layout/SiteLogo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <DeliveryBar />
      <div className="relative border-b border-black/10 bg-elieco-surface shadow-elieco-navbar">
        <div className="mx-auto flex min-h-[103px] max-w-[1440px] items-center justify-between gap-4 px-[16px] py-[16px] lg:min-h-[135.344px] lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-0 lg:px-[64px]">
          <SiteLogo />
          <MainNavLinks
            variant="header"
            className="hidden lg:flex lg:justify-self-center"
            listClassName="justify-center"
          />
          <div className="flex shrink-0 items-center justify-end gap-1 lg:justify-self-end">
            <HeaderSearch className="hidden lg:flex" />
            <MobileNavMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
