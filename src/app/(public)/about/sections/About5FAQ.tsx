export default function AboutFAQ() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-6">
      <div
        className="rounded-3xl border p-7 sm:p-8"
        style={{ background: "var(--surface)", borderColor: "var(--line)" }}
      >
        <h2
          className="text-xl sm:text-2xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Vanlige spørsmål
        </h2>

        <div className="mt-5 grid gap-3">
          {[
            {
              q: "Hvorfor ikke bare “spise sunt”?",
              a: "Sunn mat er godkjente. Systemet vårt er laget for å være et praktisk tillegg som gjør det enklere å være konsekvent — spesielt når hverdagen blir hektisk.",
            },
            {
              q: "Er dette ment som erstatning for mat?",
              a: "Nei. Tenk “grunnmur + støtte”. Mat først. Systemet hjelper deg å dekke det viktigste jevnere over tid.",
            },
            {
              q: "Kommer dere med mer faglig innhold?",
              a: "Ja — på /system samler vi forklaringer (enkelt + faglig), og der legger vi også verktøy som QuickCheck senere.",
            },
          ].map((x) => (
            <details
              key={x.q}
              className="rounded-2xl border px-5 py-4"
              style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.55)" }}
            >
              <summary className="cursor-pointer text-sm font-extrabold" style={{ color: "var(--ink)" }}>
                {x.q}
              </summary>
              <div className="mt-2 text-sm leading-7" style={{ color: "var(--slate)" }}>
                {x.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}