"use client";

import { useState } from "react";

export default function UnlockPage() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const submit = () => {
    setErr(null);

    if (pw.trim().toLowerCase() !== "henry") {
      setErr("Feil passord");
      return;
    }

    // ✅ Cookie som funker på localhost + vercel + eget domene
    const maxAge = 60 * 60 * 24 * 7;
    const isHttps =
      typeof window !== "undefined" && window.location.protocol === "https:";

    // NB: IKKE bruk domain=... her (det er det som ødelegger)
    document.cookie = [
      `smooday_preview=1`,
      `Path=/`,
      `Max-Age=${maxAge}`,
      `SameSite=Lax`,
      isHttps ? "Secure" : "", // Secure kun på https
    ]
      .filter(Boolean)
      .join("; ");

    // ✅ send inn i gated område
    window.location.href = "/panel";
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 60%, var(--bg) 100%)",
      }}
    >
      <main
        className="w-full max-w-md rounded-3xl border p-8"
        style={{ background: "var(--surface)", borderColor: "var(--line)" }}
      >
        <div
          className="text-3xl tracking-wide"
          style={{ fontFamily: "var(--font-ranchers)", color: "var(--ink)" }}
        >
          Smoday
        </div>

        <h1
          className="mt-3 text-xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Logg inn
        </h1>

        <p className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
          Skriv passordet for å åpne panel-siden.
        </p>

        <label className="mt-6 block text-sm font-semibold" style={{ color: "var(--slate)" }}>
          Passord
        </label>

        <input
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          className="mt-2 h-12 w-full rounded-2xl border px-4"
          placeholder="Skriv passord…"
        />

        {err ? (
          <div className="mt-3 text-sm font-semibold" style={{ color: "#ef4444" }}>
            {err}
          </div>
        ) : null}

        <button
          onClick={submit}
          className="mt-5 h-12 w-full rounded-full text-sm font-extrabold"
          style={{ background: "var(--g-primary)", color: "#fff" }}
        >
          Logg inn
        </button>
      </main>
    </div>
  );
}