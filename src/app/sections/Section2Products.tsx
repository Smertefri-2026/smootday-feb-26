import ProductCard from "@/components/shop/ProductCard";

export default function Section2Products() {
  return (
    <section id="produkter" className="mx-auto w-full max-w-6xl px-6 py-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>
        Produkter
      </h2>
      <p className="mt-2" style={{ color: "var(--slate)" }}>
        Ett produktkort – velg variant (7 produkter) og legg i handlekurv.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <ProductCard />

        <div className="rounded-3xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
          <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Kategorioversikt (enkelt)
          </div>

          <ul className="mt-3 grid gap-2 text-sm" style={{ color: "var(--ink)" }}>
            <li><b>Core Aminos</b> – Essentials Powder (EAA + supportive aminos)</li>
            <li><b>Core Vitamins</b> – Essentials + Omega-3 (A/E/K2)</li>
            <li><b>Core Minerals</b> – Essentials + Boost + Hydration</li>
            <li><b>Core Fats</b> – Omega-3 Complete+</li>
            <li><b>Hydration</b> – Hydration Zero / ORS</li>
            <li><b>Performance</b> – Sport Performance</li>
          </ul>
        </div>
      </div>
    </section>
  );
}