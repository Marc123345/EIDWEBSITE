import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { products, type ProductSection } from "@/lib/products";
import { getProduct, getApplication } from "@/lib/i18n-content";
import { localeAlternates } from "@/lib/hreflang";
import type { Locale } from "@/i18n/routing";
import { CrossLinks, ImagePlaceholder } from "@/app/_components/ui";
import { FeaturesListParallax, BannerCTA } from "@/app/_components/sections";
import { Chapter, Marquee, PRODUCT_KEYWORDS } from "@/app/_components/award";
import { CrystalHeroPage } from "@/app/_components/stone";
import { ProductVisual, SectionVisual } from "@/app/_components/product-visuals";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getProduct(locale, slug);
  if (!p) return {};
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDesc,
    alternates: localeAlternates(locale, `/products/${slug}`),
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const p = getProduct(locale, slug);
  if (!p) notFound();

  const [headline, ...bodyParas] = p.intro;
  // A single-section product renders flat: no jump nav, no repeated section
  // heading chrome, because there is nothing to jump between.
  const isSplit = p.sections.length > 1;
  const leadSpecs = p.sections.find((s) => s.specs?.length)?.specs ?? [];

  // Chapter numbers are assigned up front rather than incremented during render.
  // A counter mutated inside the parent's JSX runs before the child components
  // render, which would number the QC band ahead of the sections above it.
  const chapterOrder = ["Overview", ...p.sections.map((s) => s.label), "Quality Control"];
  const chapterIndex = (label: string) =>
    String(chapterOrder.indexOf(label) + 1).padStart(2, "0");
  const chapter = (label: string, gray = false) => (
    <Chapter index={chapterIndex(label)} label={label} gray={gray} />
  );

  const crossApplicationLinks = p.crossApplications
    .map((s) => getApplication(locale, s))
    .filter(Boolean)
    .map((ca) => ({ label: ca!.name, href: `/applications/${ca!.slug}` }));
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
                {leadSpecs.slice(0, 3).map((s) => (
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

      {/* ON-PAGE JUMP NAV — the sections that used to be their own pages */}
      {isSplit && (
        <section className="section pt-0 pb-40">
          <div className="container">
            <div className="section-jumpnav">
              <span className="section-jumpnav__label">On this page</span>
              {p.sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="chip">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTIONS — each keeps its H2, anchor, applications, and spec table */}
      {p.sections.map((s, i) => (
        <ProductSectionBlock
          key={s.id}
          slug={p.slug}
          section={s}
          gray={i % 2 === 1}
          showHeading={isSplit}
          chapter={chapter}
        />
      ))}

      {/* QC — dark parallax features list; chapter marker sits inside the dark band */}
      <FeaturesListParallax
        chapterIndex={chapterIndex("Quality Control")}
        chapterLabel="Quality Control"
        subtitle="Proven on every lot"
        title="Tested in our own laboratory."
        desc={
          p.quality ??
          "Every production run is tested in our in-house QC laboratory for size distribution, crystal morphology, and strength. ISO 9001 certified. Full traceability from raw material to shipped product."
        }
        features={[
          { title: "Particle size distribution", desc: "Tight D50 and span, graded and verified on every batch." },
          { title: "Crystal strength & morphology", desc: "Confirmed to perform as expected in your bond system." },
          { title: "Coating weight & coverage", desc: "Every coated batch checked for target weight and uniformity." },
          { title: "ISO 9001 & traceability", desc: "Certificate of analysis and retention samples on request." },
        ]}
      />

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      {/* CTA */}
      <BannerCTA
        subtitle="Made to your specification"
        title="Request a quote or a sample."
        desc="Give us the grade, size, format, and application, and a real person replies within one business day."
        ctaLabel={p.cta}
        ctaHref="/contact"
      />

      {/* CROSS-LINKS — the cross-axis matrix, rendered */}
      <CrossLinks
        groups={[
          ...(isSplit
            ? [
                {
                  title: "On this page",
                  links: p.sections.map((s) => ({
                    label: s.label,
                    href: `/products/${p.slug}#${s.id}`,
                  })),
                },
              ]
            : []),
          ...(p.crossLinks ?? []),
          { title: "Applications", links: crossApplicationLinks },
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

/* ------------------------------------------------------------------------- */

function ProductSectionBlock({
  slug,
  section,
  gray,
  showHeading,
  chapter,
}: {
  slug: string;
  section: ProductSection;
  gray: boolean;
  showHeading: boolean;
  chapter: (label: string, gray?: boolean) => React.ReactNode;
}) {
  const hasDetail = Boolean(section.applications?.length || section.specs?.length);

  return (
    <>
      {chapter(section.label, gray)}
      <section id={section.id} className={`section section-anchor${gray ? " bg-gray" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="heading mb-30">
                {showHeading && <span className="heading__subtitle">{section.label}</span>}
                <h2 className="heading__title">{section.title}</h2>
              </div>
              <div className="prose">
                {section.intro.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              {section.callouts?.map((c) => (
                <div key={c.title} className="tech-card mt-30">
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
            <div className="col-sm-12 col-md-12 col-lg-5">
              <SectionVisual slug={slug} id={section.id} />
            </div>
          </div>

          {hasDetail && (
            <div className="row mt-50">
              {section.applications?.length ? (
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="heading mb-30">
                    <span className="heading__subtitle">Applications</span>
                    <h3 className="heading__title">{section.applicationsTitle ?? "Where it's used."}</h3>
                  </div>
                  <ul className="check-list">
                    {section.applications.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {section.specs?.length ? (
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="heading mb-30">
                    <span className="heading__subtitle">Specifications</span>
                    <h3 className="heading__title">{section.specsTitle ?? "Specifications"}</h3>
                  </div>
                  <p className="note-mono mb-20">Confirm exact values with Uri before launch.</p>
                  <table className="spec-table">
                    <thead>
                      <tr>
                        <th>Attribute</th>
                        <th>Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.specs.map((s) => (
                        <tr key={s.label}>
                          <td className="spec-label">{s.label}</td>
                          <td className="spec-value">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {section.datasheet && (
                    <Link href="/resources/datasheets" className="btn btn__secondary btn__link mt-20">
                      <i className="fa fa-download" /> <span>Download the {section.datasheet} (PDF)</span>
                    </Link>
                  )}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
