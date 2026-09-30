"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HERO_BOTTOM_ONLY } from "@/components/Layout/Section";
import { business } from "@/lib/site-config";

const HERO_PHOTOS = [
  {
    desktop: "/advanta/photos/hero/gym-desktop.webp",
    mobile: "/advanta/photos/hero/gym-mobile.webp",
    alt: "LED ceiling lighting in a commercial gym",
    origin: "center",
  },
  {
    desktop: "/advanta/photos/hero/pool-desktop.webp",
    mobile: "/advanta/photos/hero/pool-mobile.webp",
    alt: "Night lighting around a pool house",
    origin: "42% 58%",
  },
  {
    desktop: "/advanta/photos/hero/aircon-outdoor-desktop.webp",
    mobile: "/advanta/photos/hero/aircon-outdoor-mobile.webp",
    alt: "Fujitsu outdoor air-conditioning unit on a brick house",
    origin: "center",
  },
  {
    desktop: "/advanta/photos/hero/ford-focus-desktop.webp",
    mobile: "/advanta/photos/hero/ford-focus-mobile.webp",
    alt: "Commercial showroom lighting at a Ford dealer",
    origin: "center",
  },
] as const;

const CYCLE_MS = 6800;

const primaryBtn =
  "group inline-flex items-center justify-center gap-2 rounded-md bg-button px-6 py-3 text-sm font-semibold text-button-ink transition-all duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-dark/55";

const secondaryBtn =
  "group inline-flex items-center justify-center gap-2 rounded-md border border-on-dark/70 bg-viewer/25 px-6 py-3 text-sm font-semibold text-on-dark shadow-none transition-all duration-200 ease-out hover:border-on-dark hover:bg-viewer/40 motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-dark/70";

const revealDelay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms`, transitionDuration: "1050ms" }) as React.CSSProperties;

const FADE_MS = 1400;

export function HomeHero() {
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => {
      setActive((index) => {
        const next = (index + 1) % HERO_PHOTOS.length;
        setHold(index);
        return next;
      });
    }, CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [active]);

  useEffect(() => {
    if (hold === null) return;
    const timer = window.setTimeout(() => setHold(null), FADE_MS);
    return () => window.clearTimeout(timer);
  }, [hold, active]);

  function showPhoto(index: number) {
    setActive((current) => {
      if (current === index) return current;
      setHold(current);
      return index;
    });
  }

  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <section className="home-hero advanta-hero-min-h relative isolate scroll-mt-0 overflow-hidden bg-viewer">
      {HERO_PHOTOS.map((photo, index) => {
        const isActive = index === active;
        const isHold = index === hold && !isActive;
        return (
          <picture
            key={photo.desktop}
            className={`hero-slide${isActive ? " is-active" : ""}${isHold ? " is-hold" : ""}`}
            style={{ "--hero-origin": photo.origin } as React.CSSProperties}
          >
            <source media="(min-width: 768px)" srcSet={photo.desktop} type="image/webp" />
            <img
              src={photo.mobile}
              alt={isActive ? photo.alt : ""}
              width={900}
              height={1200}
              fetchPriority={index === 0 ? "high" : "low"}
              decoding={index === 0 ? "sync" : "async"}
            />
          </picture>
        );
      })}
      <div className="advanta-hero-overlay absolute inset-0" aria-hidden />

      <div
        className={`hero-copy advanta-hero-min-h relative mx-auto flex w-full max-w-7xl items-end px-6 pt-16 md:items-center ${HERO_BOTTOM_ONLY}`}
      >
        <div className="max-w-4xl space-y-6">
          <p
            className={`reveal-rise ${visibleClass} text-[11px] font-semibold uppercase tracking-[0.2em] text-on-dark-accent md:text-xs`}
            style={revealDelay(0)}
          >
            Electrical &amp; climate, Lincolnshire
          </p>
          <h1
            className={`reveal-rise ${visibleClass} text-4xl font-semibold leading-tight tracking-tight text-on-dark md:text-5xl lg:text-6xl`}
            style={revealDelay(130)}
          >
            Electrical and Air Conditioning in Spalding and Peterborough
          </h1>
          <p
            className={`reveal-rise ${visibleClass} max-w-2xl text-base leading-relaxed text-on-dark-muted md:text-lg`}
            style={revealDelay(260)}
          >
            Domestic, commercial, industrial and agricultural work around Spalding and Peterborough. Clear pricing,
            tidy finishes, and support after the install.
          </p>
          <div className={`reveal-rise ${visibleClass} flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center`} style={revealDelay(390)}>
            <a href={business.phoneTel} className={`${primaryBtn} w-full sm:w-auto`}>
              Call {business.phoneDisplay}
            </a>
            <Link href="/contact#enquiry-form" className={`${secondaryBtn} w-full sm:w-auto`}>
              Get a quote
            </Link>
          </div>
          <p className={`reveal-rise ${visibleClass} text-xs text-on-dark-muted`} style={revealDelay(480)}>
            Qualified and insured · Passionate about what we do
          </p>
          <p className={`reveal-rise ${visibleClass} text-xs text-on-dark-muted`} style={revealDelay(560)}>
            ECS Gold Card · 2391 · 18th Edition · NAPIT · REFCOM
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center">
        {HERO_PHOTOS.map((photo, index) => (
          <button
            key={photo.desktop}
            type="button"
            aria-label={`Show photo ${index + 1} of ${HERO_PHOTOS.length}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => showPhoto(index)}
            className="group flex items-center justify-center px-1 pt-4 pb-5"
          >
            <span
              className={`block h-0.5 rounded-full transition-all duration-500 ${
                index === active ? "w-8 bg-on-dark" : "w-2.5 bg-on-dark/40 group-hover:bg-on-dark/70"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
