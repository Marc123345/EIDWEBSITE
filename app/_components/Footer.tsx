import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { getProducts, getApplications, t } from "@/lib/i18n-content";
import type { Locale } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

export default async function Footer() {
  const locale = (await getLocale()) as Locale;

  const columns = [
    {
      title: t(locale, "Products"),
      links: getProducts(locale).map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
    },
    {
      title: t(locale, "Applications"),
      links: getApplications(locale).map((a) => ({ label: a.name, href: `/applications/${a.slug}` })),
    },
    {
      title: t(locale, "Company & Resources"),
      links: [
        { label: t(locale, "Products Overview"), href: "/products" },
        { label: t(locale, "Quality, QC & ISO 9001"), href: "/quality" },
        { label: t(locale, "Resources & Guides"), href: "/resources" },
        { label: t(locale, "Datasheets"), href: "/resources/datasheets" },
        { label: t(locale, "MSDS"), href: "/resources/msds" },
        { label: t(locale, "Blog"), href: "/blog" },
        { label: t(locale, "About"), href: "/about" },
        { label: t(locale, "Contact"), href: "/contact" },
      ],
    },
  ];

  return (
    <footer id="footer" className="footer footer-1">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 footer__widget footer__widget-about mb-30">
              <div className="footer__widget-content">
                <Link href="/" className="eid-footer-brand" aria-label="EID — Industrial Diamonds, home">
                  <span className="eid-wordmark eid-wordmark--light">
                    <span className="eid-wordmark__mark">EID</span>
                    <span className="eid-wordmark__sub">Industrial Diamonds</span>
                  </span>
                </Link>
                <p className="mt-20">{t(locale, "footerAbout")}</p>
                <p>{site.address}</p>
                <p>
                  Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
                <p>
                  <a href={site.phoneHref} className="font-weight-bold">{site.phone}</a>
                </p>
              </div>
            </div>

            {columns.map((col) => (
              <div
                key={col.title}
                className="col-6 col-sm-6 col-md-4 col-lg footer__widget footer__widget-nav"
              >
                <h6 className="footer__widget-title">{col.title}</h6>
                <div className="footer__widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      {col.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href}>{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div className="footer__copyright">
                <nav>
                  <ul className="list-unstyled footer__copyright-links d-flex flex-wrap">
                    <li>
                      <span>© 2026 EID Ltd · Industrial Diamond &amp; CBN Manufacturer · London, UK</span>
                    </li>
                    <li><Link href="/contact">Terms</Link></li>
                    <li><Link href="/contact">Privacy</Link></li>
                    <li><Link href="/products">Sitemap</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-md-end">
              <LanguageSwitcher footer />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
