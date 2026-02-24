// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section7Trust.tsx

export default function Section7Trust() {
  const cards = [
    {
      t: "Regelverk først",
      d: [
        "Vi bygger produktene med ingredienser og former som kan dokumenteres og vurderes opp mot regelverket i Norge og EU.",
        "Det betyr: riktig kjemisk form, riktig mengde, og ryddig merking.",
      ],
    },
    {
      t: "Dokumentasjon på innhold",
      d: [
        "Vi jobber med faste spesifikasjoner per ingrediens og batch – slik at innholdet er stabilt og forutsigbart over tid.",
        "Målet er at du som kunde skal kunne stole på at du får det samme, hver gang.",
      ],
    },
    {
      t: "Kvalitetsrutiner og testing",
      d: [
        "Vi velger produksjon og råvarer som tåler et profesjonelt marked – med sporbarhet og rutiner som kan etterprøves.",
        "Der det er relevant, legger vi opp til analyser/verifisering (for eksempel renhet, tungmetaller, oksidasjon m.m.).",
      ],
    },
  ];

  return (
    <section id="trust" className="mx-auto w-full max-w-6xl px-6 py-10">
      <h2
        className="text-2xl sm:text-3xl font-extrabold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Tillit & kvalitet
      </h2>

      <p className="mt-2" style={{ color: "var(--slate)" }}>
        Vi bygger Essentials System med et enkelt prinsipp: alt skal være{" "}
        <b>lovlig</b>, <b>dokumenterbart</b> og <b>stabilt.</b>
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {cards.map((x) => (
          <div
            key={x.t}
            className="rounded-3xl border p-6"
            style={{
              background: "var(--surface)",
              borderColor: "var(--line)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
              {x.t}
            </div>
            <div className="mt-2 grid gap-2 text-sm" style={{ color: "var(--slate)" }}>
              {x.d.map((p) => (
                <p key={p} className="leading-6">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
{/* Hemmelighetsvennlig “dokumenterbart” */}
<div
  className="mt-6 rounded-3xl border p-6 sm:p-8"
  style={{
    background: "rgba(255,255,255,0.55)",
    borderColor: "var(--line)",
    boxShadow: "var(--shadow-soft)",
  }}
>
  <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
    Hva vi mener med “dokumenterbart”
  </div>

  <p className="mt-2 text-sm leading-7" style={{ color: "var(--slate)" }}>
    Vi bruker ingredienser som kan dokumenteres med råvarespesifikasjoner, batch-informasjon og
    tydelig merking. Vi deler ikke full oppskrift offentlig før lansering – men alt innhold og
    doser vil stå på etikett og kunne etterprøves.
  </p>

  <div className="mt-4 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border p-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
      <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
        ODF (pulver / smoothie)
      </div>
      <div className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
        Essensielle aminosyrer + utvalgte vitaminer/mineraler og støtte for daglig rutine.
      </div>
    </div>

    <div className="rounded-2xl border p-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
      <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
        Omega-3
      </div>
      <div className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
        Omega-3 i kapsel/softgel-format for en stabil, enkel vane – uten å blande smak/lukt i drikk.
      </div>
    </div>

    <div className="rounded-2xl border p-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
      <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
        Sporstoffer
      </div>
      <div className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
        Sporstoffer i kapsel for deg som vil dekke “trace minerals”-delen av systemet på en ryddig måte.
      </div>
    </div>
  </div>

  <p className="mt-4 text-xs leading-6" style={{ color: "var(--slate)" }}>
    *Full ingrediensliste, doser og lovpålagt utlevers etter avtale. For samarbeidspartnere kan
    detaljene deles under NDA.
  </p>
</div>
    </section>
  );
}