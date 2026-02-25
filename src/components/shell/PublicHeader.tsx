// /Users/oystein/nettsider/smootday-v2-feb-26/src/components/shell/PublicHeader.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getCart } from "@/lib/cart";

type Item = { href: string; label: string };

export default function PublicHeader({ brand = "SmoDay" }: { brand?: string }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const centerLinks: Item[] = useMemo(
    () => [
      { href: "/system", label: "System" },
      { href: "/products", label: "Produkter" },
      { href: "/benefits", label: "Helse & FAQ" },
      { href: "/about", label: "Om" },
    ],
    []
  );

  const refreshCartCount = () => {
    try {
      const items = getCart();
      const total = items.reduce((sum, x) => sum + (x.qty || 0), 0);
      setCartCount(total);
    } catch {
      setCartCount(0);
    }
  };

  useEffect(() => {
    refreshCartCount();

    const onStorage = (e: StorageEvent) => {
      if (e.key && e.key !== "smoodday_cart_v1") return;
      refreshCartCount();
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") refreshCartCount();
    };

    window.addEventListener("storage", onStorage);
    document.addEventListener("visibilitychange", onVisibility);

    const t = window.setInterval(refreshCartCount, 700);

    return () => {
      window.removeEventListener("storage", onStorage);
      document.removeEventListener("visibilitychange", onVisibility);
      window.clearInterval(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ Glass + shadow when scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    window.history.pushState(null, "", "#top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close on outside click + ESC
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

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // UI styles
  const pill =
    "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-extrabold transition ring-1";
  const pillStyle = {
    color: "rgba(255,255,255,0.95)",
    background: "rgba(255,255,255,0.16)",
    borderColor: "rgba(255,255,255,0.22)",
  } as const;

  const iconBtn =
    "relative inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-extrabold transition ring-1";
  const iconStyle = {
    color: "rgba(255,255,255,0.95)",
    background: "rgba(255,255,255,0.18)",
    borderColor: "rgba(255,255,255,0.25)",
  } as const;

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      <div
        className="border-b backdrop-blur transition-[box-shadow,background-color,border-color] duration-200"
        style={{
          // glass look: a bit more transparent when scrolled
          background: scrolled
            ? "rgba(16, 163, 74, 0.72)" // green glass (matches --g-primary vibe)
            : "var(--g-primary)",
          borderColor: scrolled
            ? "rgba(255,255,255,0.22)"
            : "rgba(255,255,255,0.18)",
          boxShadow: scrolled ? "0 18px 38px rgba(2, 6, 23, 0.18)" : "none",
        }}
      >
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
          {/* LEFT: Brand -> Home */}
          <a
            href="/panel"
            onClick={(e) => {
              if (isHome) return goTop(e);
              setOpen(false);
            }}
            className="flex items-center gap-3"
            aria-label="Gå til hjem"
          >
            <div className="leading-tight">
              <div
                className="text-[22px] sm:text-[28px] leading-none"
                style={{
                  fontFamily: "var(--font-brand)",
                  color: "rgba(255,255,255,0.98)",
                  letterSpacing: "0.03em",
                  textShadow:
                    "0.45px 0 0 rgba(255,255,255,0.98), -0.45px 0 0 rgba(255,255,255,0.98)",
                }}
              >
                {brand}
              </div>
            </div>
          </a>

          {/* CENTER */}
          <nav className="hidden md:flex items-center justify-center gap-2 flex-1">
            {centerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={pill}
                style={pillStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,0.22)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,0.16)";
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            {/* Contact */}
            <a
              href="/contact"
              className={iconBtn}
              style={iconStyle}
              title="Kontakt"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.26)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.18)";
              }}
            >
              ✉️ <span className="ml-2 hidden sm:inline">Kontakt</span>
            </a>

            {/* Cart */}
            <a
              href="/cart"
              className={iconBtn}
              style={iconStyle}
              title="Handlekurv"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.26)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.18)";
              }}
            >
              🛒 <span className="ml-2 hidden sm:inline">Handlekurv</span>

              {cartCount > 0 ? (
                <span
                  className="absolute -top-1 -right-1 min-w-6 h-6 px-2 rounded-full text-xs font-extrabold flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    color: "var(--ink)",
                    boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                  aria-label={`${cartCount} i handlekurven`}
                >
                  {cartCount}
                </span>
              ) : null}
            </a>

            {/* Mobile toggle */}
            <button
              ref={btnRef}
              className="md:hidden inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold transition ring-1"
              style={iconStyle}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Lukk meny" : "Åpne meny"}
            >
              <span className="text-base leading-none">{open ? "✕" : "≡"}</span>
              <span>{open ? "Lukk" : "Meny"}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          ref={panelRef}
          className={[
            "md:hidden overflow-hidden border-t",
            "transition-[max-height,opacity] duration-200",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
          style={{ borderColor: "rgba(255,255,255,0.18)" }}
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-3">
            <div className="grid gap-2">
              <a
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-center font-extrabold transition ring-1"
                style={pillStyle}
              >
                Hjem
              </a>

              {centerLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-center font-extrabold transition ring-1"
                  style={pillStyle}
                >
                  {l.label}
                </a>
              ))}

              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-center font-extrabold transition ring-1"
                style={pillStyle}
              >
                ✉️ Kontakt
              </a>

              <a
                href="/cart"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-center font-extrabold transition ring-1"
                style={pillStyle}
              >
                🛒 Handlekurv{cartCount > 0 ? ` (${cartCount})` : ""}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}