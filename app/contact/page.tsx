import type { Metadata } from "next";
import { ImagePlaceholder } from "../_components/ui";
import { RequestQuotePanel, FeaturesRow } from "../_components/sections";
import { Chapter, ChapterMarker, ProcessSteps } from "../_components/award";
import { CrystalHeroPage } from "../_components/stone";
import Icon from "../_components/Icon";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact EID | Request a Quote or Sample | EID Ltd" },
  description:
    "Contact EID for industrial diamond and CBN quotes, samples, and technical specs. London-based manufacturer serving tool makers worldwide.",
};

export default function ContactPage() {
  return (
    <>
      <CrystalHeroPage
        eyebrow="A real person responds within 24 hours"
        title="Contact Us / Request a Quote"
        desc="Contact EID for industrial diamond and CBN quotes, samples, and technical specs. London-based manufacturer serving tool makers worldwide."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        imgLabel="EID — London, UK"
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      {/* RFQ PROCESS lead-in */}
      <section className="pt-90 pb-40">
        <div className="container">
          <ChapterMarker index="01" label="Request a Quote" />
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
                  { title: "Tell us the spec", desc: "Product, grade, size, quantity, and destination country — as much or as little as you have." },
                  { title: "We qualify & quote", desc: "A technical specialist reviews your enquiry and responds within 24 hours, not with 'please send info.'" },
                  { title: "Sample & supply", desc: "Order a sample to validate, then scheduled or stock supply to your lead time." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <RequestQuotePanel
        panelTitle="Tell us what you need."
        panelDesc="Request a quote, order a sample, or ask a technical question. The product dropdown pre-qualifies your enquiry so it arrives ready to action — not as 'please send info.'"
        formTitle="Request a Quote"
        formDesc="Name, company, country, product, grade, size, quantity — give us as much as you can and we'll respond fast."
        productOptions={products.map((p) => p.name)}
      />

      {/* COMPANY DETAILS + MAP */}
      <Chapter index="02" label="Find Us" />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="heading mb-30">
                <span className="heading__subtitle">Company details</span>
                <h2 className="heading__title">{site.name}</h2>
              </div>
              <ul style={{ listStyle: "none", display: "grid", gap: 16, margin: 0, padding: 0 }}>
                <li style={{ display: "flex", gap: 12 }}>
                  <Icon name="pin" style={{ color: "var(--eid-blue)" }} />
                  <span style={{ color: "var(--eid-muted)" }}>{site.address}</span>
                </li>
                <li style={{ display: "flex", gap: 12 }}>
                  <Icon name="phone" style={{ color: "var(--eid-blue)" }} />
                  <span style={{ color: "var(--eid-muted)" }}>{site.phone}</span>
                </li>
                <li style={{ display: "flex", gap: 12 }}>
                  <Icon name="mail" style={{ color: "var(--eid-blue)" }} />
                  <a href={`mailto:${site.email}`} style={{ color: "var(--eid-blue)" }}>{site.email}</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <ImagePlaceholder label="MAP — London, UK" minHeight={300} />
            </div>
          </div>
        </div>
      </section>

      <Chapter index="03" label="Why EID" />
      <FeaturesRow
        items={[
          { title: "ISO 9001 Certified", desc: "Quality management certified across production and supply chain.", href: "/quality" },
          { title: "In-House QC Lab", desc: "Every batch tested before it ships — no surprises.", href: "/quality" },
          { title: "Customers in 30+ Countries", desc: "Serving tool makers across Europe, the Middle East, and Asia.", href: "/about" },
          { title: "Full Diamond & CBN Range", desc: "One supplier, one standard, one delivery to manage.", href: "/products" },
        ]}
      />
    </>
  );
}
