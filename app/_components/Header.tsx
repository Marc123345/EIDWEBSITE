"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { primaryNav, resourceMenu as resourceMenuBase, site } from "@/lib/site";
import { MEGA_MENU_COLUMNS } from "@/lib/products";
import { getProducts, getApplications, t } from "@/lib/i18n-content";
import type { Locale } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const close = () => setOpen(false);

  const products = getProducts(locale);
  const nav = primaryNav.map((i) => ({ ...i, label: t(locale, i.label) }));
  // The mega-menu exposes the eight product pages directly, laid out 2-2-2-2,
  // and nothing sits below them. The mesh/micron splits, coatings, PCBN, and PCD
  // blanks are sections inside their parent page, reachable by anchor from the
  // page itself and from the footer index, never as menu entries.
  const productColumns = MEGA_MENU_COLUMNS.map((column) =>
    column
      .map((slug) => products.find((p) => p.slug === slug))
      .filter((p): p is NonNullable<typeof p> => Boolean(p))
      .map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
  );
  const applicationMenu = getApplications(locale).map((a) => ({
    label: a.name,
    href: `/applications/${a.slug}`,
  }));
  const resourceMenu = resourceMenuBase.map((r) => ({ label: t(locale, r.label), href: r.href }));

  return (
    <header id="header" className="header header-white header-full header-full-layout2">
      <nav className="navbar navbar-expand-lg">
        {/* One bar, not two. Architecture §3 specifies the header as
            Home · Products · Applications · Quality · Resources · About ·
            Contact · [WhatsApp] — the phone/email/location strip was extra
            chrome, and those details live in the footer and on /contact. */}
        <div className="navbar__bottom sticky-navbar">
          <div className="container navbar__bar">
            <Link
              className="navbar-brand"
              href="/"
              onClick={close}
              aria-label="EID — Industrial Diamonds, home"
            >
              <span className="eid-wordmark eid-wordmark--light">
                <span className="eid-wordmark__mark">EID</span>
                <span className="eid-wordmark__sub">Industrial Diamonds</span>
              </span>
            </Link>

            {/* Below lg the nav collapses, but §3 and §9 require Contact and
                WhatsApp to stay visible on every page, so they sit in the bar
                rather than inside the hamburger. */}
            <div className="header__compact d-lg-none">
              <a
                href={site.whatsappHref}
                className="header__whatsapp header__whatsapp--sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp EID on ${site.whatsapp}`}
              >
                <i className="fa fa-whatsapp" aria-hidden="true" />
              </a>
              <Link href="/contact" className="btn btn__primary header__compact-cta" onClick={close}>
                {t(locale, "Contact")}
              </Link>
            </div>

            <button
              className={`navbar-toggler${open ? " actived" : ""}`}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mainNavigation"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="menu-lines">
                <span />
              </span>
            </button>

            <div className={`collapse navbar-collapse${open ? " menu-opened" : ""}`} id="mainNavigation">
              <ul className="navbar-nav">
                {nav.map((item) => {
                  if (item.cta) {
                    return (
                      <li key={item.href} className="nav__item nav__item--cta d-none d-lg-flex">
                        <Link href={item.href} className="btn btn__primary nav__cta" onClick={close}>
                          {item.label} <i className="fa fa-long-arrow-right" />
                        </Link>
                        <a
                          href={site.whatsappHref}
                          className="header__whatsapp"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`WhatsApp EID on ${site.whatsapp}`}
                          title="Chat with us on WhatsApp"
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </a>
                        <LanguageSwitcher />
                      </li>
                    );
                  }
                  if (!item.menu) {
                    return (
                      <li key={item.href} className="nav__item">
                        <Link
                          href={item.href}
                          className={`nav__item-link${isActive(item.href) ? " active" : ""}`}
                          onClick={close}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={item.href} className="nav__item with-dropdown">
                      <Link
                        href={item.href}
                        className={`dropdown-toggle nav__item-link${isActive(item.href) ? " active" : ""}`}
                        onClick={close}
                      >
                        {item.label}
                      </Link>
                      <i className="fa fa-angle-right" data-toggle="dropdown" />

                      {item.menu === "products" && (
                        <div className="dropdown-menu eid-mega">
                          <div className="eid-mega__grid eid-mega__grid--2222">
                            {productColumns.map((column, ci) => (
                              <div key={ci} className="eid-mega__col">
                                <ul>
                                  {column.map((l) => (
                                    <li key={l.href}>
                                      <Link href={l.href} onClick={close}>
                                        <span className="eid-mega__name">{l.label}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <Link className="eid-mega__all" href="/products" onClick={close}>
                            {t(locale, "View all products")} <i className="fa fa-long-arrow-right" />
                          </Link>
                        </div>
                      )}

                      {item.menu === "applications" && (
                        <ul className="dropdown-menu">
                          {applicationMenu.map((l) => (
                            <li key={l.href} className="nav__item">
                              <Link className="nav__item-link" href={l.href} onClick={close}>
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.menu === "resources" && (
                        <ul className="dropdown-menu">
                          {resourceMenu.map((l) => (
                            <li key={l.href} className="nav__item">
                              <Link className="nav__item-link" href={l.href} onClick={close}>
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}

                {/* mobile-only CTA */}
                {/* Mobile: the switcher lives here because the desktop cluster
                    that normally carries it is hidden below lg. */}
                <li className="nav__item nav__item--lang d-lg-none">
                  <LanguageSwitcher />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
