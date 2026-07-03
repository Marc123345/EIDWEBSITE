"use client";

/* =========================================================================
   THE STONE — EID's signature hero crystal.
   A real-time rendered octahedral diamond (canvas 2D, no deps):
   3D vertices → rotate → project → painter-sort facets → shade by normal.
   Edges catch light in the EID blue family. Respects reduced-motion.
   Powers both CrystalHero (home) and CrystalHeroPage (every inner page).
   ========================================================================= */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------------------------- 3D crystal math ---------------------------- */
type V3 = [number, number, number];

// Elongated octahedron — reads as a rough diamond crystal, not a gem cut.
const VERTS: V3[] = [
  [0, -1.35, 0], // top apex
  [0, 1.35, 0], // bottom apex
  [1, 0, 0],
  [-1, 0, 0],
  [0, 0, 1],
  [0, 0, -1],
];
const FACES: [number, number, number][] = [
  [0, 2, 4], [0, 4, 3], [0, 3, 5], [0, 5, 2],
  [1, 4, 2], [1, 3, 4], [1, 5, 3], [1, 2, 5],
];

function rotY([x, y, z]: V3, a: number): V3 {
  const c = Math.cos(a), s = Math.sin(a);
  return [x * c + z * s, y, -x * s + z * c];
}
function rotX([x, y, z]: V3, a: number): V3 {
  const c = Math.cos(a), s = Math.sin(a);
  return [x, y * c - z * s, y * s + z * c];
}
function sub(a: V3, b: V3): V3 { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
function cross(a: V3, b: V3): V3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
function norm(v: V3): V3 {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}
function dot(a: V3, b: V3): number { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }

export function DiamondStone({ size = 520 }: { size?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const light: V3 = norm([-0.45, -0.7, 0.75]);
    const cx = size / 2, cy = size / 2, scale = size * 0.28;
    let t = 0.6, raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - (r.left + r.width / 2)) / r.width;
      mouse.current.y = (e.clientY - (r.top + r.height / 2)) / r.height;
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      const ay = t + mouse.current.x * 0.6;
      const ax = 0.42 + mouse.current.y * 0.35;

      const pts = VERTS.map((v) => rotX(rotY(v, ay), ax));
      const proj = pts.map(([x, y, z]) => ({ x: cx + x * scale, y: cy + y * scale, z }));

      // Painter's algorithm: far facets first.
      const faces = FACES.map((f) => {
        const n = norm(cross(sub(pts[f[1]], pts[f[0]]), sub(pts[f[2]], pts[f[0]])));
        const depth = (pts[f[0]][2] + pts[f[1]][2] + pts[f[2]][2]) / 3;
        return { f, n, depth };
      }).sort((a, b) => a.depth - b.depth);

      for (const { f, n } of faces) {
        const lum = Math.max(0, dot(n, light));
        const facing = n[2] > 0;
        const p0 = proj[f[0]], p1 = proj[f[1]], p2 = proj[f[2]];

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();

        // Facet fill: cold glassy carbon, brighter when facing the light.
        const g = ctx.createLinearGradient(p0.x, p0.y, p2.x, p2.y);
        const a = facing ? 0.16 + lum * 0.5 : 0.05 + lum * 0.12;
        g.addColorStop(0, `rgba(196, 214, 252, ${a})`);
        g.addColorStop(1, `rgba(120, 148, 214, ${a * 0.45})`);
        ctx.fillStyle = g;
        ctx.fill();

        // Edge light: EID blue family (#b3c5ff -> #1f4eb3), strongest on lit front edges.
        const eg = ctx.createLinearGradient(p0.x, p0.y, p2.x, p2.y);
        eg.addColorStop(0, "rgba(179, 197, 255, 0.95)");
        eg.addColorStop(0.5, "rgba(94, 129, 214, 0.9)");
        eg.addColorStop(1, "rgba(31, 78, 179, 0.9)");
        ctx.strokeStyle = eg;
        ctx.lineWidth = facing ? 1.4 : 0.5;
        ctx.globalAlpha = facing ? 0.35 + lum * 0.65 : 0.18;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // Specular glint on the top apex.
      const apex = proj[0];
      const glint = ctx.createRadialGradient(apex.x, apex.y, 0, apex.x, apex.y, 26);
      glint.addColorStop(0, "rgba(255,255,255,0.85)");
      glint.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = glint;
      ctx.fillRect(apex.x - 26, apex.y - 26, 52, 52);
    };

    const loop = () => {
      t += 0.0035;
      draw();
      raf = requestAnimationFrame(loop);
    };

    if (reduced) draw();
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [size]);

  return (
    <canvas
      ref={ref}
      className="stone-canvas"
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}

const DEFAULT_META = [
  { value: "30+", label: "Countries served" },
  { value: "12", label: "Product lines" },
  { value: "ISO 9001", label: "Certified" },
];

/* Shared visual column: glow + floating crystal (or a custom visual) + HUD.
   When a custom `visual` is supplied (e.g. a product SVG), the metrology
   HUD tags are omitted so they don't clutter a labelled diagram. */
function StoneVisual({ visual, size = 520 }: { visual?: ReactNode; size?: number }) {
  return (
    <motion.div
      className="crystal-hero__visual"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: EASE, delay: 0.15 }}
    >
      <div className="crystal-hero__glow" aria-hidden />
      <motion.div
        className="stone-float"
        animate={visual ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      >
        {visual ?? <DiamondStone size={size} />}
      </motion.div>
      {!visual && (
        <div className="stone-hud" aria-hidden>
          <span className="stone-hud__ring" />
          <span className="stone-hud__tag stone-hud__tag--tl">C · CARBON</span>
          <span className="stone-hud__tag stone-hud__tag--tr">10 MOHS</span>
          <span className="stone-hud__tag stone-hud__tag--bl">D50 ±1 µm</span>
          <span className="stone-hud__tag stone-hud__tag--br">MESH 16–325</span>
        </div>
      )}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------
   CrystalHeroPage — single-headline Stone hero for every inner page.
   Same prop shape as the light HeroPage it replaced, plus a `visual` slot
   (used by product pages to drop in a bespoke material SVG).
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
  imgLabel?: string; // accepted for call-site parity; the Stone uses the crystal
  visual?: ReactNode;
  metaStats?: { value: string; label: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  const words = title.split(" ");
  return (
    <section className="crystal-hero">
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

          <StoneVisual visual={visual} size={520} />
        </div>
      </div>
      <div className="hero-rule" aria-hidden />
    </section>
  );
}

/* -------------------------------------------------------------------------
   PageHeroBand — compact inner-page header: subheading + heading + crumbs
   with a small stone (or a bespoke product visual) on the right. Accepts the
   full CrystalHeroPage prop shape so pages swap 1:1; extra props are ignored.
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
          <div
            className={`page-hero__stone${visual ? " page-hero__stone--visual" : ""}`}
            aria-hidden="true"
          >
            {visual ?? <DiamondStone size={230} />}
          </div>
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
          <StoneVisual size={520} />
        </div>
      </div>
      <div className="hero-rule" aria-hidden />
    </section>
  );
}
