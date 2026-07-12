import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { applications, getApplication } from "@/lib/applications";
import { getProduct } from "@/lib/products";
import { CrossLinks, ImagePlaceholder } from "@/app/_components/ui";
import { ServicesLayout3, FeaturesListParallax, BannerCTA } from "@/app/_components/sections";
import { Chapter, Marquee, PRODUCT_KEYWORDS } from "@/app/_components/award";
import { CrystalHeroPage } from "@/app/_components/stone";
import type { IconName } from "@/app/_components/Icon";

export function generateStaticParams() {
  return applications.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getApplication(slug);
  if (!a) return {};
  return { title: { absolute: a.metaTitle }, description: a.metaDesc };
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

export default async function ApplicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApplication(slug);
  if (!app) notFound();

  const [headline, ...bodyParas] = app.intro;

  const serviceItems = app.products
    .map((ap) => {
      const prod = getProduct(ap.product);
      if (!prod) return null;
      return {
        icon: familyIcon[prod.family] || "diamond",
        title: prod.name,
        desc: ap.note,
        href: `/products/${prod.slug}`,
      };
    })
    .filter(Boolean) as { icon: IconName; title: string; desc: string; href: string }[];

  const productLinks = serviceItems.map((s) => ({ label: s.title, href: s.href }));

  return (
    <>
      <CrystalHeroPage
        eyebrow={app.eyebrow}
        title={app.h1}
        desc={app.metaDesc}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Applications", href: "/applications" },
          { label: app.name },
        ]}
        imgLabel={`APPLICATION — ${app.name}`}
        primaryCta={{ label: app.cta, href: "/contact" }}
        secondaryCta={{ label: "All Applications", href: "/applications" }}
      />

      {/* INTRO — about-2 geometric layout */}
      <Chapter index="01" label="Overview" />
      <section className="about about-2 pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-10 offset-xl-1">
              <div className="heading heading-3 mb-50">
                <span className="heading__subtitle">{app.eyebrow}</span>
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
                  {app.cta} <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-5">
              <div className="about__img">
                <ImagePlaceholder label={`APPLICATION IMAGE — ${app.name}`} minHeight={340} />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="features-list features-list-layout1 mt-30">
                <div className="feature-item feature-list-item">
                  <div className="feature__content">
                    <h4 className="feature__title">{app.outcome.title}</h4>
                    <p className="feature__desc">{app.outcome.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS USED — services layout 3 */}
      <Chapter index="02" label="Products Used" />
      <ServicesLayout3
        subtitle={`The grades ${app.name.toLowerCase()} makers use`}
        title="The material behind your tools."
        desc="Every grade quality-controlled through our own laboratory to the same standard, every time. Tell us your application and we will recommend the right product."
        ctaHref="/contact"
        ctaLabel={app.cta}
        items={serviceItems}
      />

      {/* WHY EID — dark parallax */}
      <Chapter index="03" label="Why EID" />
      <FeaturesListParallax
        subtitle="Why EID"
        title={app.why.title}
        desc={app.why.body}
        features={[
          { title: "Batch-to-batch consistency", desc: "Re-order and get the same material, tested on every production run." },
          { title: "Full range, one supplier", desc: "Everything this application needs from a single relationship and standard." },
          { title: "In-house QC laboratory", desc: "Size distribution, crystal strength, morphology, and coating coverage." },
          { title: "ISO 9001 & traceability", desc: "Certificate of analysis and retention samples available on request." },
        ]}
      />

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      {/* CTA */}
      <BannerCTA
        subtitle="Tell us your application"
        title={`${app.cta}.`}
        desc="Request a quote, order a sample, or ask a technical question. A real person replies within one business day."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />

      {/* CROSS-LINKS */}
      <CrossLinks
        groups={[
          { title: "Products for this application", links: productLinks },
          {
            title: "Quality & resources",
            links: [
              { label: "Quality, QC & ISO 9001", href: "/quality" },
              { label: "Resources & Guides", href: "/resources" },
              { label: "Datasheets", href: "/resources/datasheets" },
            ],
          },
          {
            title: "Other applications",
            links: applications
              .filter((o) => o.slug !== app.slug)
              .map((o) => ({ label: o.name, href: `/applications/${o.slug}` })),
          },
        ]}
      />
    </>
  );
}
