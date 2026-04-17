import Image from "next/image";
import { serif } from "./homeData";

export function HeroIntroSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-12 md:px-10 md:pb-14 md:pt-20">
      <p className="text-center mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-[var(--accent)]">
        Est. atelier
      </p>
      <h1
        className="text-center text-[clamp(3rem,12vw,6rem)] font-light leading-[0.95] tracking-[0.06em] text-stone-900 uppercase"
        style={serif}
      >
        Maison Chrone
      </h1>







      <p
        className="text-lg text-center font-light leading-relaxed text-stone-700 md:text-xl"
        style={serif}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>



      <div className="mt-10 grid gap-12 md:mt-14 md:grid-cols-2 md:gap-20">
        <div className="flex max-w-md flex-col gap-8">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-image)] shadow-[var(--shadow-card)] ring-1 ring-stone-900/[0.05]">
            <Image
              src="/images/IMG_3438.webp"
              alt="Maison Chrone"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 28rem"
            />
          </div>
        </div>


        <div className="flex flex-col justify-center space-y-7 border-l border-stone-200/80 pl-6 md:pl-8">
          <p className="text-sm font-light leading-[1.75] text-stone-600 md:text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita aliquam itaque, voluptas omnis dignissimos provident, eveniet deserunt mollitia quibusdam, sunt ullam id odit molestias cupiditate! Veniam nesciunt laboriosam aperiam.
          </p>

          <p className="text-sm font-light leading-[1.75] text-stone-600 md:text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi accusantium natus unde sapiente! Repellat ea inventore aliquam, delectus laboriosam quam voluptatum sit sequi ducimus beatae, a, nam voluptatem minus!
          </p>

          <div className="flex flex-col gap-10 pt-2">

            <a href="#collection" className="link-luxury text-sm font-medium">
              View full catalog
              <span className="ml-1 text-[var(--accent)]" aria-hidden>
                →
              </span>
            </a>

            <a href="#book-now" className="btn-luxury inline-flex w-full max-w-64 justify-center py-3">
              Book now!
            </a>

          </div>




        </div>
      </div>
    </section>
  );
}
