// /Users/oystein/nettsider/smootday-v2-feb-26/src/lib/products.ts

export type StoreVariant = {
  id: string;
  label: string;
  subtitle?: string;
  priceNok: number;
  stockQty: number; // ✅ lager per variant
  image?: string;
  bullets?: string[];
  description?: string;
};

export type StoreProduct = {
  id: string;
  name: string;
  subtitle: string;
  baseImage: string;
  bullets: string[];
  description: string;
  variants: StoreVariant[]; // ✅ vi bruker alltid variants (også når det bare er 1)
};

export const SUBSCRIPTION_DISCOUNT = 0.10;

export const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: "odf",
    name: "Essentials System ODF",
    subtitle: "Complete Daily Nutrition",
    baseImage: "/products/odf.png",
    bullets: ["Aminos & Vitamins", "Minerals & Electrolytes", "Prebiotic Fiber"],
    description:
      "Vårt hovedprodukt – designet som fundamentet i Essentials System. Laget for å gjøre det enkelt å dekke det viktigste hver dag, med fokus på kvalitet og biotilgjengelighet.",
    // ✅ Smoothie først = default i UI
    variants: [
      {
        id: "odf-smoothie",
        label: "Smoothie",
        subtitle: "Ferdig drikk",
        priceNok: 0,
        stockQty: 0, // 👈 legg inn lager her
        image: "/products/odf2.png",
        bullets: ["Aminos & Vitamins", "Minerals & Electrolytes", "Prebiotic Fiber"],
        description:
          "ODF Smoothie: ferdig drikk med Essentials System ODF – for deg som vil ha den enkleste rutinen (klar på sekunder).",
      },
      {
        id: "odf-powder",
        label: "Pulver",
        subtitle: "Bland i vann",
        priceNok: 0,
        stockQty: 0, // 👈 legg inn lager her
        image: "/products/odf.png",
        bullets: ["Aminos & Vitamins", "Minerals & Electrolytes", "Prebiotic Fiber"],
        description:
          "ODF Pulver: blandes i vann (eller i smoothie hjemme). Perfekt for deg som vil ha lavest frakt/lagring og full fleksibilitet.",
      },
    ],
  },

  {
    id: "omega",
    name: "Omega-3",
    subtitle: "Velg fisk eller alge",
    baseImage: "/products/omega.png",
    bullets: ["Hjerte & hjerne", "God opptak", "Daglig rutine"],
    description:
      "Omega-3 som del av Core Fats. Velg mellom fisk og alge (samme enkle rutine).",
    variants: [
      {
        id: "omega-fish",
        label: "Fisk",
        subtitle: "Triglyserid-form",
        priceNok: 0,
        stockQty: 0, // 👈 lager
        image: "/products/omega.png",
        bullets: ["Hjerte & hjerne", "Triglyserid-form", "God biotilgjengelighet"],
        description:
          "Omega-3 (Fisk): triglyserid-form for god biotilgjengelighet.",
      },
      {
        id: "omega-algae",
        label: "Alge",
        subtitle: "Plantebasert",
        priceNok: 0,
        stockQty: 0, // 👈 lager
        image: "/products/omega.png", // bytt når du har eget bilde
        bullets: ["Plantebasert", "Skånsom", "Daglig rutine"],
        description:
          "Omega-3 (Alge): plantebasert alternativ. (Oppdater bilde/tekst når dere har endelig spesifikasjon.)",
      },
    ],
  },

  {
    id: "trace",
    name: "Sporstoffer",
    subtitle: "Trace Minerals (Caps)",
    baseImage: "/products/him.png",
    bullets: ["Kobber", "Mangan", "Krom", "Molybden", "Bor"],
    description:
      "Sporstoff-stack (kapsel) som et tillegg i systemet for de som ønsker å dekke trace minerals.",
    variants: [
      {
        id: "trace-caps",
        label: "Sporstoffer",
        subtitle: "Kapsel",
        priceNok: 0,
        stockQty: 0, // 👈 lager
        image: "/products/him.png",
        bullets: ["Kobber", "Mangan", "Krom", "Molybden", "Bor"],
        description:
          "Trace Minerals (Caps): enkel kapsel-rutine for sporstoffer.",
      },
    ],
  },
];