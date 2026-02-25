// /src/app/(public)/products/page.tsx

import Image from "next/image";

type ProductCard = {
  title: string;
  desc: string;
  href: string;
  img: string;
  badge?: string;
};

const products: ProductCard[] = [
  {
    title: "ODF (Powder)",
    desc: "Daglig base – laget for en enkel rutine du faktisk følger.",
    href: "/shop/odf",
    img: "/products/odf.png",
    badge: "Daily Base",
  },
  {
    title: "Omega-3",
    desc: "EPA & DHA – enkel del av Essentials-rutinen.",
    href: "/shop/omega",
    img: "/products/omega.png",
    badge: "Complete+",
  },
  {
    title: "Sporstoffer",
    desc: "Trace / add-on – bruk etter behov for en mer komplett rutine.",
    href: "/shop/trace",
    img: "/products/trace.png",
    badge: "Add-on",
  },
];

export default function ProductsPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 60%, var(--bg) 100%)",
      }}
    >
      <main className="mx-auto w-full max-w-6xl px-6 pt-10 pb-16">
        <section
          className="rounded-3xl border p-8 sm:p-10"
          style={{
            background: "var(--surface)",
            borderColor: "var(--line)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Produkter
          </p>

          <h1
            className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
          >
            The Essentials System – tre produkter, én rutine.
          </h1>

          <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
            Velg én enkel base, og bygg videre med add-ons når du trenger det. Målet er
            at det skal være lett å starte – og lett å fortsette.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="/cart"
              className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
              style={{
                background: "rgba(255,255,255,0.70)",
                color: "var(--ink)",
                border: "1px solid var(--line)",
                borderRadius: 9999,
              }}
            >
              Gå til handlekurv
            </a>

            <a
              href="/benefits"
              className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
              style={{
                background: "var(--g-primary)",
                color: "#fff",
                borderRadius: 9999,
              }}
            >
              Se helse & FAQ
            </a>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border p-5"
              style={{
                background: "var(--surface)",
                borderColor: "var(--line)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="relative w-full overflow-hidden rounded-3xl aspect-4/3">
                <Image src={p.img} alt={p.title} fill className="object-cover object-center" />
              </div>

              {p.badge ? (
                <div
                  className="mt-4 inline-flex rounded-full px-3 py-1 text-xs font-extrabold"
                  style={{ background: "rgba(0,0,0,0.06)", color: "var(--ink)" }}
                >
                  {p.badge}
                </div>
              ) : null}

              <h2
                className="mt-3 text-xl font-extrabold"
                style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
              >
                {p.title}
              </h2>

<p className="mt-2 text-base leading-7" style={{ color: "var(--slate)" }}>                {p.desc}
              </p>

              <a
                href={p.href}
                className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-extrabold"
                style={{ background: "var(--g-primary)", color: "var(--ink)" }}
              >
                Se produkt
              </a>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}