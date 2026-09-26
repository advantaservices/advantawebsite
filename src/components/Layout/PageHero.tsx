"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO_BOTTOM_ONLY } from "@/components/Layout/Section";
import {
  heroSecondaryBtnClass,
  primaryBtnClass,
  SERVICE_PHONE_LABEL,
  SERVICE_PHONE_TEL,
} from "@/components/Electrical/serviceLandingShared";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  imageSrc: string;
  imageAlt: string;
  compact?: boolean;
  secondaryHref?: string;
  secondaryLabel?: string;
  actionsClassName?: string;
  backHref?: string;
  backLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  imageSrc,
  imageAlt,
  compact = false,
  secondaryHref,
  secondaryLabel,
  actionsClassName = "",
  backHref,
  backLabel,
}: PageHeroProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const heightClass = compact ? "advanta-hero-min-h-sm" : "advanta-hero-min-h";

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <section className={`${heightClass} relative isolate scroll-mt-0 overflow-hidden bg-viewer`}>
      <Image src={imageSrc} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-center" />
      <div className="advanta-hero-overlay absolute inset-0" aria-hidden />
      {backHref && backLabel ? (
        <nav aria-label="Breadcrumb" className="absolute inset-x-0 top-5 z-10 md:top-7">
          <div className="mx-auto w-full max-w-7xl px-6">
            <Link href={backHref} className="inline-flex text-sm font-semibold text-on-dark hover:text-on-dark-accent">
              ← {backLabel}
            </Link>
          </div>
        </nav>
      ) : null}
      <div className={`${heightClass} relative mx-auto flex w-full max-w-7xl items-end px-6 pt-16 md:items-center ${HERO_BOTTOM_ONLY}`}>
        <div ref={contentRef} className="max-w-3xl space-y-5">
          <p className={`reveal-rise ${visibleClass} text-[11px] font-semibold uppercase tracking-[0.2em] text-on-dark-accent md:text-xs`}>
            {eyebrow}
          </p>
          <h1 className={`reveal-rise ${visibleClass} text-4xl font-semibold leading-tight tracking-tight text-on-dark md:text-5xl`}>
            {title}
          </h1>
          <p className={`reveal-rise ${visibleClass} max-w-2xl text-base leading-relaxed text-on-dark-muted md:text-lg`}>
            {lead}
          </p>
          <div className={`reveal-rise ${visibleClass} flex flex-wrap gap-3 ${actionsClassName}`.trim()}>
            <Link href="/contact#enquiry-form" className={primaryBtnClass}>
              Get a quote
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className={heroSecondaryBtnClass}>
                {secondaryLabel}
              </Link>
            ) : (
              <a href={SERVICE_PHONE_TEL} className={heroSecondaryBtnClass}>
                Call {SERVICE_PHONE_LABEL}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
