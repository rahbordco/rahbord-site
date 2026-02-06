"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { TrustSection } from "@/components/trust-section";
import { TechSection } from "@/components/tech-section";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <TechSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
