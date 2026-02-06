"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { useLocale } from "@/lib/locale-context";
import { Code2, Workflow, Cloud, BarChart3 } from "lucide-react";

export default function ServicesPage() {
  const { t } = useLocale();

  const services = [
    {
      icon: Code2,
      title: t.services.webDev.title,
      description: t.services.webDev.description,
      href: "/services/web-development",
      ctaText: t.services.webDev.cta,
    },
    {
      icon: Workflow,
      title: t.services.automation.title,
      description: t.services.automation.description,
      href: "/services/n8n-automation",
      ctaText: t.services.automation.cta,
    },
    {
      icon: Cloud,
      title: t.services.azure.title,
      description: t.services.azure.description,
      href: "/services/azure-cloud",
      ctaText: t.services.azure.cta,
    },
    {
      icon: BarChart3,
      title: t.services.marketing.title,
      description: t.services.marketing.description,
      href: "/services/digital-marketing",
      ctaText: t.services.marketing.cta,
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-2xl">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                {t.servicesPage.title}
              </p>
              <h1 className="text-balance text-4xl font-bold text-foreground lg:text-5xl">
                {t.servicesPage.subtitle}
              </h1>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
