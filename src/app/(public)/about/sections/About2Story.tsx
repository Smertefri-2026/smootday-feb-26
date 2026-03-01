// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/about/sections/About2Story.tsx

export default function About2Story() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-6">
      <div
        className="rounded-3xl border p-7 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          Bakgrunn • Hvordan det startet
        </p>

        <h2
          className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Vi ville gjøre grunnlaget enklere å få til – i praksis.
        </h2>

        <p className="mt-4 text-sm sm:text-base leading-7" style={{ color: "var(--slate)" }}>
          Under pandemien ble det tydelig hvor mye det betyr å ta vare på kroppen i hverdagen.
          Ikke med «quick fixes», men med det som faktisk fungerer over tid: søvn, fysisk aktivitet,
          næringsrik mat – og rutiner som holder.
        </p>

        <p className="mt-3 text-sm sm:text-base leading-7" style={{ color: "var(--slate)" }}>
          Samtidig så vi noe som ofte blir borte i alt støyet: mange får ikke i seg nok av flere
          viktige næringsstoffer. Store europeiske analyser har for eksempel vist at rundt{" "}
          <b style={{ color: "var(--ink)" }}>40 %</b> har lav vitamin D-status{" "}
          (<b style={{ color: "var(--ink)" }}>&lt; 50 nmol/L</b>), og cirka{" "}
          <b style={{ color: "var(--ink)" }}>13 %</b> ligger under{" "}
          <b style={{ color: "var(--ink)" }}>30 nmol/L</b>. Europeiske kostholdsdata peker også på at
          flere mikronæringsstoffer ofte blir for lave hos mange (som vitamin D, folat, jod og selen).
        </p>

        <p className="mt-3 text-sm sm:text-base leading-7" style={{ color: "var(--slate)" }}>
          Vi opplevde også at «status» ofte blir en legejobb: blodprøver kan gi svar på noe, men i praksis
          sjekkes gjerne bare et begrenset utvalg, og mye av grunnlaget følges ikke tett i hverdagen.
          Vi ønsket derfor å lage et system som gjør det lettere å være konsekvent – uten at du må ta ti ulike produkter hver dag.
        </p>

        <p className="mt-3 text-sm sm:text-base leading-7" style={{ color: "var(--slate)" }}>
          Resultatet ble <b style={{ color: "var(--ink)" }}>The Essentials System</b>: få produkter med tydelige og veldokumenterte ingredienser,
          bygget for daglig bruk. ODF som base, Omega-3 som fast vane, og Sporstoffer som enkel kapselrutine – pluss
          en pakke for deg som vil starte med alt.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <a
            href="/panel#produkter"
            className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-extrabold"
            style={{ background: "var(--g-primary)", color: "#fff" }}
          >
            Se produktene
          </a>

          <a
            href="/benefits"
            className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-extrabold"
            style={{
              background: "rgba(255,255,255,0.70)",
              border: "1px solid var(--line)",
              color: "var(--ink)",
            }}
          >
            Les mer om helse & kilder →
          </a>
        </div>

        <p className="mt-4 text-xs leading-6" style={{ color: "rgba(11,18,32,0.60)" }}>
          Kilder (utvalg): Cashman mfl. (vitamin D-status i Europa), EURRECA (utilstrekkelig inntak av mikronæringsstoffer),
          EFSA/EU (godkjente helsepåstander for vitamin D/C ved tilstrekkelig innhold).
        </p>
      </div>
    </section>
  );
}