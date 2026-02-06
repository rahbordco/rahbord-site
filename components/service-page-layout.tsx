"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: Benefit[];
  accentIcon: LucideIcon;
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  benefits,
  accentIcon: AccentIcon,
}: ServicePageLayoutProps) {
  const { t } = useLocale();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <AccentIcon className="h-7 w-7 text-primary" />
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight text-foreground lg:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {subtitle}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {description}
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                >
                  {t.hero.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex lg:justify-center" aria-hidden="true">
              <div className="flex h-64 w-64 items-center justify-center rounded-3xl border border-border/50 bg-card shadow-xl shadow-primary/5">
                <AccentIcon className="h-24 w-24 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-card/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-lg border border-border/50 bg-background p-8 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground">
            {t.contact.subtitle}
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              {t.hero.cta}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
