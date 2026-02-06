"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import { useLocale } from "@/lib/locale-context";
import {
  Cloud,
  Code2,
  Workflow,
  BarChart3,
  MapPin,
  Briefcase,
  Target,
} from "lucide-react";

const expertise = [
  { icon: Cloud, label: "Microsoft Azure" },
  { icon: Code2, label: "React / Next.js" },
  { icon: Workflow, label: "n8n Automation" },
  { icon: BarChart3, label: "Digital Marketing" },
  { icon: Briefcase, label: "WordPress" },
  { icon: Target, label: "TypeScript" },
];

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <main>
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Left column - Info */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 text-sm text-primary">
                  <MapPin className="h-4 w-4" />
                  <span>Liverpool, UK</span>
                </div>

                <h1 className="text-balance text-4xl font-bold text-foreground lg:text-5xl">
                  {t.about.title}
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  {t.about.subtitle}
                </p>

                <div className="mt-8 space-y-6">
                  <p className="leading-relaxed text-muted-foreground">
                    {t.about.bio}
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    {t.about.mission}
                  </p>
                </div>
              </div>

              {/* Right column - Expertise and approach */}
              <div className="flex flex-col gap-10">
                <div>
                  <h2 className="mb-6 text-xl font-semibold text-foreground">
                    {t.about.expertise}
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {expertise.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-lg border border-border/50 bg-card p-4 transition-all hover:border-primary/30"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-border/50 bg-card p-8">
                  <h2 className="mb-4 text-xl font-semibold text-foreground">
                    {t.about.approach}
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">
                    {t.about.approachDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
