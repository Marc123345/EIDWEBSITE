"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    jQuery?: any;
    $?: any;
    __eidPluginsReady?: boolean;
    __eidLoading?: Promise<void>;
  }
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[data-eid="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.dataset.eid = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load " + src));
    document.body.appendChild(s);
  });
}

// Re-runs the Industic plugin initialisations against the current DOM.
// Safe to call on every client-side navigation (guards against double-init).
function initEID() {
  const $ = window.jQuery;
  if (!$) return;
  const $win = $(window);

  // Editorial chrome: scroll-progress bar + hairline frame (create once)
  if (!document.getElementById("eid-progress")) {
    const bar = document.createElement("div");
    bar.id = "eid-progress";
    document.body.appendChild(bar);
  }
  if (!document.getElementById("eid-frame")) {
    const frame = document.createElement("div");
    frame.id = "eid-frame";
    document.body.appendChild(frame);
  }
  const updateProgress = () => {
    const bar = document.getElementById("eid-progress");
    if (!bar) return;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
    bar.style.width = pct + "%";
  };
  updateProgress();

  // Magnetic primary buttons (subtle pull toward cursor)
  const magnets: HTMLElement[] = $(".btn__primary, .btn__white").toArray();
  magnets.forEach((el) => {
    if ((el as any)._mag) return;
    (el as any)._mag = true;
    el.classList.add("is-magnetic");
    el.addEventListener("mousemove", (ev: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ev.clientX - r.left - r.width / 2;
      const y = ev.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.16}px, ${y * 0.22}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });

  // Owl carousels — only init ones not yet initialised
  $(".carousel").each(function (this: any) {
    const $c = $(this);
    if ($c.hasClass("owl-loaded")) return;
    try {
    $c.owlCarousel({
      nav: $c.data("nav"),
      dots: $c.data("dots"),
      loop: $c.data("loop"),
      margin: $c.data("space"),
      center: $c.data("center"),
      autoplay: $c.data("autoplay"),
      transitionStyle: $c.data("transition"),
      animateOut: $c.data("animate-out"),
      animateIn: $c.data("animate-in"),
      autoplayTimeout: 6000,
      responsive: {
        0: { items: 1 },
        400: { items: $c.data("slide-sm") || 1 },
        700: { items: $c.data("slide-md") || 2 },
        1000: { items: $c.data("slide") || 3 },
      },
    });
    } catch (e) {
      /* owl init can throw on transient DOM; ignore */
    }
  });

  // About image reveal animation (template adds this on scroll)
  $(".about__img").addClass("animated-img");

  // bg-img setter: convert <div class="bg-img"><img></div> to background-image
  $(".bg-img").each(function (this: any) {
    const $el = $(this);
    const $img = $el.children("img");
    if (!$img.length) return;
    const src = $img.attr("src");
    $el
      .parent()
      .css({
        "background-image": "url(" + src + ")",
        "background-size": "cover",
        "background-position": "center",
      })
      .addClass("bg-img");
    $img.remove();
  });

  // Counters — custom, cleanup-safe count-up (replaces template counterUp,
  // which threw asynchronously on teardown). Animates only when in view.
  try {
    const counters: HTMLElement[] = $(".counter").toArray();
    const animate = (el: HTMLElement) => {
      if (el.dataset.counted) return;
      el.dataset.counted = "1";
      const raw = (el.textContent || "").trim();
      const target = parseFloat(raw.replace(/[^0-9.]/g, ""));
      if (isNaN(target)) return;
      const suffix = raw.replace(/[0-9.,\s]/g, "");
      const dur = 1500;
      let start = 0;
      const startVal = 0;
      const tick = (t: number) => {
        if (!document.contains(el)) return; // node detached — stop
        if (!start) start = t;
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(startVal + (target - startVal) * eased);
        el.textContent = val.toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate(e.target as HTMLElement);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => {
      if (el.dataset.counted) return;
      const top = el.getBoundingClientRect().top;
      if (top < (window.innerHeight || 800) && top > 0) animate(el);
      else cio.observe(el);
    });
  } catch (e) {
    /* counters are progressive enhancement */
  }

  // Video popup
  if ($.fn.magnificPopup) {
    try {
      $(".popup-video").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
      });
    } catch (e) {
      /* ignore */
    }
  }

  // Sticky navbar + scroll-top (namespaced; rebind cleanly)
  $win.off("scroll.eid").on("scroll.eid", function () {
    updateProgress();
    const top = $win.scrollTop();
    // Header stickiness is handled purely in CSS (position: sticky) — no fixed-navbar toggle.
    const $btn = $("#scrollTopBtn");
    if (top > 700) $btn.addClass("actived");
    else $btn.removeClass("actived");
  });

  $("#scrollTopBtn")
    .off("click.eid")
    .on("click.eid", function (e: any) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 500);
    });

  // Subtle scroll-reveal — structural blocks only, triggers early, never strands content
  try {
    const vh = window.innerHeight || 800;
    const sel = ".heading, .service-item, .tech-card, .feature-item, .post-item, .counter-item, .fancybox-item";
    const targets: HTMLElement[] = $(sel).toArray();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 12% 0px" }
    );
    const revealed: HTMLElement[] = [];
    targets.forEach((el, i) => {
      if (el.classList.contains("reveal") || el.classList.contains("in-view")) return;
      if (el.getBoundingClientRect().top < vh * 0.95) {
        el.classList.add("in-view"); // above fold — show now
      } else {
        el.style.transitionDelay = ((i % 3) * 80) + "ms";
        el.classList.add("reveal");
        io.observe(el);
        revealed.push(el);
      }
    });
    // Failsafe: never leave near-fold content hidden if the observer lags
    setTimeout(() => {
      revealed.forEach((el) => {
        if (!el.classList.contains("in-view") && el.getBoundingClientRect().top < vh * 1.4) {
          el.classList.add("in-view");
        }
      });
    }, 1400);
  } catch (e) {
    /* reveal is progressive enhancement */
  }
}

export default function TemplateScripts() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    async function ensure() {
      if (!window.__eidLoading) {
        window.__eidLoading = (async () => {
          await loadScript("/industic/assets/js/jquery-3.3.1.min.js");
          await loadScript("/industic/assets/js/plugins.js");
          window.__eidPluginsReady = true;
        })();
      }
      await window.__eidLoading;
      if (cancelled) return;
      // wait a tick for the route's DOM to be painted
      requestAnimationFrame(() => requestAnimationFrame(() => initEID()));
    }

    ensure();
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
