"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const { t } = useLocale();

  return (
    <section className="bg-card/50 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-3xl font-bold text-foreground lg:text-4xl">
          {t.contact.subtitle}
        </h2>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            {t.hero.cta}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
