"use client";

/* =========================================================================
   EID PATTERN LIBRARY
   Reusable page-building components, all on the EID design system:
   Industrial Precision blue, Rubik/Roboto, 2px radii, midnight dark bands,
   cubic-bezier(.2,.7,.3,1) easing. Browse them rendered at /styleguide.

   CONTENTS
   01 SectionIntro     eyebrow + title + desc, the standard section opener
   02 StatTiles        static metric tiles (bordered, tabular numerals)
   03 FeatureTiles     icon + title + desc grid on tech-card language
   04 SpecCard         product card w/ mono metadata line + spec chips
   05 ComparisonTable  two-column material comparison (e.g. Diamond vs CBN)
   06 DataSheetCard    downloadable resource card (datasheet / MSDS)
   07 FAQAccordion     animated accordion, one open at a time
   08 Timeline         vertical company / process milestones
   09 StepFlow         horizontal numbered process (RFQ, QC pipeline)
   10 CertStrip        certification / trust band (ISO, traceability)
   11 QuoteCallout     single large pull-quote with attribution
   12 TechNote         technical note / caution callout
   13 TagRow           chip row for grades, sizes, applications
   14 ContactBand      midnight strip w/ phone · email · address + CTA
   15 CapabilityRow    label + value rows (machinery, capacity, tolerances)
   16 MidnightPanel    generic dark technical band wrapper (grid + glow)
   ========================================================================= */

import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/* 01 ---------------------------------------------------------------- */
export function SectionIntro({
  eyebrow,
  title,
  desc,
  center,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      className={`p-intro${center ? " p-intro--center" : ""}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="p-intro__title">{title}</h2>
      {desc && <p className="p-intro__desc">{desc}</p>}
    </motion.div>
  );
}

/* 02 ---------------------------------------------------------------- */
export function StatTiles({
  items,
}: {
  items: { value: string; label: string; note?: string }[];
}) {
  return (
    <div className="p-stats">
      {items.map((s, i) => (
        <motion.div
          key={s.label}
          className="p-stats__tile"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
        >
          <span className="p-stats__value">{s.value}</span>
          <span className="p-stats__label">{s.label}</span>
          {s.note && <span className="p-stats__note">{s.note}</span>}
        </motion.div>
      ))}
    </div>
  );
}

/* 03 ---------------------------------------------------------------- */
export function FeatureTiles({
  items,
}: {
  items: { icon: string; title: string; desc: string; href?: string }[];
}) {
  return (
    <div className="p-features">
      {items.map((f) => {
        const body = (
          <>
            <span className="p-features__icon">
              <i className={`fa ${f.icon}`} aria-hidden="true" />
            </span>
            <h4 className="p-features__title">{f.title}</h4>
            <p className="p-features__desc">{f.desc}</p>
          </>
        );
        return f.href ? (
          <Link key={f.title} href={f.href} className="p-features__tile p-features__tile--link">
            {body}
          </Link>
        ) : (
          <div key={f.title} className="p-features__tile">{body}</div>
        );
      })}
    </div>
  );
}

/* 04 ---------------------------------------------------------------- */
export function SpecCard({
  meta,
  title,
  desc,
  chips,
  href,
  cta = "View product",
}: {
  meta: string;
  title: string;
  desc: string;
  chips?: string[];
  href: string;
  cta?: string;
}) {
  return (
    <div className="tech-card p-spec">
      <div className="tech-card__meta">{meta}</div>
      <h4 className="p-spec__title">{title}</h4>
      <p className="p-spec__desc">{desc}</p>
      {chips && chips.length > 0 && (
        <div className="p-spec__chips">
          {chips.map((c) => (
            <span key={c} className="chip chip-neutral">{c}</span>
          ))}
        </div>
      )}
      <Link href={href} className="p-spec__cta">
        {cta} <i className="fa fa-long-arrow-right" aria-hidden="true" />
      </Link>
    </div>
  );
}

/* 05 ---------------------------------------------------------------- */
export function ComparisonTable({
  caption,
  colA,
  colB,
  rows,
}: {
  caption?: string;
  colA: string;
  colB: string;
  rows: { label: string; a: string; b: string }[];
}) {
  return (
    <table className="spec-table p-compare">
      {caption && <caption className="p-compare__caption">{caption}</caption>}
      <thead>
        <tr>
          <th scope="col">Property</th>
          <th scope="col">{colA}</th>
          <th scope="col">{colB}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.label}>
            <td className="spec-label">{r.label}</td>
            <td className="spec-value">{r.a}</td>
            <td className="spec-value">{r.b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* 06 ---------------------------------------------------------------- */
export function DataSheetCard({
  kind,
  title,
  size,
  href,
}: {
  kind: string;
  title: string;
  size?: string;
  href: string;
}) {
  return (
    <a href={href} className="p-sheet" download>
      <span className="p-sheet__icon"><i className="fa fa-file-text-o" aria-hidden="true" /></span>
      <span className="p-sheet__body">
        <span className="p-sheet__kind">{kind}{size ? ` · ${size}` : ""}</span>
        <span className="p-sheet__title">{title}</span>
      </span>
      <span className="p-sheet__dl"><i className="fa fa-download" aria-hidden="true" /></span>
    </a>
  );
}

/* 07 ---------------------------------------------------------------- */
export function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="p-faq">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className={`p-faq__item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="p-faq__q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{it.q}</span>
              <i className={`fa fa-angle-${isOpen ? "up" : "down"}`} aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="p-faq__a-wrap"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: EASE }}
                >
                  <p className="p-faq__a">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* 08 ---------------------------------------------------------------- */
export function Timeline({
  items,
}: {
  items: { marker: string; title: string; desc: string }[];
}) {
  return (
    <div className="p-timeline">
      {items.map((t, i) => (
        <motion.div
          key={t.marker + t.title}
          className="p-timeline__item"
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
        >
          <span className="p-timeline__marker">{t.marker}</span>
          <div className="p-timeline__body">
            <h4 className="p-timeline__title">{t.title}</h4>
            <p className="p-timeline__desc">{t.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* 09 ---------------------------------------------------------------- */
export function StepFlow({
  steps,
}: {
  steps: { title: string; desc: string }[];
}) {
  return (
    <div className="p-steps">
      {steps.map((s, i) => (
        <motion.div
          key={s.title}
          className="p-steps__step"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
        >
          <span className="p-steps__num">{String(i + 1).padStart(2, "0")}</span>
          <h4 className="p-steps__title">{s.title}</h4>
          <p className="p-steps__desc">{s.desc}</p>
          {i < steps.length - 1 && <span className="p-steps__arrow" aria-hidden="true">→</span>}
        </motion.div>
      ))}
    </div>
  );
}

/* 10 ---------------------------------------------------------------- */
export function CertStrip({
  items,
}: {
  items: { icon: string; label: string }[];
}) {
  return (
    <div className="p-certs">
      {items.map((c) => (
        <span key={c.label} className="p-certs__item">
          <i className={`fa ${c.icon}`} aria-hidden="true" />
          {c.label}
        </span>
      ))}
    </div>
  );
}

/* 11 ---------------------------------------------------------------- */
export function QuoteCallout({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="p-quote">
      <span className="p-quote__mark" aria-hidden="true">&ldquo;</span>
      <blockquote className="p-quote__text">{quote}</blockquote>
      <figcaption className="p-quote__by">
        <span className="p-quote__name">{name}</span>
        <span className="p-quote__role">{role}</span>
      </figcaption>
    </figure>
  );
}

/* 12 ---------------------------------------------------------------- */
export function TechNote({
  kind = "note",
  title,
  children,
}: {
  kind?: "note" | "caution";
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`p-note p-note--${kind}`}>
      <span className="p-note__icon">
        <i className={`fa ${kind === "caution" ? "fa-exclamation-triangle" : "fa-info-circle"}`} aria-hidden="true" />
      </span>
      <div>
        <div className="p-note__title">{title}</div>
        <div className="p-note__body">{children}</div>
      </div>
    </div>
  );
}

/* 13 ---------------------------------------------------------------- */
export function TagRow({
  label,
  tags,
}: {
  label?: string;
  tags: string[];
}) {
  return (
    <div className="p-tags">
      {label && <span className="p-tags__label">{label}</span>}
      {tags.map((t) => (
        <span key={t} className="chip">{t}</span>
      ))}
    </div>
  );
}

/* 14 ---------------------------------------------------------------- */
export function ContactBand({
  phone,
  email,
  address,
  ctaLabel = "Request a Quote",
  ctaHref = "/contact",
}: {
  phone: string;
  email: string;
  address: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="p-contact">
      <div className="p-contact__grid" aria-hidden="true" />
      <div className="container p-contact__inner">
        <ul className="p-contact__list">
          <li><i className="fa fa-phone" aria-hidden="true" /><span>{phone}</span></li>
          <li><i className="fa fa-envelope" aria-hidden="true" /><a href={`mailto:${email}`}>{email}</a></li>
          <li><i className="fa fa-map-marker" aria-hidden="true" /><span>{address}</span></li>
        </ul>
        <Link href={ctaHref} className="btn btn__primary">{ctaLabel}</Link>
      </div>
    </section>
  );
}

/* 15 ---------------------------------------------------------------- */
export function CapabilityRow({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <dl className="p-caps">
      {rows.map((r) => (
        <div key={r.label} className="p-caps__row">
          <dt className="p-caps__label">{r.label}</dt>
          <dd className="p-caps__value">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* 16 ---------------------------------------------------------------- */
export function MidnightPanel({
  children,
  padded = true,
}: {
  children: React.ReactNode;
  padded?: boolean;
}) {
  return (
    <div className={`p-midnight${padded ? " p-midnight--padded" : ""}`}>
      <div className="p-midnight__grid" aria-hidden="true" />
      <div className="p-midnight__inner">{children}</div>
    </div>
  );
}
