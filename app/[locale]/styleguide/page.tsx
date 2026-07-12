import type { Metadata } from "next";
import { HeroPage, Chapter } from "@/app/_components/award";
import {
  SectionIntro,
  StatTiles,
  FeatureTiles,
  SpecCard,
  ComparisonTable,
  DataSheetCard,
  FAQAccordion,
  Timeline,
  StepFlow,
  CertStrip,
  QuoteCallout,
  TechNote,
  TagRow,
  ContactBand,
  CapabilityRow,
  MidnightPanel,
} from "@/app/_components/patterns";

export const metadata: Metadata = {
  title: "Styleguide — Pattern Library",
  robots: { index: false, follow: false },
};

const wrap = { maxWidth: 1080, marginInline: "auto" } as const;

function Block({ id, name, children }: { id: string; name: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section" style={{ borderBottom: "1px solid var(--eid-line)" }}>
      <div className="container" style={wrap}>
        <div className="eyebrow" style={{ marginBottom: 22 }}>{name}</div>
        {children}
      </div>
    </section>
  );
}

export default function Styleguide() {
  return (
    <>
      <HeroPage
        eyebrow="Internal · not indexed"
        title="EID pattern library."
        desc="Every reusable component in the design system, rendered with real EID content. Copy the import, drop the pattern into any page."
        crumbs={[{ label: "Home", href: "/" }, { label: "Styleguide" }]}
        metaStats={[
          { value: "16", label: "Patterns" },
          { value: "1", label: "Token system" },
          { value: "2px", label: "Radius" },
        ]}
      />

      <Block id="section-intro" name="01 · SectionIntro">
        <SectionIntro
          eyebrow="The full range · one source"
          title="Every industrial diamond and CBN product."
          desc="From raw natural grit to precision-grown CVD crystal, surface-enhanced and quality-controlled in-house."
        />
      </Block>

      <Block id="stat-tiles" name="02 · StatTiles">
        <StatTiles
          items={[
            { value: "50+", label: "Years' experience" },
            { value: "12", label: "Product lines" },
            { value: "100%", label: "Batches QC-tested", note: "Every production run" },
            { value: "1 day", label: "Quote response" },
          ]}
        />
      </Block>

      <Block id="feature-tiles" name="03 · FeatureTiles">
        <FeatureTiles
          items={[
            { icon: "fa-diamond", title: "We manufacture", desc: "Natural grit and powder produced in our own factory — not resold.", href: "/about" },
            { icon: "fa-flask", title: "In-house QC lab", desc: "Every production run tested for size, morphology, and coating integrity.", href: "/quality" },
            { icon: "fa-cubes", title: "The full range", desc: "Diamond and CBN, grit to crystal, from one supplier and one standard.", href: "/products" },
          ]}
        />
      </Block>

      <Block id="spec-card" name="04 · SpecCard">
        <div className="grid-3">
          <SpecCard
            meta="Natural · Mesh 16–60"
            title="Natural Diamond Grit"
            desc="Saw and drilling grades manufactured in-house for stone, glass, and construction tools."
            chips={["Saw grade", "Blocky", "Coated available"]}
            href="/products/natural-grit"
          />
          <SpecCard
            meta="Superabrasive · Mesh & Micron"
            title="CBN"
            desc="The superabrasive for hardened and ferrous steels where diamond can't go."
            chips={["Ferrous", "60+ HRC", "Amber & black"]}
            href="/products/cbn"
          />
          <SpecCard
            meta="Grown · To spec"
            title="CVD Single Crystal"
            desc="Precision-grown crystal for dressers, wire dies, and single-point tools."
            chips={["Orientation-cut", "Laser-cut", "Polished"]}
            href="/products/cvd-single-crystal"
          />
        </div>
      </Block>

      <Block id="comparison" name="05 · ComparisonTable">
        <ComparisonTable
          caption="Material selection"
          colA="Diamond"
          colB="CBN"
          rows={[
            { label: "Hardness (Knoop)", a: "~10,000", b: "~4,700" },
            { label: "Best on", a: "Non-ferrous, stone, glass, carbide", b: "Hardened & ferrous steels" },
            { label: "Thermal stability", a: "Graphitizes above ~700°C in air", b: "Stable to ~1,200°C" },
            { label: "Reacts with iron", a: "Yes — avoid ferrous grinding", b: "No" },
          ]}
        />
      </Block>

      <Block id="datasheet" name="06 · DataSheetCard">
        <div className="grid-2">
          <DataSheetCard kind="Datasheet · PDF" title="Natural Diamond Grit — grades & size chart" size="420 KB" href="#" />
          <DataSheetCard kind="MSDS · PDF" title="CBN powder — material safety data sheet" size="180 KB" href="#" />
        </div>
      </Block>

      <Block id="faq" name="07 · FAQAccordion">
        <FAQAccordion
          items={[
            { q: "What's the minimum order quantity?", a: "There's no minimum enquiry. Sample quantities start from single carats for crystal products and 100 carats for grit and powder, so you can validate the material before committing to volume." },
            { q: "Do you supply a certificate of analysis?", a: "Yes — every lot ships with a certificate of analysis covering size distribution, and retention samples are held for every batch under our ISO 9001 system." },
            { q: "Can you match a competitor's grade?", a: "Usually. Send us the spec or a sample of the material you're using and our QC lab will characterise it and propose the closest EID grade, or a custom-tightened specification." },
          ]}
        />
      </Block>

      <Block id="timeline" name="08 · Timeline">
        <Timeline
          items={[
            { marker: "Day 0", title: "Enquiry received", desc: "Your spec lands with a technical specialist, not a ticket queue." },
            { marker: "Day 1", title: "Qualified quote", desc: "Grade recommendation, pricing, and lead time within 24 hours." },
            { marker: "Week 1", title: "Sample dispatched", desc: "Validation quantity shipped with certificate of analysis." },
            { marker: "Ongoing", title: "Scheduled supply", desc: "Stock or scheduled deliveries matched to your production plan." },
          ]}
        />
      </Block>

      <Block id="stepflow" name="09 · StepFlow">
        <StepFlow
          steps={[
            { title: "Tell us the spec", desc: "Product, grade, size, quantity, destination." },
            { title: "We qualify & quote", desc: "Technical review and response within 24 hours." },
            { title: "Sample & supply", desc: "Validate, then scheduled or stock supply." },
          ]}
        />
      </Block>

      <Block id="certs" name="10 · CertStrip">
        <CertStrip
          items={[
            { icon: "fa-certificate", label: "ISO 9001 certified" },
            { icon: "fa-flask", label: "In-house QC laboratory" },
            { icon: "fa-barcode", label: "Full lot traceability" },
            { icon: "fa-globe", label: "50+ years' experience" },
          ]}
        />
      </Block>

      <Block id="quote" name="11 · QuoteCallout">
        <QuoteCallout
          quote="EID is our single source for natural diamond grit and metal bond. We haven't had a rejected batch in over three years."
          name="Procurement Manager"
          role="Diamond & CBN tool manufacturer · Germany"
        />
      </Block>

      <Block id="technote" name="12 · TechNote">
        <div style={{ display: "grid", gap: 16 }}>
          <TechNote title="Grade selection">
            Blockier, higher-strength crystals hold up in sintered saw segments; friable grades expose fresh cutting edges in resin bond wheels. When in doubt, send the application and we&apos;ll spec it.
          </TechNote>
          <TechNote kind="caution" title="Diamond on ferrous metals">
            Diamond reacts with iron at grinding temperatures. For hardened and ferrous steels, specify CBN.
          </TechNote>
        </div>
      </Block>

      <Block id="tagrow" name="13 · TagRow">
        <TagRow label="Applications" tags={["Grinding", "Sawing", "Lapping", "Polishing", "Wire drawing", "Dressing"]} />
      </Block>

      <Block id="caps" name="15 · CapabilityRow">
        <CapabilityRow
          rows={[
            { label: "Mesh range", value: "16–325 mesh, natural and synthetic" },
            { label: "Micron range", value: "0–0.5 µm up to 54–80 µm, tight-span options" },
            { label: "D50 tolerance", value: "±1 µm on micron powders" },
            { label: "Coatings", value: "Ni (30/56%), Cu, Ti — spiky and smooth" },
          ]}
        />
      </Block>

      <Block id="midnight" name="16 · MidnightPanel">
        <MidnightPanel>
          <SectionIntro
            eyebrow="Dark technical band"
            title="Any content, on the midnight system."
            desc="Wrap stats, intros, or CTAs in this panel to bookend a light page with the hero's language."
          />
          <StatTiles
            items={[
              { value: "±1 µm", label: "D50 control" },
              { value: "10", label: "Mohs hardness" },
            ]}
          />
        </MidnightPanel>
      </Block>

      <Chapter index="14" label="ContactBand" />
      <ContactBand
        phone="+44 [number]"
        email="info@eid-ltd.com"
        address="London, UK"
      />
    </>
  );
}
