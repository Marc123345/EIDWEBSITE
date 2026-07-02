import Link from "next/link";
import Icon, { IconName } from "./Icon";
import { ImagePlaceholder } from "./ui";

/* =========================================================================
   Template-faithful section layouts (Industic), recolored blue, wireframe
   images. Each mirrors the template's exact markup/classes so its CSS —
   including the rotated-square (diamond) icon shapes, accent-overlay
   blocks and dividers — applies.
   ========================================================================= */

/* ---- features-Layout2 : four minimal feature boxes ---- */
export function FeaturesRow({
  items,
}: {
  items: { title: string; desc: string; href?: string }[];
}) {
  return (
    <section className="features features-Layout2 pt-90 pb-90">
      <div className="container">
        <div className="row features-wrap">
          {items.map((f) => (
            <div key={f.title} className="col-sm-12 col-md-6 col-lg-3 feature-item">
              <div className="feature__content">
                <h4 className="feature__title">{f.title}</h4>
                <p className="feature__desc">{f.desc}</p>
                <Link href={f.href || "/products"} className="feature__link">
                  <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- about-2 : heading + (text/sign) + big image w/ play + features-list ---- */
export function AboutGeometric({
  subtitle,
  title,
  text,
  imgLabel,
  features,
}: {
  subtitle: string;
  title: string;
  text: string[];
  imgLabel: string;
  features: { title: string; desc: string }[];
}) {
  return (
    <section className="about about-2 pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="heading heading-3 mb-50">
              <span className="heading__subtitle">{subtitle}</span>
              <h2 className="heading__title">{title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="about__text mt-30">
              {text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-5">
            <div className="about__img">
              <ImagePlaceholder label={imgLabel} minHeight={340} />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3">
            <div className="features-list features-list-layout1 mt-30">
              {features.map((f) => (
                <div key={f.title} className="feature-item feature-list-item">
                  <div className="feature__content">
                    <h4 className="feature__title">{f.title}</h4>
                    <p className="feature__desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- services-layout3 : split heading + 4 service cards w/ image overlay ---- */
export function ServicesLayout3({
  subtitle,
  title,
  desc,
  ctaHref = "/contact",
  ctaLabel = "Request a Quote",
  items,
}: {
  subtitle: string;
  title: string;
  desc: string;
  ctaHref?: string;
  ctaLabel?: string;
  items: { icon: IconName; title: string; desc: string; href: string }[];
}) {
  return (
    <section className="services services-layout3 pt-110 pb-110 bg-gray">
      <div className="container">
        <div className="row heading mb-40">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <span className="heading__subtitle">{subtitle}</span>
            <h2 className="heading__title">{title}</h2>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="heading__desc">{desc}</p>
            <Link href={ctaHref} className="btn btn__primary btn__lg mt-20">
              {ctaLabel} <i className="fa fa-long-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row service-items-wrap">
          {items.map((s) => (
            <div key={s.title} className="col-sm-6 col-md-6 col-lg-3">
              <div className="service-item">
                <div className="service__content">
                  <div className="service__icon">
                    <Icon name={s.icon} />
                  </div>
                  <h4 className="service__title">{s.title}</h4>
                  <p className="service__desc">{s.desc}</p>
                  <Link href={s.href} className="btn btn__secondary btn__link">
                    <span>Read More</span>
                    <i className="fa fa-long-arrow-right" />
                  </Link>
                </div>
                <div className="service__img">
                  <ImagePlaceholder label={`${s.title}`} minHeight={150} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- banner-2 : geometric accent block (left) + counters (right) ---- */
export function BannerCounters({
  subtitle,
  title,
  desc,
  fancyItems,
  counters,
}: {
  subtitle: string;
  title: string;
  desc: string;
  fancyItems: { icon: IconName; title: string }[];
  counters: { icon: IconName; value: string; label: string; desc: string }[];
}) {
  return (
    <section className="banner banner-2 fancybox-white p-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 inner-padding bg-overlay bg-overlay-theme bg-ph">
            <div className="heading heading-2 mb-50">
              <span className="heading__subtitle color-white">{subtitle}</span>
              <h3 className="heading__title color-white">{title}</h3>
              <p className="heading__desc color-white">{desc}</p>
            </div>
            <div className="row">
              {fancyItems.map((f) => (
                <div key={f.title} className="col-4 col-sm-4 col-md-4 col-lg-4">
                  <div className="fancybox-item">
                    <div className="fancybox__icon">
                      <Icon name={f.icon} />
                    </div>
                    <div className="fancybox__content">
                      <h4
                        className="fancybox__title"
                        dangerouslySetInnerHTML={{ __html: f.title }}
                      />
                      <div className="divider__line divider__sm divider__white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 bg-overlay bg-overlay-4 bg-ph">
            <div className="counters-wrap-2">
              <div className="row">
                {counters.map((c) => (
                  <div key={c.label} className="col-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="counter-item counters-white">
                      <div className="counter__icon">
                        <Icon name={c.icon} />
                      </div>
                      <h4 className="counter">{c.value}</h4>
                      <p className="counter__subtitle">{c.label}</p>
                      <p className="counter__desc">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- features-list-layout2 : dark parallax, why-choose feature list ---- */
export function FeaturesListParallax({
  subtitle,
  title,
  desc,
  features,
}: {
  subtitle: string;
  title: string;
  desc: string;
  features: { title: string; desc: string }[];
}) {
  const mid = Math.ceil(features.length / 2);
  const cols = [features.slice(0, mid), features.slice(mid)];
  return (
    <section className="features-list features-list-layout2 bg-overlay bg-overlay-gradient bg-ph pt-110 pb-90">
      <div className="container">
        <div className="row heading mb-30">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <span className="heading__subtitle">{subtitle}</span>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h2 className="heading__title color-white">{title}</h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <p className="heading__desc color-white">{desc}</p>
          </div>
        </div>
        <div className="row">
          {cols.map((col, ci) => (
            <div key={ci} className="col-sm-12 col-md-12 col-lg-6">
              {col.map((f) => (
                <div key={f.title} className="feature-item feature-list-item">
                  <div className="feature__content">
                    <h4 className="feature__title color-white">{f.title}</h4>
                    <p className="feature__desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- request-quote-2 : banner panel (left) + form (right) ---- */
export function RequestQuotePanel({
  panelTitle,
  panelDesc,
  formTitle,
  formDesc,
  productOptions,
}: {
  panelTitle: string;
  panelDesc: string;
  formTitle: string;
  formDesc: string;
  productOptions: string[];
}) {
  return (
    <section className="request-quote-2 pt-0 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="request-quote-panel">
              <div className="request__panel-banner bg-overlay bg-overlay-theme bg-ph">
                <div className="request__panel-banner-inner">
                  <h5 className="request__panel-title">{panelTitle}</h5>
                  <p className="request__panel-desc">{panelDesc}</p>
                  <Link href="/resources/datasheets" className="btn btn__white btn__hover2">
                    <i className="fa fa-download" />
                    <span>Download Datasheets</span>
                  </Link>
                </div>
              </div>
              <div className="request__form mb-0">
                <div className="request__form-body">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <h4 className="request__form-title">{formTitle}</h4>
                      <p className="request__form-desc">{formDesc}</p>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Country" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group form-group-select">
                        <select className="form-control" defaultValue="">
                          <option value="" disabled>
                            Product of interest
                          </option>
                          {productOptions.map((p) => (
                            <option key={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <textarea className="form-control" placeholder="Grade, size, quantity, application…" />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <Link href="/contact" className="btn btn__primary">
                        Submit Request <i className="fa fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center mt-40">
            <p className="text__link mb-0">
              We&apos;ll get back to you within 24 hours, or email{" "}
              <span className="font-bold color-theme">info@eid-ltd.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- testimonial-1 : carousel (wireframe avatars) ---- */
export function Testimonials({
  items,
}: {
  items: { name: string; role: string; quote: string }[];
}) {
  return (
    <section className="testimonial testimonial-1 pt-90 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div
              className="carousel owl-carousel carousel-dots carousel-dots-center"
              data-slide={2}
              data-slide-md={1}
              data-slide-sm={1}
              data-autoplay="false"
              data-nav="false"
              data-dots="true"
              data-space={50}
              data-loop="true"
              data-speed={800}
            >
              {items.map((t, i) => (
                <div key={i} className="testimonial-item">
                  <div className="testimonial__meta">
                    <div className="testimonial-mark" aria-hidden="true">
                      <i className="fa fa-diamond" />
                    </div>
                    <h5 className="testimonial__meta-title">{t.name}</h5>
                    <p className="testimonial__meta-desc">{t.role}</p>
                  </div>
                  <div className="testimonial__content">
                    <p className="testimonial__desc">{t.quote}</p>
                    <div className="testimonial__rating">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <i key={s} className="fa fa-star" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- clients : typographic trade strip (no logo placeholders) ---- */
export function Clients({ count }: { count?: number }) {
  void count;
  const trade = [
    "Diamond tool makers · Germany",
    "Dental instruments · Israel",
    "Saw blade producers · Italy",
    "Grinding wheel makers · Japan",
    "Wire die producers · USA",
    "Precision optics · Switzerland",
  ];
  return (
    <section className="clients-strip border-top">
      <div className="container">
        <div className="clients-strip__label">Supplying tool makers in 30+ countries</div>
        <div className="clients-strip__row">
          {trade.map((t) => (
            <span key={t} className="clients-strip__item">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- banner-4 : parallax CTA with offset content ---- */
export function BannerCTA({
  subtitle,
  title,
  desc,
  ctaLabel = "Request a Quote",
  ctaHref = "/contact",
}: {
  subtitle: string;
  title: string;
  desc: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="banner banner-4 bg-overlay bg-ph pt-110 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-5">
            <div className="banner-content">
              <div className="heading heading-3 heading-white mb-30">
                <span className="heading__subtitle">{subtitle}</span>
                <h2 className="heading__title color-white">{title}</h2>
                <p className="heading__desc color-white">{desc}</p>
              </div>
              <Link href={ctaHref} className="btn btn__white btn__hover2">
                {ctaLabel} <i className="fa fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
