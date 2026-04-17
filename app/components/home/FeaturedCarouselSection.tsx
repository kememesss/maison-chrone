"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { heroSlides, serif } from "./homeData";

type Props = {
  setHeroAutoplayPaused: (v: boolean) => void;
  heroAutoplayPaused?: boolean;
  goHero?: (dir: -1 | 1) => void;
  onSelectSlide?: (index: number) => void;
};

export function FeaturedCarouselSection({
  setHeroAutoplayPaused,
  heroAutoplayPaused,
  goHero,
  onSelectSlide,
}: Props) {
  const [slides, setSlides] = useState(heroSlides);
  const isAnimating = useRef(false);

  // drag
  const startX = useRef(0);
  const currentX = useRef(0);
  const dragging = useRef(false);

  const SLIDE_W = 460;
  const GAP = 32;
  const STEP = SLIDE_W + GAP;

  const [offset, setOffset] = useState(0);

  // =========================
  // SHIFT (INFINITE)
  // =========================
  const shiftNext = useCallback(() => {
    setSlides((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  }, []);

  const shiftPrev = useCallback(() => {
    setSlides((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
  }, []);

  // =========================
  // NAVIGATION
  // =========================
  const next = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setOffset(-STEP);
    goHero?.(1);
  }, [STEP, goHero]);

  const prev = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setOffset(STEP);
    goHero?.(-1);
  }, [STEP, goHero]);

  // smoother commit (delayed)
  const commit = useCallback(() => {
    setTimeout(() => {
      if (offset < 0) shiftNext();
      if (offset > 0) shiftPrev();
      setOffset(0);
      isAnimating.current = false;
    }, 20);
  }, [offset, shiftNext, shiftPrev]);

  // =========================
  // DRAG
  // =========================
  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    startX.current = e.clientX;
    currentX.current = offset;
    setHeroAutoplayPaused(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || isAnimating.current) return;
    const delta = e.clientX - startX.current;
    setOffset(currentX.current + delta);
  };

  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;

    const threshold = STEP * 0.15;

    if (offset < -threshold) {
      next();
    } else if (offset > threshold) {
      prev();
    } else {
      setOffset(0);
    }

    setHeroAutoplayPaused(false);
  };

  // =========================
  // KEYBOARD
  // =========================
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // =========================
  // AUTOPLAY
  // =========================
  useEffect(() => {
    if (heroAutoplayPaused) return;

    const id = setInterval(() => {
      if (!dragging.current) next();
    }, 6000);

    return () => clearInterval(id);
  }, [heroAutoplayPaused, next]);

  const activeSlide = slides[0];

  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#ebe6dc]"
      onPointerEnter={() => setHeroAutoplayPaused(true)}
      onPointerLeave={() => setHeroAutoplayPaused(false)}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 scale-110 blur-3xl opacity-30">
        <Image src={activeSlide.image} alt="" fill className="object-cover" />
      </div>

      {/* TITLE */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-20 px-4">
        <h1
          className="text-3xl md:text-5xl font-light tracking-[0.06em] text-stone-900 uppercase"
          style={serif}
        >
          Featured Imagery
        </h1>
      </div>

      {/* CAROUSEL */}
      <div className="relative flex items-center justify-center">
        <div
          className="flex items-center gap-8 will-change-transform touch-none cursor-grab active:cursor-grabbing"
          style={{
            transform: `translate3d(${offset}px,0,0)`,
            transition: isAnimating.current
              ? "transform 800ms cubic-bezier(0.22,1,0.36,1)"
              : "none",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onTransitionEnd={commit}
        >
          {slides.map((slide, i) => {
            const centerIndex = 2;
            const d = i - centerIndex;

            return (
              <button
                key={slide.image}
                onClick={() => onSelectSlide?.(i)}
                className="relative shrink-0 w-[460px] h-[58vh] rounded-[24px] overflow-hidden shadow-[0_40px_120px_-40px_rgba(0,0,0,0.75)]"
                style={{
                  transform: `
                    perspective(1200px)
                    translateZ(${Math.abs(d) * -80}px)
                    rotateY(${d * -8}deg)
                    scale(${1 - Math.abs(d) * 0.06})
                  `,
                  opacity: 1 - Math.abs(d) * 0.2,
                  filter: `blur(${Math.abs(d) * 0.6}px)`,
                  zIndex: 10 - Math.abs(d),
                  transition:
                    "transform 800ms cubic-bezier(0.22,1,0.36,1), opacity 800ms ease, filter 800ms ease",
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={i === centerIndex}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="absolute left-1/2 top-[calc(50%+34vh)] -translate-x-1/2 z-30 flex gap-6">
        <button
          onClick={prev}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md text-stone-800 shadow-md hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          ←
        </button>

        <button
          onClick={next}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md text-stone-800 shadow-md hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          →
        </button>
      </div>
    </section>
  );
}