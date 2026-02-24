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
  id: string; // ✅ odf | omega | trace | bundle
  name: string;
  subtitle: string;
  baseImage: string;
  bullets: string[];
  description: string;
  variants: StoreVariant[]; // ✅ alltid variants
};

export const SUBSCRIPTION_DISCOUNT = 0.10;

export const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: "odf",
    name: "Essentials System ODF",
    subtitle: "Daglig næringsgrunnmur",
    baseImage: "/products/odf4.png",
    bullets: [
      "Daglig “foundation” i systemet",
      "Designet for enkel rutine",
      "Fokus på kvalitet & stabil produksjon",
    ],
    description:
      "ODF er fundamentet i The Essentials System. Tanken er enkel: gjøre det lettere å dekke det kroppen trenger jevnlig, uten å måtte overkomplisere hverdagen. Vi bygger systemet rundt få, gjennomtenkte valg – og ODF er den daglige basen som resten av rutinen kan bygges på. Velg Smoothie når du vil ha det enklest mulig, eller Pulver når du vil blande selv og ha maksimal fleksibilitet.",
    // ✅ Smoothie først = default i UI
    variants: [
      {
        id: "odf-smoothie",
        label: "Smoothie",
        subtitle: "Ferdig drikk",
        priceNok: 0,
        stockQty: 0, // 👈 legg inn lager her
        image: "/products/odf5.png",
        bullets: ["Raskeste rutinen", "Klar på sekunder", "Samme “foundation”-idé som pulver"],
        description:
          "ODF Smoothie er varianten for deg som vil ha lavest friksjon i hverdagen. Ferdig drikk gjør det enklere å gjennomføre rutinen konsekvent – spesielt når du har dårlig tid, reiser, eller bare vil at det skal være “idiotsikkert”.",
      },
      {
        id: "odf-powder",
        label: "Pulver",
        subtitle: "Bland i vann",
        priceNok: 0,
        stockQty: 0, // 👈 legg inn lager her
        image: "/products/odf4.png",
        bullets: ["Fleksibelt (bland selv)", "Praktisk for lagring/transport", "Kan også brukes i smoothie hjemme"],
        description:
          "ODF Pulver er varianten for deg som vil blande selv. Den passer godt hvis du vil ha full kontroll over blanding, eller ønsker en praktisk løsning for lagring og transport. Du kan blande i vann – eller bruke pulveret i smoothie hjemme.",
      },
    ],
  },

  {
    id: "omega",
    name: "Omega-3",
    subtitle: "Softgel i daglig rutine",
    baseImage: "/products/omega2.png",
    bullets: ["Fast del av rutinen", "Godt opptak", "Enkelt å følge over tid"],
    description:
      "Omega-3 er den “enkle, stabile” delen av systemet som mange ønsker i en rutine: én klar vane, samme format hver dag. Vi bruker softgels for en mer forutsigbar opplevelse (og for å holde drikke/pulver fri for smak og lukt). Dette produktet er laget for å passe inn i system-tanken: gjøre det praktisk å gjennomføre rutinen, uke etter uke.",
    variants: [
      {
        id: "omega",
        label: "Omega-3",
        subtitle: "Softgel",
        priceNok: 0,
        stockQty: 0, // 👈 lager
        image: "/products/omega2.png",
        bullets: ["Softgel-format", "Enkel daglig vane", "Passer i systemrutinen"],
        description:
          "Omega-3 softgel er laget for å være en friksjonsfri vane i systemet. Målet er ikke “hype”, men en praktisk, repeterbar rutine som er lett å holde.",
      },
    ],
  },

  // ✅ NB: id må være "trace" for å matche bundle-logikken i Section2Products.tsx
  {
    id: "trace",
    name: "Sporstoffer",
    subtitle: "Trace Minerals (kapsel)",
    baseImage: "/products/trace.png",
    bullets: ["Kobber", "Mangan", "Krom", "Molybden", "Bor"],
    description:
      "Sporstoffer (trace minerals) er små mengder – men ofte en del av det folk ønsker å “ha kontroll på” i en systematisk rutine. Vi har derfor laget en kapselvariant som er enkel å ta, og som passer inn i Essentials System-tanken: få, tydelige valg som er lette å gjennomføre.",
    variants: [
      {
        id: "trace-caps",
        label: "Sporstoffer",
        subtitle: "Kapsel",
        priceNok: 0,
        stockQty: 0, // 👈 lager
        image: "/products/trace.png",
        bullets: ["Kapsel-format", "Enkel rutine", "Trace mineral-stack"],
        description:
          "Sporstoffer kapsel er designet for enkelhet: én rutine, samme format. Dette er for deg som vil dekke “trace minerals”-delen i systemet på en ryddig måte.",
      },
    ],
  },

  // ✅ Pakke som eget “produktvalg” (pill etter Sporstoffer)
  {
    id: "bundle",
    name: "Pakker",
    subtitle: "ODF + Omega-3 + Sporstoffer",
    baseImage: "/products/system1.png",
    bullets: ["3-produkts core stack", "Pakkerabatt", "Enklest å starte med"],
    description:
      "Systempakken er laget for deg som vil starte riktig – med hele “core stacken” i én bestilling: ODF (valgt variant), Omega-3 og Sporstoffer. Lager sjekkes på alle tre delprodukter før du kan legge pakken i handlekurv.",
    variants: [
      {
        id: "bundle-core",
        label: "Systempakke",
        subtitle: "3 produkter",
        priceNok: 0, // 👈 pakkepris beregnes i UI (foreløpig). Kan settes senere når dere har priser.
        stockQty: 0, // 👈 ikke brukt – vi styrer lager via delvarene i UI
        image: "/products/system1.png",
        bullets: ["ODF + Omega-3 + Sporstoffer", "Pakkerabatt", "Daglig rutine"],
        description:
          "Inkluderer ODF (Smoothie/Pulver), Omega-3 og Sporstoffer. Dette er for deg som vil ha en enkel, komplett start på Essentials System-rutinen.",
      },
    ],
  },
];