import {
  FeaturesRow,
  AboutGeometric,
  ServicesLayout3,
  FeaturesListParallax,
  RequestQuotePanel,
  BannerCTA,
} from "@/app/_components/sections";
import {
  ChapterMarker,
  StatsBar,
  Marquee,
  BentoGallery,
  ProcessSteps,
} from "@/app/_components/award";
import { CrystalHero } from "@/app/_components/stone";
import type { IconName } from "@/app/_components/Icon";
import { products, PRODUCT_FAMILIES, productsByFamily } from "@/lib/products";
import { applications } from "@/lib/applications";

const heroSlides = [
  {
    eyebrow: "Industrial Diamond & CBN · Manufacturer and Supplier · London, UK",
    title: "The full industrial diamond and CBN range, made and graded in-house.",
    desc: "EID manufactures diamond grit, powder, and single crystal for tool makers worldwide, plus CBN for the hardened and ferrous work diamond cannot do. Every grade is tested in our own laboratory, so the material you re-order matches the batch before it.",
  },
  {
    eyebrow: "We control production, not just supply",
    title: "The quality decision sits with us.",
    desc: "Natural grit and powder made and graded in our own factory. Bonded and CBN grades produced to order, then re-processed and QC-upgraded through our facility to your spec. CVD single crystal grown to your orientation through a dedicated growth partner and finished in-house.",
  },
  {
    eyebrow: "Every batch, every re-order",
    title: "When you order the same grade twice, you get the same grade twice.",
    desc: "Our in-house QC laboratory tests size distribution, crystal strength, morphology, and coating coverage on every production run, so your tools stay consistent, batch after batch.",
  },
];

// The eight locked product groups as home cards.
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

const groupCards = PRODUCT_FAMILIES.map((family) => {
  const items = productsByFamily(family);
  return {
    icon: familyIcon[family] || "diamond",
    title: family,
    desc: items.map((p) => p.name).join(" · "),
    href: `/products/${items[0].slug}`,
  };
});

// The six application hubs as home cards.
const hubIcon: Record<string, IconName> = {
  dental: "tooth",
  "semiconductor-electronics": "chip",
  "automotive-aerospace": "engine",
  "tool-and-die": "cube",
  "grinding-cutting-sawing-drilling": "saw",
  "polishing-lapping": "lens",
};

const hubCards = applications.map((a) => ({
  icon: hubIcon[a.slug] || "diamond",
  title: a.name,
  desc: a.cardDesc,
  href: `/applications/${a.slug}`,
}));

export default function Home() {
  return (
    <>
      {/* HERO — The Stone: faceted diamond crystal + metrology HUD */}
      <CrystalHero
        slides={heroSlides}
        metaStats={[
          { value: "50+", label: "Years' experience" },
          { value: "8", label: "Product groups" },
          { value: "ISO 9001", label: "Certified" },
        ]}
      />

      {/* TRUST BAR — verified proof points, count-up on view */}
      <StatsBar
        items={[
          { value: 50, suffix: "+", label: "Years' experience" },
          { value: 12, label: "Product lines" },
          { value: 100, suffix: "%", label: "Batches QC-tested" },
          { value: 1, suffix: " day", label: "Quote response" },
        ]}
      />

      {/* FEATURES ROW — honest graduated production model */}
      <FeaturesRow
        items={[
          { title: "We Manufacture", desc: "Natural grit and powder produced and graded in our own factory.", href: "/about" },
          { title: "In-House QC Lab", desc: "Every production run tested for size, strength, morphology, and coating.", href: "/quality" },
          { title: "The Full Range", desc: "Diamond and CBN, grit to crystal, from one supplier and one standard.", href: "/products" },
          { title: "ISO 9001 Certified", desc: "Full traceability from raw material to shipped lot.", href: "/quality" },
        ]}
      />

      {/* THE PROBLEM — names the buyer's real cost */}
      <div className="container">
        <ChapterMarker index="01" label="The Company" />
      </div>
      <AboutGeometric
        subtitle="Over 50 years making the material inside the world's diamond tools"
        title="One manufacturer covers the range. Every grade passes the same QC."
        text={[
          "When your diamond varies between batches, your tools vary between batches, and your customers are the ones who notice. Sourcing across several suppliers means holding several specifications, several lead times, and several definitions of acceptable.",
          "EID takes that variable out of your process. For more than fifty years we have supplied the full diamond and CBN range to tool makers worldwide. You qualify the material once and get it again the same way.",
        ]}
        imgLabel="FACTORY / PRODUCTION FLOOR — London"
        features={[
          { title: "We control production", desc: "The quality decision sits with us, which is the difference between a manufacturer and a distributor." },
          { title: "The same material, every re-order", desc: "Tested on every run so this batch behaves like the last one your line was tuned to." },
          { title: "Traceability", desc: "Every lot documented from raw material through QC to delivery." },
        ]}
      />

      {/* PRODUCT RANGE — the eight locked groups */}
      <div className="container">
        <ChapterMarker index="02" label="The Range" />
      </div>
      <ServicesLayout3
        subtitle="Every industrial diamond and CBN product, from one source"
        title="Eight product groups. Twelve product lines."
        desc="Natural grit and powder made in our own factory, bonded and CBN grades re-processed and QC-upgraded to your spec, and single crystal grown to your exact orientation."
        ctaHref="/products"
        ctaLabel="Browse the Full Range"
        items={groupCards}
      />

      {/* APPLICATIONS — the six hubs */}
      <div className="container">
        <ChapterMarker index="03" label="Applications" />
      </div>
      <ServicesLayout3
        subtitle="Diamond and CBN for the work your tools do"
        title="Six application hubs, one material supplier."
        desc="We supply the material. You build the tools that serve these applications. Start from your application to reach the exact grades that serve it."
        ctaHref="/applications"
        ctaLabel="View All Applications"
        items={hubCards}
      />

      {/* WHY EID — dark parallax features list */}
      <FeaturesListParallax
        subtitle="Why EID"
        title="Consistency is a process, and ours runs on measurement."
        desc="Each batch of diamond and CBN is tested in our QC laboratory before it ships. We do not sample and assume. We test the run and record the result."
        features={[
          { title: "Particle size distribution", desc: "Graded and verified for tight D50 and span, with outliers controlled." },
          { title: "Crystal strength & morphology", desc: "Confirmed to perform as expected in your bond system." },
          { title: "Coating weight & coverage", desc: "Every coated batch checked for target weight and uniform coverage." },
          { title: "ISO 9001 & traceability", desc: "Certificate of analysis and retention samples available for every lot." },
        ]}
      />

      {/* CAPABILITIES — bento montage */}
      <BentoGallery
        chapterIndex="04"
        chapterLabel="Capabilities"
        subtitle="Inside the operation"
        title="Manufacturing, growth partnership, and QC."
        items={[
          { label: "FACTORY FLOOR — London", caption: "In-house manufacturing", wide: true },
          { label: "QC LABORATORY", caption: "Every batch tested", href: "/quality" },
          { label: "CVD CRYSTAL GROWTH", caption: "Grown to your spec", href: "/products/cvd-single-crystal" },
          { label: "DIAMOND GRIT & POWDER", caption: "Natural grit & micron", href: "/products/natural-grit" },
          { label: "CBN SUPERABRASIVE", caption: "For hardened steels", href: "/products/cbn" },
        ]}
      />

      {/* REQUEST QUOTE — numbered process lead-in + form panel */}
      <section className="pt-110 pb-40">
        <div className="container">
          <ChapterMarker index="05" label="Request a Quote" />
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="heading heading-3 mb-40">
                <h2 className="heading__title">A qualified quote in three steps.</h2>
                <p className="heading__desc">
                  No account, no minimum enquiry. Tell us what you need and a
                  technical specialist takes it from there.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <ProcessSteps
                steps={[
                  { title: "Tell us the spec", desc: "Product, grade, size, quantity, and destination country, as much or as little as you have." },
                  { title: "We qualify & quote", desc: "A technical specialist reviews your enquiry and replies within one business day, not with a request for more info." },
                  { title: "Sample & supply", desc: "Order a sample to validate, then scheduled or stock supply to your lead time." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <RequestQuotePanel
        panelTitle="Tell us the grade you need. A real person replies within one business day."
        panelDesc="Request a quote, order a sample, or ask a technical question. One form, routed to someone who works with the material."
        formTitle="Request a Quote"
        formDesc="Request a quote, order a sample, or ask a technical question. One form, a real person, a reply within one business day."
        productOptions={products.map((p) => p.name)}
      />

      {/* CLIENTS + KEYWORDS — dual marquee */}
      <Marquee
        logos={8}
        keywords={[
          "ISO 9001",
          "Natural Diamond",
          "CBN",
          "CVD Single Crystal",
          "Metal Bond",
          "Resin Bond",
          "MCD",
          "PCD / PCBN",
          "Micron Powder",
          "Made in London",
        ]}
      />

      {/* BANNER CTA */}
      <BannerCTA
        subtitle="Tell us what you need"
        title="A real person replies within one business day."
        desc="Request a quote, order a sample, or ask a technical question. One form, routed to someone who works with the material."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
