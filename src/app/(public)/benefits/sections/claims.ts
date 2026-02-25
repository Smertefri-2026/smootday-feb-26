// /src/app/(public)/benefits/sections/sections/claims.ts

export type Claim = {
  nutrient: string; // f.eks. "Vitamin C"
  statement: string; // f.eks. "bidrar til ..."
  sources: { label: string; href: string }[];
  notes?: string; // valgfritt (f.eks. omega-3 vilkår)
};

export const sources = {
  eu432: {
    label: "EU 432/2012 (liste over tillatte helsepåstander)",
    href: "https://eur-lex.europa.eu/eli/reg/2012/432/oj/eng",
  },
  euRegister: {
    label: "EU Register (Nutrition & Health Claims)",
    href:
      "https://food.ec.europa.eu/safety/labelling-and-nutrition/nutrition-and-health-claims/eu-register-nutrition-and-health-claims_en",
  },
  reg1924: {
    label: "EF 1924/2006 (regelverk for påstander)",
    href: "https://eur-lex.europa.eu/eli/reg/2006/1924/oj/eng",
  },
};

// ✅ ODF – typisk vitamins/minerals claims (trygge klassikere)
export const odfClaims: Claim[] = [
  {
    nutrient: "Vitamin C",
    statement: "bidrar til immunsystemets normale funksjon.",
    sources: [sources.eu432, sources.euRegister],
  },
  {
    nutrient: "Vitamin C",
    statement: "bidrar til å redusere tretthet og utmattelse.",
    sources: [sources.eu432, sources.euRegister],
  },
  {
    nutrient: "Vitamin C",
    statement:
      "bidrar til normal kollagendannelse for normal funksjon i hud, blodårer, brusk, knokler, tannkjøtt og tenner.",
    sources: [sources.eu432, sources.euRegister],
  },
  {
    nutrient: "Vitamin D",
    statement: "bidrar til immunsystemets normale funksjon.",
    sources: [sources.eu432, sources.euRegister],
  },
  {
    nutrient: "Vitamin D",
    statement: "bidrar til å opprettholde normal muskelfunksjon.",
    sources: [sources.eu432, sources.euRegister],
  },
  {
    nutrient: "Magnesium",
    statement: "bidrar til å redusere tretthet og utmattelse.",
    sources: [sources.eu432, sources.euRegister],
  },
  {
    nutrient: "Magnesium",
    statement: "bidrar til normal muskelfunksjon.",
    sources: [sources.eu432, sources.euRegister],
  },
  {
    nutrient: "Magnesium",
    statement: "bidrar til elektrolyttbalansen.",
    sources: [sources.eu432, sources.euRegister],
  },
  {
    nutrient: "Vitamin B6",
    statement: "bidrar til å redusere tretthet og utmattelse.",
    sources: [sources.eu432, sources.euRegister],
  },
  {
    nutrient: "Vitamin B12",
    statement: "bidrar til å redusere tretthet og utmattelse.",
    sources: [sources.eu432, sources.euRegister],
  },
];

// ✅ Omega-3 – krever note/footnote om 250 mg
export const omegaClaims: Claim[] = [
  {
    nutrient: "EPA og DHA",
    statement: "bidrar til hjertets normale funksjon.",
    sources: [sources.eu432, sources.euRegister],
    notes:
      "Gunstig effekt oppnås ved et daglig inntak av 250 mg EPA og DHA.",
  },
  {
    nutrient: "DHA",
    statement: "bidrar til å opprettholde normal hjernefunksjon.",
    sources: [sources.eu432, sources.euRegister],
    notes: "Gunstig effekt oppnås ved et daglig inntak av 250 mg DHA.",
  },
  {
    nutrient: "DHA",
    statement: "bidrar til å opprettholde normalt syn.",
    sources: [sources.eu432, sources.euRegister],
    notes: "Gunstig effekt oppnås ved et daglig inntak av 250 mg DHA.",
  },
];

// ✅ Sporstoffer – legg til de dere faktisk har (sink/selen/jod osv.)
export const traceClaims: Claim[] = [
  {
    nutrient: "Sink",
    statement: "bidrar til immunsystemets normale funksjon.",
    sources: [sources.eu432, sources.euRegister],
  },
  {
    nutrient: "Selen",
    statement: "bidrar til å beskytte cellene mot oksidativt stress.",
    sources: [sources.eu432, sources.euRegister],
  },
  {
    nutrient: "Jod",
    statement:
      "bidrar til normal produksjon av skjoldbruskkjertelhormoner og normal skjoldbruskkjertelfunksjon.",
    sources: [sources.eu432, sources.euRegister],
  },
];

// ✅ Pakkesammendrag – grupper claims på tvers av produktene
export type BenefitGroup = {
  title: string;
  bullets: string[];
};

export const packSummary: BenefitGroup[] = [
  {
    title: "Immunsystemets normale funksjon",
    bullets: [
      "Vitamin C – bidrar til immunsystemets normale funksjon.",
      "Vitamin D – bidrar til immunsystemets normale funksjon.",
      "Sink – bidrar til immunsystemets normale funksjon.",
    ],
  },
  {
    title: "Tretthet og utmattelse",
    bullets: [
      "Vitamin C – bidrar til å redusere tretthet og utmattelse.",
      "Vitamin B6 – bidrar til å redusere tretthet og utmattelse.",
      "Vitamin B12 – bidrar til å redusere tretthet og utmattelse.",
      "Magnesium – bidrar til å redusere tretthet og utmattelse.",
    ],
  },
  {
    title: "Muskelfunksjon og elektrolyttbalanse",
    bullets: [
      "Vitamin D – bidrar til å opprettholde normal muskelfunksjon.",
      "Magnesium – bidrar til normal muskelfunksjon.",
      "Magnesium – bidrar til elektrolyttbalansen.",
    ],
  },
  {
    title: "Hjerte, hjerne og syn (Omega-3)",
    bullets: [
      "EPA og DHA – bidrar til hjertets normale funksjon. (250 mg EPA+DHA/dag)",
      "DHA – bidrar til å opprettholde normal hjernefunksjon. (250 mg DHA/dag)",
      "DHA – bidrar til å opprettholde normalt syn. (250 mg DHA/dag)",
    ],
  },
];