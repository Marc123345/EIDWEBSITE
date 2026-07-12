"use client";

/* =========================================================================
   EID heroes — text-forward dark hero, no 3D crystal.
   CrystalHero powers the home hero (rotating slides); CrystalHeroPage powers
   every inner page and can host a static product diagram in its side column.
   ========================================================================= */

import Link from "next/link";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

const EASE = [0.22, 1, 0.36, 1] as const;

const DEFAULT_META = [
  { value: "50+", label: "Years' experience" },
  { value: "12", label: "Product lines" },
  { value: "ISO 9001", label: "Certified" },
];

/* -------------------------------------------------------------------------
   CrystalHeroPage — single-headline hero for every inner page. When a page
   supplies a `visual` (a static product SVG), it sits in the side column;
   otherwise the hero is text-only and full width.
   ------------------------------------------------------------------------- */
export function CrystalHeroPage({
  eyebrow,
  title,
  desc,
  crumbs,
  visual,
  metaStats = DEFAULT_META,
  primaryCta = { label: "Request a Quote", href: "/contact" },
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  crumbs: { label: string; href?: string }[];
  imgLabel?: string; // accepted for call-site parity; no longer rendered
  visual?: ReactNode;
  metaStats?: { value: string; label: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  const words = title.split(" ");
  const hasVisual = !!visual;
  return (
    <section className={`crystal-hero${hasVisual ? "" : " crystal-hero--text"}`}>
      <div className="crystal-hero__grid" aria-hidden />
      <div className="container">
        <div className="crystal-hero__inner">
          <div className="crystal-hero__copy">
            <motion.span
              className="crystal-hero__kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="crystal-hero__kicker-dot" />
              Industrial Diamond &amp; CBN · London, UK
            </motion.span>

            <motion.span
              className="crystal-hero__eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
            >
              {eyebrow}
            </motion.span>

            <h1 className="crystal-hero__title">
              {words.map((w, wi) => (
                <motion.span
                  key={wi}
                  className="crystal-hero__word"
                  initial={{ opacity: 0, y: "0.5em" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.1 + wi * 0.04 }}
                >
                  {w}&nbsp;
                </motion.span>
              ))}
            </h1>

            {desc && (
              <motion.p
                className="crystal-hero__desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              >
                {desc}
              </motion.p>
            )}

            <div className="crystal-hero__cta-row">
              <Link href={primaryCta.href} className="btn btn__primary btn__hover2">
                {primaryCta.label} <Icon name="arrow" />
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="crystal-hero__link">
                  {secondaryCta.label}
                </Link>
              )}
            </div>

            <nav aria-label="breadcrumb" className="crystal-hero__crumbs">
              {crumbs.map((c, i) => (
                <span key={i} className="crystal-hero__crumb">
                  {c.href ? (
                    <Link href={c.href}>{c.label}</Link>
                  ) : (
                    <span className="current">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span className="sep">/</span>}
                </span>
              ))}
            </nav>

            {metaStats.length > 0 && (
              <div className="crystal-hero__meta">
                {metaStats.map((m) => (
                  <div key={m.label} className="crystal-hero__meta-item">
                    <span className="crystal-hero__meta-value">{m.value}</span>
                    <span className="crystal-hero__meta-label">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {hasVisual && (
            <div className="crystal-hero__visual">
              <div className="crystal-hero__glow" aria-hidden />
              <div className="crystal-hero__still">{visual}</div>
            </div>
          )}
        </div>
      </div>
      <div className="hero-rule" aria-hidden />
    </section>
  );
}

/* -------------------------------------------------------------------------
   PageHeroBand — compact inner-page header kept for call-site parity. Renders
   a static product visual when provided; otherwise text-only.
   ------------------------------------------------------------------------- */
export function PageHeroBand({
  eyebrow,
  title,
  crumbs,
  visual,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  crumbs: { label: string; href?: string }[];
  imgLabel?: string;
  visual?: ReactNode;
  metaStats?: { value: string; label: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="container page-hero__inner">
          <div className="page-hero__copy">
            <span className="page-hero__subheading">{eyebrow}</span>
            <h1 className="page-hero__heading">{title}</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb page-hero__crumbs">
                {crumbs.map((c, i) =>
                  c.href ? (
                    <li key={i} className="breadcrumb-item">
                      <Link href={c.href}>{c.label}</Link>
                    </li>
                  ) : (
                    <li key={i} className="breadcrumb-item active" aria-current="page">
                      {c.label}
                    </li>
                  )
                )}
              </ol>
            </nav>
          </div>
          {visual && (
            <div className="page-hero__stone page-hero__stone--visual" aria-hidden="true">
              {visual}
            </div>
          )}
        </div>
      </section>
      <div className="hero-rule" aria-hidden="true" />
    </>
  );
}

type HeroSlide = { eyebrow: string; title: string; desc: string };

export function CrystalHero({
  slides,
  metaStats,
  interval = 6200,
}: {
  slides: HeroSlide[];
  metaStats: { value: string; label: string }[];
  interval?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  const slide = slides[i];

  return (
    <section className="crystal-hero crystal-hero--text">
      <div className="crystal-hero__grid" aria-hidden />
      <div className="container">
        <div className="crystal-hero__inner">
          <div className="crystal-hero__copy">
            <motion.span
              className="crystal-hero__kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="crystal-hero__kicker-dot" />
              Industrial Diamond &amp; CBN · London, UK
            </motion.span>

            <div className="crystal-hero__rotator">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <span className="crystal-hero__eyebrow">{slide.eyebrow}</span>
                  <h1 className="crystal-hero__title">{slide.title}</h1>
                  <p className="crystal-hero__desc">{slide.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="crystal-hero__cta-row">
              <Link href="/contact" className="btn btn__primary btn__hover2">
                Request a Quote <Icon name="arrow" />
              </Link>
              <Link href="/products" className="crystal-hero__link">
                View the full range
              </Link>
            </div>

            {slides.length > 1 && (
              <div className="crystal-hero__dots" role="tablist" aria-label="Hero slides">
                {slides.map((_, di) => (
                  <button
                    key={di}
                    type="button"
                    aria-label={`Show slide ${di + 1}`}
                    aria-selected={di === i}
                    className={`crystal-hero__dot${di === i ? " is-active" : ""}`}
                    onClick={() => setI(di)}
                  />
                ))}
              </div>
            )}

            <div className="crystal-hero__meta">
              {metaStats.map((m) => (
                <div key={m.label} className="crystal-hero__meta-item">
                  <span className="crystal-hero__meta-value">{m.value}</span>
                  <span className="crystal-hero__meta-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-rule" aria-hidden />
    </section>
  );
}
