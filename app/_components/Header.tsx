"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { primaryNav, resourceMenu as resourceMenuBase, site } from "@/lib/site";
import { PRODUCT_FAMILIES } from "@/lib/products";
import { getProducts, getApplications, getFamilyLabel, t } from "@/lib/i18n-content";
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
  const productMenu = PRODUCT_FAMILIES.map((family) => ({
    family: getFamilyLabel(locale, family),
    items: products
      .filter((p) => p.family === family)
      .map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
  }));
  const applicationMenu = getApplications(locale).map((a) => ({
    label: a.name,
    href: `/applications/${a.slug}`,
  }));
  const resourceMenu = resourceMenuBase.map((r) => ({ label: t(locale, r.label), href: r.href }));

  return (
    <header id="header" className="header header-white header-full header-full-layout2">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/" onClick={close} aria-label="EID — Industrial Diamonds, home">
            <span className="eid-wordmark">
              <span className="eid-wordmark__mark">EID</span>
              <span className="eid-wordmark__sub">Industrial Diamonds</span>
            </span>
          </Link>

          <div className="header__topbar d-none d-lg-block">
            <div className="d-flex flex-wrap">
              <ul className="contact__list list-unstyled">
                <li>
                  <i className="fa fa-phone" />
                  <div>
                    <span>{t(locale, "Call Us:")}</span>
                    <strong>{site.phone}</strong>
                  </div>
                </li>
                <li>
                  <i className="fa fa-envelope" />
                  <div>
                    <span>{t(locale, "Email Us:")}</span>
                    <strong>{site.email}</strong>
                  </div>
                </li>
                <li>
                  <i className="fa fa-map-marker" />
                  <div>
                    <span>{t(locale, "Based In:")}</span>
                    <strong>{site.location}</strong>
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="btn btn__secondary module__btn-request" onClick={close}>
                <span>{t(locale, "Request A Quote")}</span>
                <i className="fa fa-long-arrow-right" />
              </Link>
              <LanguageSwitcher />
            </div>
          </div>

          <button
            className={`navbar-toggler${open ? " actived" : ""}`}
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="menu-lines">
              <span />
            </span>
          </button>
        </div>

        <div className="navbar__bottom sticky-navbar">
          <div className="container">
            <div className={`collapse navbar-collapse${open ? " menu-opened" : ""}`} id="mainNavigation">
              <ul className="navbar-nav">
                {nav.map((item) => {
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
                          <div className="eid-mega__grid">
                            {productMenu.map((group) => (
                              <div key={group.family} className="eid-mega__col">
                                <h6>{group.family}</h6>
                                <ul>
                                  {group.items.map((l) => (
                                    <li key={l.href}>
                                      <Link href={l.href} onClick={close}>
                                        {l.label}
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
                <li className="nav__item d-lg-none">
                  <Link href="/contact" className="btn btn__primary btn-block" onClick={close}>
                    {t(locale, "Contact")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
