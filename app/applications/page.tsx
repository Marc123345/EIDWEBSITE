import type { Metadata } from "next";
import { ServicesLayout3, FeaturesListParallax, BannerCTA } from "../_components/sections";
import { Chapter, StatsBar, Marquee, PRODUCT_KEYWORDS } from "../_components/award";
import { CrystalHeroPage } from "../_components/stone";
import type { IconName } from "../_components/Icon";
import { applications } from "@/lib/applications";

export const metadata: Metadata = {
  title: { absolute: "Applications | Diamond & CBN by the Work Your Tools Do | EID Ltd" },
  description:
    "EID supplies industrial diamond and CBN to tool makers across dental, semiconductor and advanced electronics, automotive and aerospace, tool and die, grinding and cutting, and polishing and lapping.",
};

const icons: Record<string, IconName> = {
  dental: "tooth",
  "semiconductor-electronics": "chip",
  "automotive-aerospace": "engine",
  "tool-and-die": "cube",
  "grinding-cutting-sawing-drilling": "saw",
  "polishing-lapping": "lens",
};

export default function ApplicationsOverview() {
  const items = applications.map((a) => ({
    icon: icons[a.slug] || "diamond",
    title: a.name,
    desc: a.cardDesc,
    href: `/applications/${a.slug}`,
  }));

  return (
    <>
      <CrystalHeroPage
        eyebrow="We supply the material · you build the tools"
        title="Diamond and CBN for the work your tools do"
        desc="EID supplies industrial diamond and CBN to tool makers across dental, semiconductor and advanced electronics, automotive and aerospace, tool and die, grinding and cutting, and polishing and lapping."
        crumbs={[{ label: "Home", href: "/" }, { label: "Applications" }]}
        imgLabel="TOOL MAKING — Applications"
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      <Chapter index="01" label="By Application" />
      <ServicesLayout3
        subtitle="By the job the tool has to do"
        title="Six application hubs, one material supplier behind them."
        desc="Our customers convert raw diamond and CBN into finished tools. Start from your application to see the exact grades EID supplies and why tool makers in your field choose us."
        ctaHref="/contact"
        ctaLabel="Request a Quote"
        items={items}
      />

      <StatsBar
        items={[
          { value: 6, label: "Application hubs" },
          { value: 12, label: "Product lines" },
          { value: 8, label: "Product groups" },
          { value: 100, suffix: "%", label: "Batches QC-tested" },
        ]}
      />

      <FeaturesListParallax
        chapterIndex="02"
        chapterLabel="The Common Thread"
        subtitle="One standard behind every hub"
        title="Consistency your production line can rely on."
        desc="Whatever the application, tool performance depends on predictable crystal strength and size distribution, and that is exactly what our QC process delivers."
        features={[
          { title: "We supply the tool maker", desc: "We supply manufacturers who build the tools that serve each application." },
          { title: "Matched to your process", desc: "Grades and support matched to the material you work and the finish you need." },
          { title: "One relationship", desc: "Every grade from one supplier, one quality standard, one delivery to reconcile." },
          { title: "Tested every batch", desc: "In-house QC and full traceability on every production run." },
        ]}
      />

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      <BannerCTA
        subtitle="Not sure which grade fits?"
        title="Tell us your application and we will recommend the right material."
        desc="A real person replies within one business day, with the grade, size, and lead time you need."
        ctaLabel="Ask Our Team"
        ctaHref="/contact"
      />
    </>
  );
}
