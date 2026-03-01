// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/about/sections/About4Quality.tsx

export default function About4Quality() {
  const items = [
    {
      t: "Tydelige ingrediensformer",
      d:
        "Vi bruker konkrete ingrediensformer i formuleringene – ikke urter, «trendy» ekstrakter eller kompliserte blandinger. Fokus er essensielle næringsstoffer og kjente næringskomponenter.",
    },
    {
      t: "Kvalitet som tåler volum",
      d:
        "Vi prioriterer stabile råvarer og produsenter som kan levere jevnt, slik at produktet du kjøper i dag – og i månedene fremover – oppleves likt.",
    },
    {
      t: "Biotilgjengelighet i praksis",
      d:
        "Det handler ikke bare om «høye tall». Form, opptak og en rutine som faktisk er lett å gjennomføre betyr ofte mer over tid enn store påstander.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-6">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((x) => (
          <div
            key={x.t}
            className="rounded-3xl border p-7"
            style={{
              background: "var(--surface)",
              borderColor: "var(--line)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
              {x.t}
            </div>
            <div className="mt-2 text-sm leading-7" style={{ color: "var(--slate)" }}>
              {x.d}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border p-7 sm:p-8"
        style={{
          background: "rgba(255,255,255,0.55)",
          borderColor: "var(--line)",
        }}
      >
        <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
          Kort sagt
        </div>
        <p className="mt-2 text-sm leading-7" style={{ color: "var(--slate)" }}>
          Vi bygger SmoDay som en <b style={{ color: "var(--ink)" }}>proff og ryddig</b> nettbutikk:
          få produkter, tydelig rolle, enkel rutine – og informasjon i to nivåer:
          kort og forståelig på forsiden, og mer dybde på system- og helsesidene.
        </p>
      </div>
    </section>
  );
}