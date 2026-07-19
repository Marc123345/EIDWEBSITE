import {
  FeaturesRow,
  AboutGeometric,
  ServicesLayout3,
  FeaturesListParallax,
  RequestQuotePanel,
  BannerCTA,
} from "@/app/_components/sections";
import {
  ChapterMarker,
  StatsBar,
  Marquee,
  BentoGallery,
  ProcessSteps,
} from "@/app/_components/award";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { CrystalHero } from "@/app/_components/stone";
import type { IconName } from "@/app/_components/Icon";
import { getProducts, getApplications } from "@/lib/i18n-content";
import { localeAlternates } from "@/lib/hreflang";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: localeAlternates(locale, "/") };
}

const heroSlides = [
  {
    eyebrow: "Industrial Diamond & CBN · Manufacturer and Supplier · London, UK",
    title:
      "The full industrial diamond and CBN range, manufactured, processed, and graded in-house to EID standards.",
    desc: "EID manufactures industrial diamond and CBN for tool makers worldwide. Every grade is processed and tested in our own laboratory to ensure batch-to-batch consistency. Get your superabrasives from one accountable manufacturer.",
  },
  {
    eyebrow: "We control production, not just supply",
    title: "The quality decision sits with us.",
    desc: "Natural grit and powder made and graded in our own factory. Bonded and CBN grades produced to order, then re-processed and QC-upgraded through our facility to your spec. CVD single crystal grown to your orientation through a dedicated growth partner and finished in-house.",
  },
  {
    eyebrow: "Every batch, every re-order",
    title: "When you order the same grade twice, you get the same grade twice.",
    desc: "Our in-house QC laboratory tests size distribution, crystal strength, morphology, and coating coverage on every production run, so your tools stay consistent, batch after batch.",
  },
];

/**
 * FAQ — written for AI search and FAQPage rich results. Every answer is
 * grounded in the Vol 03 copy deck, and deliberately repeats the graduated
 * production claim rather than implying EID grows its own CVD or makes bonded
 * powder from raw. Needs Uri's sign-off before launch.
 */
const faqs = [
  {
    q: "What does EID manufacture?",
    a: "EID supplies the complete industrial diamond and CBN range across eight product groups: natural diamond grit and micron powder, metal bond diamond, resin bond diamond, CBN and PCBN, CVD single crystal and MCD, PCD blanks and CVD dressing logs, natural tool stones, and polycrystalline diamond powder. We supply tool makers, not end users: the material goes into your saws, wheels, burs, inserts, and dressing tools.",
  },
  {
    q: "Does EID manufacture the material, or resell it?",
    a: "It depends on the product, and we are specific about which is which. Natural grit and powder are manufactured entirely in-house at our own factory, from raw material through crushing, grading, and final QC. Metal bond, resin bond, and CBN grades are produced to order, then re-processed, graded, coated, and QC-upgraded through our facility to your specification. CVD single crystal is grown to EID's specification and orientation through a dedicated growth partner, then finished and inspected by us. Across all three, the specification and the QC pass are ours.",
  },
  {
    q: "When should I use CBN instead of diamond?",
    a: "Use diamond for non-ferrous and non-metallic materials such as stone, glass, ceramics, carbide, and composites. Use CBN for ferrous materials such as hardened steel, cast iron, superalloys, and high-speed steel. Diamond is the harder material, but it reacts chemically with iron at grinding temperatures and wears quickly, so for gears, bearings, crankshafts, and camshafts, CBN is the practical choice.",
  },
  {
    q: "What is the difference between PCD and PCBN?",
    a: "Both are sintered blanks for cutting-tool inserts, and the split follows the same ferrous rule. PCD (polycrystalline diamond) machines non-ferrous and abrasive materials: aluminium, copper and brass, composites, wood-based panels, and abrasive plastics. PCBN (polycrystalline cubic boron nitride) machines hardened ferrous parts above roughly 45 HRC, cast iron, powder-metallurgy parts, and superalloys. Do not run PCD on ferrous material.",
  },
  {
    q: "Is EID ISO 9001 certified?",
    a: "Yes. EID's quality management system is ISO 9001 certified, covering the full process from incoming raw material inspection through manufacturing, testing, packaging, and delivery. A certificate of analysis is available per lot on request, and a retention sample is kept from every batch so any later question can be checked against the exact material that shipped.",
  },
  {
    q: "How do you keep grades consistent between orders?",
    a: "Every production run is tested in our own QC laboratory before it ships. We measure particle size distribution (D10, D50, D90, and span, with outliers controlled), crystal strength and friability, crystal morphology and shape, and coating weight and coverage on every coated batch. The point is that the grade you qualify is the grade you receive, because your own production is tuned to it.",
  },
  {
    q: "Can I order a sample before committing to a production quantity?",
    a: "Yes. Samples are available for any grade so you can validate the material in your own process before scheduling supply. Tell us the product, grade, size, and the application, and a technical specialist will confirm what to send.",
  },
  {
    q: "Do you supply custom grades and sizes?",
    a: "Yes. Standard grades ship from stock and custom specifications are made to order, including custom mesh and micron sizing, coating type and weight, CVD single crystal grown to a specified orientation and face, and PCD, PCBN, and CVD log dimensions to drawing. If you are not sure of the exact grade, give us the material you are working and the finish you need and we will specify it.",
  },
  {
    q: "Are your datasheets and safety data sheets free to download?",
    a: "Yes, and they are ungated: no form and no login. Technical datasheets for every product and safety data sheets for every material family are published under Resources as page content with a downloadable PDF alongside. If the exact specification you need is not listed, ask us and we will send it.",
  },
  {
    q: "Where is EID based, and where do you ship?",
    a: "EID is based in London, England, at EID House, 12 St. Cross Street, EC1N 8UB. We supply tool makers across Europe, Asia, the Americas, and the Middle East. You can reach us by email at info@eid-ltd.com, by phone on +44 (0) 207 405 6594, or on WhatsApp, which is shared across the sales team so replies are not blocked on one person.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// The eight locked product groups as home cards.
const familyIcon: Record<string, IconName> = {
  "Natural Diamond Grit & Powder": "diamond",
  "Metal Bond Diamond": "saw",
  "Resin Bond Diamond": "layers",
  CBN: "gauge",
  "Single Crystal Diamond (CVD & MCD)": "cube",
  "Polycrystalline Diamond (CVD & PCD)": "grid",
  "Natural Tool Stones": "flask",
  "Polycrystalline Diamond Powder": "bolt",
};

// The six application hubs as home cards.
const hubIcon: Record<string, IconName> = {
  dental: "tooth",
  "semiconductor-electronics": "chip",
  "automotive-aerospace": "engine",
  "tool-and-die": "cube",
  "grinding-cutting-sawing-drilling": "saw",
  "polishing-lapping": "lens",
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const products = getProducts(locale);

  // Eight locked groups, eight pages, linked straight from the home range block.
  const groupCards = products.map((p) => ({
    icon: familyIcon[p.family] || "diamond",
    title: p.name,
    desc: p.cardDesc,
    href: `/products/${p.slug}`,
  }));

  // Home lists the hubs in the copy deck's order, which leads with the two
  // highest-volume buyer types rather than the lib order used elsewhere.
  const HOME_HUB_ORDER = [
    "dental",
    "grinding-cutting-sawing-drilling",
    "semiconductor-electronics",
    "automotive-aerospace",
    "tool-and-die",
    "polishing-lapping",
  ];
  const apps = getApplications(locale);
  const hubCards = HOME_HUB_ORDER.map((slug) => apps.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .map((a) => ({
      icon: hubIcon[a.slug] || "diamond",
      title: a.name,
      desc: a.cardDesc,
      href: `/applications/${a.slug}`,
    }));

  return (
    <>
      {/* HERO — The Stone: faceted diamond crystal + metrology HUD */}
      <CrystalHero
        slides={heroSlides}
        metaStats={[
          { value: "50+", label: "Years' experience" },
          { value: "8", label: "Product groups" },
          { value: "ISO 9001", label: "Certified" },
        ]}
      />

      {/* TRUST BAR — verified proof points, count-up on view */}
      <StatsBar
        items={[
          { value: 50, suffix: "+", label: "Years' experience" },
          { value: 8, label: "Product groups" },
          { value: 100, suffix: "%", label: "Batches QC-tested" },
          { value: 1, suffix: " day", label: "Quote response" },
        ]}
      />

      {/* FEATURES ROW — honest graduated production model */}
      <FeaturesRow
        items={[
          { title: "ISO 9001 Certified", desc: "Full traceability from raw material to shipped lot.", href: "/quality" },
          { title: "In-House QC Laboratory", desc: "Every production run tested for size, strength, morphology, and coating.", href: "/quality" },
          { title: "Complete Superabrasive Range", desc: "Diamond and CBN, grit to crystal, from one supplier and one standard.", href: "/products" },
          { title: "50+ Years' Experience", desc: "Making the material inside the world's diamond tools, from London.", href: "/about" },
        ]}
      />

      {/* THE PROBLEM — names the buyer's real cost */}
      <div className="container">
        <ChapterMarker index="01" label="The Problem" />
      </div>
      <AboutGeometric
        subtitle="The cost of inconsistent diamond"
        title="EID removes this variable."
        text={[
          "Inconsistent diamond causes inconsistent tools and rejects. Sourcing from multiple suppliers creates conflicting specifications and lead times.",
          "We provide a full diamond and CBN range, with every grade tested in our QC laboratory. The grade you qualify for is the grade you receive.",
        ]}
        imgLabel="FACTORY / PRODUCTION FLOOR — London"
        features={[
          { title: "We control production", desc: "The quality decision sits with us, which is the difference between a manufacturer and a distributor." },
          { title: "The same material, every re-order", desc: "Tested on every run so this batch behaves like the last one your line was tuned to." },
          { title: "Traceability", desc: "Every lot documented from raw material through QC to delivery." },
        ]}
      />

      {/* PRODUCT RANGE — the eight locked groups */}
      <div className="container">
        <ChapterMarker index="02" label="The Range" />
      </div>
      <ServicesLayout3
        subtitle="The range · eight product groups"
        title="Every industrial diamond and CBN product, from one source."
        desc="We manufacture natural grit and powder in-house, QC-upgrade bonded and CBN grades to your spec, and offer single crystal grown to your orientation."
        ctaHref="/products"
        ctaLabel="Browse the Full Range"
        items={groupCards}
      />

      {/* THREE PILLARS — the positioning, stated plainly. Pillar one carries the
          graduated production claim, which is the honesty a technical buyer
          checks for before anything else on this page. */}
      <div className="container">
        <ChapterMarker index="03" label="Why EID" />
      </div>
      <section className="section pt-0">
        <div className="container">
          <div className="grid-3">
            {[
              {
                meta: "Accountability",
                title: "We control production, not just supply.",
                body: "Natural grit and powder made in our own factory. Bonded and CBN grades QC-upgraded to your spec. CVD grown to order through a dedicated partner. The quality decision is always ours: one accountable manufacturer, spec to delivery.",
                href: "/about",
                cta: "How we make it",
              },
              {
                meta: "Consistency",
                title: "Consistent material, every re-order.",
                body: "Every run tested for size distribution, strength, morphology, and coating. ISO 9001, certificate of analysis per lot. Order the same grade twice, get the same grade twice.",
                href: "/quality",
                cta: "See how our QC works",
              },
              {
                meta: "Breadth",
                title: "The full range, one relationship.",
                body: "Every diamond and CBN product from one supplier: one contact, one quality standard. Standard grades from stock; specials to your lead time.",
                href: "/products",
                cta: "Browse the range",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="tech-card">
                <div className="tech-card__meta">{pillar.meta}</div>
                <h3>{pillar.title}</h3>
                <p style={{ fontSize: 16 }}>{pillar.body}</p>
                <Link href={pillar.href} className="btn btn__secondary btn__link mt-20">
                  <span>{pillar.cta}</span> <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS — the six hubs */}
      <div className="container">
        <ChapterMarker index="04" label="Applications" />
      </div>
      <ServicesLayout3
        subtitle="Applications · six hubs"
        title="Diamond and CBN for the work your tools do."
        desc="We supply the material. You build the tools that serve these applications. Start from your application to reach the exact grades that serve it."
        ctaHref="/applications"
        ctaLabel="View All Applications"
        items={hubCards}
      />

      {/* WHY EID — dark parallax features list */}
      <FeaturesListParallax
        subtitle="Quality"
        title="Every production run is tested before it leaves."
        desc="Every batch is tested before it leaves. We test diamond and CBN for particle size, strength, morphology, and coating coverage. ISO 9001 certified, with full traceability from raw material to delivery."
        ctaLabel="See how our QC works"
        ctaHref="/quality"
        features={[
          { title: "Particle size distribution", desc: "Graded and verified for tight D50 and span, with outliers controlled." },
          { title: "Crystal strength & morphology", desc: "Confirmed to perform as expected in your bond system." },
          { title: "Coating weight & coverage", desc: "Every coated batch checked for target weight and uniform coverage." },
          { title: "ISO 9001 & traceability", desc: "Certificate of analysis and retention samples available for every lot." },
        ]}
      />

      {/* CAPABILITIES — bento montage */}
      <BentoGallery
        chapterIndex="05"
        chapterLabel="Capabilities"
        subtitle="Inside the operation"
        title="Manufacturing, growth partnership, and QC."
        items={[
          { label: "FACTORY FLOOR — London", caption: "In-house manufacturing", wide: true },
          { label: "QC LABORATORY", caption: "Every batch tested", href: "/quality" },
          { label: "CVD CRYSTAL GROWTH", caption: "Grown to your spec", href: "/products/single-crystal#cvd" },
          { label: "DIAMOND GRIT & POWDER", caption: "Natural grit & micron", href: "/products/natural-grit-powder#grit" },
          { label: "CBN SUPERABRASIVE", caption: "For hardened steels", href: "/products/cbn" },
        ]}
      />

      {/* REQUEST QUOTE — numbered process lead-in + form panel */}
      <section className="pt-110 pb-40">
        <div className="container">
          <ChapterMarker index="06" label="Request a Quote" />
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="heading heading-3 mb-40">
                <h2 className="heading__title">A qualified quote in three steps.</h2>
                <p className="heading__desc">
                  No account, no minimum enquiry. Tell us what you need and a
                  technical specialist takes it from there.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <ProcessSteps
                steps={[
                  { title: "Tell us the spec", desc: "Product, grade, size, quantity, and destination country, as much or as little as you have." },
                  { title: "We qualify & quote", desc: "A technical specialist reviews your enquiry and replies within one business day, not with a request for more info." },
                  { title: "Sample & supply", desc: "Order a sample to validate, then scheduled or stock supply to your lead time." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <RequestQuotePanel
        panelTitle="Tell us the grade you need. A real person replies within one business day."
        panelDesc="Request a quote, order a sample, or ask a technical question. One form, routed to someone who works with the material."
        formTitle="Request a Quote"
        formDesc="Request a quote, order a sample, or ask a technical question. One form, a real person, a reply within one business day."
        productOptions={products.map((p) => p.name)}
      />

      {/* FAQ — plain visible Q&A (no accordion), so crawlers and AI answer
          engines read the answers without executing JS. FAQPage JSON-LD below. */}
      <div className="container">
        <ChapterMarker index="07" label="Questions" />
      </div>
      <section className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-10 col-xl-8">
              <div className="heading mb-50">
                <span className="heading__subtitle">Frequently asked</span>
                <h2 className="heading__title">Straight answers about the material.</h2>
                <p className="heading__desc mt-20">
                  The questions technical buyers ask before they qualify a superabrasive supplier.
                  If yours is not here, <Link href="/contact">ask us</Link> and someone who works
                  with the material will answer.
                </p>
              </div>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={f.q} className="faq-item">
                <span className="faq-item__num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="faq-item__q">{f.q}</h3>
                  <p className="faq-item__a">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="note-mono mt-30">
            FAQ answers drafted from the Vol 03 copy deck. Confirm with Uri before launch,
            especially the production model and the shipping regions.
          </p>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* CLIENTS + KEYWORDS — dual marquee */}
      <Marquee
        logos={8}
        keywords={[
          "ISO 9001",
          "Natural Diamond",
          "CBN",
          "CVD Single Crystal",
          "Metal Bond",
          "Resin Bond",
          "MCD",
          "PCD / PCBN",
          "Micron Powder",
          "Made in London",
        ]}
      />

      {/* BANNER CTA */}
      <BannerCTA
        subtitle="Tell us what you need"
        title="A real person replies within one business day."
        desc="Request a quote, order a sample, or ask a technical question. One form, routed to someone who works with the material."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
