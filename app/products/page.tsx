import type { Metadata } from "next";
import Link from "next/link";
import { ServicesLayout3, BannerCTA } from "../_components/sections";
import { Chapter, StatsBar, Marquee, PRODUCT_KEYWORDS } from "../_components/award";
import { CrystalHeroPage } from "../_components/stone";
import Icon, { IconName } from "../_components/Icon";
import { PRODUCT_FAMILIES, productsByFamily, products } from "@/lib/products";

export const metadata: Metadata = {
  title: { absolute: "Industrial Diamond & CBN Products | Full Range | EID Ltd" },
  description:
    "Browse EID's complete range of industrial diamond and CBN products — natural grit, metal bond, resin bond, CBN, CVD single crystal, MCD, PCD/PCBN, and surface enhancements.",
};

const familyIcon: Record<string, IconName> = {
  "Natural Diamond": "diamond",
  "Bonded Diamond Powders": "saw",
  CBN: "gauge",
  "Synthetic / Grown Diamond": "cube",
  "Finished Forms": "grid",
  Specialist: "flask",
};

export default function ProductsOverview() {
  const familyCards = PRODUCT_FAMILIES.map((family) => {
    const items = productsByFamily(family);
    return {
      icon: familyIcon[family] || "diamond",
      title: family,
      desc: items.map((p) => p.name).join(" · "),
      href: `/products/${items[0].slug}`,
    };
  });

  return (
    <>
      <CrystalHeroPage
        eyebrow="The complete range · one manufacturer"
        title="Industrial Diamond & CBN Products"
        desc="Browse EID's complete range of industrial diamond and CBN — natural grit, metal & resin bond, CBN, CVD single crystal, MCD, PCD/PCBN, and surface enhancements."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        imgLabel="PRODUCT RANGE — Diamond & CBN"
        secondaryCta={{ label: "Industries We Serve", href: "/industries" }}
      />

      {/* FAMILIES — services layout 3 */}
      <Chapter index="01" label="The Range" />
      <ServicesLayout3
        subtitle="The full range · one source"
        title="Six families. Twelve product lines."
        desc="EID manufactures and quality-controls every superabrasive product you need — from raw natural diamond grit to precision-grown CVD single crystal, finished forms, and coatings."
        ctaHref="/contact"
        ctaLabel="Request a Quote"
        items={familyCards}
      />

      <StatsBar
        items={[
          { value: 6, label: "Product families" },
          { value: 12, label: "Product lines" },
          { value: 100, suffix: "%", label: "Batches QC-tested" },
          { value: 30, suffix: "+", label: "Countries served" },
        ]}
      />

      {/* FULL GRID grouped by family */}
      <Chapter index="02" label="All Products" />
      <section className="section">
        <div className="container" style={{ display: "grid", gap: 48 }}>
          {PRODUCT_FAMILIES.map((family) => (
            <div key={family}>
              <div className="heading mb-30" style={{ display: "flex", alignItems: "center", gap: 14, borderBottom: "1px solid var(--eid-line)", paddingBottom: 12 }}>
                <Icon name={familyIcon[family] || "diamond"} style={{ color: "var(--eid-blue)" }} />
                <span className="heading__subtitle" style={{ margin: 0 }}>{family}</span>
              </div>
              <div className="grid-3">
                {productsByFamily(family).map((p) => (
                  <Link key={p.slug} href={`/products/${p.slug}`} className="tech-card" style={{ display: "block" }}>
                    <h3>{p.name}</h3>
                    <p>{p.cardDesc}</p>
                    <span className="btn btn__secondary btn__link mt-20">
                      <span>View product</span> <i className="fa fa-long-arrow-right" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      <BannerCTA
        subtitle="Whatever your application"
        title="Request a quote for any product."
        desc={`One supplier for all ${products.length} product lines. Tell us the grade, size, and country and your enquiry arrives ready to action.`}
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
