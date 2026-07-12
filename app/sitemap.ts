import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { applications } from "@/lib/applications";

// Canonical serving origin. Update to https://www.eid-ltd.com once the custom
// domain is attached (also update lib/layout orgSchema and robots.ts).
export const SITE_ORIGIN = "https://eid-nextjs.vercel.app";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const make = (
    path: string,
    priority: number,
    changeFrequency: Entry["changeFrequency"],
  ): Entry => ({ url: `${SITE_ORIGIN}${path}`, lastModified, changeFrequency, priority });

  return [
    // Core & conversion
    make("/", 1.0, "weekly"),
    make("/products", 0.9, "weekly"),
    make("/applications", 0.9, "weekly"),
    make("/about", 0.6, "monthly"),
    make("/contact", 0.7, "monthly"),

    // Products (12)
    ...products.map((p) => make(`/products/${p.slug}`, 0.8, "monthly")),

    // Applications (6 hubs)
    ...applications.map((a) => make(`/applications/${a.slug}`, 0.8, "monthly")),

    // Trust & resources
    make("/quality", 0.7, "monthly"),
    make("/resources", 0.6, "monthly"),
    make("/resources/datasheets", 0.6, "monthly"),
    make("/resources/msds", 0.6, "monthly"),
    make("/blog", 0.4, "monthly"),
  ];
}
