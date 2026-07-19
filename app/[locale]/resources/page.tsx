import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ImagePlaceholder } from "@/app/_components/ui";
import { BannerCTA } from "@/app/_components/sections";
import { Chapter, Marquee, PRODUCT_KEYWORDS } from "@/app/_components/award";
import { CrystalHeroPage } from "@/app/_components/stone";
import Icon from "@/app/_components/Icon";

export const metadata: Metadata = {
  title: { absolute: "Diamond & CBN Guides | Technical Resources | EID Ltd" },
  description:
    "Technical guides, application notes, and industry knowledge from EID on diamond vs CBN, grit size charts, bond comparison, and more.",
};

const guides: { title: string; desc: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Diamond vs CBN: which superabrasive for your application?",
    desc: "Diamond is the hardest material, but it cannot grind hardened steel and CBN can. When to use each, with a material-compatibility chart and application examples.",
    links: [
      { label: "CBN", href: "/products/cbn" },
      { label: "Metal Bond", href: "/products/metal-bond" },
    ],
  },
  {
    title: "Diamond grit & micron size chart (mesh-to-micron)",
    desc: "A reference chart mapping FEPA, US mesh, and micron sizes, so you can convert between the sizing systems your specs and your suppliers use.",
    links: [
      { label: "Natural Grit", href: "/products/natural-grit-powder#grit" },
      { label: "Natural Micron", href: "/products/natural-grit-powder#micron" },
    ],
  },
  {
    title: "Metal bond, resin bond, and vitrified: choosing a bond system",
    desc: "The bond holds the diamond, and the bond you choose sets how the tool cuts, how long it lasts, and what it can work. A comparison of the three major systems.",
    links: [
      { label: "Metal Bond", href: "/products/metal-bond" },
      { label: "Resin Bond", href: "/products/resin-bond" },
    ],
  },
  {
    title: "How diamond size distribution affects tool performance",
    desc: "What D50, D10, D90, and span actually mean, and why a tight distribution changes the way your tool cuts and finishes.",
    links: [
      { label: "Quality & QC", href: "/quality" },
      { label: "Natural Micron", href: "/products/natural-grit-powder#micron" },
    ],
  },
  {
    title: "CVD, HPHT (MCD), and natural diamond compared",
    desc: "Three ways to get a single crystal, and when each is the right choice for single-point and precision tooling.",
    links: [
      { label: "CVD Single Crystal", href: "/products/single-crystal#cvd" },
      { label: "MCD", href: "/products/single-crystal#mcd" },
      { label: "Natural Tool Stones", href: "/products/tool-stones" },
    ],
  },
  {
    title: "Diamond and CBN by application",
    desc: "Which grades serve dental, semiconductor, automotive and aerospace, and tool and die, and why, with links through to the application hubs.",
    links: [{ label: "Applications", href: "/applications" }],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <CrystalHeroPage
        eyebrow="Written by EID's technical team"
        title="Resources & Guides"
        desc="Technical guides, application notes, and industry knowledge from EID on diamond vs CBN, grit size charts, bond comparison, and more."
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        imgLabel="TECHNICAL LIBRARY — Guides & Charts"
        secondaryCta={{ label: "Read the blog", href: "/resources/blog" }}
      />

      {/* INTRO — the research-stage entry point that feeds the product pages */}
      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-9">
              <div className="heading">
                <span className="heading__subtitle">Where to start</span>
                <h2 className="heading__title">Technical guides for choosing the right superabrasive.</h2>
              </div>
              <p className="prose mt-20">
                Reference charts, comparisons, and application notes to help you match the diamond or CBN
                grade to your process, written by the people who grade and test the material. If you are still
                deciding between options, start here. If you already know the grade, the{" "}
                <Link href="/products">product pages</Link> carry the specs.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                  <p className="note-mono" style={{ marginTop: 4 }}>
                    Links to:{" "}
                    {g.links.map((l, i) => (
                      <span key={l.href}>
                        {i > 0 ? " · " : ""}
                        <Link href={l.href}>{l.label}</Link>
                      </span>
                    ))}
                  </p>
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

      {/* THE REST OF RESOURCES — Phase 2 consolidates guides, the blog, the
          datasheets, and the SDS library under this one section. */}
      <Chapter index="02" label="Downloads & Blog" gray />
      <section className="section bg-gray">
        <div className="container">
          <div className="grid-3">
            <Link href="/resources/blog" className="tech-card" style={{ display: "block" }}>
              <div className="tech-card__meta">Blog</div>
              <h3>Technical comparisons & notes</h3>
              <p>The comparison content that earns search traffic: application notes, materials explainers, and news from the laboratory.</p>
              <span className="btn btn__secondary btn__link mt-20"><span>Read the blog</span> <i className="fa fa-long-arrow-right" /></span>
            </Link>
            <Link href="/resources/datasheets" className="tech-card" style={{ display: "block" }}>
              <div className="tech-card__meta">Reference</div>
              <h3>Datasheets</h3>
              <p>Technical specifications as page content with a downloadable PDF each: grades, sizes, crystal types, coatings. Ungated, no form.</p>
              <span className="btn btn__secondary btn__link mt-20"><span>Browse datasheets</span> <i className="fa fa-long-arrow-right" /></span>
            </Link>
            <Link href="/resources/msds" className="tech-card" style={{ display: "block" }}>
              <div className="tech-card__meta">Safety</div>
              <h3>MSDS</h3>
              <p>Safety data sheets covering handling, storage, disposal, and regulatory information. Ungated, no login.</p>
              <span className="btn btn__secondary btn__link mt-20"><span>Browse MSDS</span> <i className="fa fa-long-arrow-right" /></span>
            </Link>
          </div>
        </div>
      </section>

      <Marquee logos={8} keywords={PRODUCT_KEYWORDS} />

      <BannerCTA
        subtitle="Can't find what you need?"
        title="Have a technical question the guides don't answer?"
        desc="Tell us the material, the process, and the finish you need, and someone who works with the material will help you specify. Replies within one business day."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
