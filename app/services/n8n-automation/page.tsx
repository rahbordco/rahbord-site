"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePageLayout } from "@/components/service-page-layout";
import { useLocale } from "@/lib/locale-context";
import { Workflow, Clock, ShieldCheck, TrendingDown, Scaling } from "lucide-react";

export default function N8nAutomationPage() {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <main>
        <ServicePageLayout
          title={t.automationPage.title}
          subtitle={t.automationPage.subtitle}
          description={t.automationPage.description}
          accentIcon={Workflow}
          benefits={[
            {
              icon: Clock,
              title: t.automationPage.benefit1Title,
              description: t.automationPage.benefit1Desc,
            },
            {
              icon: ShieldCheck,
              title: t.automationPage.benefit2Title,
              description: t.automationPage.benefit2Desc,
            },
            {
              icon: TrendingDown,
              title: t.automationPage.benefit3Title,
              description: t.automationPage.benefit3Desc,
            },
            {
              icon: Scaling,
              title: t.automationPage.benefit4Title,
              description: t.automationPage.benefit4Desc,
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
