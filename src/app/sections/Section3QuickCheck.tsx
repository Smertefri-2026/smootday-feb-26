"use client";

import { useMemo, useState } from "react";

type Totals = { kcal: number; protein: number; fat: number; carbs: number };

const clamp = (n: number, a = 0, b = 100) => Math.max(a, Math.min(b, n));

export default function Section3QuickCheck() {
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");

  // ✅ super-enkel “dummy” beregning nå (placeholder)
  // Vi kobler OpenAI senere og fyller dette med ekte tall.
  const totals: Totals = useMemo(() => {
    const len = (breakfast.length + lunch.length + dinner.length) || 0;
    // litt “fake” tall bare så UI lever
    const kcal = Math.round(900 + len * 2);
    const protein = Math.round(60 + len * 0.08);
    const fat = Math.round(50 + len * 0.05);
    const carbs = Math.round(120 + len * 0.12);
    return { kcal, protein, fat, carbs };
  }, [breakfast, lunch, dinner]);

  const coverage = useMemo(() => {
    const filled = [breakfast, lunch, dinner].filter((x) => x.trim().length > 0).length;
    const base = filled * 25; // 0,25,50,75
    return {
      aminos: clamp(base + 10),
      vitamins: clamp(base + 5),
      minerals: clamp(base),
      fats: clamp(base - 5),
      hydration: clamp(base - 10),
      performance: clamp(base - 15),
    };
  }, [breakfast, lunch, dinner]);

  const Progress = ({ label, value }: { label: string; value: number }) => (
    <div className="grid gap-2">
      <div className="flex items-center justify-between text-sm">
        <span style={{ color: "var(--slate)" }}>{label}</span>
        <span className="font-extrabold" style={{ color: "var(--ink)" }}>
          {value}%
        </span>
      </div>
      <div className="h-3 rounded-full" style={{ background: "rgba(11,18,32,0.08)" }}>
        <div
          className="h-3 rounded-full"
          style={{
            width: `${value}%`,
            background: "var(--g-primary)",
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="quickcheck" className="mx-auto w-full max-w-6xl px-6 py-10">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{ background: "var(--surface)", borderColor: "var(--line)", boxShadow: "var(--shadow-soft)" }}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>
              Enkel sjekk
            </h2>
            <p className="mt-2" style={{ color: "var(--slate)" }}>
              Skriv inn hva du spiste i dag (frokost, lunsj, middag). Dette er en enkel V1-demo –
              vi kobler på automatisk beregning senere.
            </p>
          </div>

          <button
            className="h-12 rounded-full px-6 text-sm font-extrabold"
            style={{ background: "rgba(255,255,255,0.70)", border: "1px solid var(--line)", color: "var(--ink)" }}
            onClick={() => {
              setBreakfast("");
              setLunch("");
              setDinner("");
            }}
          >
            Nullstill
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Inputs */}
          <div className="grid gap-4">
            {[
              { label: "Frokost", v: breakfast, set: setBreakfast, ph: "F.eks. yoghurt + bær + kaffe…" },
              { label: "Lunsj", v: lunch, set: setLunch, ph: "F.eks. kyllingsalat + brød…" },
              { label: "Middag", v: dinner, set: setDinner, ph: "F.eks. laks + ris + grønnsaker…" },
            ].map((x) => (
              <label key={x.label} className="grid gap-2">
                <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                  {x.label}
                </div>
                <textarea
                  value={x.v}
                  onChange={(e) => x.set(e.target.value)}
                  rows={3}
                  className="w-full rounded-3xl border p-4 text-sm"
                  style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.70)" }}
                  placeholder={x.ph}
                />
              </label>
            ))}

            <div className="rounded-3xl border p-4" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
              <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                Dagens makro (demo)
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border p-3" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                  <div style={{ color: "var(--slate)" }}>Kalorier</div>
                  <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                    {totals.kcal} kcal
                  </div>
                </div>
                <div className="rounded-2xl border p-3" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                  <div style={{ color: "var(--slate)" }}>Protein</div>
                  <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                    {totals.protein} g
                  </div>
                </div>
                <div className="rounded-2xl border p-3" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                  <div style={{ color: "var(--slate)" }}>Fett</div>
                  <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                    {totals.fat} g
                  </div>
                </div>
                <div className="rounded-2xl border p-3" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                  <div style={{ color: "var(--slate)" }}>Karbo</div>
                  <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                    {totals.carbs} g
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage */}
          <div className="grid gap-4">
            <div className="rounded-3xl border p-6" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                  Dagens dekning (demo)
                </div>
                <a
                  href="#produkter"
                  className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-extrabold"
                  style={{ background: "var(--g-primary)", color: "#fff" }}
                >
                  Shop Smooday
                </a>
              </div>

              <div className="mt-4 grid gap-4">
                <Progress label="Core Aminos" value={coverage.aminos} />
                <Progress label="Core Vitamins" value={coverage.vitamins} />
                <Progress label="Core Minerals" value={coverage.minerals} />
                <Progress label="Core Fats" value={coverage.fats} />
                <Progress label="Hydration" value={coverage.hydration} />
                <Progress label="Performance" value={coverage.performance} />
              </div>

              <div className="mt-5 rounded-3xl p-4" style={{ background: "var(--bg-2)" }}>
                <div className="text-sm font-extrabold" style={{ color: "var(--ink)" }}>
                  Med Smooday kan du fylle gapene og komme nærmere 100%.
                </div>
                <div className="mt-1 text-sm" style={{ color: "var(--slate)" }}>
                  (Her kobler vi senere på automatisk beregning – først skal UI og flyten sitte.)
                </div>
              </div>
            </div>

            <div className="rounded-3xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.70)" }}>
              <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                Neste steg
              </div>
              <p className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
                Når vi kobler på beregning, får du:
              </p>
              <ul className="mt-3 grid gap-2 text-sm" style={{ color: "var(--ink)" }}>
                <li>• Automatisk P/F/K fra tekst</li>
                <li>• Prosent per kategori</li>
                <li>• Anbefalt Smooday-variant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}