import type { Metadata } from "next";
import { ServicesLayout3, FeaturesListParallax, BannerCTA } from "../_components/sections";
import { HeroPage, Chapter, StatsBar, Marquee, PRODUCT_KEYWORDS } from "../_components/award";
import type { IconName } from "../_components/Icon";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: { absolute: "Industries We Serve | Diamond & CBN for Tool Makers | EID Ltd" },
  description:
    "EID supplies industrial diamond and CBN to tool makers in dental, optics & precision, stone & glass, automotive & aerospace, and electronics & semiconductors.",
};

const icons: Record<string, IconName> = {
  dental: "tooth",
  "optics-precision": "lens",
  "stone-glass-construction": "industry",
  "automotive-aerospace": "engine",
  "electronics-semiconductors": "chip",
};

export default function IndustriesOverview() {
  const items = industries.map((i) => ({
    icon: icons[i.slug] || "diamond",
    title: i.name,
    desc: i.cardDesc,
    href: `/industries/${i.slug}`,
  }));

  return (
    <>
      <HeroPage
        eyebrow="We supply the material · you build the tools"
        title="Industries We Serve"
        desc="EID supplies industrial diamond and CBN to tool makers in dental, optics & precision, stone & glass, automotive & aerospace, and electronics & semiconductors."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        imgLabel="TOOL MAKING — Applications"
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      <Chapter index="01" label="By Industry" />
      <ServicesLayout3
        subtitle="By application"
        title="One material supplier behind five demanding industries."
        desc="Our customers convert raw diamond and CBN into finished tools. Find your industry to see the products EID supplies and why tool makers in your field choose us."
        ctaHref="/contact"
        ctaLabel="Request a Quote"
        items={items}
      />

      <StatsBar
        items={[
          { value: 5, label: "Industries served" },
          { value: 12, label: "Product lines" },
          { value: 30, suffix: "+", label: "Countries served" },
          { value: 100, suffix: "%", label: "Batches QC-tested" },
        ]}
      />

      <Chapter index="02" label="The Common Thread" />
      <FeaturesListParallax
        subtitle="The common thread"
        title="Consistency your production line can rely on."
        desc="Whatever the industry, tool performance depends on predictable crystal strength and size distribution — and that's exactly what our QC process delivers."
        features={[
          { title: "Sell to the tool maker", desc: "We supply manufacturers who build the tools that shape each industry." },
          { title: "Speak your end-market", desc: "Grades and support matched to dental, optics, automotive, and more." },
          { title: "One relationship", desc: "Every grade from one supplier, one quality standard, one delivery." },
          { title: "Tested every batch", desc: "In-house QC and full traceability on every production run." },
        ]}
      />

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      <BannerCTA
        subtitle="Not sure which grade fits?"
        title="Tell us your application — we'll recommend the right material."
        desc="A real person responds within 24 hours, with the grade, size, and lead time you need."
        ctaLabel="Ask Our Team"
        ctaHref="/contact"
      />
    </>
  );
}
