import Link from "next/link";
import { footerColumns, site, languages } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="footer" className="footer footer-1">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 footer__widget footer__widget-about mb-30">
              <div className="footer__widget-content">
                <Link href="/" className="eid-logo eid-logo--footer">
                  <i className="fa fa-diamond" />
                  <span className="eid-logo__text">
                    <strong>EID Ltd</strong>
                    <em>Industrial Diamond &amp; CBN</em>
                  </span>
                </Link>
                <p className="mt-20">
                  Manufacturer and finisher of the full range of industrial diamond and superabrasive
                  materials, supplying tool makers worldwide.
                </p>
                <p>{site.address}</p>
                <p>
                  Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
                <p>
                  <a href="tel:+44" className="font-weight-bold">{site.phone}</a>
                </p>
              </div>
            </div>

            {footerColumns.map((col) => (
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
              <div className="eid-lang">
                {languages.map((l, i) => (
                  <span key={l} className={i === 0 ? "active" : ""}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
