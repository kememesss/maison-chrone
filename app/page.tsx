"use client";

import React from "react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { CollectionSection } from "./components/home/CollectionSection";
import { FeaturedCarouselSection } from "./components/home/FeaturedCarouselSection";
import { HeroIntroSection } from "./components/home/HeroIntroSection";
import { Navbar } from "./components/home/Navbar";
import { SiteFooter } from "./components/home/SiteFooter";
import { BookNowSection } from "./components/home/BookNowSection";
import { Category, HERO_AUTOPLAY_MS, heroSlides } from "./components/home/homeData";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroAutoplayPaused, setHeroAutoplayPaused] = useState(false);
  const [heroPhase, setHeroPhase] = useState<"idle" | "next" | "prev">("idle");
  const [heroTx, setHeroTx] = useState(0);
  const [heroTransition, setHeroTransition] = useState(true);

  const heroLen = heroSlides.length;
  const heroTrackRef = useRef<HTMLDivElement>(null);
  const heroPhaseRef = useRef<"idle" | "next" | "prev">("idle");

  useEffect(() => {
    heroPhaseRef.current = heroPhase;
  }, [heroPhase]);

  const getHeroStepPx = useCallback(() => {
    const root = heroTrackRef.current;
    if (!root) return 84;
    const cols = root.querySelectorAll<HTMLElement>("[data-hero-col]");
    if (cols.length < 2) {
      return cols[0]?.getBoundingClientRect().width ?? 84;
    }
    const a = cols[0].getBoundingClientRect();
    const b = cols[1].getBoundingClientRect();
    return b.left - a.left;
  }, []);

  const finishHeroSnap = useCallback(() => {
    setHeroTransition(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setHeroTransition(true));
    });
  }, []);

  const startHeroNext = useCallback(() => {
    if (heroPhaseRef.current !== "idle") return;
    setHeroPhase("next");
    setHeroTx(0);
    setHeroTransition(true);
  }, []);

  const startHeroPrev = useCallback(() => {
    if (heroPhaseRef.current !== "idle") return;
    const step = getHeroStepPx();
    setHeroTransition(false);
    setHeroTx(-step);
    setHeroPhase("prev");
  }, [getHeroStepPx]);

  useLayoutEffect(() => {
    if (heroPhase !== "next") return;
    let cancelled = false;
    let id2 = 0;
    const step = getHeroStepPx();
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => {
        if (!cancelled) setHeroTx(-step);
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
    };
  }, [heroPhase, getHeroStepPx]);

  useLayoutEffect(() => {
    if (heroPhase !== "prev") return;
    let cancelled = false;
    let id2 = 0;
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => {
        if (!cancelled) {
          setHeroTransition(true);
          setHeroTx(0);
        }
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
    };
  }, [heroPhase]);

  const goHero = (dir: -1 | 1) => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setHeroIndex((i) => (i + dir + heroLen) % heroLen);
      return;
    }
    if (dir === 1) startHeroNext();
    else startHeroPrev();
  };

  const onHeroTrackTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.propertyName !== "transform" || e.target !== e.currentTarget)
        return;
      const phase = heroPhaseRef.current;
      if (phase === "idle") return;

      setHeroTransition(false);
      if (phase === "next") {
        setHeroIndex((h) => (h + 1) % heroLen);
      } else {
        setHeroIndex((h) => (h - 1 + heroLen) % heroLen);
      }
      setHeroTx(0);
      setHeroPhase("idle");
      finishHeroSnap();
    },
    [finishHeroSnap, heroLen]
  );

  useEffect(() => {
    if (heroAutoplayPaused) return;
    if (heroPhase !== "idle") return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const id = window.setInterval(() => {
        setHeroIndex((i) => (i + 1) % heroLen);
      }, HERO_AUTOPLAY_MS);
      return () => window.clearInterval(id);
    }
    const id = window.setInterval(() => {
      if (heroPhaseRef.current !== "idle") return;
      startHeroNext();
    }, HERO_AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [heroAutoplayPaused, heroLen, heroPhase, startHeroNext]);

  return (
    <div className="min-h-screen text-stone-900">
      <Navbar />

      <main>
        <HeroIntroSection />

        <FeaturedCarouselSection
          heroIndex={heroIndex}
          heroPhase={heroPhase}
          heroLen={heroLen}
          heroTx={heroTx}
          heroTransition={heroTransition}
          heroTrackRef={heroTrackRef}
          setHeroAutoplayPaused={setHeroAutoplayPaused}
          onHeroTrackTransitionEnd={onHeroTrackTransitionEnd}
          onSelectSlide={setHeroIndex}
          goHero={goHero}
        />


        <CollectionSection
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="h-screen">
          <BookNowSection />
        </div>

      </main>
      <SiteFooter />
    </div>
  );
}
