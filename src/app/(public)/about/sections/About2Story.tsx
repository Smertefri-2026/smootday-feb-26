export default function AboutStory() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div
          className="rounded-3xl border p-7 sm:p-8"
          style={{ background: "var(--surface)", borderColor: "var(--line)" }}
        >
          <h2
            className="text-xl sm:text-2xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
          >
            Hvordan det startet
          </h2>
          <p className="mt-3 text-sm leading-7" style={{ color: "var(--slate)" }}>
            Under pandemien ble det tydelig hvor vanskelig det er å navigere råd, trender og
            produkter. Vi ønsket en mer praktisk tilnærming: hva er “grunnleggende” i
            ernæringslæren — og hvordan gjør vi det lett å følge i hverdagen?
          </p>
          <p className="mt-3 text-sm leading-7" style={{ color: "var(--slate)" }}>
            Derfor har vi jobbet systematisk med produsenter, kvalitet, dokumentasjon og stabil
            produksjon — med fokus på gode former og biotilgjengelighet (det kroppen faktisk tar opp).
          </p>
        </div>

        <div
          className="rounded-3xl border p-7 sm:p-8"
          style={{ background: "var(--surface)", borderColor: "var(--line)" }}
        >
          <h2
            className="text-xl sm:text-2xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
          >
            Visjonen
          </h2>
          <ul className="mt-4 grid gap-3 text-sm" style={{ color: "var(--slate)" }}>
            <li>
              <b style={{ color: "var(--ink)" }}>Enkelt:</b> få produkter, tydelig rolle for hvert.
            </li>
            <li>
              <b style={{ color: "var(--ink)" }}>System:</b> grunnmur + valgfrie tillegg.
            </li>
            <li>
              <b style={{ color: "var(--ink)" }}>Trygt:</b> kvalitet, sporbarhet, stabile råvarer.
            </li>
            <li>
              <b style={{ color: "var(--ink)" }}>Forståelig:</b> fagspråk der det trengs — forklart så folk skjønner.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}