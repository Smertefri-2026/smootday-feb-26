// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/about/sections/About3SystemExplained.tsx

export default function About3SystemExplained() {
  const soft = {
    background: "rgba(255,255,255,0.55)",
    borderRadius: 24,
  } as const;

  const pill = {
    background: "rgba(255,255,255,0.70)",
    border: "1px solid var(--line)",
    color: "var(--ink)",
    borderRadius: 9999,
  } as const;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-6">
      <div
        className="rounded-3xl border p-7 sm:p-8"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          The Essentials System • Slik tenker vi
        </p>

        <h2
          className="mt-3 text-xl sm:text-2xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Hva mener vi med «essensielt»?
        </h2>

        <p className="mt-3 text-sm leading-7" style={{ color: "var(--slate)" }}>
          I ernæringssammenheng betyr «essensielt» byggesteiner kroppen trenger jevnlig, men som den ikke alltid kan
          produsere selv (eller nok av). I teorien kan du få alt fra mat og drikke – men i praksis varierer
          kosthold, appetitt, tid, reiser og rutiner. Derfor bygger vi et system som gjør det lettere å dekke
          <b style={{ color: "var(--ink)" }}> grunnlagene</b> – hver dag – uten at det blir komplisert.
        </p>

        <div className="mt-6 p-6" style={soft}>
          <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
            Essensielt handler om mer enn «tilskudd»
          </div>

          <p className="mt-2 text-sm leading-7" style={{ color: "var(--slate)" }}>
            Når vi sier «grunnlagene», mener vi summen av det kroppen trenger for normal funksjon over tid:
            næringsstoffer (makro og mikro), væske/hydrering, og rutiner som faktisk lar deg være konsekvent.
            Mat og drikke er alltid hovedkilden – systemet vårt er ment som en praktisk støtte for å gjøre det
            enklere å treffe stabilt.
          </p>

          <p className="mt-2 text-sm leading-7" style={{ color: "var(--slate)" }}>
            Noen eksempler på næringsstoffer som ofte dekkes gjennom kostholdet – og som mange får via
            <b style={{ color: "var(--ink)" }}> meieriprodukter</b> og annen proteinrik mat – er{" "}
            <b style={{ color: "var(--ink)" }}>kalsium</b> og{" "}
            <b style={{ color: "var(--ink)" }}>fosfor</b>. Et annet «foundation»-næringsstoff mange får fra
            mat (egg, kjøtt, fisk, meieri og enkelte plantekilder) er{" "}
            <b style={{ color: "var(--ink)" }}>kolin</b>. Poenget er ikke at “alle mangler alt” – men at det
            kan være krevende å sikre jevn dekning av alt, hver dag, i en travel hverdag.
          </p>
        </div>

        <div className="mt-6">
          <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
            De viktigste byggesteinene (kort forklart)
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {[
              {
                t: "Essensielle aminosyrer (EAA)",
                d: "Proteinets byggesteiner. Viktig for vedlikehold og normal funksjon i kroppen.",
              },
              {
                t: "Fett / Omega-3",
                d: "En del av grunnlagene mange ønsker å sikre, særlig når kostholdet varierer.",
              },
              {
                t: "Vitaminer, mineraler og sporstoffer",
                d: "Små mengder – stor betydning. Mange følger kalorier og protein, men glemmer mikronæringsstoffene.",
              },
              {
                t: "Væske og elektrolytter",
                d: "Hydrering er grunnleggende. Elektrolytter påvirker blant annet væskebalanse og normal funksjon.",
              },
              {
                t: "Opptak (biotilgjengelighet)",
                d: "Det som teller er ikke bare hva du tar – men hva kroppen faktisk klarer å ta opp og bruke.",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl p-5" style={soft}>
                <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
                  {x.t}
                </div>
                <div className="mt-2 text-sm leading-6" style={{ color: "var(--slate)" }}>
                  {x.d}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl p-6" style={soft}>
          <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
            3 produkter – én enkel rutine
          </div>

          <p className="mt-2 text-sm leading-7" style={{ color: "var(--slate)" }}>
            Vi har valgt å starte med tre tydelige produkter med hver sin rolle, slik at det blir lett å forstå
            og lett å følge. Målet er ikke “mest mulig”, men et system du faktisk klarer å gjennomføre over tid.
          </p>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {[
              { t: "ODF", d: "Daglig base (pulver eller smoothie)." },
              { t: "Omega-3", d: "Stabil vane – softgel." },
              { t: "Sporstoffer", d: "Enkel kapselrutine – ryddig tillegg." },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl p-5" style={{ ...soft, background: "rgba(255,255,255,0.65)" }}>
                <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
                  {x.t}
                </div>
                <div className="mt-2 text-sm leading-6" style={{ color: "var(--slate)" }}>
                  {x.d}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <div className="rounded-3xl p-6" style={soft}>
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Variantvalg
            </div>
            <div className="mt-2 text-lg font-extrabold" style={{ color: "var(--ink)" }}>
              Smoothie eller pulver?
            </div>
            <div className="mt-3 grid gap-2 text-sm" style={{ color: "var(--slate)" }}>
              <div>
                <b style={{ color: "var(--ink)" }}>Smoothie:</b> lavest friksjon – klar på sekunder.
              </div>
              <div>
                <b style={{ color: "var(--ink)" }}>Pulver:</b> fleksibelt – bland i vann eller bruk i smoothie hjemme.
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-6" style={soft}>
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Daglig rutine
            </div>
            <div className="mt-2 text-lg font-extrabold" style={{ color: "var(--ink)" }}>
              Stabilt nok til å funke.
            </div>
            <div className="mt-3 grid gap-2 text-sm" style={{ color: "var(--slate)" }}>
              <div>
                <b style={{ color: "var(--ink)" }}>Morgen:</b> ODF (smoothie/pulver) + vann.
              </div>
              <div>
                <b style={{ color: "var(--ink)" }}>Med mat:</b> Omega-3 (softgel).
              </div>
              <div>
                <b style={{ color: "var(--ink)" }}>Kveld / etter behov:</b> Sporstoffer (kapsel).
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl p-6" style={soft}>
          <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
            Mat først – system som støtte.
          </div>
          <p className="mt-2 text-sm leading-7" style={{ color: "var(--slate)" }}>
            Systemet er ment som støtte til gode valg i hverdagen – ikke en erstatning for mat.
            Vi bygger rundt færre valg, tydelige roller og informasjon som er lett å forstå.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="/panel#produkter"
            className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-extrabold"
            style={{ background: "var(--g-primary)", color: "#fff" }}
          >
            Se produktene
          </a>

          <a
            href="/benefits"
            className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-extrabold"
            style={pill}
          >
            Helse & kilder →
          </a>
        </div>
      </div>
    </section>
  );
}