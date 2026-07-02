import {
  FeaturesRow,
  AboutGeometric,
  ServicesLayout3,
  FeaturesListParallax,
  RequestQuotePanel,
  Testimonials,
  BannerCTA,
} from "./_components/sections";
import {
  ChapterMarker,
  StatsBar,
  Marquee,
  BentoGallery,
  ProcessSteps,
} from "./_components/award";
import { CrystalHero } from "./_components/stone";
import type { IconName } from "./_components/Icon";
import { products } from "@/lib/products";

const heroSlides = [
  {
    eyebrow: "Industrial Diamond & CBN Manufacturer & Supplier · London, UK",
    title: "The full range of industrial diamonds. One manufacturer.",
    desc: "EID manufactures diamond grit, powder, and crystal for the world's tool makers — from natural and metal bond to CVD single crystal and CBN. In-house QC, ISO 9001, reliable delivery.",
  },
  {
    eyebrow: "We make it · we don't resell it",
    title: "Made, finished, and quality-controlled in-house.",
    desc: "Natural grit and powder produced in our own factory. CVD grown to your spec. Metal bond, resin bond, and CBN upgraded and QC'd through our facility to a customer-specific standard.",
  },
  {
    eyebrow: "Every batch, every time",
    title: "When you re-order, you get the same material.",
    desc: "Our in-house QC laboratory tests size distribution, crystal morphology, and coating integrity on every production run — so your tools stay consistent, batch after batch.",
  },
];

const services: { icon: IconName; title: string; desc: string; href: string }[] = [
  { icon: "diamond", title: "Natural Diamond", desc: "Grit and micron powder manufactured in-house for grinding, sawing, lapping, and polishing.", href: "/products/natural-grit" },
  { icon: "saw", title: "Metal & Resin Bond", desc: "Saw and wheel grades, friable grades, coated and QC-upgraded for sintered and bonded tools.", href: "/products/metal-bond" },
  { icon: "gauge", title: "CBN", desc: "The superabrasive for hardened and ferrous steels where diamond can't go.", href: "/products/cbn" },
  { icon: "cube", title: "CVD, MCD & PCD", desc: "Precision-grown crystal, monocrystalline, and finished PCD/PCBN forms for single-point and cutting tools.", href: "/products/cvd-single-crystal" },
];

export default function Home() {
  return (
    <>
      {/* HERO — The Stone: faceted diamond crystal + metrology HUD */}
      <CrystalHero
        slides={heroSlides}
        metaStats={[
          { value: "30+", label: "Countries served" },
          { value: "12", label: "Product lines" },
          { value: "ISO 9001", label: "Certified" },
        ]}
      />

      {/* STATS — editorial metric strip, count-up on view */}
      <StatsBar
        items={[
          { value: 30, suffix: "+", label: "Countries served" },
          { value: 12, label: "Product lines" },
          { value: 100, suffix: "%", label: "Batches QC-tested" },
          { value: 24, suffix: "hr", label: "Quote response" },
        ]}
      />

      {/* FEATURES ROW */}
      <FeaturesRow
        items={[
          { title: "We Manufacture", desc: "Natural grit and powder produced in our own factory — not resold.", href: "/about" },
          { title: "In-House QC Lab", desc: "Every production run tested for size, morphology, and coating integrity.", href: "/quality" },
          { title: "The Full Range", desc: "Diamond and CBN, grit to crystal, from one supplier and one standard.", href: "/products" },
          { title: "ISO 9001 Certified", desc: "Full traceability from raw material to shipped product.", href: "/quality" },
        ]}
      />

      {/* ABOUT — geometric image layout */}
      <div className="container">
        <ChapterMarker index="01" label="The Company" />
      </div>
      <AboutGeometric
        subtitle="London-based superabrasive manufacturer"
        title="One manufacturer. The full range. No compromises."
        text={[
          "EID manufactures and finishes industrial diamond and CBN — grit, powder, and crystal — for tool makers and precision-parts producers worldwide.",
          "We don't make finished tools. We make the material that goes into them, and we control the quality from raw material to shipped product.",
        ]}
        imgLabel="FACTORY / PRODUCTION FLOOR — London"
        features={[
          { title: "Quality", desc: "In-house QC on every batch builds the trust of long-term clients." },
          { title: "Consistency", desc: "Re-order and get the same material — not a close approximation." },
          { title: "Traceability", desc: "Every lot documented from raw material through QC to delivery." },
        ]}
      />

      {/* SERVICES LAYOUT 3 — product families */}
      <div className="container">
        <ChapterMarker index="02" label="The Range" />
      </div>
      <ServicesLayout3
        subtitle="The full range · one source"
        title="Every industrial diamond and CBN product."
        desc="From raw natural grit to precision-grown CVD crystal, surface-enhanced and quality-controlled in-house. Whatever your application, we supply the material."
        ctaHref="/products"
        ctaLabel="View All Products"
        items={services}
      />

      {/* FEATURES LIST — dark parallax */}
      <FeaturesListParallax
        subtitle="Why choose our material"
        title="Reliable, consistent, fully traceable superabrasives."
        desc="Tool performance depends on predictable crystal strength and size distribution. Our QC process is built to deliver exactly that, every order."
        features={[
          { title: "Quality control system", desc: "Particle size distribution, crystal strength, morphology, and coating coverage tested on every batch." },
          { title: "Batch-to-batch consistency", desc: "Tight D50 and span control so your tools cut the same way, order after order." },
          { title: "Full range, one supplier", desc: "Saw grade, wheel grade, micron, crystal, and coatings — one relationship, one standard." },
          { title: "ISO 9001 & traceability", desc: "Certificate of analysis and retention samples available for every lot." },
        ]}
      />

      {/* CAPABILITIES — bento montage */}
      <BentoGallery
        chapterIndex="03"
        chapterLabel="Capabilities"
        subtitle="Inside the operation"
        title="Manufacturing, growth, and QC — under one roof."
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
          <ChapterMarker index="04" label="Request a Quote" />
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
                  { title: "Tell us the spec", desc: "Product, grade, size, quantity, and destination country — as much or as little as you have." },
                  { title: "We qualify & quote", desc: "A technical specialist reviews your enquiry and responds within 24 hours, not with 'please send info.'" },
                  { title: "Sample & supply", desc: "Order a sample to validate, then scheduled or stock supply to your lead time." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <RequestQuotePanel
        panelTitle="Dedicated technical support and fast, qualified quotes."
        panelDesc="Tell us the product, grade, size, and country, and your enquiry reaches us ready to action — not as 'please send info.'"
        formTitle="Request a Quote"
        formDesc="Request a quote, order a sample, or ask a technical question. One form, a real person, a response within 24 hours."
        productOptions={products.map((p) => p.name)}
      />

      {/* TESTIMONIALS */}
      <div className="container">
        <ChapterMarker index="05" label="Clients" />
      </div>
      <Testimonials
        items={[
          { name: "Procurement Manager", role: "Diamond & CBN Tool Manufacturer · Germany", quote: "EID is our single source for natural diamond grit and metal bond. The consistency is excellent — we haven't had a rejected batch in over three years." },
          { name: "Technical Director", role: "Dental Instrument Manufacturer · Israel", quote: "We switched to EID for our CVD requirements because they grow to our exact specification. The quality and communication are outstanding." },
        ]}
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
        title="We'll get back to you within 24 hours."
        desc="Request a quote, order a sample, or ask a technical question — one form, and a real person responds."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
