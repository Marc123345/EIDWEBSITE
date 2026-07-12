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
    "Contact EID for industrial diamond and CBN quotes, samples, and technical specs. London manufacturer, real technical replies within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <CrystalHeroPage
        eyebrow="A real person replies within one business day"
        title="Contact Us / Request a Quote"
        desc="Tell us the grade you need. Request a quote, order a sample, or ask a technical question. One form, and a real person who works with the material replies within one business day."
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
                  { title: "Tell us the spec", desc: "Product, grade, size, quantity, and destination country. Not sure of the exact grade? Give us the material you are working and the finish you need, and we will specify it for you." },
                  { title: "We qualify & quote", desc: "A technical specialist reviews your enquiry and replies within one business day with a real answer, not a request for more info." },
                  { title: "Sample & supply", desc: "Order a sample to validate, then scheduled or stock supply to your lead time." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <RequestQuotePanel
        panelTitle="Tell us the grade you need."
        panelDesc="Pick the closest product. Not sure? Choose 'Help me specify' and describe your application. The dropdown pre-qualifies your enquiry so it arrives ready to action, and a real person replies within one business day."
        formTitle="Request a Quote"
        formDesc="Name, company, country, product, grade, size, quantity. Give us as much as you can and someone who works with the material replies within one business day."
        productOptions={["Help me specify", ...products.map((p) => p.name)]}
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
                  <span style={{ color: "var(--eid-muted)" }}>Tel: {site.phone} · Fax: {site.fax}</span>
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
          { title: "In-House QC Lab", desc: "Every batch tested before it ships, no surprises.", href: "/quality" },
          { title: "50+ Years' Experience", desc: "Serving tool makers across Europe, the Middle East, and Asia.", href: "/about" },
          { title: "Full Diamond & CBN Range", desc: "One supplier, one standard, one delivery to manage.", href: "/products" },
        ]}
      />
    </>
  );
}
