import type { Metadata } from "next";
import {
  AboutGeometric,
  ServicesLayout3,
  FeaturesListParallax,
  BannerCTA,
} from "@/app/_components/sections";
import { Chapter, StatsBar, Marquee, PRODUCT_KEYWORDS } from "@/app/_components/award";
import { CrystalHeroPage } from "@/app/_components/stone";
import { Link } from "@/i18n/navigation";
import type { IconName } from "@/app/_components/Icon";

export const metadata: Metadata = {
  title: { absolute: "Quality Control & ISO 9001 | Industrial Diamond QC | EID" },
  description:
    "EID's in-house QC laboratory tests every batch of diamond and CBN for size distribution, crystal strength, morphology, and coating. ISO 9001 certified.",
};

const tests: { icon: IconName; title: string; desc: string; href: string }[] = [
  { icon: "gauge", title: "Particle Size Distribution", desc: "Graded and verified for tight D50, D10 and D90, and span, with outliers controlled. This keeps a grade cutting and finishing the same way order to order.", href: "/contact" },
  { icon: "shield", title: "Crystal Strength (Friability)", desc: "Tested so the diamond or CBN performs as expected in your bond system rather than breaking down too fast or not enough.", href: "/contact" },
  { icon: "diamond", title: "Morphology & Shape", desc: "Inspected to confirm the blocky, semi-blocky, or irregular form matches the grade specification.", href: "/contact" },
  { icon: "layers", title: "Coating Weight & Coverage", desc: "Every coated batch checked for target weight percentage and uniform surface coverage.", href: "/contact" },
  { icon: "grid", title: "Traceability", desc: "Every lot documented from raw material through production, QC, and shipping, with full traceability available on request.", href: "/contact" },
];

export default function QualityPage() {
  return (
    <>
      <CrystalHeroPage
        eyebrow="In-house QC · ISO 9001 · full traceability"
        title="Quality Control & ISO 9001"
        desc="Our in-house QC laboratory tests every batch of diamond and CBN for size distribution, crystal strength, morphology, and coating integrity. ISO 9001 certified."
        crumbs={[{ label: "Home", href: "/" }, { label: "Quality" }]}
        imgLabel="QC LABORATORY — particle sizing & microscopy"
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      <Chapter index="01" label="QC Philosophy" />
      <AboutGeometric
        subtitle="Quality is the product"
        title="Quality control is what you are buying."
        text={[
          "EID does not check quality after the fact. It is built into every stage, from raw material selection through grading, coating, and final inspection, and the in-house QC laboratory is the backbone of everything we ship.",
          "The reason matters more than the badge. When a tool maker re-orders a grade, they are trusting that this batch behaves like the last one, because their own production is tuned to it. Our job is to make that true every time, and to be able to prove it with data rather than a promise.",
        ]}
        imgLabel="QC LABORATORY — particle sizing & microscopy"
        features={[
          { title: "ISO 9001 certified", desc: "Covering production, QC, and the full supply chain." },
          { title: "Certificate of analysis", desc: "Issued with every shipment on request, per lot." },
          { title: "Retention samples", desc: "Kept for every batch for retrospective testing." },
        ]}
      />

      <StatsBar
        items={[
          { value: 5, label: "QC process steps" },
          { value: 100, suffix: "%", label: "Batches tested" },
          { value: 8, label: "Product groups" },
          { value: 50, suffix: "+", label: "Years' experience" },
        ]}
      />

      <Chapter index="02" label="What We Test" />
      <ServicesLayout3
        subtitle="What we test on every batch"
        title="What we test, every production run."
        desc="Tool performance depends on predictable crystal strength and size distribution. Every lot is documented and traceable from raw material through QC to delivery."
        ctaHref="/contact"
        ctaLabel="Request a Quote with QC Spec"
        items={tests}
      />

      <FeaturesListParallax
        chapterIndex="03"
        chapterLabel="QC Process"
        subtitle="Our QC process, step by step"
        title="How a batch moves through our laboratory."
        desc="A structured process from incoming inspection to shipped product, with documentation at every step. This is the demonstrate-don't-badge detail no direct competitor offers."
        features={[
          { title: "01 · Incoming inspection", desc: "Raw materials tested on arrival against their incoming specification before anything enters production." },
          { title: "02 · In-process control", desc: "Production parameters monitored and recorded throughout grading, coating, and finishing." },
          { title: "03 · Final QC", desc: "Every finished batch sampled and tested, then compared against your specification and our internal standards." },
          { title: "04 · Certificate of analysis", desc: "Issued with any shipment on request, documenting the test results for that specific lot." },
          { title: "05 · Retention samples", desc: "A sample from every batch is kept, so any later question can be checked against the exact material that shipped." },
        ]}
      />

      {/* MESH & MICRON QC + ISO 9001 */}
      <Chapter index="04" label="Mesh, Micron & ISO 9001" gray />
      <section className="section bg-gray">
        <div className="container">
          <div className="grid-2">
            <div className="tech-card">
              <div className="tech-card__meta">Mesh & micron QC</div>
              <h3>Grading differs by form, so testing does too.</h3>
              <p style={{ fontSize: 16 }}>
                Mesh QC covers how we grade and verify grit sizing and crystal shape. Micron QC covers
                particle-size-distribution measurement and the D-value control that fine polishing depends on.
                Each product page states the checks that matter for that grade.
              </p>
            </div>
            <div className="tech-card">
              <div className="tech-card__meta">Detail</div>
              <h3>Grading and testing differ by form.</h3>
              <p style={{ fontSize: 16 }}>
                Mesh QC covers how we grade and verify grit sizing and crystal shape. Micron QC covers
                particle-size-distribution measurement and the D-value control that fine polishing depends on.
              </p>
              <p className="note-mono mt-20">
                The copy deck links these to dedicated /mesh-qc and /micron-qc pages, which the Phase 2
                page inventory does not include. Confirm with Uri whether to build them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QC MACHINERY — Phase 2 build-out. The equipment is shown as page
          content because "we test everything" is a claim; naming the instrument
          that produces the number is the proof. */}
      <Chapter index="05" label="QC Machinery" />
      <section className="section">
        <div className="container">
          <div className="heading mb-40">
            <span className="heading__subtitle">The laboratory</span>
            <h2 className="heading__title">The instruments behind the numbers.</h2>
            <p className="prose mt-20">
              Every figure on a certificate of analysis comes off a named instrument, calibrated and
              logged. Photographs of the laboratory and the exact model designations are to be supplied
              by Uri before launch.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                meta: "Particle sizing",
                title: "Laser diffraction analyser",
                desc: "Measures the full particle size distribution of micron powders, producing the D10, D50, D90, and span values recorded on the certificate of analysis.",
              },
              {
                meta: "Particle counting",
                title: "Coulter counter",
                desc: "Independent electrical-sensing-zone count used to confirm distribution and catch outliers at the coarse tail, which is the failure mode in fine polishing.",
              },
              {
                meta: "Sizing",
                title: "Calibrated sieve stack & shaker",
                desc: "Grades mesh grit to FEPA and US mesh, verified against calibrated reference sieves on a fixed re-certification interval.",
              },
              {
                meta: "Morphology",
                title: "Optical & stereo microscopy",
                desc: "Confirms crystal shape (blocky, semi-blocky, irregular) against the grade specification and inspects coating coverage for uniformity.",
              },
              {
                meta: "Strength",
                title: "Friability / toughness test rig",
                desc: "Measures how the crystal breaks down under load, which determines how the grade will behave in your bond system.",
              },
              {
                meta: "Coating",
                title: "Coating weight assay",
                desc: "Confirms target weight percentage on every coated batch, because retention in a sintered matrix depends on it.",
              },
            ].map((m) => (
              <div key={m.title} className="tech-card">
                <div className="tech-card__meta">{m.meta}</div>
                <h3>{m.title}</h3>
                <p style={{ fontSize: 16 }}>{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="note-mono mt-30">
            Confirm exact instrument makes, models, and calibration intervals with Uri. Replace this
            block with photographs of the actual QC laboratory before launch.
          </p>
        </div>
      </section>

      {/* CERTIFICATES — shown as content, offered as downloads. This replaces the
          pattern of embedding one large PDF as the whole page. */}
      <Chapter index="06" label="Certificates & Downloads" gray />
      <section className="section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="heading mb-30">
                <span className="heading__subtitle">ISO 9001 certified</span>
                <h2 className="heading__title">A documented, audited, repeatable process.</h2>
              </div>
              <p className="prose">
                EID&apos;s quality management system is ISO 9001 certified, covering the full process from
                incoming raw material inspection through manufacturing, testing, packaging, and delivery.
                Certification means the process is documented, audited, and repeatable, which is what stands
                behind every certificate of analysis we issue.
              </p>
              <p className="note-mono mt-20">
                Certificate number, issuing body, and validity dates to be confirmed with Uri. The scanned
                certificate is displayed here as an image with the PDF offered alongside it.
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="tech-card">
                <div className="tech-card__meta">Downloads</div>
                <ul className="check-list" style={{ marginTop: 10 }}>
                  <li>ISO 9001 certificate (PDF) — [awaiting file from Uri]</li>
                  <li>Sample certificate of analysis (PDF) — [awaiting file from Uri]</li>
                  <li>QC methods & test parameters summary (PDF) — [awaiting file from Uri]</li>
                </ul>
                <Link href="/resources/datasheets" className="btn btn__secondary btn__link mt-20">
                  <span>All datasheets</span> <i className="fa fa-long-arrow-right" />
                </Link>
                <Link href="/resources/msds" className="btn btn__secondary btn__link mt-10">
                  <span>Safety data sheets</span> <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      <BannerCTA
        subtitle="Specify your tolerances"
        title="Request a quote with your QC specification."
        desc="Send us your grade and the QC parameters you need documented, and a real person replies within one business day. A certificate of analysis is available with the shipment."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
