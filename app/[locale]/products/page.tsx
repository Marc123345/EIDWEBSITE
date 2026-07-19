import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ServicesLayout3, BannerCTA } from "@/app/_components/sections";
import { Chapter, StatsBar, Marquee, PRODUCT_KEYWORDS } from "@/app/_components/award";
import { CrystalHeroPage } from "@/app/_components/stone";
import Icon, { IconName } from "@/app/_components/Icon";
import { getProducts } from "@/lib/i18n-content";
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
  "Polycrystalline Diamond (CVD & PCD)": "grid",
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

  // Eight groups, eight pages. The card blurb is the page's own card copy, not a
  // list of children, because there are no children: the mesh and micron splits,
  // coatings, PCBN, and PCD blanks are sections inside each page.
  const familyCards = products.map((p) => ({
    icon: familyIcon[p.family] || "diamond",
    title: p.name,
    desc: p.cardDesc,
    href: `/products/${p.slug}`,
  }));

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
        title="The complete diamond and CBN range, from one manufacturer."
        desc="EID manufactures and supplies a complete range of industrial superabrasives. From in-house processed grit and powder to custom-grown CVD single crystal, every product is quality-controlled to our specifications, giving tool makers a consistent, single-source quality standard across the entire range. Browse the eight product families below. Mesh, micron, coatings, grades, and sizing are configured within each family to match your application."
        ctaHref="/contact"
        ctaLabel="Request a Quote"
        items={familyCards}
      />

      <StatsBar
        items={[
          { value: 8, label: "Product pages" },
          { value: 6, label: "Application hubs" },
          { value: 50, suffix: "+", label: "Years' experience" },
          { value: 100, suffix: "%", label: "Batches QC-tested" },
        ]}
      />

      {/* THE EIGHT PAGES — each card names the sections it contains */}
      <Chapter index="02" label="All Products" />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="tech-card" style={{ display: "block" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <Icon name={familyIcon[p.family] || "diamond"} style={{ color: "var(--eid-blue)" }} />
                  <h3 style={{ margin: 0 }}>{p.name}</h3>
                </div>
                <p>{p.cardDesc}</p>
                {p.sections.length > 1 && (
                  <p className="note-mono" style={{ marginTop: 10 }}>
                    Contains: {p.sections.map((sec) => sec.label).join(" · ")}
                  </p>
                )}
                <span className="btn btn__secondary btn__link mt-20">
                  <span>View product</span> <i className="fa fa-long-arrow-right" />
                </span>
              </Link>
            ))}
          </div>
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
                Share the material you are processing, your specific application, and the desired finish, and our
                technical team will direct you to the ideal product and grade. This is what we do before every quote.
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
        desc={`One form covers all ${products.length} product families. Give us the grade, size, and quantity, and a real person replies within one business day.`}
        ctaLabel="Request a Quote or Sample"
        ctaHref="/contact"
      />
    </>
  );
}
