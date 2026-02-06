"use client";

import { useLocale } from "@/lib/locale-context";
import { ServiceCard } from "./service-card";
import { Code2, Workflow, Cloud, BarChart3 } from "lucide-react";

export function ServicesSection() {
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
    <section className="bg-card/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            {t.services.title}
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground lg:text-4xl">
            {t.services.subtitle}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
