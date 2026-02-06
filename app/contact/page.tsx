"use client";

import { useState, type FormEvent } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLocale } from "@/lib/locale-context";
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setLoading(false);
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-2xl">
              <h1 className="text-balance text-4xl font-bold text-foreground lg:text-5xl">
                {t.contact.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-5">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        {t.contact.name}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        {t.contact.email}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      {t.contact.subject}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Cloud Migration Consultation"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      {t.contact.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="resize-none rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {t.contact.send}
                  </button>

                  {status === "success" && (
                    <div className="flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      {t.contact.success}
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      <AlertCircle className="h-4 w-4" />
                      {t.contact.error}
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2">
                <div className="rounded-lg border border-border/50 bg-card p-8">
                  <h2 className="mb-6 text-lg font-semibold text-foreground">
                    {t.contact.title}
                  </h2>

                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {t.contact.address}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Castle Street, Liverpool, UK
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {t.contact.emailLabel}
                        </p>
                        <a
                          href="mailto:rahbordco.net@gmail.com"
                          className="mt-1 text-sm text-muted-foreground hover:text-primary"
                        >
                          rahbordco.net@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {t.contact.phone}
                        </p>
                        <a
                          href="tel:+447474777068"
                          className="mt-1 text-sm text-muted-foreground hover:text-primary"
                        >
                          +44 7474 777068
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
