import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import TemplateScripts from "./_components/TemplateScripts";
import { site } from "@/lib/site";

// Organization / LocalBusiness structured data (real EID NAP details).
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EID Ltd",
  legalName: "EID Ltd.",
  url: "https://www.eid-ltd.com",
  logo: "https://eid-nextjs.vercel.app/eid/logo-white.png",
  description:
    "London-based manufacturer and finisher of the full range of industrial diamond and CBN — grit, powder, CVD single crystal, MCD, PCD/PCBN — with in-house QC and ISO 9001 consistency.",
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "EID House, 12 St Cross Street",
    addressLocality: "London",
    postalCode: "EC1N 8UB",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    email: site.email,
    contactType: "sales",
    areaServed: "Worldwide",
  },
};

export const metadata: Metadata = {
  title: {
    default: "Industrial Diamond & CBN Powder Manufacturer | EID Ltd",
    template: "%s | EID Ltd",
  },
  description:
    "EID manufactures the full range of industrial diamond and CBN — grit, powder, CVD single crystal, MCD, PCD/PCBN — with in-house QC and ISO 9001 consistency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Industic template typography */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700%7CRubik:400,500,700&display=swap"
        />
        {/* Industic template stylesheets (orange recolored to Industrial Precision blue) */}
        <link rel="stylesheet" href="/industic/assets/css/libraries.css" />
        <link rel="stylesheet" href="/industic/assets/css/style.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
        <a href="#" id="scrollTopBtn" aria-label="Scroll to top">
          <i className="fa fa-angle-up" />
        </a>
        <TemplateScripts />
      </body>
    </html>
  );
}
