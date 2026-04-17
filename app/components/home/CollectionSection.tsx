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
      {/* HEADER */}
      <h2
        className="text-center text-2xl font-light italic text-stone-800 sm:text-3xl md:text-left md:text-4xl"
        style={serif}
      >
        New collection
      </h2>

      <p className="mx-auto mt-2 max-w-lg text-center text-xs font-medium uppercase tracking-[0.2em] text-stone-500 md:mx-0 md:text-left">
        Curated silhouettes
      </p>

      {/* ================= CATEGORY FILTER ================= */}
      <div className="mt-8 rounded-[var(--radius-lg)] bg-[#1a1816] p-2 shadow-[var(--shadow-soft)] ring-1 ring-stone-900/20 md:mt-10 md:p-2.5">

        {/* MOBILE */}
        <div className="flex flex-col gap-2 md:hidden">

          {/* TOP ROW (3 buttons) */}
          <div className="flex gap-2 justify-center">
            {categories.slice(0, 3).map((cat) => {
              const active = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    flex-1 rounded-full px-4 py-2
                    text-[11px] uppercase tracking-[0.1em]
                    transition-all

                    ${
                      active
                        ? "bg-[#f7f5f1] text-stone-900 ring-1 ring-[var(--accent)]/40"
                        : "border border-white/[0.14] text-stone-300"
                    }
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* BOTTOM ROW (2 centered buttons) */}
          <div className="flex justify-center gap-2">
            {categories.slice(3).map((cat) => {
              const active = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    w-1/2 rounded-full px-4 py-2
                    text-[11px] uppercase tracking-[0.1em]
                    transition-all

                    ${
                      active
                        ? "bg-[#f7f5f1] text-stone-900 ring-1 ring-[var(--accent)]/40"
                        : "border border-white/[0.14] text-stone-300"
                    }
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const active = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  rounded-full px-6 py-2
                  text-[13px] uppercase tracking-[0.1em]
                  transition-all

                  ${
                    active
                      ? "bg-[#f7f5f1] text-stone-900 ring-1 ring-[var(--accent)]/40"
                      : "border border-white/[0.14] text-stone-300"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>

      {/* ================= PRODUCTS ================= */}
      <ul
        className="
          mt-8
          grid grid-cols-2 gap-x-3 gap-y-6
          sm:mt-12 sm:grid-cols-2 sm:gap-y-10
          md:mt-14 md:grid-cols-4 md:gap-x-8 md:gap-y-16
        "
      >
        {filtered.map((p) => (
          <li key={p.name} className="group text-center md:text-left">

            {/* IMAGE */}
            <div
              className="
                relative w-full overflow-hidden
                rounded-[var(--radius-image)]
                bg-stone-100
                shadow-[var(--shadow-card)]
                ring-1 ring-stone-900/[0.05]
                transition duration-500
                group-hover:shadow-[var(--shadow-soft)]
              "
              style={{ aspectRatio: "3 / 4" }}
            >
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
                  className="object-contain p-3"
                />
              )}
            </div>

            {/* LABEL */}
            <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--accent)] sm:mt-5 sm:text-[10px] sm:tracking-[0.25em]">
              Atelier
            </p>

            {/* NAME */}
            <h3
              className="mt-1 text-sm font-medium text-stone-900 sm:text-xl md:text-2xl"
              style={serif}
            >
              {p.name}
            </h3>

            {/* PRICE */}
            <p className="mt-2 text-[11px] font-medium text-stone-600 sm:text-[13px]">
              ₱{p.price.toLocaleString()}
            </p>

          </li>
        ))}
      </ul>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-stone-500">
          No pieces in this category yet—select another.
        </p>
      )}
    </section>
  );
}