export default function AboutSystemExplained() {
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
          Hva mener vi med “essensielt”?
        </h2>

        <p className="mt-3 text-sm leading-7" style={{ color: "var(--slate)" }}>
          I ernæringsfaglig sammenheng brukes “essensielt” om næringsstoffer kroppen ikke kan lage selv
          (eller ikke i nok mengde), og derfor må få via mat eller tilskudd. Eksempler er essensielle aminosyrer,
          flere vitaminer/mineraler og enkelte fettsyrer.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            { t: "Grunnmur", d: "ODF (pulver/smoothie) som base for daglig rutine." },
            { t: "Tillegg", d: "Omega-3 og sporstoffer etter behov." },
            { t: "Rutine", d: "Kjøp én gang eller abonnement for stabil hverdag." },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-3xl border p-5"
              style={{ background: "rgba(255,255,255,0.55)", borderColor: "var(--line)" }}
            >
              <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
                {x.t}
              </div>
              <div className="mt-2 text-sm leading-6" style={{ color: "var(--slate)" }}>
                {x.d}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="/system"
            className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-extrabold"
            style={{
              background: "rgba(255,255,255,0.70)",
              color: "var(--ink)",
              border: "1px solid var(--line)",
            }}
          >
            Gå til “Systemet” →
          </a>
        </div>
      </div>
    </section>
  );
}