"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import Section1aViblir from "./Section1aViblir";
import Section1bOm from "./Section1bOm";

type Slide = {
  key: string;
  node: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
  caption?: string;
};

export default function Section1Hero() {
  const slides: Slide[] = useMemo(
    () => [
      {
        key: "viblir",
        node: <Section1aViblir />,
        imageSrc: "/Section1aViblir.png",
        imageAlt: "Smooday – Essentials System",
        imageSide: "left",
        caption: "Essentials System – en enkel måte å sikre det viktigste hver dag.",
      },
      {
        key: "om",
        node: <Section1bOm />,
        imageSrc: "/Section1bOm.png",
        imageAlt: "Smooday – kvalitet og utvikling",
        imageSide: "right",
        caption: "Kvalitet, dokumentasjon og stabil produksjon – fundamentet i Smooday.",
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-rotate only when not paused
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 15000);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  const active = slides[idx];
  const imageOnLeft = active.imageSide === "left";

  const ImageCard = active.imageSrc ? (
    <div
      className="rounded-3xl border p-3 sm:p-4"
      style={{
        borderColor: "var(--line)",
        background: "rgba(255,255,255,0.55)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="relative w-full overflow-hidden rounded-3xl aspect-[4/3] lg:aspect-[4/3] lg:max-h-[280px]">
        <Image
          src={active.imageSrc}
          alt={active.imageAlt ?? "Smooday"}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {active.caption ? (
        <p className="mt-3 text-xs sm:text-sm" style={{ color: "var(--slate)" }}>
          {active.caption}
        </p>
      ) : null}
    </div>
  ) : null;

  const goToSlide = (i: number) => {
    setIdx(i);
    setPaused(true); // ✅ auto-pause when user interacts
  };

  const TextBlock = (
    <div className="min-w-0">
      <div className="transition-opacity duration-300">{active.node}</div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href="#produkter"
          className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
          style={{
            background: "var(--g-primary)",
            color: "#fff",
            borderRadius: 9999,
          }}
        >
          Våre produkter
        </a>

        <a
          href="#quickcheck"
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
          href="/om"
          className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
          style={{
            background: "rgba(255,255,255,0.70)",
            color: "var(--ink)",
            border: "1px solid var(--line)",
            borderRadius: 9999,
          }}
        >
          Om Smooday
        </a>
      </div>

      {/* Dots + Pause/Play */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.key}
            onClick={() => goToSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className="h-2.5 w-2.5 rounded-full"
            style={{
              background: i === idx ? "var(--ink)" : "rgba(15,23,42,0.25)",
              border: "1px solid var(--line)",
            }}
          />
        ))}

        <span className="ml-2 text-xs" style={{ color: "var(--slate)" }}>
          {idx + 1}/{slides.length}
        </span>

        <button
          onClick={() => setPaused((p) => !p)}
          className="ml-3 inline-flex h-9 items-center justify-center px-4 text-xs font-extrabold"
          style={{
            background: "rgba(255,255,255,0.70)",
            color: "var(--ink)",
            border: "1px solid var(--line)",
            borderRadius: 9999,
          }}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          title={paused ? "Play" : "Pause"}
        >
          {paused ? "Start" : "Pause"}
        </button>
      </div>
    </div>
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-10 pb-10">
      <div
        className="rounded-3xl border p-6 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Mobil: tekst først, bilde nederst */}
        <div className="grid gap-8 lg:hidden">
          {TextBlock}
          {ImageCard}
        </div>

        {/* Desktop: midtstill på høyden + riktig 2/3 vs 1/3 uansett side */}
        <div
          className={[
            "hidden lg:grid gap-10 lg:items-center",
            imageOnLeft ? "lg:grid-cols-[1fr_2fr]" : "lg:grid-cols-[2fr_1fr]",
          ].join(" ")}
        >
          {imageOnLeft ? (
            <>
              {ImageCard}
              {TextBlock}
            </>
          ) : (
            <>
              {TextBlock}
              {ImageCard}
            </>
          )}
        </div>
      </div>
    </section>
  );
}