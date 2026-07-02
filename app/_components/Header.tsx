"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  primaryNav,
  productMenu,
  industryMenu,
  resourceMenu,
  site,
} from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const close = () => setOpen(false);

  return (
    <header id="header" className="header header-white header-full header-full-layout2">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/" onClick={close}>
            <span className="eid-logo">
              <i className="fa fa-diamond" />
              <span className="eid-logo__text">
                <strong>EID</strong>
                <em>Industrial Diamond &amp; CBN</em>
              </span>
            </span>
          </Link>

          <div className="header__topbar d-none d-lg-block">
            <div className="d-flex flex-wrap">
              <ul className="contact__list list-unstyled">
                <li>
                  <i className="fa fa-phone" />
                  <div>
                    <span>Call Us:</span>
                    <strong>{site.phone}</strong>
                  </div>
                </li>
                <li>
                  <i className="fa fa-envelope" />
                  <div>
                    <span>Email Us:</span>
                    <strong>{site.email}</strong>
                  </div>
                </li>
                <li>
                  <i className="fa fa-map-marker" />
                  <div>
                    <span>Based In:</span>
                    <strong>{site.location}</strong>
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="btn btn__secondary module__btn-request" onClick={close}>
                <span>Request A Quote</span>
                <i className="fa fa-long-arrow-right" />
              </Link>
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
                {primaryNav.map((item) => {
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
                            View all products <i className="fa fa-long-arrow-right" />
                          </Link>
                        </div>
                      )}

                      {item.menu === "industries" && (
                        <ul className="dropdown-menu">
                          {industryMenu.map((l) => (
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
                    Contact
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
