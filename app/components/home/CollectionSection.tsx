import Image from "next/image";
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
    <section id="collection" className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:px-10 md:py-28">
      <h2 className="text-center text-2xl font-light italic text-stone-800 sm:text-3xl md:text-left md:text-4xl" style={serif}>
        New collection
      </h2>
      <p className="mx-auto mt-2 max-w-lg text-center text-xs font-medium uppercase tracking-[0.2em] text-stone-500 md:mx-0 md:text-left">
        Curated silhouettes
      </p>
      <div className="mt-8 rounded-[var(--radius-lg)] bg-[#1a1816] p-2 shadow-[var(--shadow-soft)] ring-1 ring-stone-900/20 md:mt-10 md:p-2.5">
        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`w-full whitespace-nowrap rounded-full px-4 py-2 text-center text-[11px] font-medium uppercase tracking-[0.1em] transition sm:px-5 sm:py-2.5 sm:text-[12px] md:w-auto md:px-6 md:text-[13px] ${
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
      <ul className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:mt-12 sm:grid-cols-2 sm:gap-y-12 md:mt-14 md:grid-cols-4 md:gap-x-8 md:gap-y-16">
        {filtered.map((p) => (
          <li key={p.name} className="group text-center md:text-left">
            <div
              className={`relative aspect-square w-full overflow-hidden rounded-[var(--radius-image)] shadow-[var(--shadow-card)] ring-1 ring-stone-900/[0.05] transition duration-500 group-hover:shadow-[var(--shadow-soft)] ${
                p.image ? "bg-stone-100" : `bg-gradient-to-br ${p.swatch}`
              }`}
            >
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              )}
            </div>
            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--accent)] sm:mt-5 sm:tracking-[0.25em]">
              Atelier
            </p>
            <h3 className="mt-1 text-lg font-medium text-stone-900 sm:text-xl md:text-2xl" style={serif}>
              {p.name}
            </h3>
            <p className="mt-2 text-xs font-light leading-relaxed text-stone-600 sm:text-[13px]">
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
