// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section4Viblir.tsx

import Image from "next/image";

import Section from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Kicker, H2, P } from "@/components/ui/Typography";

export default function Section4Viblir() {
  return (
    <Section id="viblir" className="pt-0 pb-10">
      <Card>
        <CardBody className="p-6 sm:p-8">
          {/* Layout: tekst + bilde (samme prinsipp som Section1/3) */}
          <div className="grid gap-6 md:grid-cols-[1fr_240px] md:items-center">
            {/* TEXT */}
            <div className="min-w-0">
              <Kicker>Det essensielle systemet • én enkel rutine</Kicker>

              <H2>
                Vi blir fortalt at{" "}
                <span
                  style={{
                    background: "var(--g-primary)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  du må spise sunn mat
                </span>{" "}
                – men får kroppen din faktisk alt den trenger?
              </H2>

              <P className="text-base sm:text-lg mt-4">
                Mange kjenner til <b style={{ color: "var(--ink)" }}>essensielle aminosyrer</b>.
                Men hva med <b style={{ color: "var(--ink)" }}>vitaminer</b>,{" "}
                <b style={{ color: "var(--ink)" }}>mineraler</b>,{" "}
                <b style={{ color: "var(--ink)" }}>fett</b>,{" "}
                <b style={{ color: "var(--ink)" }}>væske og væskebalanse</b> – og{" "}
                <b style={{ color: "var(--ink)" }}>energi og yteevne</b> i hverdagen?
              </P>

              <P className="text-base sm:text-lg">
                SmoDay gjør det enklere: Vi samler det essensielle i et system du faktisk kan
                følge. Og vi tenker ikke bare “hva du tar”, men{" "}
                <b style={{ color: "var(--ink)" }}>biotilgjengelighet</b> – altså hva kroppen
                faktisk klarer å ta opp og bruke.
              </P>
            </div>

            {/* IMAGE (synlig på mobil + midtstilt) */}
            <div className="self-center">
              <div
                className="mx-auto w-full max-w-70 md:max-w-60 rounded-2xl border p-2"
                style={{
                  borderColor: "var(--line)",
                  background: "rgba(255,255,255,0.55)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <div className="relative w-full overflow-hidden rounded-xl aspect-4/3">
                  <Image
                    src="/Section1aViblir.png"
                    alt="SmoDay – det essensielle systemet"
                    fill
                    className="object-cover object-center"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Section>
  );
}