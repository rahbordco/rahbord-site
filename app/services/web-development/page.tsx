"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePageLayout } from "@/components/service-page-layout";
import { useLocale } from "@/lib/locale-context";
import { Code2, Monitor, Palette, Zap } from "lucide-react";

export default function WebDevelopmentPage() {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <main>
        <ServicePageLayout
          title={t.webDevPage.title}
          subtitle={t.webDevPage.subtitle}
          description={t.webDevPage.description}
          accentIcon={Code2}
          benefits={[
            {
              icon: Code2,
              title: t.webDevPage.benefit1Title,
              description: t.webDevPage.benefit1Desc,
            },
            {
              icon: Monitor,
              title: t.webDevPage.benefit2Title,
              description: t.webDevPage.benefit2Desc,
            },
            {
              icon: Palette,
              title: t.webDevPage.benefit3Title,
              description: t.webDevPage.benefit3Desc,
            },
            {
              icon: Zap,
              title: t.webDevPage.benefit4Title,
              description: t.webDevPage.benefit4Desc,
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
