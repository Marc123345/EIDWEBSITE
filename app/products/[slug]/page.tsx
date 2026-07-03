import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { products, getProduct } from "@/lib/products";
import { getIndustry } from "@/lib/industries";
import { CrossLinks, ImagePlaceholder } from "@/app/_components/ui";
import { FeaturesListParallax, BannerCTA } from "@/app/_components/sections";
import { Chapter, Marquee, PRODUCT_KEYWORDS } from "@/app/_components/award";
import { CrystalHeroPage } from "@/app/_components/stone";
import { ProductVisual } from "@/app/_components/product-visuals";
import Icon from "@/app/_components/Icon";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return { title: { absolute: p.metaTitle }, description: p.metaDesc };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const [headline, ...bodyParas] = p.intro;

  // Contiguous chapter numbering even when optional sections are absent.
  let step = 0;
  const chapter = (label: string, gray = false) => (
    <Chapter index={String(++step).padStart(2, "0")} label={label} gray={gray} />
  );

  const crossProductLinks = p.crossProducts
    .map((s) => getProduct(s))
    .filter(Boolean)
    .map((cp) => ({ label: cp!.name, href: `/products/${cp!.slug}` }));
  const crossIndustryLinks = p.crossIndustries
    .map((s) => getIndustry(s))
    .filter(Boolean)
    .map((ci) => ({ label: ci!.name, href: `/industries/${ci!.slug}` }));
  const guideLinks = (p.guides ?? []).map((g) => ({ label: g, href: "/resources" }));

  return (
    <>
      <CrystalHeroPage
        eyebrow={p.eyebrow}
        title={p.h1}
        desc={p.metaDesc}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: p.name },
        ]}
        visual={<ProductVisual slug={p.slug} />}
        primaryCta={{ label: p.cta, href: "/contact" }}
        secondaryCta={{ label: "All Products", href: "/products" }}
      />

      {/* INTRO — about-2 geometric layout */}
      {chapter("Overview")}
      <section className="about about-2 pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-10 offset-xl-1">
              <div className="heading heading-3 mb-50">
                <span className="heading__subtitle">{p.family}</span>
                <h2 className="heading__title">{headline}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="about__text mt-30 prose">
                {bodyParas.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <Link href="/contact" className="btn btn__primary mt-20">
                  {p.cta} <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-5">
              <div className="about__img">
                <ImagePlaceholder label={`PRODUCT IMAGE — ${p.name}`} minHeight={340} />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="features-list features-list-layout1 mt-30">
                {p.specs.slice(0, 3).map((s) => (
                  <div key={s.label} className="feature-item feature-list-item">
                    <div className="feature__content">
                      <h4 className="feature__title">{s.label}</h4>
                      <p className="feature__desc">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALLOUTS — centered tech-card highlights (never sparse) */}
      {p.callouts && p.callouts.length > 0 && (
        <>
          {chapter("Highlights")}
          <section className="section">
          <div className="container">
            <div className="callout-grid">
              {p.callouts.map((c) => (
                <div key={c.title} className="tech-card">
                  <div className="tech-card__meta">{c.title}</div>
                  {Array.isArray(c.body) ? (
                    <ul className="check-list" style={{ marginTop: 6 }}>
                      {c.body.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: 16 }}>{c.body}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          </section>
        </>
      )}

      {/* APPLICATIONS + SPECIFICATIONS */}
      {chapter("Applications & Specs", true)}
      <section className="section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="heading mb-30">
                <span className="heading__subtitle">Applications</span>
                <h2 className="heading__title">Where it&apos;s used.</h2>
              </div>
              <ul className="check-list">
                {p.applications.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="heading mb-30">
                <span className="heading__subtitle">Specifications</span>
                <h2 className="heading__title">Spec matrix.</h2>
              </div>
              <p className="note-mono mb-20">Confirm exact values with Uri.</p>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {p.specs.map((s) => (
                    <tr key={s.label}>
                      <td className="spec-label">{s.label}</td>
                      <td className="spec-value">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* QC — dark parallax features list */}
      {chapter("Quality Control")}
      <FeaturesListParallax
        subtitle="Quality control"
        title="Tested in our own laboratory."
        desc={
          p.quality ??
          "Every production run is tested in our in-house QC laboratory for size distribution, crystal morphology, and strength. ISO 9001 certified. Full traceability from raw material to shipped product."
        }
        features={[
          { title: "Particle size distribution", desc: "Tight D50 and span — graded and verified on every batch." },
          { title: "Crystal strength & morphology", desc: "Confirmed to perform as expected in your bond system." },
          { title: "Coating weight & coverage", desc: "Every coated batch checked for target weight and uniformity." },
          { title: "ISO 9001 & traceability", desc: "Certificate of analysis and retention samples on request." },
        ]}
      />

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      {/* CTA */}
      <BannerCTA
        subtitle="Made to your specification"
        title={`Need ${p.name.toLowerCase()} to spec?`}
        desc="Request a quote, order a sample, or send us your drawing. A real person responds within 24 hours."
        ctaLabel={p.cta}
        ctaHref="/contact"
      />

      {/* CROSS-LINKS */}
      <CrossLinks
        groups={[
          { title: "Related products", links: crossProductLinks },
          { title: "Industries", links: crossIndustryLinks },
          {
            title: "Quality & resources",
            links: [
              { label: "Quality, QC & ISO 9001", href: "/quality" },
              { label: "Datasheets", href: "/resources/datasheets" },
              ...guideLinks,
            ],
          },
        ]}
      />
    </>
  );
}
