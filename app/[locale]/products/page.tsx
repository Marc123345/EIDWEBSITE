import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ServicesLayout3, BannerCTA } from "@/app/_components/sections";
import { Chapter, StatsBar, Marquee, PRODUCT_KEYWORDS } from "@/app/_components/award";
import { CrystalHeroPage } from "@/app/_components/stone";
import Icon, { IconName } from "@/app/_components/Icon";
import { PRODUCT_FAMILIES } from "@/lib/products";
import { getProducts, getFamilyLabel } from "@/lib/i18n-content";
import { localeAlternates } from "@/lib/hreflang";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: { absolute: "Industrial Diamond & CBN Products | Full Range | EID Ltd" },
    description:
      "Browse EID's full range of industrial diamond and CBN: natural grit and powder, metal and resin bond, CBN and PCBN, CVD, MCD, PCD, and polishing powder.",
    alternates: localeAlternates(locale, "/products"),
  };
}

const familyIcon: Record<string, IconName> = {
  "Natural Diamond Grit & Powder": "diamond",
  "Metal Bond Diamond": "saw",
  "Resin Bond Diamond": "layers",
  CBN: "gauge",
  "Single Crystal Diamond (CVD & MCD)": "cube",
  "Polycrystalline Diamond (PCD & CVD)": "grid",
  "Natural Tool Stones": "flask",
  "Polycrystalline Diamond Powder": "bolt",
};

export default async function ProductsOverview({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const products = getProducts(locale);
  const byFamily = (family: string) => products.filter((p) => p.family === family);

  const familyCards = PRODUCT_FAMILIES.map((family) => {
    const items = byFamily(family);
    return {
      icon: familyIcon[family] || "diamond",
      title: getFamilyLabel(locale, family),
      desc: items.map((p) => p.name).join(" · "),
      href: `/products/${items[0].slug}`,
    };
  });

  return (
    <>
      <CrystalHeroPage
        eyebrow="The complete range · one manufacturer"
        title="Industrial Diamond & CBN Products"
        desc="Browse EID's full range of industrial diamond and CBN: natural grit and powder, metal and resin bond, CBN and PCBN, CVD single crystal, MCD, PCD, and polishing powder."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        imgLabel="PRODUCT RANGE — Diamond & CBN"
        secondaryCta={{ label: "Applications We Serve", href: "/applications" }}
      />

      {/* INTRO — honest production framing, visible where technical buyers scan */}
      <Chapter index="01" label="The Range" />
      <ServicesLayout3
        subtitle="The full range · one source"
        title="Eight groups. Twelve product lines."
        desc="Natural grit and powder are produced and graded in our own factory. Bonded and CBN grades are made to order, then re-processed and QC-tested through our facility to your spec. CVD single crystal is grown to your orientation through a dedicated growth partner. One supplier covers the range, and one QC standard covers the range."
        ctaHref="/contact"
        ctaLabel="Request a Quote"
        items={familyCards}
      />

      <StatsBar
        items={[
          { value: 8, label: "Product groups" },
          { value: 12, label: "Product lines" },
          { value: 6, label: "Application hubs" },
          { value: 100, suffix: "%", label: "Batches QC-tested" },
        ]}
      />

      {/* FULL GRID grouped by the eight locked groups */}
      <Chapter index="02" label="All Products" />
      <section className="section">
        <div className="container" style={{ display: "grid", gap: 48 }}>
          {PRODUCT_FAMILIES.map((family) => (
            <div key={family}>
              <div className="heading mb-30" style={{ display: "flex", alignItems: "center", gap: 14, borderBottom: "1px solid var(--eid-line)", paddingBottom: 12 }}>
                <Icon name={familyIcon[family] || "diamond"} style={{ color: "var(--eid-blue)" }} />
                <span className="heading__subtitle" style={{ margin: 0 }}>{getFamilyLabel(locale, family)}</span>
              </div>
              <div className="grid-3">
                {byFamily(family).map((p) => (
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

      {/* NOT SURE WHICH GRADE — route the application-first buyer to a person */}
      <section className="section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="heading mb-20">
                <span className="heading__subtitle">Help me specify</span>
                <h2 className="heading__title">Not sure which grade fits your process?</h2>
              </div>
              <p className="prose">
                Tell us the material you are working, the bond system, and the finish you need, and we will
                point you to the right product and grade. This is what our technical team does before every quote.
                You can also start from your <Link href="/applications">application</Link> or read the{" "}
                <Link href="/resources">technical guides</Link> if you are still comparing options.
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 d-flex align-items-center justify-content-lg-end">
              <Link href="/contact" className="btn btn__primary mt-20">
                Talk to our technical team <i className="fa fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      <BannerCTA
        subtitle="Whatever your application"
        title="Request a quote for any product."
        desc={`One form covers all ${products.length} product lines. Give us the grade, size, and quantity, and a real person replies within one business day.`}
        ctaLabel="Request a Quote or Sample"
        ctaHref="/contact"
      />
    </>
  );
}
