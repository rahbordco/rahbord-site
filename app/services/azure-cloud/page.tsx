"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePageLayout } from "@/components/service-page-layout";
import { useLocale } from "@/lib/locale-context";
import { Cloud, Shield, Server, TrendingDown, Lock } from "lucide-react";

export default function AzureCloudPage() {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <main>
        <ServicePageLayout
          title={t.azurePage.title}
          subtitle={t.azurePage.subtitle}
          description={t.azurePage.description}
          accentIcon={Cloud}
          benefits={[
            {
              icon: Shield,
              title: t.azurePage.benefit1Title,
              description: t.azurePage.benefit1Desc,
            },
            {
              icon: Server,
              title: t.azurePage.benefit2Title,
              description: t.azurePage.benefit2Desc,
            },
            {
              icon: TrendingDown,
              title: t.azurePage.benefit3Title,
              description: t.azurePage.benefit3Desc,
            },
            {
              icon: Lock,
              title: t.azurePage.benefit4Title,
              description: t.azurePage.benefit4Desc,
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
