"use client";

import Image from "next/image";
import Link from "next/link";
import { HERO_BOTTOM_ONLY } from "@/components/Layout/Section";
import {
  heroSecondaryBtnClass,
  primaryBtnClass,
  SERVICE_PHONE_LABEL,
  SERVICE_PHONE_TEL,
} from "@/components/Electrical/serviceLandingShared";
import { RevealBlock } from "@/components/Layout/useRevealInView";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  imageSrc: string;
  imageAlt: string;
  primaryCtaLabel: string;
  formHref?: string;
};

export function ServiceHero({
  eyebrow,
  title,
  lead,
  imageSrc,
  imageAlt,
  primaryCtaLabel,
  formHref = "/contact#enquiry-form",
}: ServiceHeroProps) {
  return (
    <section className="advanta-hero-min-h-sm relative isolate overflow-hidden bg-viewer">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        unoptimized
        preload
        loading="eager"
        fetchPriority="high"
        className="object-cover object-center"
      />
      <div className="advanta-hero-overlay absolute inset-0" aria-hidden />
      <div className={`advanta-hero-min-h-sm relative mx-auto flex w-full max-w-7xl items-end px-6 pt-16 md:items-center ${HERO_BOTTOM_ONLY}`}>
        <RevealBlock variant="rise" className="max-w-3xl space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-dark-accent md:text-xs">{eyebrow}</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-on-dark md:text-5xl">{title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-on-dark-muted md:text-lg">{lead}</p>
          <div className="hero-actions flex flex-wrap gap-3">
            <Link href={formHref} className={primaryBtnClass}>
              {primaryCtaLabel}
            </Link>
            <a href={SERVICE_PHONE_TEL} className={heroSecondaryBtnClass}>
              Call {SERVICE_PHONE_LABEL}
            </a>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
