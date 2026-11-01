function SearchIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0 text-elieco-ink"
    >
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

type HeaderSearchProps = {
  className?: string;
};

/** Barra de búsqueda visual (Figma `search-bar` + `search-field`). */
export function HeaderSearch({ className }: HeaderSearchProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center px-[16px] py-[8px] ${className ?? ""}`}
    >
      <div className="flex flex-col items-center justify-center px-[16px] py-[8px]">
        <div
          className="h-[44px] w-[288px] max-w-[40vw] border-b border-elieco-ink/20"
          aria-hidden
        />
      </div>
      <SearchIcon />
      <span className="sr-only">Buscar</span>
    </div>
  );
}
