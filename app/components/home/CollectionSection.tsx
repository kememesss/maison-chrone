import { Category, categories, products, serif } from "./homeData";

type Props = {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
};

export function CollectionSection({ activeCategory, setActiveCategory }: Props) {
  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeCategory)
            : p.category === activeCategory
        );

  return (
    <section id="collection" className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-28">
      <h2 className="text-3xl font-light italic text-stone-800 md:text-4xl" style={serif}>
        New collection
      </h2>
      <p className="mt-2 max-w-lg text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
        Curated silhouettes
      </p>
      <div className="mt-10 rounded-[var(--radius-lg)] bg-[#1a1816] p-2 shadow-[var(--shadow-soft)] ring-1 ring-stone-900/20 md:p-2.5">
        <div className="flex gap-1.5 overflow-x-auto pb-0.5 md:flex-wrap md:justify-center md:overflow-visible">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.12em] transition md:px-6 md:text-[13px] ${
                  active
                    ? "btn-luxury btn-luxury-ghost border-[var(--accent)]/50 bg-[#f7f5f1] text-stone-900 shadow-sm ring-1 ring-[var(--accent)]/40"
                    : "border border-white/[0.14] bg-transparent text-stone-300 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
      <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-4 md:gap-x-8 md:gap-y-16">
        {filtered.map((p) => (
          <li key={p.name} className="group">
            <div
              className={`aspect-square w-full overflow-hidden rounded-[var(--radius-image)] bg-gradient-to-br shadow-[var(--shadow-card)] ring-1 ring-stone-900/[0.05] transition duration-500 group-hover:shadow-[var(--shadow-soft)] ${p.swatch}`}
            />
            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
              Atelier
            </p>
            <h3 className="mt-1 text-xl font-medium text-stone-900 md:text-2xl" style={serif}>
              {p.name}
            </h3>
            <p className="mt-2 text-xs font-light leading-relaxed text-stone-600 md:text-[13px]">
              {p.blurb}
            </p>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-stone-500">
          No pieces in this category yet—select another.
        </p>
      )}
    </section>
  );
}
