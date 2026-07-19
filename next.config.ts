import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/**
 * One-to-one old-to-new redirect map, no chains and no loops.
 *
 * Deep pages hold almost no equity today (organic is near zero, backlinks sit on
 * the homepage), so the slug change is low risk. The two exceptions are handled
 * deliberately: MCD ranks around #3 and now lives as a section, so its old URL
 * 301s to the anchor on the Single Crystal page, where the MCD section carries
 * its own heading and full spec table. Metal Bond is the highest-traffic product
 * page and keeps a page of its own. Rank and crawl need daily monitoring for two
 * weeks after launch.
 */
const redirects = [
  /* --- Live-site slugs (pre-rebuild) --- */
  { source: "/ebn", destination: "/products/cbn", permanent: true },
  { source: "/ebn-mesh", destination: "/products/cbn", permanent: true },
  { source: "/toolstones", destination: "/products/tool-stones", permanent: true },
  { source: "/mcd", destination: "/products/single-crystal#mcd", permanent: true },

  /* --- Industries axis renamed to Applications (Vol 03) --- */
  { source: "/industries", destination: "/applications", permanent: true },
  { source: "/industries/dental", destination: "/applications/dental", permanent: true },
  { source: "/industries/optics-precision", destination: "/applications/tool-and-die", permanent: true },
  {
    source: "/industries/stone-glass-construction",
    destination: "/applications/grinding-cutting-sawing-drilling",
    permanent: true,
  },
  { source: "/industries/automotive-aerospace", destination: "/applications/automotive-aerospace", permanent: true },
  {
    source: "/industries/electronics-semiconductors",
    destination: "/applications/semiconductor-electronics",
    permanent: true,
  },
  { source: "/industries/:slug*", destination: "/applications", permanent: true },

  /* --- Twelve product pages folded into eight (Phase 2) --- */
  // Group 1: grit + micron + rotary merge into one page, each keeping an anchor.
  { source: "/products/natural-grit", destination: "/products/natural-grit-powder#grit", permanent: true },
  { source: "/products/natural-micron", destination: "/products/natural-grit-powder#micron", permanent: true },
  // Group 4: PCBN becomes a section on the CBN page.
  { source: "/products/pcbn", destination: "/products/cbn#pcbn", permanent: true },
  // Group 5: the highest-risk merge. MCD keeps a full section behind this anchor.
  { source: "/products/cvd-single-crystal", destination: "/products/single-crystal#cvd", permanent: true },
  { source: "/products/mcd", destination: "/products/single-crystal#mcd", permanent: true },
  // Group 6: PCD blanks and CVD polycrystalline merge, each keeping an anchor.
  {
    source: "/products/pcd-blanks",
    destination: "/products/polycrystalline-diamond#pcd-blanks",
    permanent: true,
  },
  {
    source: "/products/cvd-polycrystalline",
    destination: "/products/polycrystalline-diamond#dressing-logs",
    permanent: true,
  },
  { source: "/products/pcd-pcbn", destination: "/products/polycrystalline-diamond#pcd-blanks", permanent: true },
  // Group 8: slug aligned to the architecture.
  { source: "/products/polycrystalline-micron", destination: "/products/polycrystalline-powder", permanent: true },
  // Coatings are attribute sections now, never a page.
  { source: "/products/surface-enhancements", destination: "/products/metal-bond#coated", permanent: true },

  /* --- Resources consolidation: the blog moves under Resources --- */
  { source: "/blog", destination: "/resources/blog", permanent: true },
  { source: "/blog/:slug*", destination: "/resources/blog", permanent: true },
];

const nextConfig: NextConfig = {
  async redirects() {
    return redirects;
  },
};

export default withNextIntl(nextConfig);
