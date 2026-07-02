import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { industries, getIndustry } from "@/lib/industries";
import { getProduct } from "@/lib/products";
import { CrossLinks, ImagePlaceholder } from "@/app/_components/ui";
import { ServicesLayout3, FeaturesListParallax, BannerCTA } from "@/app/_components/sections";
import { Chapter, Marquee, PRODUCT_KEYWORDS } from "@/app/_components/award";
import { CrystalHeroPage } from "@/app/_components/stone";
import type { IconName } from "@/app/_components/Icon";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) return {};
  return { title: { absolute: i.metaTitle }, description: i.metaDesc };
}

const familyIcon: Record<string, IconName> = {
  "Natural Diamond": "diamond",
  "Bonded Diamond Powders": "saw",
  CBN: "gauge",
  "Synthetic / Grown Diamond": "cube",
  "Finished Forms": "grid",
  Specialist: "flask",
};

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const [headline, ...bodyParas] = ind.intro;

  const serviceItems = ind.products
    .map((ip) => {
      const prod = getProduct(ip.product);
      if (!prod) return null;
      return {
        icon: familyIcon[prod.family] || "diamond",
        title: prod.name,
        desc: ip.note,
        href: `/products/${prod.slug}`,
      };
    })
    .filter(Boolean) as { icon: IconName; title: string; desc: string; href: string }[];

  const productLinks = serviceItems.map((s) => ({ label: s.title, href: s.href }));

  return (
    <>
      <CrystalHeroPage
        eyebrow={ind.eyebrow}
        title={ind.h1}
        desc={ind.metaDesc}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: ind.name },
        ]}
        imgLabel={`INDUSTRY — ${ind.name}`}
        primaryCta={{ label: ind.cta, href: "/contact" }}
        secondaryCta={{ label: "All Industries", href: "/industries" }}
      />

      {/* INTRO — about-2 geometric layout */}
      <Chapter index="01" label="Overview" />
      <section className="about about-2 pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-10 offset-xl-1">
              <div className="heading heading-3 mb-50">
                <span className="heading__subtitle">{ind.eyebrow}</span>
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
                  {ind.cta} <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-5">
              <div className="about__img">
                <ImagePlaceholder label={`INDUSTRY IMAGE — ${ind.name}`} minHeight={340} />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="features-list features-list-layout1 mt-30">
                <div className="feature-item feature-list-item">
                  <div className="feature__content">
                    <h4 className="feature__title">{ind.why.title}</h4>
                    <p className="feature__desc">{ind.why.body}</p>
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
        subtitle={`Products for ${ind.name.toLowerCase()}`}
        title="The material behind your tools."
        desc="Every grade quality-controlled through our own laboratory to the same standard, every time. Tell us your application and we'll recommend the right product."
        ctaHref="/contact"
        ctaLabel={ind.cta}
        items={serviceItems}
      />

      {/* WHY EID — dark parallax */}
      <Chapter index="03" label="Why EID" />
      <FeaturesListParallax
        subtitle="Why EID"
        title={ind.why.title}
        desc={ind.why.body}
        features={[
          { title: "Batch-to-batch consistency", desc: "Re-order and get the same material — tested on every production run." },
          { title: "Full range, one supplier", desc: "Everything this industry needs from a single relationship and standard." },
          { title: "In-house QC laboratory", desc: "Size distribution, crystal strength, morphology, and coating coverage." },
          { title: "ISO 9001 & traceability", desc: "Certificate of analysis and retention samples available on request." },
        ]}
      />

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      {/* CTA */}
      <BannerCTA
        subtitle="Tell us your application"
        title={`${ind.cta}.`}
        desc="Request a quote, order a sample, or ask a technical question. A real person responds within 24 hours."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />

      {/* CROSS-LINKS */}
      <CrossLinks
        groups={[
          { title: "Products for this industry", links: productLinks },
          {
            title: "Quality & resources",
            links: [
              { label: "Quality, QC & ISO 9001", href: "/quality" },
              { label: "Resources & Guides", href: "/resources" },
              { label: "Datasheets", href: "/resources/datasheets" },
            ],
          },
          {
            title: "Other industries",
            links: industries
              .filter((o) => o.slug !== ind.slug)
              .map((o) => ({ label: o.name, href: `/industries/${o.slug}` })),
          },
        ]}
      />
    </>
  );
}
