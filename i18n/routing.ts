import { defineRouting } from "next-intl/routing";

// EN is the default and stays unprefixed (/products); DE, ES, JA, IT are
// prefixed (/de/products …). Machine-translated content is reviewed later.
export const routing = defineRouting({
  locales: ["en", "de", "es", "ja", "it"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
