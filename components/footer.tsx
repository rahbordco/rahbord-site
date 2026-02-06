"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-sm font-bold text-primary-foreground">R</span>
              </div>
              <span className="text-lg font-semibold text-foreground">
                Rahbord<span className="text-primary">Co</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.navigation}
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">{t.nav.home}</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">{t.nav.about}</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">{t.nav.contact}</Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.services}
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer services">
              <Link href="/services/web-development" className="text-sm text-muted-foreground hover:text-primary">{t.nav.webDev}</Link>
              <Link href="/services/n8n-automation" className="text-sm text-muted-foreground hover:text-primary">{t.nav.automation}</Link>
              <Link href="/services/azure-cloud" className="text-sm text-muted-foreground hover:text-primary">{t.nav.cloud}</Link>
              <Link href="/services/digital-marketing" className="text-sm text-muted-foreground hover:text-primary">{t.nav.marketing}</Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.contact}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Castle Street, Liverpool, UK</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:rahbordco.net@gmail.com" className="hover:text-primary">
                  rahbordco.net@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+447474777068" className="hover:text-primary">
                  +44 7474 777068
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Rahbord Co. {t.footer.rights}
          </p>
          <p className="text-xs text-muted-foreground">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
