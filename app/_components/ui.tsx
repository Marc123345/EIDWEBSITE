import { Link } from "@/i18n/navigation";
import Icon, { IconName } from "./Icon";

/* ---------- Labeled image / media placeholder (wireframe) ---------- */
export function ImagePlaceholder({
  label,
  minHeight,
  onDark,
}: {
  label: string;
  minHeight?: number;
  onDark?: boolean;
}) {
  return (
    <div className={`img-ph${onDark ? " on-dark" : ""}`} style={minHeight ? { minHeight } : undefined}>
      <span>{label}</span>
    </div>
  );
}

/* ---------- Section heading block (Industic .heading) ---------- */
export function Heading({
  subtitle,
  title,
  desc,
  center,
}: {
  subtitle?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={`heading${center ? " text-center" : ""}`}>
      {subtitle && <span className="heading__subtitle">{subtitle}</span>}
      <h2 className="heading__title">{title}</h2>
      {desc && <p className="heading__desc">{desc}</p>}
    </div>
  );
}

/* ---------- Page-title banner + breadcrumb (Industic .page-title) ---------- */
export function PageTitle({
  subheading,
  heading,
  crumbs,
}: {
  subheading: string;
  heading: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="container page-hero__inner">
          <div className="page-hero__copy">
            <span className="page-hero__subheading">{subheading}</span>
            <h1 className="page-hero__heading">{heading}</h1>
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
        </div>
      </section>
      <div className="hero-rule" aria-hidden="true" />
    </>
  );
}

/* ---------- Button (Link) ---------- */
export function Btn({
  href,
  children,
  variant = "primary",
  arrow,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white";
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={`btn btn__${variant} btn__hover2`}>
      {children}
      {arrow && <Icon name="arrow" />}
    </Link>
  );
}

/* ---------- Service / product / industry card (Industic .service-item) ---------- */
export function ServiceCard({
  icon,
  imgLabel,
  title,
  desc,
  href,
  cta = "Read More",
}: {
  icon?: IconName;
  imgLabel?: string;
  title: string;
  desc: string;
  href: string;
  cta?: string;
}) {
  return (
    <div className="service-item">
      {imgLabel && (
        <div className="service__img">
          <ImagePlaceholder label={imgLabel} minHeight={150} />
        </div>
      )}
      <div className="service__content">
        {icon && (
          <div className="service__icon">
            <Icon name={icon} />
          </div>
        )}
        <h4 className="service__title">{title}</h4>
        <p className="service__desc">{desc}</p>
        <Link href={href} className="btn btn__secondary btn__link">
          <span>{cta}</span>
          <Icon name="arrow" />
        </Link>
      </div>
    </div>
  );
}

/* ---------- Cross-links block (internal-linking spine) ---------- */
export function CrossLinks({
  groups,
}: {
  groups: { title: string; links: { label: string; href: string }[] }[];
}) {
  return (
    <section className="section bg-gray">
      <div className="container">
        <div className="heading">
          <span className="heading__subtitle">Related</span>
        </div>
        <div className="grid-3">
          {groups
            .filter((g) => g.links.length)
            .map((g) => (
              <div key={g.title} className="tech-card">
                <div className="tech-card__meta">{g.title}</div>
                <ul className="list-unstyled" style={{ display: "grid", gap: 10, marginTop: 6 }}>
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="btn btn__secondary btn__link">
                        <Icon name="arrow" />
                        <span>{l.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA band before footer ---------- */
export function CtaBand({
  title,
  text,
  primaryHref = "/contact",
  primaryLabel = "Request a Quote",
}: {
  title: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="section cta-band">
      <div className="container">
        <div className="heading text-center">
          <h2 className="heading__title">{title}</h2>
          {text && <p className="heading__desc" style={{ marginInline: "auto" }}>{text}</p>}
        </div>
        <div className="btn-row">
          <Btn href={primaryHref} arrow>{primaryLabel}</Btn>
          <Btn href="mailto:info@eid-ltd.com" variant="secondary">info@eid-ltd.com</Btn>
        </div>
      </div>
    </section>
  );
}
