// /Users/oystein/nettsider/smootday-v2-feb-26/src/lib/products.ts

export type Variant = {
  id: string;
  label: string;
  subtitle?: string;
  priceNok: number;
  stripePriceId?: string; // fyller vi inn når Stripe er klart
};

export const PRODUCT = {
  id: "smoodday-essentials-system",
  name: "Smood.day Essentials System",
  description: "Velg variant og legg i handlekurv.",
  variants: [
    { id: "day", label: "Day", subtitle: "Daglig basis", priceNok: 399 },
    { id: "one", label: "One", subtitle: "Alt-i-ett", priceNok: 499 },
    { id: "core", label: "Core", subtitle: "Foundation", priceNok: 449 },
    { id: "train", label: "Train", subtitle: "For aktive", priceNok: 499 },
    { id: "him", label: "BOOST for Him", subtitle: "Kur / on-demand", priceNok: 599 },
    { id: "her", label: "BOOST for Her", subtitle: "Kur / on-demand", priceNok: 599 },
    { id: "kids", label: "Kids", subtitle: "Kommer senere", priceNok: 349 },
  ] satisfies Variant[],
};