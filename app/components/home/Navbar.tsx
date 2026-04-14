import { MenuIcon, SearchIcon } from "./icons";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/70 bg-[#f7f5f1]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5 md:px-10">
        <a href="#" className="group flex items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-800/90 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-800 transition group-hover:border-[var(--accent)]"
            aria-hidden
          >
            mc
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-800">
            Maison Chrone
          </span>
        </a>
        <div className="hidden flex-1 justify-center md:flex">
          <div className="flex w-full max-w-sm items-center gap-3 border-b border-stone-300/90 pb-2 transition focus-within:border-stone-800">
            <SearchIcon />
            <span className="sr-only">Search</span>
          </div>
        </div>
        <button
          type="button"
          className="btn-luxury btn-luxury-ghost h-11 w-11 p-0 text-stone-800"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
