import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "../_components/ui";
import { BannerCTA } from "../_components/sections";
import { Chapter, Marquee, PRODUCT_KEYWORDS } from "../_components/award";
import { PageHeroBand } from "../_components/stone";

export const metadata: Metadata = {
  title: { absolute: "Blog | Industrial Diamond & Superabrasive Insights | EID Ltd" },
  description:
    "News, application notes, and technical insight on industrial diamond and CBN from EID Ltd — London-based superabrasive manufacturer.",
};

const posts = [
  { category: "Application Note", title: "Why batch-to-batch consistency is the real cost driver in diamond tooling" },
  { category: "Technical", title: "Reading a particle size distribution: D10, D50, D90 and span" },
  { category: "Materials", title: "When CBN beats diamond — a field guide for ferrous grinding" },
  { category: "Industry", title: "What dental bur makers actually need from a diamond supplier" },
  { category: "Process", title: "Inside our QC laboratory: how a batch gets approved to ship" },
  { category: "Materials", title: "CVD vs HPHT (MCD): choosing a single-crystal route" },
];

export default function BlogPage() {
  return (
    <>
      <PageHeroBand
        eyebrow="News, application notes & technical insight"
        title="The EID Blog"
        desc="News, application notes, and technical insight on industrial diamond and CBN from EID Ltd — London-based superabrasive manufacturer."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        imgLabel="TECHNICAL INSIGHT — Diamond & CBN"
        secondaryCta={{ label: "Resources & Guides", href: "/resources" }}
      />

      {/* FEATURED */}
      <Chapter index="01" label="Featured" />
      <section className="section">
        <div className="container">
          <div className="tech-card" style={{ padding: 0, overflow: "hidden", display: "grid", gridTemplateColumns: "1.1fr 1fr" }}>
            <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span className="chip">Application Note</span>
              <h2 style={{ fontSize: "clamp(22px,2.6vw,28px)", marginTop: 16 }}>
                Why batch-to-batch consistency is the real cost driver in diamond tooling
              </h2>
              <p style={{ marginTop: 14, color: "var(--eid-muted)", lineHeight: 1.6 }}>
                Procurement optimises for price per carat. The bigger number is what an inconsistent batch
                costs downstream — rejected product, recalibrated lines, lost trust.
              </p>
              <Link href="/contact" className="btn btn__secondary btn__link mt-20">
                <span>Read article</span> <i className="fa fa-long-arrow-right" />
              </Link>
            </div>
            <ImagePlaceholder label="FEATURED IMAGE" minHeight={300} />
          </div>
        </div>
      </section>

      {/* POST GRID */}
      <Chapter index="02" label="Latest Posts" gray />
      <section className="section bg-gray">
        <div className="container">
          <div className="grid-3">
            {posts.map((p) => (
              <article key={p.title} className="post-item">
                <div className="post__img">
                  <ImagePlaceholder label="POST THUMB" minHeight={170} />
                </div>
                <div className="post__body">
                  <span className="chip chip-neutral">{p.category}</span>
                  <h3 className="post__title">{p.title}</h3>
                  <Link href="/contact" className="btn btn__secondary btn__link">
                    <span>Read</span> <i className="fa fa-long-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="note-mono text-center mt-40">Coming soon — content hub launches with the site.</p>
        </div>
      </section>

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      <BannerCTA
        subtitle="Have a technical question?"
        title="Ask our team — we may write about it."
        desc="Send us your application question and we'll point you to the right grade, or cover it in a future guide."
        ctaLabel="Ask Our Team"
        ctaHref="/contact"
      />
    </>
  );
}
