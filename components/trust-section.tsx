"use client";

import { useLocale } from "@/lib/locale-context";
import { MapPin, Shield, Database } from "lucide-react";

export function TrustSection() {
  const { t } = useLocale();

  const signals = [
    { icon: MapPin, label: t.trust.location },
    { icon: Shield, label: t.trust.standards },
    { icon: Database, label: t.trust.compliance },
  ];

  return (
    <section className="border-y border-border/50 bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {signals.map((signal) => (
            <div key={signal.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <signal.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {signal.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
