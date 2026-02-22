"use client";

import { useEffect, useRef, useState } from "react";

type Item = { href: string; label: string };

export default function PublicHeader({
  brand = "Smoday",
  links = [
    { href: "#produkter", label: "Produkter" },
    { href: "#quickcheck", label: "Sjekk" },
    { href: "#how", label: "Hvordan" },
    { href: "#subscription", label: "Abonnement" },
    { href: "#trust", label: "Kvalitet" },
    { href: "#faq", label: "FAQ" },
    { href: "#kontakt", label: "Kontakt" },
  ],
}: {
  brand?: string;
  links?: Item[];
}) {
  const [open, setOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const pendingHashRef = useRef<string | null>(null);

  const getHeaderOffset = () => {
    const h = headerRef.current?.getBoundingClientRect().height ?? 56;
    return Math.round(h + 10);
  };

  const scrollToId = (id: string) => {
    if (!id || id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  const go = (href: string) => {
    if (href === "#top") {
      scrollToId("top");
      return;
    }
    if (!href.startsWith("#")) return;

    const id = href.slice(1);
    window.history.pushState(null, "", href);
    scrollToId(id);
  };

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();

    if (open) {
      pendingHashRef.current = href;
      setOpen(false);
      return;
    }
    go(href);
  };

  useEffect(() => {
    if (open) return;

    const href = pendingHashRef.current;
    if (!href) return;

    pendingHashRef.current = null;
    const t = window.setTimeout(() => go(href), 220);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const t = e.target as Node;

      if (btnRef.current && btnRef.current.contains(t)) return;
      if (panelRef.current && panelRef.current.contains(t)) return;

      setOpen(false);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      <div
        className="border-b backdrop-blur"
        style={{
          background: "var(--g-primary)",
          borderColor: "rgba(255,255,255,0.18)",
        }}
      >
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
          {/* Brand */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              window.history.pushState(null, "", "#top");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
            aria-label="Gå til toppen"
          >
            <div className="leading-tight">
              <div
                className="text-2xl sm:text-3xl tracking-wide leading-none"
                style={{ fontFamily: "var(--font-ranchers)", color: "rgba(255,255,255,0.98)" }}
              >
                {brand}
              </div>
              <div className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.82)" }}>
                Essentials System
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleNav(l.href)}
                className="rounded-full px-3 py-2 text-sm font-extrabold transition"
                style={{ color: "rgba(255,255,255,0.92)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,0.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            ref={btnRef}
            className="md:hidden inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold transition ring-1"
            style={{
              color: "rgba(255,255,255,0.95)",
              background: "rgba(255,255,255,0.18)",
              borderColor: "rgba(255,255,255,0.25)",
            }}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Lukk meny" : "Åpne meny"}
          >
            <span className="text-base leading-none">{open ? "✕" : "≡"}</span>
            <span>{open ? "Lukk" : "Meny"}</span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          ref={panelRef}
          className={[
            "md:hidden overflow-hidden border-t",
            "transition-[max-height,opacity] duration-200",
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
          style={{ borderColor: "rgba(255,255,255,0.18)" }}
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-3">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={handleNav(l.href)}
                  className="rounded-2xl px-4 py-3 text-center font-extrabold transition ring-1"
                  style={{
                    color: "rgba(255,255,255,0.95)",
                    background: "rgba(255,255,255,0.16)",
                    borderColor: "rgba(255,255,255,0.22)",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}