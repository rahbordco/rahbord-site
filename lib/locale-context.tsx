"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { type Locale, defaultLocale, isRtl } from "./i18n";

import en from "@/locales/en.json";
import fa from "@/locales/fa.json";
import ar from "@/locales/ar.json";
import tr from "@/locales/tr.json";
import de from "@/locales/de.json";
import fr from "@/locales/fr.json";
import es from "@/locales/es.json";

type TranslationData = typeof en;

const translations: Record<Locale, TranslationData> = {
  en,
  fa: fa as TranslationData,
  ar: ar as TranslationData,
  tr: tr as TranslationData,
  de: de as TranslationData,
  fr: fr as TranslationData,
  es: es as TranslationData,
};

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationData;
  dir: "ltr" | "rtl";
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = isRtl(newLocale) ? "rtl" : "ltr";
    if (isRtl(newLocale)) {
      document.body.classList.add("font-vazir");
    } else {
      document.body.classList.remove("font-vazir");
    }
  }, []);

  const dir = isRtl(locale) ? "rtl" : "ltr";
  const t = translations[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
