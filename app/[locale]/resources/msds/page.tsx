import type { Metadata } from "next";
import { BannerCTA } from "@/app/_components/sections";
import { Chapter } from "@/app/_components/award";
import { CrystalHeroPage } from "@/app/_components/stone";
import Icon from "@/app/_components/Icon";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: { absolute: "Diamond & CBN Safety Data Sheets (MSDS) | EID" },
  description:
    "Download safety data sheets for EID's industrial diamond and CBN products. Handling, storage, disposal, and regulatory information. Free, no login.",
};

// Grouped by material family, not by the eight-page catalogue: safety documents
// genuinely group by material, and coated abrasives carry different handling
// information even though coatings are no longer a standalone product line.
const msds: [string, string][] = [
  ["Natural Diamond (Grit & Powder)", "Handling and safety for natural diamond abrasive products."],
  ["Synthetic Diamond (Metal Bond & Resin Bond)", "For synthetic bonded diamond powders."],
  ["CBN (Cubic Boron Nitride)", "For CBN mesh and micron products."],
  ["CVD Diamond (Single Crystal & Polycrystalline)", "For CVD single crystal and polycrystalline products."],
  ["MCD (Monocrystalline Diamond)", "For HPHT monocrystalline products."],
  ["PCD / PCBN", "For polycrystalline diamond and CBN discs and blanks."],
  ["Coated Diamond & CBN Products", "Handling and safety for coated (nickel, copper, titanium) abrasives."],
];

export default function MsdsPage() {
  return (
    <>
      <CrystalHeroPage
        eyebrow="Handling, storage & regulatory information"
        title="Material Safety Data Sheets (MSDS)"
        desc="Download material safety data sheets (MSDS) for EID's industrial diamond and CBN products: handling, storage, and safety information."
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
            <span className="heading__subtitle">Free to download</span>
            <h2 className="heading__title">Safety data for all EID products.</h2>
            <p className="prose mt-20">
              Handling, storage, disposal, and regulatory information. No form, no login. If you need a document
              that is not listed, or a specific regional format, <Link href="/contact">ask us</Link> and we
              will send it.
            </p>
            <p className="note-mono mt-20">
              Documents must be current, accurate, and correctly labelled before publishing. The EU uses SDS under
              REACH/CLP rather than the older &quot;MSDS&quot; label. Confirm with Uri whether the DE, IT, and other
              EU-facing versions should be titled SDS. Do not publish placeholder or out-of-date safety sheets.
            </p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {msds.map(([name, desc]) => (
              <div key={name} className="tech-card dl-row">
                <div className="dl-meta">
                  <Icon name="shield" />
                  <div>
                    <h3 style={{ fontSize: 16, margin: 0 }}>{name}</h3>
                    <p style={{ fontSize: 14, margin: "4px 0 0", color: "var(--eid-muted)" }}>{desc}</p>
                  </div>
                </div>
                <span className="btn btn__secondary"><Icon name="download" /> PDF</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BannerCTA
        subtitle="Need a safety document not listed?"
        title="We'll send the current SDS for your material."
        desc="Tell us the product and the regional format you need, and we will send the current document. Replies within one business day."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
