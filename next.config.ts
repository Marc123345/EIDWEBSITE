import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Industries axis renamed to Applications (Vol 03).
      { source: "/industries", destination: "/applications", permanent: true },
      { source: "/industries/dental", destination: "/applications/dental", permanent: true },
      { source: "/industries/optics-precision", destination: "/applications/tool-and-die", permanent: true },
      { source: "/industries/stone-glass-construction", destination: "/applications/grinding-cutting-sawing-drilling", permanent: true },
      { source: "/industries/automotive-aerospace", destination: "/applications/automotive-aerospace", permanent: true },
      { source: "/industries/electronics-semiconductors", destination: "/applications/semiconductor-electronics", permanent: true },
      // Any other old industry slug falls back to the applications overview.
      { source: "/industries/:slug*", destination: "/applications", permanent: true },

      // Products folded/renamed in Vol 03.
      { source: "/products/surface-enhancements", destination: "/products/metal-bond", permanent: true },
      { source: "/products/pcd-pcbn", destination: "/products/pcd-blanks", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
