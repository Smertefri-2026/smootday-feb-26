// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/system/sections/02HvaErEssensielt.tsx

export default function S02HvaErEssensielt() {
  return (
    <section id="essensielt" className="mx-auto w-full max-w-6xl px-6 pb-10">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          Grunnlaget • Hva er det essensielle?
        </p>

        <h2
          className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Hva er det essensielle?
        </h2>

        <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
          “Essensielt” betyr at kroppen trenger det jevnlig for normal funksjon – og at
          kroppen ikke kan produsere det selv (eller ikke nok). Det må derfor komme fra
          kostholdet, og for mange er det vanskelig å treffe riktig hver eneste dag.
          The Essentials System handler om å gjøre dette konkret, enkelt og målbart.
        </p>

        <div className="mt-7 grid gap-5">
          {/* EAA */}
          <div className="rounded-3xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.55)" }}>
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Essensielle aminosyrer (EAA)
            </div>
            <div className="mt-2 text-base leading-7" style={{ color: "var(--ink)" }}>
              Aminosyrer er byggesteiner i protein. <b>EAA</b> er de aminosyrene kroppen ikke kan lage selv,
              og som derfor må komme fra mat. De brukes blant annet til vedlikehold og oppbygging av muskulatur,
              enzymer, hormoner og reparasjon av vev. Mangler du én av dem, kan proteinsyntesen bremses
              (“flaskehals”-effekt).
            </div>
          </div>

          {/* Omega-3 */}
          <div className="rounded-3xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.55)" }}>
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Essensielle fettsyrer (Omega-3)
            </div>
            <div className="mt-2 text-base leading-7" style={{ color: "var(--ink)" }}>
              Fett er mer enn energi – det er byggemateriale og signalstoff. <b>Omega-3</b> trekkes ofte frem fordi
              mange får lite fra vanlig kosthold. I fagspråket skiller man gjerne mellom <b>ALA</b> (plantekilder)
              og <b>EPA/DHA</b> (marine kilder). Poenget i systemet er enkelt: sikre fettsyre-delen av fundamentet
              på en praktisk måte.
            </div>
          </div>

          {/* Vitamins/minerals */}
          <div className="rounded-3xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.55)" }}>
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Vitaminer, mineraler og sporstoffer
            </div>
            <div className="mt-2 text-base leading-7" style={{ color: "var(--ink)" }}>
              Disse trengs ofte i små mengder – men de har stor betydning. De støtter blant annet
              energiomsetning, nervesystem, immunfunksjon, hormoner, normal blodproduksjon og mye mer.
              “Sporstoffer” er mineraler vi trenger i ekstra små mengder (f.eks. sink, selen, jod, kobber),
              men som likevel kan være kritiske for normal funksjon.
            </div>
          </div>

          {/* Hydration */}
          <div className="rounded-3xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.55)" }}>
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Hydrering / væske + elektrolytter
            </div>
            <div className="mt-2 text-base leading-7" style={{ color: "var(--ink)" }}>
              Væske er grunnlaget for normal funksjon: sirkulasjon, temperaturregulering og transport av næring.
              Ved aktivitet, varme eller sykdom kan behovet endre seg. <b>Elektrolytter</b> (som natrium, kalium,
              magnesium) påvirker blant annet væskebalanse og nerve-/muskel-funksjon. Derfor regnes hydrering som
              en “grunnstein” i systemtenkning – ikke som et “ekstraprodukt”.
            </div>
          </div>

          {/* Bioavailability */}
          <div className="rounded-3xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.55)" }}>
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Opptak (biotilgjengelighet)
            </div>
            <div className="mt-2 text-base leading-7" style={{ color: "var(--ink)" }}>
              Det viktigste er ikke bare <i>hva</i> du får i deg, men hva kroppen faktisk <b>tar opp</b> og bruker.
              Opptak påvirkes av form (pulver vs kapsel/softgel), timing, kombinasjoner, dose og toleranse.
              Derfor er “biotilgjengelighet” en rød tråd i The Essentials System: færre ting – men i former som gir
              god praktisk effekt.
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm leading-7" style={{ color: "var(--slate)" }}>
          Målet vårt er å gjøre dette enkelt i hverdagen. I appen kan du etter hvert spore rutinen og få en tydelig
          oversikt over hva du får i deg over tid – og hva som eventuelt mangler.
        </p>
      </div>
    </section>
  );
}