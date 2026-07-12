"use client";

import { useLocale } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<string, string> = {
  en: "EN",
  de: "DE",
  es: "ES",
  ja: "JA",
  it: "IT",
};

// Switches locale while preserving the current path (next-intl's usePathname
// returns the locale-agnostic pathname, so <Link locale> just re-prefixes it).
export default function LanguageSwitcher({ footer = false }: { footer?: boolean }) {
  const pathname = usePathname();
  const active = useLocale();

  return (
    <div className={`eid-lang${footer ? " eid-lang--footer" : ""}`} aria-label="Language">
      {routing.locales.map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={l === active ? "active" : ""}
          aria-current={l === active ? "true" : undefined}
        >
          {LABELS[l]}
        </Link>
      ))}
    </div>
  );
}
