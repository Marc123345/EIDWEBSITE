import type { Metadata } from "next";
import { BannerCTA } from "@/app/_components/sections";
import { Chapter } from "@/app/_components/award";
import { CrystalHeroPage } from "@/app/_components/stone";
import Icon from "@/app/_components/Icon";

export const metadata: Metadata = {
  title: { absolute: "Diamond & CBN Product Datasheets | EID Ltd" },
  description:
    "Download technical datasheets for EID's full diamond and CBN range: grades, sizes, crystal types, coatings, and packaging. Ungated, free to download.",
};

// Grouped by the eight locked product groups so the list mirrors the catalogue.
const groups: { group: string; sheets: [string, string][] }[] = [
  {
    group: "Natural Diamond Grit & Powder",
    sheets: [
      ["Natural Diamond Grit (Mesh)", "Graded mesh sizes for grinding, sawing, and dressing."],
      ["Natural Diamond Micron Powder", "Fine powders for lapping and polishing."],
    ],
  },
  {
    group: "Metal Bond Diamond",
    sheets: [["Metal Bond Diamond Powder", "Saw and wheel grades, mesh and micron, coating options."]],
  },
  {
    group: "Resin Bond Diamond",
    sheets: [["Resin Bond Diamond Powder", "Friable grades, mesh and micron, coating options."]],
  },
  {
    group: "CBN",
    sheets: [
      ["CBN Powder (Mesh & Micron)", "For ferrous grinding, coating options."],
      ["PCBN Discs & Blanks", "CBN content grades and dimensions."],
    ],
  },
  {
    group: "Single Crystal Diamond (CVD & MCD)",
    sheets: [
      ["CVD Single Crystal Diamond", "Orientations, sizes, and faces."],
      ["MCD (Monocrystalline Diamond)", "Shapes, sizes, orientations."],
    ],
  },
  {
    group: "Polycrystalline Diamond (PCD & CVD)",
    sheets: [
      ["PCD Discs & Blanks", "Grain sizes and dimensions."],
      ["CVD Polycrystalline Dressing Logs", "Log sizes and shapes."],
    ],
  },
  {
    group: "Natural Tool Stones",
    sheets: [["Natural Diamond Tool Stones", "Shapes, sizes, and grades."]],
  },
  {
    group: "Polycrystalline Diamond Powder",
    sheets: [["Polycrystalline Diamond Micron Powder", "Sizes and formats for polishing."]],
  },
];

export default function DatasheetsPage() {
  return (
    <>
      <CrystalHeroPage
        eyebrow="Ungated · specifications, grades & sizing"
        title="Product Datasheets"
        desc="Download technical datasheets for EID's full diamond and CBN range: available grades, sizes, crystal types, coating options, and packaging. No form, no login."
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
            <span className="heading__subtitle">Free to download</span>
            <h2 className="heading__title">Technical specifications for every product.</h2>
            <p className="prose mt-20">
              Grades, sizes, crystal types, coating options, and packaging. No form, no login. Download what you
              need, and if the exact spec you are after is not here, ask us and we will send it.
            </p>
            <p className="note-mono mt-20">Placeholder downloads. Confirm available datasheets with Uri and upload the actual PDFs.</p>
          </div>
          <div style={{ display: "grid", gap: 40 }}>
            {groups.map(({ group, sheets }) => (
              <div key={group}>
                <div className="heading mb-20" style={{ borderBottom: "1px solid var(--eid-line)", paddingBottom: 10 }}>
                  <span className="heading__subtitle" style={{ margin: 0 }}>{group}</span>
                </div>
                <div style={{ display: "grid", gap: 14 }}>
                  {sheets.map(([name, desc]) => (
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
            ))}
          </div>
        </div>
      </section>

      <BannerCTA
        subtitle="Need a spec not listed?"
        title="Ask us for the exact datasheet you need."
        desc="Tell us the product and the parameters you need, and we will send the datasheet or confirm a custom specification. Replies within one business day."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
