"use client";

import { useLocale } from "@/lib/locale-context";

const technologies = [
  { name: "React", color: "text-[#61DAFB]" },
  { name: "Next.js", color: "text-foreground" },
  { name: "WordPress", color: "text-[#21759B]" },
  { name: "n8n", color: "text-[#EA4B71]" },
  { name: "Microsoft Azure", color: "text-[#0089D6]" },
  { name: "TypeScript", color: "text-[#3178C6]" },
];

export function TechSection() {
  const { t } = useLocale();

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            {t.tech.title}
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground">
            {t.tech.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 rounded-lg border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
                <span className={`text-xl font-bold ${tech.color}`}>
                  {tech.name.charAt(0)}
                </span>
              </div>
              <span className="text-center text-sm font-medium text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
