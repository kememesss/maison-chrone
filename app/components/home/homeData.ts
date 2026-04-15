export const serif = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
} as const;

export const categories = [
  "all",
  "new releases",
  "best sellers",
  "male watch",
  "female watch",
] as const;

export type Category = (typeof categories)[number];

export const products: {
  name: string;
  category: Category | Category[];
  blurb: string;
  swatch: string;
  image?: string;
}[] = [
  {
    name: "Emporio Armani",
    category: ["all", "new releases"],
    blurb: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    swatch: "from-[#9aa89a] via-[#7d8c7c] to-[#5a6658]",
    image: "/images/carousel/Emporio Armani.webp",
  },
  {
    name: "Seiko 5",
    category: ["all", "male watch"],
    blurb: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    swatch: "from-[#d4c4a8] via-[#b8a68a] to-[#8b7a62]",

    image: "/images/carousel/seiko 5.webp",
  },
  {
    name: "Lacoste Ladycroc",
    category: ["all", "new releases"],
    blurb: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    swatch: "from-[#c9a090] via-[#a67b6c] to-[#6e4a42]",

    image: "/images/carousel/lacoste ladycroc.webp",
  },
  {
    name: "Lacoste TR90",
    category: ["all", "new releases"],
    blurb: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    swatch: "from-[#a8a8a6] via-[#7a7976] to-[#4a4846]",

    image: "/images/carousel/lacoste tr90.webp",
  },
  {
    name: "Lacoste Green Silicone",
    category: ["all", "best sellers"],
    blurb: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    swatch: "from-[#b5ab9e] via-[#8f8578] to-[#5c554d]",

    image: "/images/carousel/lacoste green silicone.webp",
  },
  {
    name: "King Seiko SPB457J1",
    category: ["all", "female watch"],
    blurb: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    swatch: "from-[#e8dfd0] via-[#cfc3ae] to-[#a89880]",

    image: "/images/carousel/King Seiko SPB457J1.webp",
  },
  {
    name: "Lacoste SPORT 2011385 Automatic Mens Watch",
    category: ["all", "female watch"],
    blurb: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    swatch: "from-[#ece8e0] via-[#d8d2c6] to-[#b8b0a4]",

    image: "/images/carousel/Lacoste SPORT 2011385 Automatic Mens Watch.jpg",
  },
  {
    name: "Women's Designer Watches",
    category: ["all", "best sellers"],
    blurb: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    swatch: "from-[#9a9098] via-[#756b75] to-[#4a4248]",

    image: "/images/carousel/Women's Designer Watches.avif",
  },
];

export const HERO_AUTOPLAY_MS = 5000;

export function heroColumnIndices(
  heroIndex: number,
  phase: "idle" | "next" | "prev",
  len: number
): number[] {
  const mod = (x: number) => ((x % len) + len) % len;
  const offsets =
    phase === "idle"
      ? [-2, -1, 0, 1, 2]
      : phase === "next"
        ? [-2, -1, 0, 1, 2, 3]
        : [-3, -2, -1, 0, 1, 2];
  return offsets.map((o) => mod(heroIndex + o));
}

export const heroSlides: { alt: string; image: string }[] = [
  { alt: "Featured watch — Emporio Armani", image: "/images/carousel/Emporio Armani.webp" },
  { alt: "Featured watch — Seiko 5", image: "/images/carousel/seiko 5.webp" },
  { alt: "Featured eyewear — Lacoste Ladycroc", image: "/images/carousel/lacoste ladycroc.webp" },
  { alt: "Featured eyewear — Lacoste TR90", image: "/images/carousel/lacoste tr90.webp" },
  { alt: "Featured eyewear — Lacoste green silicone", image: "/images/carousel/lacoste green silicone.webp" },
];
