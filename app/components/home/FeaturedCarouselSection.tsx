import React from "react";
import Image from "next/image";
import { heroColumnIndices, heroSlides, serif } from "./homeData";

type Props = {
  heroIndex: number;
  heroPhase: "idle" | "next" | "prev";
  heroLen: number;
  heroTx: number;
  heroTransition: boolean;
  heroTrackRef: React.RefObject<HTMLDivElement | null>;
  setHeroAutoplayPaused: (value: boolean) => void;
  onHeroTrackTransitionEnd: (e: React.TransitionEvent<HTMLDivElement>) => void;
  onSelectSlide: (idx: number) => void;
  goHero: (dir: -1 | 1) => void;
};

export function FeaturedCarouselSection({
  heroIndex,
  heroPhase,
  heroLen,
  heroTx,
  heroTransition,
  heroTrackRef,
  setHeroAutoplayPaused,
  onHeroTrackTransitionEnd,
  onSelectSlide,
  goHero,
}: Props) 
{
  return (
    <section
      className="relative w-full h-screen border-y border-stone-200/70 bg-[#ebe6dc]/45 flex items-center"
      aria-roledescription="carousel"
      aria-label="Featured atelier imagery"
      onMouseEnter={() => setHeroAutoplayPaused(true)}
      onMouseLeave={() => setHeroAutoplayPaused(false)}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 md:px-10">

        {/* Title */}
        <h1
          className="mb-6 text-center font-bold text-xl uppercase tracking-[0.35em] text-stone-500"
          style={serif}
        >
          Featured imagery
        </h1>

        {/* Carousel */}
        <div className="flex w-full justify-center overflow-hidden">
          <div
            ref={heroTrackRef}
            className="flex items-center gap-6 md:gap-10"
            style={{
              transform: `translateX(${heroTx}px)`,
              transition: heroTransition
                ? "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)"
                : "none",
            }}
            onTransitionEnd={onHeroTrackTransitionEnd}
          >
            {heroColumnIndices(heroIndex, heroPhase, heroLen).map((slideIdx, colIdx) => {
              const slide = heroSlides[slideIdx];
              const isCenter = colIdx === 2;

              const inner = (
                <div
                  className={`relative w-full overflow-hidden rounded-xl ring-1 ring-black/10 ${isCenter
                      ? "h-[72vh] scale-[1.04] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)]"
                      : "h-[50vh] opacity-90 shadow-[0_16px_34px_-24px_rgba(0,0,0,0.55)]"
                    }`}
                >
                  <Image
                    src={slide.image}
                    alt={isCenter ? slide.alt : ""}
                    fill
                    className={`object-cover ${isCenter ? "contrast-105 saturate-110" : "contrast-105 saturate-105"}`}
                    sizes="80vw"
                    priority={isCenter && heroIndex === 0}
                  />
                </div>
              );

              return (
                <div
                  key={colIdx}
                  data-hero-col
                  className={`flex items-center justify-center ${isCenter
                      ? "w-[min(80vw,500px)]"
                      : "w-[min(40vw,250px)]"
                    }`}
                >
                  {isCenter ? (
                    inner
                  ) : (
                    <button
                      onClick={() => onSelectSlide(slideIdx)}
                      className="w-full"
                    >
                      {inner}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => goHero(-1)}
            className="btn-luxury btn-luxury-ghost h-12 w-12 p-0 text-base tracking-[0]"
          >
            ←
          </button>
          <button
            onClick={() => goHero(1)}
            className="btn-luxury btn-luxury-ghost h-12 w-12 p-0 text-base tracking-[0]"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}