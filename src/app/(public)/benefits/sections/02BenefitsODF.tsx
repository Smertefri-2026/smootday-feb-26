// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/benefits/sections/02BenefitsODF.tsx

import Image from "next/image";

type BenefitBlock = {
  title: string;
  intro: string;
  bullets: string[];
  note?: string;
};

const odfTextBlocks: BenefitBlock[] = [
  {
    title: "Vitamin C",
    intro:
      "Vitamin C er en sentral del av en daglig base, og har flere godkjente helsepåstander i EU/EØS.",
    bullets: [
      "Vitamin C bidrar til immunsystemets normale funksjon.",
      "Vitamin C bidrar til å redusere tretthet og utmattelse.",
      "Vitamin C bidrar til normal kollagendannelse for normal funksjon i hud, blodårer, brusk, knokler, tannkjøtt og tenner.",
      "Vitamin C bidrar til å beskytte cellene mot oksidativt stress.",
      "Vitamin C bidrar til nervesystemets normale funksjon.",
    ],
  },
  {
    title: "Vitamin D",
    intro:
      "Vitamin D er et nøkkelnæringsstoff i systemet, spesielt relevant i nordiske land. Påstandene under er godkjente i EU/EØS.",
    bullets: [
      "Vitamin D bidrar til immunsystemets normale funksjon.",
      "Vitamin D bidrar til å opprettholde normal muskelfunksjon.",
      "Vitamin D bidrar til å opprettholde normale knokler og tenner.",
    ],
  },
  {
    title: "Magnesium",
    intro:
      "Magnesium er et av de mest brukte mineralene i daglige rutiner, og har tydelige, godkjente påstander knyttet til normal funksjon.",
    bullets: [
      "Magnesium bidrar til å redusere tretthet og utmattelse.",
      "Magnesium bidrar til normal muskelfunksjon.",
      "Magnesium bidrar til elektrolyttbalansen.",
      "Magnesium bidrar til normal energiomsetning.",
    ],
  },
  {
    title: "Vitamin B6",
    intro:
      "Vitamin B6 inngår i B-vitamin-familien og brukes ofte i daglige baser. Under er påstandene vi kan bruke i kommunikasjon.",
    bullets: [
      "Vitamin B6 bidrar til å redusere tretthet og utmattelse.",
      "Vitamin B6 bidrar til immunsystemets normale funksjon.",
      "Vitamin B6 bidrar til nervesystemets normale funksjon.",
    ],
  },
  {
    title: "Vitamin B12",
    intro:
      "Vitamin B12 er et av de mest kjente B-vitaminene. Her er påstandene som er tillatt å bruke i EU/EØS.",
    bullets: [
      "Vitamin B12 bidrar til å redusere tretthet og utmattelse.",
      "Vitamin B12 bidrar til immunsystemets normale funksjon.",
      "Vitamin B12 bidrar til nervesystemets normale funksjon.",
    ],
  },
];

function ProductBox({
  title,
  desc,
  imgSrc,
  ctaHref,
  ctaLabel,
}: {
  title: string;
  desc: string;
  imgSrc: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <div
      className="rounded-3xl border p-4 sm:p-5"
      style={{
        borderColor: "var(--line)",
        background: "rgba(255,255,255,0.55)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="relative w-full overflow-hidden rounded-3xl aspect-4/3">
        <Image src={imgSrc} alt={title} fill className="object-cover object-center" />
      </div>

      <div className="mt-4">
        <div
          className="text-base font-extrabold"
          style={{ color: "var(--ink)", fontFamily: "var(--font-heading)" }}
        >
          {title}
        </div>

        <p className="mt-2 text-base leading-7" style={{ color: "var(--slate)" }}>
          {desc}
        </p>

        <a
          href={ctaHref}
          className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border px-4 py-3 text-base font-extrabold"
          style={{
            borderColor: "var(--line)",
            color: "var(--ink)",
            background: "var(--surface)",
          }}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}

export default function S02BenefitsODF() {
  return (
    <section id="benefits-odf" className="mx-auto w-full max-w-6xl px-6 pb-10">
      <div
        className="rounded-3xl border p-6 sm:p-8"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
          {/* LEFT */}
          <div className="min-w-0">
            <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              • ODF (pulver) + smoothie
            </p>

            <h2
              className="mt-2 text-2xl sm:text-3xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
            >
              Helsepåstander knyttet til ODF
            </h2>

            <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
              ODF-pulveret (og smoothie) består av <b>31 ingredienser</b>. I EU/EØS er det
              strenge regler for hvilke helsepåstander som kan brukes i markedsføring. Derfor viser
              vi her kun de næringsstoffene som har <b>godkjente helsepåstander.</b>
            </p>

        
            <div className="mt-8">
              {odfTextBlocks.map((b, idx) => (
                <div key={b.title} className={idx === 0 ? "" : "mt-10"}>
                  <div
                    className="text-lg sm:text-xl font-extrabold"
                    style={{ color: "var(--ink)", fontFamily: "var(--font-heading)" }}
                  >
                    {b.title}
                  </div>

                  <p className="mt-2 text-base leading-7" style={{ color: "var(--slate)" }}>
                    {b.intro}
                  </p>

                  <div className="mt-3 grid gap-2 text-base" style={{ color: "var(--ink)" }}>
                    {b.bullets.map((x, i) => (
                      <div key={i}>• {x}</div>
                    ))}
                  </div>

                  {b.note ? (
                    <div className="mt-3 text-sm" style={{ color: "var(--slate)" }}>
                      {b.note}
                    </div>
                  ) : null}

                  {idx < odfTextBlocks.length - 1 ? (
                    <div className="mt-8 border-t" style={{ borderColor: "var(--line)" }} />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 text-xs" style={{ color: "var(--slate)" }}>
              *Kilder og regelverk er samlet nederst på siden.
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 lg:sticky lg:top-20">
            <ProductBox
              title="ODF (pulver)"
              desc="Daglig base: vitaminer og mineraler i en enkel rutine. Se ingrediensliste på produktsiden."
              imgSrc="/products/odf4.png"
              ctaHref="/products"
              ctaLabel="Kjøp ODF"
            />
          </div>
        </div>
      </div>
    </section>
  );
}