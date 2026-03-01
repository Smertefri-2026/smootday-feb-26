"use client";

// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section1Hero.tsx

import Image from "next/image";
import Section from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Kicker, H1, P } from "@/components/ui/Typography";
import { LinkOutline } from "@/components/ui/Button";

export default function Section1Hero() {
  return (
    <Section id="top" className="pt-10 pb-6">
      <Card>
        <CardBody className="p-6 sm:p-8">
          {/* Layout: text + small image on the right (desktop) */}
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            {/* TEXT */}
            <div className="min-w-0">
              <Kicker>The Essentials System</Kicker>

              <H1>
                Det essensielle systemet – den enkleste måten å få i deg det kroppen trenger, hver
                dag.
              </H1>

              <P className="text-base sm:text-lg">
                «Essensielt» betyr næringsstoffer kroppen trenger jevnlig, men ikke kan produsere
                selv (eller ikke i tilstrekkelige mengder). Du kan få dette gjennom mat, men i
                praksis krever det ofte en gjennomtenkt kostholdsplan. Derfor har vi laget tre
                produkter – ODF, Omega-3 og sporstoffer – som gjør det enklere å dekke grunnlaget.
              </P>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <LinkOutline href="/system">Les mer om systemet</LinkOutline>
              </div>
            </div>

{/* IMAGE: mobile centered, desktop on the right */}
<div className="md:self-center">
  <div className="flex justify-center md:block">
    <div
      className="rounded-2xl border p-2"
      style={{
        borderColor: "var(--line)",
        background: "rgba(255,255,255,0.55)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="relative h-30 w-42.5 overflow-hidden rounded-xl">
        <Image
          src="/products/system1.png"
          alt="SmoDay – produktene i systemet"
          fill
          className="object-contain"
          priority={false}
        />
      </div>
    </div>
  </div>
</div>
          </div>
        </CardBody>
      </Card>
    </Section>
  );
}