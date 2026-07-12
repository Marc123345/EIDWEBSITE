import { products, PRODUCT_FAMILIES } from "./products";
import { applications } from "./applications";

export const site = {
  name: "EID Ltd",
  tagline: "Industrial Diamond & CBN Manufacturer",
  location: "London, UK",
  email: "info@eid-ltd.com",
  phone: "+44 (0) 207 405 6594",
  phoneHref: "tel:+442074056594",
  fax: "+44 (0) 207 831 0372",
  address: "EID House, 12 St. Cross Street, London EC1N 8UB, England",
};

// Verified trust signals only. The "30+ countries" figure is unconfirmed, so the
// trust bar leads with the verified 50-year record and ISO 9001 instead.
export const trustPoints = [
  "ISO 9001 Certified",
  "In-House QC Laboratory",
  "Full Diamond & CBN Range",
  "50+ Years' Experience",
  "London, UK",
];

// Mega-menu groups for Products, built from the eight locked product groups.
export const productMenu = PRODUCT_FAMILIES.map((family) => ({
  family,
  items: products
    .filter((p) => p.family === family)
    .map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
}));

export const applicationMenu = applications.map((a) => ({
  label: a.name,
  href: `/applications/${a.slug}`,
}));

export const resourceMenu = [
  { label: "Resources & Guides", href: "/resources" },
  { label: "Datasheets", href: "/resources/datasheets" },
  { label: "MSDS", href: "/resources/msds" },
];

// Primary header navigation (order is deliberate: the buyer's journey).
export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", menu: "products" as const },
  { label: "Applications", href: "/applications", menu: "applications" as const },
  { label: "Quality", href: "/quality" },
  { label: "Resources", href: "/resources", menu: "resources" as const },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

// Footer = complete site index (every page reachable).
export const footerColumns = [
  {
    title: "Products",
    links: products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
  },
  {
    title: "Applications",
    links: applications.map((a) => ({ label: a.name, href: `/applications/${a.slug}` })),
  },
  {
    title: "Company & Resources",
    links: [
      { label: "Products Overview", href: "/products" },
      { label: "Quality, QC & ISO 9001", href: "/quality" },
      { label: "Resources & Guides", href: "/resources" },
      { label: "Datasheets", href: "/resources/datasheets" },
      { label: "MSDS", href: "/resources/msds" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const languages = ["EN", "DE", "IT", "JA"];
