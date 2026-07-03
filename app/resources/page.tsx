import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "../_components/ui";
import { BannerCTA } from "../_components/sections";
import { Chapter, Marquee, PRODUCT_KEYWORDS } from "../_components/award";
import { PageHeroBand } from "../_components/stone";
import Icon from "../_components/Icon";

export const metadata: Metadata = {
  title: { absolute: "Diamond & CBN Guides | Technical Resources | EID Ltd" },
  description:
    "Technical guides, application notes, and industry knowledge from EID — diamond vs CBN, grit size charts, bond comparison, and more.",
};

const guides = [
  { title: "Diamond vs CBN: which superabrasive for your application?", desc: "When to use each, with application examples and material compatibility charts." },
  { title: "Diamond grit & micron size chart (mesh-to-micron)", desc: "A reference chart mapping FEPA, US mesh, and micron sizes." },
  { title: "Metal bond vs resin bond vs vitrified", desc: "How the bond you choose determines how a tool cuts, lasts, and what it works on." },
  { title: "How size distribution affects tool performance", desc: "D50, D10/D90, and span — what the numbers mean and why they matter." },
  { title: "CVD, MCD, and natural diamond compared", desc: "Three ways to get a single crystal — when each is the right choice." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeroBand
        eyebrow="Written by EID's technical team"
        title="Resources & Guides"
        desc="Technical guides, application notes, and industry knowledge from EID — diamond vs CBN, grit size charts, bond comparison, and more."
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        imgLabel="TECHNICAL LIBRARY — Guides & Charts"
        secondaryCta={{ label: "Datasheets", href: "/resources/datasheets" }}
      />

      {/* GUIDES — blog-grid style cards */}
      <Chapter index="01" label="Guides" />
      <section className="section">
        <div className="container">
          <div className="heading text-center mb-50">
            <span className="heading__subtitle">Technical knowledge</span>
            <h2 className="heading__title">Guides, charts, and application notes.</h2>
          </div>
          <div className="grid-3">
            {guides.map((g) => (
              <article key={g.title} className="post-item">
                <div className="post__img">
                  <ImagePlaceholder label="GUIDE" minHeight={170} />
                </div>
                <div className="post__body">
                  <span className="chip">Guide</span>
                  <h3 className="post__title">{g.title}</h3>
                  <p className="post__desc">{g.desc}</p>
                  <Link href="/contact" className="btn btn__secondary btn__link">
                    <span>Read</span> <i className="fa fa-long-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
            <article className="post-item" style={{ display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--eid-surface-container)", padding: 28 }}>
              <Icon name="diamond" style={{ color: "var(--eid-blue)", fontSize: 26 }} />
              <h3 className="post__title mt-20">Have a technical question?</h3>
              <p className="post__desc">Our team answers application and specification questions directly.</p>
              <Link href="/contact" className="btn btn__primary mt-20">
                Contact us <i className="fa fa-long-arrow-right" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* DATASHEETS / MSDS */}
      <Chapter index="02" label="Downloads" gray />
      <section className="section bg-gray">
        <div className="container">
          <div className="grid-2">
            <Link href="/resources/datasheets" className="tech-card" style={{ display: "block" }}>
              <div className="tech-card__meta">Reference</div>
              <h3>Datasheets</h3>
              <p>Technical specification downloads for every product — grades, sizes, crystal types, coatings.</p>
              <span className="btn btn__secondary btn__link mt-20"><span>Browse datasheets</span> <i className="fa fa-long-arrow-right" /></span>
            </Link>
            <Link href="/resources/msds" className="tech-card" style={{ display: "block" }}>
              <div className="tech-card__meta">Safety</div>
              <h3>MSDS</h3>
              <p>Material safety data sheets covering handling, storage, disposal, and regulatory information.</p>
              <span className="btn btn__secondary btn__link mt-20"><span>Browse MSDS</span> <i className="fa fa-long-arrow-right" /></span>
            </Link>
          </div>
        </div>
      </section>

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      <BannerCTA
        subtitle="Can't find what you need?"
        title="Ask our technical team."
        desc="We're happy to advise on grade selection, bond systems, and specification for your application."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
