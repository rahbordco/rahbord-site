"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  ctaText: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  ctaText,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
        {ctaText}
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
