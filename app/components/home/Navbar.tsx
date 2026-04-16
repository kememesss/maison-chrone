import { MenuIcon, SearchIcon } from "./icons";

export function Navbar() {
  return (
    <header className="sticky top-0 z-999 border-b border-stone-200/70 bg-[#f7f5f1]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5 md:px-10">
        <a href="#" className="group flex items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-800/90 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-800 transition group-hover:border-(--accent)"
            aria-hidden
          >
            mc
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-800">
            Maison Chrone
          </span>
        </a>

        
      </div>
    </header>
  );
}
