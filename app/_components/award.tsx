"use client";

/* =========================================================================
   AWARD SECTIONS — framer-motion, light/blue EID theme.
   Structural patterns borrowed from the reference sites, re-skinned to
   EID's Industrial-Precision blue on a light canvas:
     - ChapterMarker  ......  "01 —— Label" dossier spine (all references)
     - HeroMasthead   ......  cinematic split hero w/ rotating headlines,
                              mouse-parallax visual, corner crop-marks, glow
                              (H2H / Ask Africa CaseMasthead + portfolio hero)
     - StatsBar       ......  big tabular-nums metrics, count-up on view
                              (StatsBar / Vharnani AnimatedCounter)
     - Marquee        ......  logo strip + keyword ticker (portfolio TrustedBy
                              + Vharnani / ServiceMarquee)
     - BentoGallery   ......  12-col asymmetric image montage (H2H / Ask Africa)
     - ProcessSteps   ......  numbered RFQ steps (portfolio colophon)
   ========================================================================= */

import { Link } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Icon, { IconName } from "./Icon";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Typographic trust strip — real trade descriptors until real logos exist.
   Never ship "CLIENT LOGO" boxes to a procurement buyer. */
// Buyer types only. The copy deck names the kinds of tool maker EID supplies
// ("dental burs, optics, watch components, and abrasives for glass and stone")
// and the regions ("Europe, Asia, the Americas, and the Middle East"), but never
// pairs a customer type with a country. Do not reintroduce named geographies.
export const TRADE_STRIP = [
  "Diamond tool makers",
  "Dental instrument producers",
  "Saw blade producers",
  "Grinding wheel makers",
  "Wire die producers",
  "Precision optics tooling",
  "Stone & construction tooling",
  "PCD tooling",
];

/* Shared keyword set for the marquee ticker across pages. */
export const PRODUCT_KEYWORDS = [
  "ISO 9001",
  "Natural Diamond",
  "CBN",
  "CVD Single Crystal",
  "Metal Bond",
  "Resin Bond",
  "MCD",
  "PCD / PCBN",
  "Micron Powder",
  "Made in London",
];

/* -------------------------------------------------------------------------
   ChapterMarker — "01 —— Capabilities". A hairline rule + mono label that
   gives every section a designed, magazine-chapter rhythm.
   ------------------------------------------------------------------------- */
export function ChapterMarker({
  index,
  label,
  align = "left",
}: {
  index: string;
  label: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      className={`chapter-marker chapter-marker--${align}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <span className="chapter-marker__index">{index}</span>
      <span className="chapter-marker__rule" />
      <span className="chapter-marker__label">{label}</span>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------
   Chapter — a ChapterMarker pre-wrapped in a .container, for one-line
   insertion between full-width section components on inner pages.
   ------------------------------------------------------------------------- */
export function Chapter({
  index,
  label,
  gray = false,
}: {
  index: string;
  label: string;
  gray?: boolean;
}) {
  return (
    <div className={gray ? "chapter-band chapter-band--gray" : "chapter-band"}>
      <div className="container">
        <ChapterMarker index={index} label={label} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   HeroMasthead — split cinematic hero. Left: eyebrow + rotating headline +
   description + CTAs + meta-stats. Right: framed visual with corner marks,
   soft blue glow, and subtle mouse parallax.
   ------------------------------------------------------------------------- */
type HeroSlide = { eyebrow: string; title: string; desc: string };

export function HeroMasthead({
  slides,
  metaStats,
  imgLabel,
  interval = 5600,
}: {
  slides: HeroSlide[];
  metaStats: { value: string; label: string }[];
  imgLabel: string;
  interval?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  // Mouse parallax for the visual side.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });
  const imgX = useTransform(sx, (v) => v * 14);
  const imgY = useTransform(sy, (v) => v * 14);
  const glowX = useTransform(sx, (v) => v * -26);
  const glowY = useTransform(sy, (v) => v * -26);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const slide = slides[i];
  const words = slide.title.split(" ");

  return (
    <section
      className="hero-masthead"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="container">
        <div className="hero-masthead__grid">
          {/* LEFT — copy */}
          <div className="hero-masthead__copy">
            <motion.span
              className="hero-masthead__kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="hero-masthead__kicker-dot" />
              Industrial Diamond &amp; CBN · London, UK
            </motion.span>

            <div className="hero-masthead__rotator">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <span className="hero-masthead__eyebrow">{slide.eyebrow}</span>
                  <h1 className="hero-masthead__title">
                    {words.map((w, wi) => (
                      <motion.span
                        key={`${i}-${wi}`}
                        className="hero-masthead__word"
                        initial={{ opacity: 0, y: "0.5em" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: EASE,
                          delay: 0.08 + wi * 0.045,
                        }}
                      >
                        {w}&nbsp;
                      </motion.span>
                    ))}
                  </h1>
                  <p className="hero-masthead__desc">{slide.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hero-masthead__actions">
              <Link href="/contact" className="btn btn__primary btn__hover2">
                Request a Quote <Icon name="arrow" />
              </Link>
              <Link href="/products" className="btn btn__white btn__hover2">
                View Products <Icon name="arrow" />
              </Link>
            </div>

            {/* progress dots for the rotator */}
            {slides.length > 1 && (
              <div className="hero-masthead__dots" role="tablist" aria-label="Hero slides">
                {slides.map((_, di) => (
                  <button
                    key={di}
                    type="button"
                    aria-label={`Show slide ${di + 1}`}
                    aria-selected={di === i}
                    className={`hero-masthead__dot${di === i ? " is-active" : ""}`}
                    onClick={() => setI(di)}
                  />
                ))}
              </div>
            )}

            <div className="hero-masthead__meta">
              {metaStats.map((m) => (
                <div key={m.label} className="hero-masthead__meta-item">
                  <span className="hero-masthead__meta-value">{m.value}</span>
                  <span className="hero-masthead__meta-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — visual */}
          <motion.div
            className="hero-masthead__visual"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          >
            <motion.span
              className="hero-masthead__glow"
              style={{ x: glowX, y: glowY }}
              aria-hidden
            />
            <motion.div
              className="hero-masthead__frame"
              style={{ x: imgX, y: imgY }}
            >
              <div className="hero-masthead__img img-ph">
                <span>{imgLabel}</span>
              </div>
              <span className="hero-masthead__tick hero-masthead__tick--tl" />
              <span className="hero-masthead__tick hero-masthead__tick--tr" />
              <span className="hero-masthead__tick hero-masthead__tick--bl" />
              <span className="hero-masthead__tick hero-masthead__tick--br" />
            </motion.div>
            <div className="hero-masthead__badge">
              <Icon name="shield" />
              <span>
                ISO 9001
                <br />
                Certified
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   HeroPage — inner-page hero in the home-masthead style: single headline,
   breadcrumb, meta stats, and the same framed visual with glow + corner
   marks. Replaces the flat PageTitle banner on every sub-page.
   ------------------------------------------------------------------------- */
const DEFAULT_HERO_META = [
  { value: "50+", label: "Years' experience" },
  { value: "8", label: "Product groups" },
  { value: "ISO 9001", label: "Certified" },
];

export function HeroPage({
  eyebrow,
  title,
  desc,
  crumbs,
  imgLabel,
  visual,
  metaStats = DEFAULT_HERO_META,
  primaryCta = { label: "Request a Quote", href: "/contact" },
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  crumbs: { label: string; href?: string }[];
  imgLabel?: string;
  visual?: React.ReactNode;
  metaStats?: { value: string; label: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  void imgLabel;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });
  const imgX = useTransform(sx, (v) => v * 14);
  const imgY = useTransform(sy, (v) => v * 14);
  const glowX = useTransform(sx, (v) => v * -26);
  const glowY = useTransform(sy, (v) => v * -26);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const words = title.split(" ");

  return (
    <section
      className="hero-masthead hero-masthead--page"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="container">
        <div className="hero-masthead__grid">
          {/* LEFT — copy */}
          <div className="hero-masthead__copy">
            <motion.span
              className="hero-masthead__kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="hero-masthead__kicker-dot" />
              Industrial Diamond &amp; CBN · London, UK
            </motion.span>

            <motion.span
              className="hero-masthead__eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
            >
              {eyebrow}
            </motion.span>

            <h1 className="hero-masthead__title">
              {words.map((w, wi) => (
                <motion.span
                  key={wi}
                  className="hero-masthead__word"
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
                className="hero-masthead__desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              >
                {desc}
              </motion.p>
            )}

            <div className="hero-masthead__actions">
              <Link href={primaryCta.href} className="btn btn__primary btn__hover2">
                {primaryCta.label} <Icon name="arrow" />
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn btn__white btn__hover2">
                  {secondaryCta.label} <Icon name="arrow" />
                </Link>
              )}
            </div>

            <nav aria-label="breadcrumb" className="hero-masthead__crumbs">
              {crumbs.map((c, i) => (
                <span key={i} className="hero-masthead__crumb">
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
              <div className="hero-masthead__meta">
                {metaStats.map((m) => (
                  <div key={m.label} className="hero-masthead__meta-item">
                    <span className="hero-masthead__meta-value">{m.value}</span>
                    <span className="hero-masthead__meta-label">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — visual */}
          <motion.div
            className="hero-masthead__visual"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          >
            <motion.span
              className="hero-masthead__glow"
              style={{ x: glowX, y: glowY }}
              aria-hidden
            />
            <motion.div className="hero-masthead__frame" style={{ x: imgX, y: imgY }}>
              <div className="hero-masthead__img stone-frame">
                <div className="stone-frame__grid" aria-hidden="true" />
                {visual ?? (
                  <>
                    <span className="stone-frame__tag stone-frame__tag--tl">C · CARBON</span>
                    <span className="stone-frame__tag stone-frame__tag--br">10 MOHS · ISO 9001</span>
                  </>
                )}
              </div>
              <span className="hero-masthead__tick hero-masthead__tick--tl" />
              <span className="hero-masthead__tick hero-masthead__tick--tr" />
              <span className="hero-masthead__tick hero-masthead__tick--bl" />
              <span className="hero-masthead__tick hero-masthead__tick--br" />
            </motion.div>
            <div className="hero-masthead__badge">
              <Icon name="shield" />
              <span>
                ISO 9001
                <br />
                Certified
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   CountUp — animates 0 → target when scrolled into view.
   ------------------------------------------------------------------------- */
function CountUp({
  value,
  suffix = "",
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start = 0;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------
   StatsBar — confident metric strip, hairline top/bottom, count-up numbers.
   ------------------------------------------------------------------------- */
export function StatsBar({
  items,
}: {
  items: { value: number; suffix?: string; label: string }[];
}) {
  return (
    <section className="statsbar">
      <div className="container">
        <div className="statsbar__grid">
          {items.map((s, i) => (
            <motion.div
              key={s.label}
              className="statsbar__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
            >
              <div className="statsbar__value">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="statsbar__label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Marquee — infinite logo strip + keyword ticker (opposite direction).
   Pure CSS animation (translateX -50% on a doubled track), hover-pause.
   ------------------------------------------------------------------------- */
export function Marquee({
  logos = 8,
  keywords,
}: {
  logos?: number;
  keywords: string[];
}) {
  void logos;
  const kw = [...keywords, ...keywords];
  const trade = [...TRADE_STRIP, ...TRADE_STRIP];
  return (
    <section className="marquee-band">
      <div className="container">
        <div className="marquee marquee--logos">
          <div className="marquee__track">
            {trade.map((t, i) => (
              <span key={i} className="marquee__trade">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="marquee marquee--keywords marquee--reverse">
        <div className="marquee__track">
          {kw.map((k, i) => (
            <span key={i} className="marquee__kw">
              {k}
              <span className="marquee__star">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   BentoGallery — 12-col asymmetric montage. Items span 6 or 12 (`wide`),
   slow hover zoom, staggered whileInView reveal.
   ------------------------------------------------------------------------- */
export function BentoGallery({
  chapterIndex,
  chapterLabel,
  subtitle,
  title,
  items,
}: {
  chapterIndex: string;
  chapterLabel: string;
  subtitle: string;
  title: string;
  items: { label: string; caption: string; wide?: boolean; href?: string }[];
}) {
  return (
    <section className="bento">
      <div className="container">
        <ChapterMarker index={chapterIndex} label={chapterLabel} />
        <div className="bento__head">
          <span className="heading__subtitle">{subtitle}</span>
          <h2 className="heading__title">{title}</h2>
        </div>
        <div className="bento__grid">
          {items.map((it, i) => {
            const inner = (
              <>
                <div className="bento__img img-ph">
                  <span>{it.label}</span>
                </div>
                <div className="bento__caption">
                  <span>{it.caption}</span>
                  {it.href && <Icon name="arrow" />}
                </div>
              </>
            );
            return (
              <motion.div
                key={it.label}
                className={`bento__cell${it.wide ? " bento__cell--wide" : ""}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.65, ease: EASE, delay: (i % 3) * 0.08 }}
              >
                {it.href ? (
                  <Link href={it.href} className="bento__card">
                    {inner}
                  </Link>
                ) : (
                  <div className="bento__card">{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   ProcessSteps — numbered 01/02/03 RFQ process for the quote panel.
   ------------------------------------------------------------------------- */
export function ProcessSteps({
  steps,
}: {
  steps: { title: string; desc: string; icon?: IconName }[];
}) {
  return (
    <div className="process-steps">
      {steps.map((s, i) => (
        <motion.div
          key={s.title}
          className="process-step"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
        >
          <span className="process-step__num">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="process-step__body">
            <h4 className="process-step__title">{s.title}</h4>
            <p className="process-step__desc">{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
