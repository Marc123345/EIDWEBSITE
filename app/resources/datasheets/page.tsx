import type { Metadata } from "next";
import { BannerCTA } from "../../_components/sections";
import { Chapter } from "../../_components/award";
import { PageHeroBand } from "../../_components/stone";
import Icon from "../../_components/Icon";

export const metadata: Metadata = {
  title: { absolute: "Diamond & CBN Product Datasheets | EID Ltd" },
  description:
    "Download technical datasheets for EID's full range of industrial diamond and CBN products. Specifications, grades, and sizing.",
};

const datasheets = [
  ["Natural Diamond Grit (Mesh)", "Graded mesh sizes, crystal types, coating options."],
  ["Natural Diamond Micron Powder", "Micron range, formats, packaging."],
  ["Metal Bond Diamond Powder", "Saw & wheel grades, coatings, sizing."],
  ["Resin Bond Diamond Powder", "Friability grades, mesh & micron."],
  ["CBN (Mesh & Micron)", "Crystal types, toughness, coatings."],
  ["CVD Single Crystal Diamond", "Orientation, sizes, quality grades."],
  ["CVD Polycrystalline Dressing Logs", "Log sizes, structure."],
  ["MCD Monocrystalline Diamond", "Shapes, orientations, grades."],
  ["PCD / PCBN Discs and Blanks", "Grain sizes, diameters, thicknesses."],
  ["Polycrystalline Diamond Micron Powder", "Sub-micron to 60 µm, formats."],
  ["Surface Enhancements & Coatings", "Nickel / copper / titanium, treatments."],
];

export default function DatasheetsPage() {
  return (
    <>
      <PageHeroBand
        eyebrow="Specifications, grades & sizing"
        title="Product Datasheets"
        desc="Download technical datasheets for EID's full range of industrial diamond and CBN products — specifications, grades, and sizing."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Datasheets" },
        ]}
        imgLabel="DATASHEETS — Technical Specs"
        secondaryCta={{ label: "MSDS", href: "/resources/msds" }}
      />

      <Chapter index="01" label="Datasheets" />
      <section className="section">
        <div className="container">
          <div className="heading mb-40">
            <span className="heading__subtitle">Downloads</span>
            <h2 className="heading__title">Technical specifications for every product.</h2>
            <p className="note-mono mt-20">Placeholder downloads — confirm available datasheets with Uri and upload PDFs.</p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {datasheets.map(([name, desc]) => (
              <div key={name} className="tech-card dl-row">
                <div className="dl-meta">
                  <Icon name="doc" />
                  <div>
                    <h3 style={{ fontSize: 16 }}>{name}</h3>
                    <p style={{ marginTop: 2 }}>{desc}</p>
                  </div>
                </div>
                <span className="btn btn__secondary"><Icon name="download" /> PDF</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BannerCTA
        subtitle="Need a spec not listed?"
        title="Ask us for the exact datasheet you need."
        desc="Tell us the product and grade and we'll send the current specification."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
