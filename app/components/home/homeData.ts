export const serif = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
} as const;

export const categories = [
  "all",
  "Armani",
  "Seiko",
  "Lacoste",
  "Chopard",
] as const;

export type Category = (typeof categories)[number];

export type Product = {
  name: string;
  category: Category | Category[];
  price: number;
  swatch: string;
  image?: string;
};

export const products: Product[] = [
  {
    name: "Emporio Armani",
    category: "Armani",
    price: 12500,
    swatch: "from-[#9aa89a] via-[#7d8c7c] to-[#5a6658]",
    image: "/images/carousel/Emporio_Armani-removebg-preview.png",

  },
  {
    name: "Seiko 5",
    category: "Seiko",
    price: 9800,
    swatch: "from-[#d4c4a8] via-[#b8a68a] to-[#8b7a62]",
    image: "/images/carousel/King_Seiko_SPB457J1-removebg-preview.png",
  },
  {
    name: "Lacoste Ladycroc",
    category: "Lacoste",
    price: 6200,
    swatch: "from-[#c9a090] via-[#a67b6c] to-[#6e4a42]",
    image: "/images/carousel/lacoste_ladycroc-removebg-preview.png",
  },
  {
    name: "Lacoste TR90",
    category: "Lacoste",
    price: 5900,
    swatch: "from-[#a8a8a6] via-[#7a7976] to-[#4a4846]",
    image: "/images/carousel/lacoste_tr90-removebg-preview.png",
  },
  {
    name: "Lacoste Green Silicone",
    category: "Lacoste",
    price: 5500,
    swatch: "from-[#b5ab9e] via-[#8f8578] to-[#5c554d]",
    image: "/images/carousel/lacoste_green_silicone-removebg-preview.png",
  },
  {
    name: "King Seiko SPB457J1",
    category: "Seiko",
    price: 45000,
    swatch: "from-[#e8dfd0] via-[#cfc3ae] to-[#a89880]",
    image: "/images/carousel/King_Seiko_SPB457J1-removebg-preview.png",
  },
  {
    name: "Lacoste Boston Ionic Plated Stainless Steel",
    category: "Lacoste",
    price: 7800,
    swatch: "from-[#ece8e0] via-[#d8d2c6] to-[#b8b0a4]",
    image:
      "/images/carousel/lacoste_mens_boston_ionic_plated_stainless_steel_watch-removebg-preview.png",
  },
  {
    name: "Chopard Happy Sport Automatic 3mm",
    category: "Chopard",
    price: 350000,
    swatch: "from-[#9a9098] via-[#756b75] to-[#4a4248]",
    image: "/images/carousel/Women_s_Designer_Watches-removebg-preview.png",
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
  {
    alt: "Featured watch — Emporio Armani",
    image: "/images/carousel/Emporio_Armani-removebg-preview.png",
  },
  {
    alt: "Featured watch — Seiko 5",
    image: "/images/carousel/seiko_5-removebg-preview.png",
  },
  {
    alt: "Featured eyewear — Lacoste Ladycroc",
    image: "/images/carousel/lacoste_ladycroc-removebg-preview.png",
  },
  {
    alt: "Featured eyewear — Lacoste TR90",
    image: "/images/carousel/lacoste_tr90-removebg-preview.png",
  },
  {
    alt: "Featured eyewear — Lacoste Green Silicone",
    image: "/images/carousel/lacoste_green_silicone-removebg-preview.png",
  },
];