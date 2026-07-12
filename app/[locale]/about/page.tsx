import type { Metadata } from "next";
import Link from "next/link";
import {
  AboutGeometric,
  FeaturesRow,
  FeaturesListParallax,
  BannerCTA,
} from "@/app/_components/sections";
import { Chapter, StatsBar, Marquee, PRODUCT_KEYWORDS } from "@/app/_components/award";
import { CrystalHeroPage } from "@/app/_components/stone";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About EID | Industrial Diamond Manufacturer, London | EID Ltd" },
  description:
    "EID has manufactured and quality-controlled the full industrial diamond and CBN range from London for over 50 years, supplying tool makers worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <CrystalHeroPage
        eyebrow="Over 50 years · the full range · made and graded in-house"
        title="About EID — Industrial Diamond Manufacturer"
        desc="EID has manufactured and quality-controlled the full industrial diamond and CBN range from London for over 50 years, supplying tool makers worldwide."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        imgLabel="FACTORY / PRODUCTION FLOOR — London"
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      <Chapter index="01" label="The Company" />
      <AboutGeometric
        subtitle="London-based superabrasive manufacturer"
        title="Over 50 years making the material that goes into the world's diamond tools."
        text={[
          "EID Ltd is a London-based manufacturer and finisher of industrial diamond and superabrasive materials. For more than fifty years we have supplied the full diamond and CBN range, meaning grit, powder, and crystal, to tool manufacturers and precision-parts producers worldwide.",
          "We do not make finished tools. We make the material inside them. Half a century of doing this for the same kinds of customers is why they keep coming back, and why the material is consistent enough to build a production line around.",
          "That track record is also what separates us from a distributor. We control the production and the quality decision, and we cover the whole range from one facility, so our customers manage one relationship instead of five.",
        ]}
        imgLabel="FACTORY / PRODUCTION FLOOR — London"
        features={[
          { title: "Manufacturer, not distributor", desc: "We control the production and the quality decision. The specification and the QC pass are ours." },
          { title: "Full range, one facility", desc: "Grit, powder, and crystal, all quality-controlled in-house." },
          { title: "Over 50 years", desc: "Half a century supplying the same kinds of tool makers, order after order." },
        ]}
      />

      <StatsBar
        items={[
          { value: 50, suffix: "+", label: "Years' experience" },
          { value: 8, label: "Product groups" },
          { value: 12, label: "Product lines" },
          { value: 100, suffix: "%", label: "Batches QC-tested" },
        ]}
      />

      {/* HOW WE MAKE IT — the honest, graduated production model */}
      <Chapter index="02" label="How We Make It" />
      <FeaturesRow
        items={[
          { title: "Natural grit & powder", desc: "Manufactured entirely in-house, from raw material through crushing, grading, and final QC.", href: "/products/natural-grit" },
          { title: "CVD single crystal", desc: "Grown to EID's exact specification and orientation through a dedicated growth partner, finished and inspected by us.", href: "/products/cvd-single-crystal" },
          { title: "Bonded & CBN", desc: "Produced to order, then re-processed and QC-upgraded through our facility to your spec.", href: "/products/metal-bond" },
          { title: "Coating in-house", desc: "Nickel, copper, and titanium coatings applied in-house rather than sourced from a second vendor.", href: "/products/metal-bond" },
        ]}
      />

      <FeaturesListParallax
        chapterIndex="03"
        chapterLabel="Quality"
        subtitle="Consistency, measured on every run"
        title="When you re-order a grade, you get the grade you qualified."
        desc="Our QC laboratory tests every production run for particle size distribution, crystal strength, morphology, and coating coverage. ISO 9001 certified, with a certificate of analysis available for each lot."
        features={[
          { title: "In-house QC laboratory", desc: "The backbone of everything we ship, not an afterthought." },
          { title: "Tested every batch", desc: "Size distribution, crystal strength, morphology, coating coverage." },
          { title: "Full traceability", desc: "Documented from raw material through QC to delivery." },
          { title: "ISO 9001 certified", desc: "Covering production, QC, and the full supply chain." },
        ]}
      />

      {/* WHO WE SERVE — real buyer types and regions, no unverified figures */}
      <Chapter index="04" label="Who We Serve" gray />
      <section className="section bg-gray">
        <div className="container">
          <div className="heading mb-30">
            <span className="heading__subtitle">Trusted by tool makers across industries and continents</span>
            <h2 className="heading__title">We supply the manufacturers who convert diamond and CBN into finished tools.</h2>
          </div>
          <p className="prose" style={{ maxWidth: 860 }}>
            Our customers include diamond and CBN grinding and dressing tool makers, dental bur and rotary
            instrument producers, ultra-precision tool makers for optics and watch components, and
            flexible-abrasive manufacturers for glass and stone. We supply them across Europe, the Middle East,
            and Asia, with the material behind dental, optics and precision, automotive and aerospace, tool and
            die, stone and glass, and electronics applications.
          </p>
          <Link href="/contact" className="btn btn__primary mt-20">
            Contact Us <i className="fa fa-long-arrow-right" />
          </Link>
        </div>
      </section>

      {/* COMPANY DETAILS — reinforce that EID is a physical manufacturer */}
      <section className="section">
        <div className="container">
          <div className="heading mb-20">
            <span className="heading__subtitle">Company details</span>
            <h2 className="heading__title">{site.name}</h2>
          </div>
          <p className="prose">
            {site.address}
            <br />
            Tel: {site.phone} · Fax: {site.fax} ·{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      <BannerCTA
        subtitle="Trusted by tool makers across continents"
        title="Let's talk about what you manufacture."
        desc="Request a quote, order a sample, or ask a technical question. A real person replies within one business day."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
