import { serif } from "./homeData";

export function BookNowSection() {
  const fieldClassName =
    "mt-1.5 w-full rounded-xl border border-[#b9ac98]/35 bg-[#171412]/80 px-4 py-2.5 text-[13px] text-stone-100 placeholder:text-stone-500 transition focus:border-[#c9bba5]/80 focus:outline-none focus:ring-2 focus:ring-[#c9bba5]/30";

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#ebe6dc]/45 px-6 py-14">
      <div className="w-full max-w-7xl rounded-[28px] border border-[#b9ac98]/30 bg-linear-to-br from-[#211c18] via-[#171412] to-[#120f0d] p-8 text-white shadow-[0_30px_70px_-35px_rgba(0,0,0,0.75)] md:p-10">
        {/* Title */}
        <h2
          className="mb-2 text-center text-3xl text-[#f2ece4] md:text-4xl"
          style={serif}
        >
          Book a Site Visit
        </h2>
        <p className="mb-8 text-center text-[11px] uppercase tracking-[0.25em] text-[#c4b8a5]">
          Private showroom experience
        </p>

        {/* Form + Location */}
        <form className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-[#b9ad99]">
                Email
              </label>
              <input type="email" className={fieldClassName} />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-[#b9ad99]">
                Phone Number
              </label>
              <input type="tel" className={fieldClassName} />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-[#b9ad99]">
                Full Name
              </label>
              <input type="text" className={fieldClassName} />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-[#b9ad99]">
                Date
              </label>
              <input type="date" className={fieldClassName} />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-[#b9ad99]">
                Time
              </label>
              <input type="time" className={fieldClassName} />
            </div>

            <button type="submit" className="btn-luxury mt-3 w-full">
              Book Visit
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-[#b9ac98]/25 bg-[#161210]/55 p-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#c4b8a5]">
                Location
              </p>
              <h3 className="mt-2 text-lg text-[#f2ece4]" style={serif}>
                Maison Chroné Showroom
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-300/90">
                12 Rue des Rosiers, Le Marais
                <br />
                Paris, France
              </p>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[#b9ac98]/25 bg-[radial-gradient(circle_at_30%_20%,rgba(219,194,157,0.12),transparent_48%),linear-gradient(160deg,#1f1a16_0%,#151210_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(185,172,152,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(185,172,152,0.2)_1px,transparent_1px)] bg-size-[28px_28px] opacity-35" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f0d8b4]/50 bg-[#d8a86c]/20 shadow-[0_0_0_10px_rgba(216,168,108,0.12),0_12px_26px_-12px_rgba(0,0,0,0.75)] backdrop-blur-[1px]">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-7 w-7 text-[#f3d5aa]"
                    fill="currentColor"
                  >
                    <path d="M12 2c-3.86 0-7 3.14-7 7 0 4.97 6.07 12.3 6.33 12.61a.87.87 0 0 0 1.34 0C12.93 21.3 19 13.97 19 9c0-3.86-3.14-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                </div>
              </div>

              <p className="absolute bottom-3 left-3 rounded-md border border-[#b9ac98]/20 bg-[#0f0d0c]/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#c9bba5]">
                Pin Location Preview
              </p>
            </div>
          </div>
        </form>

      </div>





    </section>
  );
}