import type { Metadata } from "next";
import {
  AboutGeometric,
  ServicesLayout3,
  FeaturesListParallax,
  BannerCTA,
} from "../_components/sections";
import { Chapter, StatsBar, Marquee, PRODUCT_KEYWORDS } from "../_components/award";
import { CrystalHeroPage } from "../_components/stone";
import type { IconName } from "../_components/Icon";

export const metadata: Metadata = {
  title: { absolute: "Quality Control & ISO 9001 | Industrial Diamond QC | EID Ltd" },
  description:
    "EID's in-house QC laboratory tests every batch of diamond and CBN for size distribution, crystal strength, morphology, and coating integrity. ISO 9001 certified.",
};

const tests: { icon: IconName; title: string; desc: string; href: string }[] = [
  { icon: "gauge", title: "Particle Size Distribution", desc: "Graded and verified for tight D50, D10 and D90, and span, with outliers controlled. This keeps a grade cutting and finishing the same way order to order.", href: "/contact" },
  { icon: "shield", title: "Crystal Strength (Friability)", desc: "Tested so the diamond or CBN performs as expected in your bond system rather than breaking down too fast or not enough.", href: "/contact" },
  { icon: "diamond", title: "Morphology & Shape", desc: "Inspected to confirm the blocky, semi-blocky, or irregular form matches the grade specification.", href: "/contact" },
  { icon: "layers", title: "Coating Weight & Coverage", desc: "Every coated batch checked for target weight percentage and uniform surface coverage.", href: "/contact" },
  { icon: "grid", title: "Traceability", desc: "Every lot documented from raw material through production, QC, and shipping, with full traceability available on request.", href: "/contact" },
];

export default function QualityPage() {
  return (
    <>
      <CrystalHeroPage
        eyebrow="In-house QC · ISO 9001 · full traceability"
        title="Quality Control & ISO 9001"
        desc="Our in-house QC laboratory tests every batch of diamond and CBN for size distribution, crystal strength, morphology, and coating integrity. ISO 9001 certified."
        crumbs={[{ label: "Home", href: "/" }, { label: "Quality" }]}
        imgLabel="QC LABORATORY — particle sizing & microscopy"
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      <Chapter index="01" label="QC Philosophy" />
      <AboutGeometric
        subtitle="Quality is the product"
        title="We don't sample and hope. We test and confirm."
        text={[
          "Quality control is built into every stage of production, from raw material selection through grading, coating, and final inspection. Our in-house QC laboratory is the backbone of everything we sell.",
          "When a customer re-orders, they expect the same material. Our job is to make sure they get it.",
        ]}
        imgLabel="QC LABORATORY — particle sizing & microscopy"
        features={[
          { title: "ISO 9001 certified", desc: "Covering production, QC, and the full supply chain." },
          { title: "Certificate of analysis", desc: "Issued with every shipment on request, per lot." },
          { title: "Retention samples", desc: "Kept for every batch for retrospective testing." },
        ]}
      />

      <StatsBar
        items={[
          { value: 5, label: "QC process steps" },
          { value: 100, suffix: "%", label: "Batches tested" },
          { value: 12, label: "Product lines" },
          { value: 50, suffix: "+", label: "Years' experience" },
        ]}
      />

      <Chapter index="02" label="What We Test" />
      <ServicesLayout3
        subtitle="What we test on every batch"
        title="What we test, every production run."
        desc="Tool performance depends on predictable crystal strength and size distribution. Every lot is documented and traceable from raw material through QC to delivery."
        ctaHref="/contact"
        ctaLabel="Request a Quote with QC Spec"
        items={tests}
      />

      <FeaturesListParallax
        chapterIndex="03"
        chapterLabel="QC Process"
        subtitle="Our QC process, step by step"
        title="How a batch moves through our laboratory."
        desc="A structured process from incoming inspection to shipped product, with documentation at every step. This is the demonstrate-don't-badge detail no direct competitor offers."
        features={[
          { title: "01 · Incoming inspection", desc: "Raw materials tested on arrival against their incoming specification before anything enters production." },
          { title: "02 · In-process control", desc: "Production parameters monitored and recorded throughout grading, coating, and finishing." },
          { title: "03 · Final QC", desc: "Every finished batch sampled and tested, then compared against your specification and our internal standards." },
          { title: "04 · Certificate of analysis", desc: "Issued with any shipment on request, documenting the test results for that specific lot." },
          { title: "05 · Retention samples", desc: "A sample from every batch is kept, so any later question can be checked against the exact material that shipped." },
        ]}
      />

      {/* MESH & MICRON QC + ISO 9001 */}
      <Chapter index="04" label="Mesh, Micron & ISO 9001" gray />
      <section className="section bg-gray">
        <div className="container">
          <div className="grid-2">
            <div className="tech-card">
              <div className="tech-card__meta">Mesh & micron QC</div>
              <h3>Grading differs by form, so testing does too.</h3>
              <p style={{ fontSize: 16 }}>
                Mesh QC covers how we grade and verify grit sizing and crystal shape. Micron QC covers
                particle-size-distribution measurement and the D-value control that fine polishing depends on.
                Each product page states the checks that matter for that grade.
              </p>
            </div>
            <div className="tech-card">
              <div className="tech-card__meta">ISO 9001 certified</div>
              <h3>A documented, audited, repeatable process.</h3>
              <p style={{ fontSize: 16 }}>
                Our quality management system is ISO 9001 certified, covering the full process from incoming raw
                material inspection through manufacturing, testing, packaging, and delivery. That is what stands
                behind every certificate of analysis we issue.
              </p>
              <p className="note-mono mt-20">Certificate number and validity date to be confirmed with Uri; display the scanned certificate here.</p>
            </div>
          </div>
        </div>
      </section>

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      <BannerCTA
        subtitle="Specify your tolerances"
        title="Request a quote with your QC specification."
        desc="Send us your D50, span, friability, and coating requirements, and we'll match them and confirm on every lot."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
