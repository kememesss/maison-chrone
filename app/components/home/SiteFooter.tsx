import { serif } from "./homeData";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-stone-800/20 bg-[var(--footer-bg)] py-10 md:py-12">
      <p
        className="text-center text-[11px] font-medium uppercase tracking-[0.35em] text-[var(--footer-accent)]"
        style={serif}
      >
        ⓒ All rights reserved Web Development by Cocoon
      </p>
    </footer>
  );
}
