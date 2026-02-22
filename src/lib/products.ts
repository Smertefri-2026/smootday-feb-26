// /Users/oystein/nettsider/smootday-v2-feb-26/src/lib/products.ts

export type StoreVariant = {
  id: string;
  label: string;
  subtitle?: string;
  priceNok: number;
  image?: string; // optional override image
  bullets?: string[];
  description?: string; // optional override description
};

export type StoreProduct = {
  id: string;
  name: string;
  subtitle: string;
  baseImage: string; // default image
  bullets: string[];
  description: string;
  variants?: StoreVariant[]; // if present => product has sub-choices
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
    subtitle: "Fish Oil (Triglyceride form)",
    baseImage: "/products/omega.png",
    bullets: ["Hjerte & hjerne", "Triglyserid-form", "God biotilgjengelighet"],
    description:
      "Premium Omega-3 som del av Core Fats. Et enkelt tillegg for deg som vil sikre fettsyre-delen av systemet.",
    variants: [{ id: "omega", label: "Omega-3", priceNok: 0 }],
  },

  // ✅ Hydration som 1 produkt med 2 varianter
  {
    id: "hydration",
    name: "Hydrering",
    subtitle: "Elektrolytter",
    baseImage: "/products/hydration.png",
    bullets: ["Elektrolytt-støtte", "Rask påfyll", "Til trening og varme dager"],
    description:
      "Hydrering er en egen del av Essentials System. Velg variant basert på behov: Zero (uten sukker) eller ORS (oral rehydration salts).",
    variants: [
      {
        id: "hydration-zero",
        label: "Hydration Zero Sugar",
        subtitle: "Uten sukker & kalorier",
        priceNok: 0,
        image: "/products/hydration.png",
        bullets: ["Elektrolytter", "0 sukker", "For hverdag & trening"],
        description:
          "Hydration Zero Sugar: elektrolytter uten sukker og kalorier. Passer perfekt når du vil holde det lett.",
      },
      {
        id: "hydration-ors",
        label: "Hydration ORS",
        subtitle: "Oral Rehydration Salts",
        priceNok: 0,
        image: "/products/ors.png",
        bullets: ["Rask rehydrering", "Elektrolytter & mineraler", "Effektiv formula"],
        description:
          "Hydration ORS: for rask og effektiv rehydrering når du trenger litt mer.",
      },
    ],
  },

  {
    id: "performance",
    name: "Sport",
    subtitle: "Styrke / Pump / Utholdenhet",
    baseImage: "/products/performance.png",
    bullets: ["Styrke & kraft", "Pump", "Fokus & utholdenhet"],
    description:
      "Performance-tillegget i systemet. For deg som vil ha en ekstra boost til økter og prestasjon.",
    variants: [{ id: "performance", label: "Sport Performance", priceNok: 0 }],
  },

  {
    id: "boost-him",
    name: "BOOST for HIM",
    subtitle: "Trace Minerals",
    baseImage: "/products/him.png",
    bullets: ["Kobber", "Mangan", "Sink"],
    description:
      "Trace mineral-kompleks utviklet som et ekstra tilskudd i Core Minerals-sporet (eller som egen kur).",
    variants: [{ id: "boost-him", label: "BOOST for HIM", priceNok: 0 }],
  },

  // ✅ BOOST for HER som 1 produkt med 2 varianter (med/uten jern)
  {
    id: "boost-her",
    name: "BOOST for HER",
    subtitle: "Trace Minerals",
    baseImage: "/products/her.png",
    bullets: ["Kobber", "Mangan", "Sink", "Valgfritt: jern"],
    description:
      "BOOST for HER kan tas med eller uten jern, avhengig av behov. Velg variant nedenfor.",
    variants: [
      {
        id: "boost-her",
        label: "BOOST for HER",
        subtitle: "Uten jern",
        priceNok: 0,
        image: "/products/her.png",
        bullets: ["Kobber", "Mangan", "Sink"],
        description: "Standardvarianten uten jern.",
      },
      {
        id: "boost-her-iron",
        label: "BOOST for HER + Jern",
        subtitle: "Med jern",
        priceNok: 0,
        image: "/products/iron.png",
        bullets: ["Kobber", "Mangan", "Sink", "Jern"],
        description:
          "Varianten med jern. (Vi legger senere inn tydelig info om hvem dette passer for.)",
      },
    ],
  },
];