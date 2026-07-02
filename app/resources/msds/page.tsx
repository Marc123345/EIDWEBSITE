import type { Metadata } from "next";
import { BannerCTA } from "../../_components/sections";
import { Chapter } from "../../_components/award";
import { CrystalHeroPage } from "../../_components/stone";
import Icon from "../../_components/Icon";

export const metadata: Metadata = {
  title: { absolute: "Diamond & CBN Safety Data Sheets (MSDS) | EID Ltd" },
  description:
    "Download material safety data sheets (MSDS) for EID's industrial diamond and CBN products. Handling, storage, and safety information.",
};

const msds = [
  "Natural Diamond (Grit & Micron)",
  "Synthetic Diamond (Metal Bond & Resin Bond)",
  "CBN (Cubic Boron Nitride)",
  "CVD Diamond (Single Crystal & Polycrystalline)",
  "MCD (Monocrystalline Diamond)",
  "PCD / PCBN",
  "Coated Diamond & CBN Products",
];

export default function MsdsPage() {
  return (
    <>
      <CrystalHeroPage
        eyebrow="Handling, storage & regulatory information"
        title="Material Safety Data Sheets (MSDS)"
        desc="Download material safety data sheets (MSDS) for EID's industrial diamond and CBN products — handling, storage, and safety information."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "MSDS" },
        ]}
        imgLabel="SAFETY DATA — MSDS"
        secondaryCta={{ label: "Datasheets", href: "/resources/datasheets" }}
      />

      <Chapter index="01" label="Safety Data" />
      <section className="section">
        <div className="container">
          <div className="heading mb-40">
            <span className="heading__subtitle">Downloads</span>
            <h2 className="heading__title">Safety data for all EID products.</h2>
            <p className="note-mono mt-20">Placeholder downloads — confirm available MSDS documents with Uri.</p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {msds.map((name) => (
              <div key={name} className="tech-card dl-row">
                <div className="dl-meta">
                  <Icon name="shield" />
                  <h3 style={{ fontSize: 16 }}>{name}</h3>
                </div>
                <span className="btn btn__secondary"><Icon name="download" /> PDF</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BannerCTA
        subtitle="Need a safety document not listed?"
        title="We'll send the right MSDS for your material."
        desc="Tell us the product and we'll provide the current safety data sheet."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
