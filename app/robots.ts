import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "./sitemap";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Internal pattern-library page, not part of the public site.
      disallow: "/styleguide",
    },
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
