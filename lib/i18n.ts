export const locales = ["en", "fa", "ar", "tr", "de", "fr", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const rtlLocales: Locale[] = ["fa", "ar"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fa: "فارسی",
  ar: "العربية",
  tr: "Turkce",
  de: "Deutsch",
  fr: "Francais",
  es: "Espanol",
};

export const localeFlags: Record<Locale, string> = {
  en: "GB",
  fa: "IR",
  ar: "SA",
  tr: "TR",
  de: "DE",
  fr: "FR",
  es: "ES",
};

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
