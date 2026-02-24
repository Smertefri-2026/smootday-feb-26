export default function AboutQuality() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-6">
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            t: "Kvalitet",
            d: "Vi prioriterer stabile ingredienser, dokumentasjon og produksjon som kan skaleres uten å falle i kvalitet.",
          },
          {
            t: "Biotilgjengelighet",
            d: "Form og opptak betyr ofte mer enn store tall. Vi velger løsninger som gir best praktisk effekt.",
          },
          {
            t: "Tydelighet",
            d: "Vi deler info i to nivåer: kort og forståelig — med mulighet for faglig fordypning på system-siden.",
          },
        ].map((x) => (
          <div
            key={x.t}
            className="rounded-3xl border p-7"
            style={{ background: "var(--surface)", borderColor: "var(--line)" }}
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
    </section>
  );
}