"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/lib/locale-context";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n";
import { Globe } from "lucide-react";

const flagEmoji: Record<string, string> = {
  GB: "\u{1F1EC}\u{1F1E7}",
  IR: "\u{1F1EE}\u{1F1F7}",
  SA: "\u{1F1F8}\u{1F1E6}",
  TR: "\u{1F1F9}\u{1F1F7}",
  DE: "\u{1F1E9}\u{1F1EA}",
  FR: "\u{1F1EB}\u{1F1F7}",
  ES: "\u{1F1EA}\u{1F1F8}",
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span>{flagEmoji[localeFlags[locale]]}</span>
        <span className="hidden sm:inline">{localeNames[locale]}</span>
      </button>
      {open && (
        <div className="absolute end-0 top-full z-50 mt-2 min-w-[180px] rounded-md border border-border bg-card p-1 shadow-lg shadow-background/50">
          {locales.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => {
                setLocale(loc as Locale);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm transition-colors hover:bg-muted ${
                locale === loc
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              <span className="text-base">{flagEmoji[localeFlags[loc]]}</span>
              <span>{localeNames[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
