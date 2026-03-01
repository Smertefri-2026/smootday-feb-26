// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section7Trust.tsx

import Section from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Kicker, H2, P, SmallNote } from "@/components/ui/Typography";
import { LinkPrimary, LinkOutline } from "@/components/ui/Button";

export default function Section7Trust() {
  const cards = [
    {
      t: "Regelverk først",
      p1: "Vi bygger produktene med ingredienser og former som kan vurderes opp mot regelverket i Norge og EU.",
      p2: "Det betyr: riktig form, riktig mengde og ryddig merking.",
    },
    {
      t: "Stabilt innhold",
      p1: "Vi jobber med faste spesifikasjoner per råvare og batch, slik at innholdet er forutsigbart over tid.",
      p2: "Målet er at du skal få det samme – hver gang.",
    },
    {
      t: "Kvalitetsrutiner og testing",
      p1: "Vi velger produsenter og råvarer som tåler et profesjonelt marked, med sporbarhet og rutiner som kan etterprøves.",
      p2: "Der det er relevant, legger vi opp til analyser (for eksempel renhet, tungmetaller og oksidasjon).",
    },
  ];

  return (
    <Section id="trust" className="py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Kicker>Tillit • kvalitet og etterprøvbarhet</Kicker>

        <H2 className="mt-2">Tillit & kvalitet.</H2>

        <P className="text-base sm:text-lg">
          Vi bygger The Essentials System med et enkelt prinsipp: det skal være{" "}
          <b style={{ color: "var(--ink)" }}>ryddig</b>,{" "}
          <b style={{ color: "var(--ink)" }}>dokumenterbart</b> og{" "}
          <b style={{ color: "var(--ink)" }}>stabilt</b>.
        </P>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {cards.map((x) => (
            <Card key={x.t}>
              <CardBody className="p-6">
                <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                  {x.t}
                </div>

                <div className="mt-3 grid gap-2">
                  <p className="text-sm leading-6" style={{ color: "var(--slate)" }}>
                    {x.p1}
                  </p>
                  <p className="text-sm leading-6" style={{ color: "var(--slate)" }}>
                    {x.p2}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* “Dokumenterbart” – uten å røpe full oppskrift */}
        <div className="mt-6">
          <Card variant="soft">
            <CardBody className="p-6 sm:p-8">
              <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                Hva vi mener med “dokumenterbart”
              </div>

              <p className="mt-2 text-sm sm:text-base leading-7" style={{ color: "var(--slate)" }}>
                Vi bruker ingredienser som kan dokumenteres med råvarespesifikasjoner, batch-informasjon og
                korrekt merking. Vi deler ikke full oppskrift offentlig før lansering – men innhold og doser
                vil stå på etikett og kunne etterprøves.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div>
                  <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
                    ODF (pulver/smoothie)
                  </div>
                  <div className="mt-1 text-sm leading-6" style={{ color: "var(--slate)" }}>
                    Daglig base med essensielle byggesteiner – laget for å være enkel å bruke hver dag.
                  </div>
                </div>

                <div>
                  <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
                    Omega-3
                  </div>
                  <div className="mt-1 text-sm leading-6" style={{ color: "var(--slate)" }}>
                    Stabil vane i softgel-format – uten å blande smak/lukt inn i drikke.
                  </div>
                </div>

                <div>
                  <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
                    Sporstoffer
                  </div>
                  <div className="mt-1 text-sm leading-6" style={{ color: "var(--slate)" }}>
                    Ryddig kapselrutine for deg som vil dekke sporstoffer mer systematisk.
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <LinkPrimary href="/benefits">Se helsepåstander & kilder</LinkPrimary>
                <LinkOutline href="#produkter">Se produktene</LinkOutline>
              </div>

              <SmallNote>
                *For samarbeidspartnere kan mer detaljer deles ved behov (for eksempel under NDA).
              </SmallNote>
            </CardBody>
          </Card>
        </div>
      </div>
    </Section>
  );
}