// /Users/oystein/nettsider/smootday-v2-feb-26/src/lib/products.ts

export type StoreProduct = {
  id: string;
  name: string;
  subtitle: string;
  priceNok: number;
  image: string; // path i /public
  bullets: string[];
  description: string;
};

export const SUBSCRIPTION_DISCOUNT = 0.10;

export const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: "odf",
    name: "Essentials System ODF",
    subtitle: "Complete Daily Nutrition",
    priceNok: 499,
    image: "/products/odf.png",
    bullets: ["Aminos & Vitamins", "Minerals & Electrolytes", "Prebiotic Fiber"],
    description:
      "Vårt hovedprodukt – designet som fundamentet i Essentials System. Laget for å gjøre det enkelt å dekke det viktigste hver dag, med fokus på kvalitet og biotilgjengelighet.",
  },
  {
    id: "omega",
    name: "Omega-3 Complete+",
    subtitle: "Fish Oil (Triglyceride form)",
    priceNok: 399,
    image: "/products/omega.png",
    bullets: ["Heart & Brain Health", "Triglyceride Form", "Superior Absorption"],
    description:
      "Premium Omega-3 som del av Core Fats. Et enkelt tillegg for deg som vil sikre fettsyre-delen av systemet.",
  },
  {
    id: "hydro-zero",
    name: "Hydration Zero Sugar",
    subtitle: "Refreshing Citrus Flavor",
    priceNok: 249,
    image: "/products/hydration.png",
    bullets: ["Electrolyte Support", "Replenish & Recover", "No sugar & No calories"],
    description:
      "Hydrering uten sukker. Passer perfekt til trening, varme dager, eller når du vil ha elektrolytter uten ekstra kalorier.",
  },
  {
    id: "hydro-ors",
    name: "Hydration ORS",
    subtitle: "Oral Rehydration Salts",
    priceNok: 249,
    image: "/products/ors.png",
    bullets: ["Rehydrate & Replenish", "Electrolytes & Minerals", "Fast & effective formula"],
    description:
      "ORS-varianten for rask og effektiv rehydrering. Del av Hydration-kategorien i systemet.",
  },
  {
    id: "performance",
    name: "Sport Performance",
    subtitle: "Strength / Pump / Endurance",
    priceNok: 449,
    image: "/products/performance.png",
    bullets: ["Strength & Power", "Muscle Pump", "Endurance & Focus"],
    description:
      "Performance-tillegget i systemet. For deg som vil ha en ekstra boost til økter og prestasjon.",
  },
  {
    id: "boost-him",
    name: "BOOST for HIM",
    subtitle: "Trace Minerals",
    priceNok: 399,
    image: "/products/him.png",
    bullets: ["Copper", "Manganese", "Zinc"],
    description:
      "Trace mineral-kompleks utviklet som et ekstra tilskudd i Core Minerals-sporet (eller som egen kur).",
  },
  {
    id: "boost-her",
    name: "BOOST for HER",
    subtitle: "Trace Minerals",
    priceNok: 399,
    image: "/products/her.png",
    bullets: ["Copper", "Manganese", "Zinc"],
    description:
      "Trace mineral-kompleks utviklet som et ekstra tilskudd i Core Minerals-sporet (eller som egen kur).",
  },
  {
    id: "boost-her-iron",
    name: "BOOST for HER + Iron",
    subtitle: "Trace Minerals + Iron",
    priceNok: 449,
    image: "/products/iron.png",
    bullets: ["Copper", "Manganese", "Zinc", "Iron"],
    description:
      "For deg som trenger jern i tillegg. (Vi kan senere legge inn en kort ‘hvem passer dette for’ tekst og evt. forbehold.)",
  },
];