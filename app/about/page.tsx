import type { Metadata } from "next";
import {
  AboutGeometric,
  FeaturesRow,
  FeaturesListParallax,
  Testimonials,
  BannerCTA,
} from "../_components/sections";
import { Chapter, StatsBar, Marquee, PRODUCT_KEYWORDS } from "../_components/award";
import { CrystalHeroPage } from "../_components/stone";

export const metadata: Metadata = {
  title: { absolute: "About EID | Industrial Diamond Manufacturer, London | EID Ltd" },
  description:
    "EID Ltd manufactures and quality-controls the full range of industrial diamond and CBN from London, supplying tool makers worldwide. In-house production, ISO 9001.",
};

export default function AboutPage() {
  return (
    <>
      <CrystalHeroPage
        eyebrow="One manufacturer · the full range · no compromises"
        title="About EID — Industrial Diamond Manufacturer"
        desc="EID Ltd manufactures and quality-controls the full range of industrial diamond and CBN from London, supplying tool makers worldwide."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        imgLabel="FACTORY / PRODUCTION FLOOR — London"
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      <Chapter index="01" label="The Company" />
      <AboutGeometric
        subtitle="London-based superabrasive manufacturer"
        title="We make the material that goes into your tools."
        text={[
          "EID Ltd is a London-based manufacturer and finisher of industrial diamond and superabrasive materials, supplying the full range of diamond and CBN to tool makers worldwide.",
          "We control the production. We control the quality. And because we offer the entire range from one facility, our customers manage one relationship instead of five.",
        ]}
        imgLabel="FACTORY / PRODUCTION FLOOR — London"
        features={[
          { title: "Manufacturer, not distributor", desc: "We make and finish the material — we don't resell someone else's." },
          { title: "Full range, one facility", desc: "Grit, powder, and crystal, all quality-controlled in-house." },
          { title: "Worldwide supply", desc: "Customers across Europe, the Middle East, Asia, and beyond." },
        ]}
      />

      <StatsBar
        items={[
          { value: 30, suffix: "+", label: "Countries served" },
          { value: 12, label: "Product lines" },
          { value: 100, suffix: "%", label: "Batches QC-tested" },
          { value: 24, suffix: "hr", label: "Quote response" },
        ]}
      />

      <Chapter index="02" label="The Range" />
      <FeaturesRow
        items={[
          { title: "Natural Grit & Powder", desc: "Manufactured entirely in-house — from raw material to finished, graded product.", href: "/products/natural-grit" },
          { title: "CVD Single Crystal", desc: "Grown with a dedicated partner to EID's exact specification and orientation.", href: "/products/cvd-single-crystal" },
          { title: "Bonded & CBN", desc: "Produced to order and QC-upgraded through our facility to your spec.", href: "/products/metal-bond" },
          { title: "Surface Enhancements", desc: "Nickel, copper, and titanium coatings plus polish and etch treatments.", href: "/products/surface-enhancements" },
        ]}
      />

      <Chapter index="03" label="Quality" />
      <FeaturesListParallax
        subtitle="Quality is the product"
        title="When you re-order, you get the same material."
        desc="Our in-house QC laboratory tests every production run for particle size distribution, crystal morphology, strength, and coating integrity. ISO 9001 certified."
        features={[
          { title: "In-house QC laboratory", desc: "The backbone of everything we ship — not an afterthought." },
          { title: "Tested every batch", desc: "Size distribution, crystal strength, morphology, coating coverage." },
          { title: "Full traceability", desc: "Documented from raw material through QC to delivery." },
          { title: "ISO 9001 certified", desc: "Covering production, QC, and the full supply chain." },
        ]}
      />

      <Chapter index="04" label="Clients" />
      <Testimonials
        items={[
          { name: "Procurement Manager", role: "Diamond & CBN Tool Manufacturer · Germany", quote: "EID is our single source for natural diamond grit and metal bond. The consistency is excellent — we haven't had a rejected batch in over three years." },
          { name: "Technical Director", role: "Dental Instrument Manufacturer · Israel", quote: "We switched to EID for our CVD requirements because they grow to our exact specification. The quality and communication are outstanding." },
        ]}
      />

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      <BannerCTA
        subtitle="Trusted by tool makers across continents"
        title="Let's talk about what you manufacture."
        desc="Request a quote, order a sample, or ask a technical question. A real person responds within 24 hours."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
