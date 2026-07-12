import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import "@/app/globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import TemplateScripts from "@/app/_components/TemplateScripts";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";

// Organization / LocalBusiness structured data (real EID NAP details).
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EID Ltd",
  legalName: "EID Ltd.",
  url: "https://www.eid-ltd.com",
  description:
    "London-based manufacturer of the full industrial diamond and CBN range: grit, powder, CVD single crystal, MCD, PCD and PCBN, graded and QC-tested in-house. ISO 9001.",
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: "Industrial Diamond & CBN Manufacturer | EID Ltd",
    template: "%s | EID Ltd",
  },
  description:
    "EID manufactures the full industrial diamond and CBN range: grit, powder, CVD single crystal, MCD, PCD and PCBN, graded and QC-tested in-house. ISO 9001.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale}>
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
        <NextIntlClientProvider>
          <div className="wrapper">
            <Header />
            {children}
            <Footer />
          </div>
          <a href="#" id="scrollTopBtn" aria-label="Scroll to top">
            <i className="fa fa-angle-up" />
          </a>
          <TemplateScripts />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
