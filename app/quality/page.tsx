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
  { icon: "gauge", title: "Particle Size Distribution", desc: "Graded and verified to ensure tight D50, D10/D90, and span values. No outliers.", href: "/contact" },
  { icon: "shield", title: "Crystal Strength", desc: "Friability index tested to confirm performance in your bond system.", href: "/contact" },
  { icon: "diamond", title: "Morphology & Shape", desc: "Inspected to verify blocky, semi-blocky, or irregular form matches the grade.", href: "/contact" },
  { icon: "layers", title: "Coating Weight & Coverage", desc: "Every coated batch checked for target weight and uniform surface coverage.", href: "/contact" },
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
          "Quality control is built into every stage of production — from raw material selection through grading, coating, and final inspection. Our in-house QC laboratory is the backbone of everything we sell.",
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
          { value: 4, label: "Checks per run" },
          { value: 100, suffix: "%", label: "Batches tested" },
          { value: 12, label: "Product lines" },
          { value: 30, suffix: "+", label: "Countries served" },
        ]}
      />

      <Chapter index="02" label="What We Test" />
      <ServicesLayout3
        subtitle="What we test on every batch"
        title="Four checks, every production run."
        desc="Tool performance depends on predictable crystal strength and size distribution. Every lot is documented and traceable from raw material through QC to delivery."
        ctaHref="/contact"
        ctaLabel="Request a Quote with QC Spec"
        items={tests}
      />

      <Chapter index="03" label="QC Process" />
      <FeaturesListParallax
        subtitle="Our QC process"
        title="How a batch moves through our laboratory."
        desc="A structured process from incoming inspection to shipped product, with documentation at every step."
        features={[
          { title: "01 — Incoming inspection", desc: "Raw materials tested on arrival against incoming specification." },
          { title: "02 — In-process control", desc: "Production parameters monitored and recorded throughout manufacturing." },
          { title: "03 — Final QC", desc: "Every finished batch sampled and tested against customer and internal specs." },
          { title: "04 — Certificate & retention", desc: "Certificate of analysis issued and retention samples kept per lot." },
        ]}
      />

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      <BannerCTA
        subtitle="Specify your tolerances"
        title="Request a quote with your QC specification."
        desc="Send us your D50, span, friability, and coating requirements — we'll match them and confirm on every lot."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
