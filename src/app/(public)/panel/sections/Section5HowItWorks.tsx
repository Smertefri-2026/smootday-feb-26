// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section5HowItWorks.tsx

import Section from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Kicker, H2, P } from "@/components/ui/Typography";
import { LinkOutline, LinkPrimary } from "@/components/ui/Button";

export default function Section5HowItWorks() {
  const steps = [
    {
      t: "1) Grunnlaget først",
      d:
        "Det essensielle handler ikke bare om tilskudd. Det starter med søvn, mat med høy næringstetthet, nok væske og jevnlig aktivitet.",
    },
    {
      t: "2) Tre produkter – én rutine",
      d:
        "Vi har samlet det viktigste i en enkel «startpakke»: ODF som daglig base, Omega-3 som fast vane og Sporstoffer som ryddig kapseltillegg. Få valg – lett å følge.",
    },
    {
      t: "3) Stabilt over tid",
      d:
        "Målet er ikke å gjøre alt perfekt én dag, men å gjøre det enkelt nok til at du faktisk gjennomfører. Stabilitet over tid gir best effekt i hverdagen.",
    },
  ];

  return (
    <Section id="how" className="pt-0 pb-10">
      <Card>
        <CardBody className="p-6 sm:p-8">
          <Kicker>Hvordan det fungerer</Kicker>

          <H2>En enkel modell som er lett å følge.</H2>

          <P className="text-base sm:text-lg mt-3">
            En praktisk rekkefølge: <b style={{ color: "var(--ink)" }}>grunnlaget</b> →{" "}
            <b style={{ color: "var(--ink)" }}>3-produkts system</b> →{" "}
            <b style={{ color: "var(--ink)" }}>rutine som varer</b>.
          </P>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.t}
                className="rounded-3xl border p-6"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  borderColor: "var(--line)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
                  {s.t}
                </div>
                <p className="mt-2 text-sm leading-7" style={{ color: "var(--slate)" }}>
                  {s.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <LinkOutline href="/system">Les mer om systemet</LinkOutline>
            <LinkPrimary href="#produkter">Se produktene</LinkPrimary>
          </div>
        </CardBody>
      </Card>
    </Section>
  );
}