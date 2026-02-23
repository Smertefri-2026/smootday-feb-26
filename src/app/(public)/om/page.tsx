// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/om/page.tsx
export default function OmPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pt-10 pb-16">
      {/* HERO */}
      <section
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          Om SmoDay • Hvorfor vi bygget The Essentials System
        </p>

        <h1
          className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Vi startet under{" "}
          <span
            style={{
              background: "var(--g-primary)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            koronaen
          </span>{" "}
          for å forstå hva kroppen faktisk trenger – hver dag.
        </h1>

        <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
          SmoDay handler om én ting: å gjøre det enkelt å bygge en stabil, daglig
          base. Ikke som en “kur”, men som en praktisk rutine som er realistisk å
          bruke over tid.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="/#produkter"
            className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
            style={{
              background: "var(--g-primary)",
              color: "#fff",
              borderRadius: 9999,
            }}
          >
            Se produktene
          </a>

          <a
            href="/#system"
            className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
            style={{
              background: "rgba(255,255,255,0.70)",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              borderRadius: 9999,
            }}
          >
            Slik fungerer systemet
          </a>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* LEFT: STORY */}
        <div
          className="rounded-3xl border p-8"
          style={{
            background: "var(--surface)",
            borderColor: "var(--line)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h2
            className="text-xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
          >
            Starten
          </h2>
          <p className="mt-3 leading-7" style={{ color: "var(--slate)" }}>
            Under pandemien samlet flere fagfolk seg rundt et enkelt spørsmål:
            <b> Hva er egentlig essensielt</b> for kroppen – og hvordan gjør vi det
            praktisk for folk flest?
          </p>
          <p className="mt-3 leading-7" style={{ color: "var(--slate)" }}>
            Siden den gang har vi brukt tid på å finne produsenter som leverer
            stabil kvalitet, dokumentasjon og forutsigbar produksjon. Målet har
            hele tiden vært å lage et system som er <b>enkelt å følge</b>, ikke et
            prosjekt som tar over livet ditt.
          </p>
        </div>

        {/* MIDDLE: PRINCIPLES */}
        <div
          className="rounded-3xl border p-8"
          style={{
            background: "var(--surface)",
            borderColor: "var(--line)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h2
            className="text-xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
          >
            Slik tenker vi
          </h2>

          <ul className="mt-4 space-y-4" style={{ color: "var(--slate)" }}>
            <li>
              <b style={{ color: "var(--ink)" }}>Kjent og dokumentert</b>
              <div className="mt-1">
                Vi prioriterer ingredienser som er velkjente og godt brukt i
                daglige rutiner – og unngår “støy” som gjør systemet unødvendig
                komplisert.
              </div>
            </li>
            <li>
              <b style={{ color: "var(--ink)" }}>Gode råvareformer</b>
              <div className="mt-1">
                Vi velger former som er praktiske i bruk, stabile i produksjon og
                laget for en god opplevelse.
              </div>
            </li>
            <li>
              <b style={{ color: "var(--ink)" }}>Enkel rutine</b>
              <div className="mt-1">
                Systemet er designet for å passe inn i en vanlig hverdag: en base
                du kan bruke daglig, og add-ons kun når du trenger dem.
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT: WHY SPLIT */}
        <div
          className="rounded-3xl border p-8"
          style={{
            background: "var(--surface)",
            borderColor: "var(--line)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h2
            className="text-xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
          >
            Hvorfor flere produkter?
          </h2>
          <p className="mt-3 leading-7" style={{ color: "var(--slate)" }}>
            Hvis alt skulle vært kapsler, ville det blitt upraktisk for de fleste.
            Derfor er SmoDay bygget som et system:
          </p>

          <div className="mt-4 space-y-3" style={{ color: "var(--slate)" }}>
            <div>
              <b style={{ color: "var(--ink)" }}>Powder</b> – daglig base
            </div>
            <div>
              <b style={{ color: "var(--ink)" }}>Capsules</b> – målrettede add-ons
            </div>
            <div>
              <b style={{ color: "var(--ink)" }}>Omega-3 softgels</b> – best
              opplevelse (smak/lukt hører ikke hjemme i drikke)
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM EXPLAINER */}
      <section
        className="mt-10 rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h2
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          The Essentials System – kort forklart
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.70)" }}
          >
            <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Daily Base
            </p>
            <p className="mt-2 text-lg" style={{ color: "var(--ink)" }}>
              <b>Essentials Powder</b> + <b>Omega-3 Complete+</b>
            </p>
            <p className="mt-2 leading-7" style={{ color: "var(--slate)" }}>
              Dette er grunnmuren: daglig rutine som er enkel å følge.
            </p>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.70)" }}
          >
            <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Add-ons
            </p>
            <p className="mt-2 text-lg" style={{ color: "var(--ink)" }}>
              <b>Boost</b> / <b>Sport</b> / <b>Hydration</b>
            </p>
            <p className="mt-2 leading-7" style={{ color: "var(--slate)" }}>
              Bruk add-ons etter behov: mer komplett trace, trening eller
              svettedager.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="/#quickcheck"
            className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
            style={{
              background: "rgba(255,255,255,0.70)",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              borderRadius: 9999,
            }}
          >
            Sjekk essensielle
          </a>

          <a
            href="/#produkter"
            className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
            style={{
              background: "var(--g-primary)",
              color: "#fff",
              borderRadius: 9999,
            }}
          >
            Se produkter
          </a>
        </div>
      </section>

      {/* FOUNDER */}
      <section
        className="mt-10 rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          Grunnlegger
        </p>
        <h2
          className="mt-2 text-2xl sm:text-3xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Øystein Solheim Remøy
        </h2>
        <p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
          Øystein har fordypet seg i rehabilitering, smerte og hvordan en enkel,
          praktisk hverdag kan bygges opp med smarte rutiner. SmoDay er laget for
          å gjøre det lett å starte – og lett å fortsette.
        </p>
      </section>

      {/* START GUIDE */}
      <section
        className="mt-10 rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h2
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Oppstart: start rolig
        </h2>

        <p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
          Hvis dette er første gang du bruker systemet, anbefaler vi å starte med{" "}
          <b>½ dose</b> i 3–5 dager og ta den gjerne med mat hvis du har sensitiv
          mage. Mange vurderer den reelle forskjellen best etter <b>3–6 uker</b>{" "}
          med jevn bruk.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="/faq"
            className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
            style={{
              background: "rgba(255,255,255,0.70)",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              borderRadius: 9999,
            }}
          >
            Les FAQ
          </a>

          <a
            href="/kontakt"
            className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
            style={{
              background: "var(--g-primary)",
              color: "#fff",
              borderRadius: 9999,
            }}
          >
            Kontakt oss
          </a>
        </div>
      </section>
    </main>
  );
}