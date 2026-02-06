"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePageLayout } from "@/components/service-page-layout";
import { useLocale } from "@/lib/locale-context";
import { BarChart3, BrainCircuit, FileText, Users, PieChart } from "lucide-react";

export default function DigitalMarketingPage() {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <main>
        <ServicePageLayout
          title={t.marketingPage.title}
          subtitle={t.marketingPage.subtitle}
          description={t.marketingPage.description}
          accentIcon={BarChart3}
          benefits={[
            {
              icon: BrainCircuit,
              title: t.marketingPage.benefit1Title,
              description: t.marketingPage.benefit1Desc,
            },
            {
              icon: FileText,
              title: t.marketingPage.benefit2Title,
              description: t.marketingPage.benefit2Desc,
            },
            {
              icon: Users,
              title: t.marketingPage.benefit3Title,
              description: t.marketingPage.benefit3Desc,
            },
            {
              icon: PieChart,
              title: t.marketingPage.benefit4Title,
              description: t.marketingPage.benefit4Desc,
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
