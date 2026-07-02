import { products, PRODUCT_FAMILIES } from "./products";
import { industries } from "./industries";

export const site = {
  name: "EID Ltd",
  tagline: "Industrial Diamond & CBN Manufacturer",
  location: "London, UK",
  email: "info@eid-ltd.com",
  phone: "+44 [number]",
  address: "[Full London address]",
};

export const trustPoints = [
  "ISO 9001 Certified",
  "Full Diamond & CBN Range",
  "In-House QC Laboratory",
  "Customers in 30+ Countries",
  "Est. London, UK",
];

// Mega-menu groups for Products, built from the family taxonomy.
export const productMenu = PRODUCT_FAMILIES.map((family) => ({
  family,
  items: products
    .filter((p) => p.family === family)
    .map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
}));

export const industryMenu = industries.map((i) => ({
  label: i.name,
  href: `/industries/${i.slug}`,
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
  { label: "Industries", href: "/industries", menu: "industries" as const },
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
    title: "Industries",
    links: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
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
