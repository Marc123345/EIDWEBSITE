/*
 * DeepL machine-translation generator.
 *
 * Extracts the English copy from lib/products.ts and lib/applications.ts, plus
 * the product-group labels and UI chrome, translates it to DE/ES/JA/IT via the
 * DeepL API, and writes per-locale override JSON into lib/content/. These files
 * are consumed by lib/i18n-content.ts (fallback-merge onto the EN source).
 *
 * Usage:
 *   DEEPL_API_KEY=xxxxxxxx  node --experimental-strip-types scripts/translate.ts
 *   (a key ending in ":fx" auto-selects the free API endpoint)
 *
 * Re-runs are cached in scripts/.deepl-cache.json, so only new/changed English
 * strings hit the API. Delete the cache to force a full re-translation.
 *
 * Output is a first-pass machine translation, flagged for human review.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { products } from "../lib/products.ts";
import { applications } from "../lib/applications.ts";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, "..");
const CONTENT_DIR = join(ROOT, "lib", "content");
const CACHE_FILE = join(HERE, ".deepl-cache.json");

const TARGETS = ["de", "es", "ja", "it"] as const;
type Target = (typeof TARGETS)[number];
const DEEPL_LANG: Record<Target, string> = { de: "DE", es: "ES", ja: "JA", it: "IT" };

const KEY = process.env.DEEPL_API_KEY;
if (!KEY) {
  console.error("Missing DEEPL_API_KEY. Set it in the environment and re-run.");
  process.exit(1);
}
const API = KEY.trimEnd().endsWith(":fx")
  ? "https://api-free.deepl.com/v2/translate"
  : "https://api.deepl.com/v2/translate";

/* ------------------------- string collection helpers ------------------------- */
// Fields to translate. Spec tables are intentionally skipped (they carry units
// and "[confirm with Uri]" placeholders that must not be machine-translated).
const strings = new Set<string>();
const keepAsIs = (s: unknown): s is string =>
  typeof s === "string" && /[a-zA-Z]/.test(s) && !/^\[confirm/i.test(s.trim());

const collect = (s: unknown) => {
  if (keepAsIs(s)) strings.add(s);
};
const collectArr = (a?: unknown[]) => a?.forEach(collect);

for (const p of products) {
  [p.name, p.eyebrow, p.cardDesc, p.h1, p.metaTitle, p.metaDesc, p.cta, p.quality].forEach(collect);
  collectArr(p.intro);
  collectArr(p.applications);
  collectArr(p.guides);
  p.callouts?.forEach((c) => {
    collect(c.title);
    (Array.isArray(c.body) ? c.body : [c.body]).forEach(collect);
  });
}
for (const a of applications) {
  [a.name, a.eyebrow, a.cardDesc, a.h1, a.metaDesc, a.cta].forEach(collect);
  collectArr(a.intro);
  collect(a.outcome.title);
  collect(a.outcome.body);
  collect(a.why.title);
  collect(a.why.body);
  a.products.forEach((pr) => collect(pr.note));
}

// Product-group labels + UI chrome.
const FAMILIES = [
  "Natural Diamond Grit & Powder", "Metal Bond Diamond", "Resin Bond Diamond", "CBN",
  "Single Crystal Diamond (CVD & MCD)", "Polycrystalline Diamond (PCD & CVD)",
  "Natural Tool Stones", "Polycrystalline Diamond Powder",
];
const UI = [
  "Home", "Products", "Applications", "Quality", "Resources", "About", "Blog", "Contact",
  "Request A Quote", "Request a Quote", "View all products", "Call Us:", "Email Us:", "Based In:",
  "Products Overview", "Quality, QC & ISO 9001", "Resources & Guides", "Datasheets", "MSDS",
  "ISO 9001 Certified", "In-House QC Laboratory", "Full Diamond & CBN Range", "50+ Years' Experience",
  "London, UK", "Company & Resources",
];
const UI_FOOTER_ABOUT =
  "Manufacturer and finisher of the full range of industrial diamond and superabrasive materials, supplying tool makers worldwide.";
FAMILIES.forEach(collect);
UI.forEach(collect);
collect(UI_FOOTER_ABOUT);

/* ------------------------------- DeepL client ------------------------------- */
const cache: Record<string, string> = existsSync(CACHE_FILE)
  ? JSON.parse(readFileSync(CACHE_FILE, "utf8"))
  : {};

async function deepl(texts: string[], target: Target): Promise<string[]> {
  const out: string[] = new Array(texts.length);
  const need: { i: number; text: string }[] = [];
  texts.forEach((text, i) => {
    const c = cache[`${target}::${text}`];
    if (c !== undefined) out[i] = c;
    else need.push({ i, text });
  });

  for (let b = 0; b < need.length; b += 45) {
    const chunk = need.slice(b, b + 45);
    const res = await fetch(API, {
      method: "POST",
      headers: { Authorization: `DeepL-Auth-Key ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        text: chunk.map((c) => c.text),
        source_lang: "EN",
        target_lang: DEEPL_LANG[target],
        preserve_formatting: true,
      }),
    });
    if (!res.ok) throw new Error(`DeepL ${res.status}: ${await res.text()}`);
    const data = (await res.json()) as { translations: { text: string }[] };
    data.translations.forEach((tr, j) => {
      const { i, text } = chunk[j];
      out[i] = tr.text;
      cache[`${target}::${text}`] = tr.text;
    });
    writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
    process.stdout.write(`  ${target}: ${Math.min(b + 45, need.length)}/${need.length}\r`);
  }
  return out;
}

/* --------------------------------- rebuild ---------------------------------- */
const tr = (m: Map<string, string>, s: unknown) => (keepAsIs(s) ? m.get(s) ?? s : s);

if (!existsSync(CONTENT_DIR)) mkdirSync(CONTENT_DIR, { recursive: true });

for (const target of TARGETS) {
  console.log(`\nTranslating → ${target.toUpperCase()}`);
  const all = [...strings];
  const translated = await deepl(all, target);
  const m = new Map(all.map((s, i) => [s, translated[i]]));

  const productOut: Record<string, unknown> = {};
  for (const p of products) {
    productOut[p.slug] = {
      name: tr(m, p.name), eyebrow: tr(m, p.eyebrow), cardDesc: tr(m, p.cardDesc),
      h1: tr(m, p.h1), metaTitle: tr(m, p.metaTitle), metaDesc: tr(m, p.metaDesc),
      cta: tr(m, p.cta), quality: tr(m, p.quality),
      intro: p.intro.map((s) => tr(m, s)),
      applications: p.applications.map((s) => tr(m, s)),
      guides: p.guides?.map((s) => tr(m, s)),
      callouts: p.callouts?.map((c) => ({
        title: tr(m, c.title),
        body: Array.isArray(c.body) ? c.body.map((s) => tr(m, s)) : tr(m, c.body),
      })),
    };
  }

  const appOut: Record<string, unknown> = {};
  for (const a of applications) {
    appOut[a.slug] = {
      name: tr(m, a.name), eyebrow: tr(m, a.eyebrow), cardDesc: tr(m, a.cardDesc),
      h1: tr(m, a.h1), metaDesc: tr(m, a.metaDesc),
      intro: a.intro.map((s) => tr(m, s)),
      outcome: { title: tr(m, a.outcome.title), body: tr(m, a.outcome.body) },
      why: { title: tr(m, a.why.title), body: tr(m, a.why.body) },
      products: a.products.map((pr) => ({ product: pr.product, note: tr(m, pr.note) })),
    };
  }

  const families: Record<string, string> = {};
  FAMILIES.forEach((f) => (families[f] = m.get(f) ?? f));

  const ui: Record<string, string> = {};
  UI.forEach((k) => (ui[k] = m.get(k) ?? k));
  ui.footerAbout = m.get(UI_FOOTER_ABOUT) ?? UI_FOOTER_ABOUT;

  const write = (name: string, data: unknown) =>
    writeFileSync(join(CONTENT_DIR, `${name}.${target}.json`), JSON.stringify(data, null, 2) + "\n");
  write("products", productOut);
  write("applications", appOut);
  write("families", families);
  write("ui", ui);
  console.log(`\n  wrote lib/content/{products,applications,families,ui}.${target}.json`);
}

console.log("\nDone. Review the generated files, then wire them into lib/i18n-content.ts.");
