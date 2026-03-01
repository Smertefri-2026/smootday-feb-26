// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section6HealthTeaser.tsx

import Section from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Kicker, H2, P, SmallNote } from "@/components/ui/Typography";
import { LinkPrimary, LinkOutline } from "@/components/ui/Button";

export default function Section6HealthTeaser() {
  return (
    <Section id="helse" className="pt-0 pb-10">
      <Card variant="soft" className="bg-(--bg-2)">
        <CardBody className="p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            {/* LEFT */}
            <div className="min-w-0">
              <Kicker>Helse • dokumentasjon og tillatte påstander</Kicker>

              <H2>
                Vi bruker kun påstander som er godkjent i EU – når vilkårene er oppfylt.
              </H2>

              <P className="text-base sm:text-lg mt-3">
                Vi bygger på en enkel regel: Vi bruker{" "}
                <b style={{ color: "var(--ink)" }}>dokumenterbare ingredienser</b>, og vi holder oss til{" "}
                <b style={{ color: "var(--ink)" }}>regelverket</b> for kosttilskudd og merking.
                På helsesiden samler vi de{" "}
                <b style={{ color: "var(--ink)" }}>tillatte helsepåstandene</b> per produkt – med forklaring,
                vilkår og kilder.
              </P>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <LinkPrimary href="/benefits">Se helse & dokumentasjon</LinkPrimary>
                <LinkOutline href="#trust">Hvordan vi jobber med kvalitet</LinkOutline>
              </div>

              <SmallNote className="mt-4">
                *Kosttilskudd skal ikke erstatte et variert kosthold og en sunn livsstil. Vi beskriver kun
                påstander som er tillatt å bruke i markedsføring, og bare når produktet oppfyller kravene.
              </SmallNote>
            </div>

            {/* RIGHT */}
            <div
              className="rounded-3xl border p-6"
              style={{
                background: "rgba(255,255,255,0.65)",
                borderColor: "var(--line)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                Kortversjon
              </div>

              <div className="mt-3 grid gap-2 text-sm" style={{ color: "var(--ink)" }}>
                <div>• Tillatte helsepåstander per produkt</div>
                <div>• Vilkår, mengder og merking</div>
                <div>• Kilder og dokumentasjonsnotater</div>
              </div>

              <a
                href="/benefits"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-extrabold transition"
                style={{
                  background: "rgba(255,255,255,0.80)",
                  border: "1px solid var(--line)",
                  color: "var(--ink)",
                }}
              >
                Gå til helsesiden
              </a>
            </div>
          </div>
        </CardBody>
      </Card>
    </Section>
  );
}