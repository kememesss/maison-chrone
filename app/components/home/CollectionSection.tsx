"use client";

import Image from "next/image";
import { Category, categories, products, serif } from "./homeData";

type Props = {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
};

export function CollectionSection({
  activeCategory,
  setActiveCategory,
}: Props) {
  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeCategory)
            : p.category === activeCategory
        );

  return (
    <section
      id="collection"
      className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:px-10 md:py-28"
    >
      {/* Header */}
      <h2
        className="text-center text-2xl font-light italic text-stone-800 sm:text-3xl md:text-left md:text-4xl"
        style={serif}
      >
        New collection
      </h2>

      <p className="mx-auto mt-2 max-w-lg text-center text-xs font-medium uppercase tracking-[0.2em] text-stone-500 md:mx-0 md:text-left">
        Curated silhouettes
      </p>

      {/* Category Buttons */}
      <div className="mt-8 rounded-[var(--radius-lg)] bg-[#1a1816] p-2 shadow-[var(--shadow-soft)] ring-1 ring-stone-900/20 md:mt-10 md:p-2.5">
        <div className="grid grid-cols-6 gap-1.5 md:flex md:flex-wrap md:justify-center">
          {categories.map((cat, idx) => {
            const active = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`
                  col-span-2 w-full md:w-auto
                  flex items-center justify-center text-center
                  whitespace-nowrap rounded-full
                  px-4 py-2 sm:px-5 sm:py-2.5 md:px-6
                  text-[11px] sm:text-[10px] md:text-[13px]
                  font-medium uppercase tracking-[0.1em]

                  transition-all duration-200
                  transform-none active:scale-100 focus:scale-100

                  ${idx === 3 ? "col-start-2 md:col-auto" : ""}
                  ${idx === 4 ? "col-start-4 md:col-auto" : ""}

                  ${
                    active
                      ? `
                        border border-[var(--accent)]/50
                        bg-[#f7f5f1] text-stone-900
                        shadow-sm ring-1 ring-[var(--accent)]/40
                      `
                      : `
                        border border-white/[0.14]
                        bg-transparent text-stone-300
                        hover:border-white/30 hover:text-white
                        active:opacity-80
                      `
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products */}
      <ul
        className="
          mt-8
          grid grid-cols-2 gap-x-3 gap-y-6   /* MOBILE: 2 columns, tighter */
          sm:mt-12 sm:grid-cols-2 sm:gap-y-10
          md:mt-14 md:grid-cols-4 md:gap-x-8 md:gap-y-16
        "
      >
        {filtered.map((p) => (
          <li key={p.name} className="group text-center md:text-left">
            {/* Image */}
            <div
              className={`
                relative w-full overflow-hidden
                rounded-[var(--radius-image)]
                shadow-[var(--shadow-card)]
                ring-1 ring-stone-900/[0.05]
                transition duration-500 group-hover:shadow-[var(--shadow-soft)]
                ${p.image ? "bg-stone-100" : `bg-gradient-to-br ${p.swatch}`}
              `}
              style={{ aspectRatio: "1 / 1", maxHeight: "160px" }} // 👈 smaller on mobile
            >
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
                  className="object-cover"
                />
              )}
            </div>

            {/* Text */}
            <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--accent)] sm:mt-5 sm:text-[10px] sm:tracking-[0.25em]">
              Atelier
            </p>

            <h3
              className="mt-1 text-sm font-medium text-stone-900 sm:text-xl md:text-2xl"
              style={serif}
            >
              {p.name}
            </h3>

            <p className="mt-1 text-[11px] leading-relaxed text-stone-600 sm:mt-2 sm:text-[13px]">
              {p.blurb}
            </p>
          </li>
        ))}
      </ul>

      {/* Empty State */}
      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-stone-500">
          No pieces in this category yet—select another.
        </p>
      )}
    </section>
  );
}