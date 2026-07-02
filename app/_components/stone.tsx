"use client";

/* =========================================================================
   CrystalHero ("The Stone") — dramatic home hero: a faceted diamond crystal
   with a metrology HUD, rotating headline, and a metric row.
   Re-skinned to the EID design system: --eid-midnight canvas, --eid-blue
   accents (no rainbow dispersion), Rubik/Roboto type (no Archivo swap).
   ========================================================================= */

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

const EASE = [0.22, 1, 0.36, 1] as const;

type HeroSlide = { eyebrow: string; title: string; desc: string };

/* ---- Faceted SVG diamond, shaded in the EID blue ramp ------------------- */
function DiamondCrystal() {
  return (
    <svg
      className="stone-canvas"
      width="420"
      height="440"
      viewBox="0 0 400 440"
      role="img"
      aria-label="Faceted industrial diamond crystal"
    >
      <defs>
        <linearGradient id="dTable" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8eeff" />
          <stop offset="1" stopColor="#7d97e8" />
        </linearGradient>
        <linearGradient id="dCrownL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6f8fe0" />
          <stop offset="1" stopColor="#1f4eb3" />
        </linearGradient>
        <linearGradient id="dCrownR" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5878d4" />
          <stop offset="1" stopColor="#153a86" />
        </linearGradient>
        <linearGradient id="dPavL" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#173a8c" />
          <stop offset="1" stopColor="#001a4d" />
        </linearGradient>
        <linearGradient id="dPavC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#295fc0" />
          <stop offset="1" stopColor="#002a73" />
        </linearGradient>
        <linearGradient id="dPavR" x1="1" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#1c449a" />
          <stop offset="1" stopColor="#001238" />
        </linearGradient>
        <linearGradient id="dShimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#dbe6ff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="diamondClip">
          <polygon points="140,60 260,60 340,150 200,410 60,150" />
        </clipPath>
      </defs>

      {/* facets */}
      <g
        stroke="rgba(179,197,255,0.28)"
        strokeWidth="1"
        strokeLinejoin="round"
      >
        <polygon points="140,60 260,60 230,150 170,150" fill="url(#dTable)" />
        <polygon points="140,60 170,150 60,150" fill="url(#dCrownL)" />
        <polygon points="260,60 340,150 230,150" fill="url(#dCrownR)" />
        <polygon points="60,150 170,150 200,410" fill="url(#dPavL)" />
        <polygon points="170,150 230,150 200,410" fill="url(#dPavC)" />
        <polygon points="230,150 340,150 200,410" fill="url(#dPavR)" />
      </g>

      {/* girdle highlight + table glint */}
      <line
        x1="60"
        y1="150"
        x2="340"
        y2="150"
        stroke="rgba(219,230,255,0.55)"
        strokeWidth="1.5"
      />
      <polygon points="140,60 200,60 172,150" fill="#ffffff" opacity="0.12" />

      {/* moving specular shimmer, clipped to the stone */}
      <g clipPath="url(#diamondClip)">
        <rect
          className="stone-shimmer"
          x="-160"
          y="0"
          width="120"
          height="440"
          fill="url(#dShimmer)"
          transform="skewX(-18)"
        />
      </g>
    </svg>
  );
}

export function CrystalHero({
  slides,
  metaStats,
  interval = 5600,
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
    <section className="crystal-hero">
      <div className="crystal-hero__grid" aria-hidden />
      <div className="container">
        <div className="crystal-hero__inner">
          {/* LEFT — copy */}
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

          {/* RIGHT — the stone */}
          <motion.div
            className="crystal-hero__visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          >
            <div className="crystal-hero__glow" aria-hidden />
            <motion.div
              className="stone-float"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            >
              <DiamondCrystal />
            </motion.div>

            <div className="stone-hud" aria-hidden>
              <span className="stone-hud__ring" />
              <span className="stone-hud__tag stone-hud__tag--tl">C — CARBON</span>
              <span className="stone-hud__tag stone-hud__tag--tr">MOHS 10</span>
              <span className="stone-hud__tag stone-hud__tag--bl">ρ 3.52 g/cm³</span>
              <span className="stone-hud__tag stone-hud__tag--br">ISO 9001</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
