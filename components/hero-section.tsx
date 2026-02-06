"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { ArrowRight, Cloud, Cpu, Workflow } from "lucide-react";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated accent elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute end-1/4 top-1/4 h-64 w-64 animate-pulse-glow rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 start-1/4 h-48 w-48 animate-pulse-glow rounded-full bg-primary/3 blur-3xl" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Cloud className="h-3.5 w-3.5" />
              <span>Cloud Architect &bull; Liverpool, UK</span>
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight text-foreground lg:text-5xl xl:text-6xl">
              {t.hero.title}
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                {t.hero.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Visual element: Tech node visualization */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="relative mx-auto h-96 w-96">
              {/* Central node */}
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-primary/30 bg-card shadow-lg shadow-primary/10">
                <Cloud className="h-10 w-10 text-primary" />
              </div>

              {/* Orbiting nodes */}
              <div className="absolute left-0 top-8 flex h-16 w-16 animate-float items-center justify-center rounded-xl border border-border bg-card shadow-md">
                <Cpu className="h-7 w-7 text-primary/70" />
              </div>
              <div className="absolute right-4 top-4 flex h-14 w-14 animate-float items-center justify-center rounded-xl border border-border bg-card shadow-md" style={{ animationDelay: "1s" }}>
                <Workflow className="h-6 w-6 text-primary/70" />
              </div>
              <div className="absolute bottom-12 left-8 flex h-14 w-14 animate-float items-center justify-center rounded-xl border border-border bg-card shadow-md" style={{ animationDelay: "2s" }}>
                <svg className="h-6 w-6 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-8 flex h-16 w-16 animate-float items-center justify-center rounded-xl border border-border bg-card shadow-md" style={{ animationDelay: "3s" }}>
                <svg className="h-7 w-7 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>

              {/* Connection lines (SVG) */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 384 384">
                <line x1="72" y1="72" x2="168" y2="168" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
                <line x1="320" y1="56" x2="216" y2="168" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
                <line x1="72" y1="312" x2="168" y2="216" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
                <line x1="320" y1="320" x2="216" y2="216" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
