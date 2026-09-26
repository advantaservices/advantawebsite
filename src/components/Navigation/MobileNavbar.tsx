"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToPageTop } from "@/components/Navigation/ScrollToTopOnNavigate";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";
import { AdvantaLogo } from "@/components/Brand/AdvantaLogo";
import { business } from "@/lib/site-config";
import { ServiceMenuIcon } from "@/components/Navigation/serviceMenuIcons";
import {
  CLIMATE_NAV_LINKS,
  ELECTRICAL_NAV_LINKS,
  PRIMARY_NAV_LINKS,
  type ServiceNavItem,
} from "@/components/Navigation/serviceNavLinks";

const SCROLL_LOCK_KEYS = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "]);

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MobileDropdown({
  label,
  indexHref,
  items,
  isOpen,
  onToggle,
  onClose,
}: {
  label: string;
  indexHref: string;
  items: readonly ServiceNavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div>
      <div className="flex items-center">
        <Link
          href={indexHref}
          onClick={onClose}
          className="flex-1 rounded-md px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:text-brand-strong"
        >
          {label}
        </Link>
        <button
          type="button"
          aria-label={`${label} pages`}
          aria-expanded={isOpen}
          onClick={onToggle}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:text-brand-strong"
        >
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>
      {isOpen ? (
        <div className="mb-2 space-y-1 border-l border-brand/30 pl-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-brand-soft/50 hover:text-brand-strong"
            >
              <ServiceMenuIcon href={item.href} />
              <span className="min-w-0 leading-snug">{item.label}</span>
            </Link>
          ))}
          <Link
            href={indexHref}
            onClick={onClose}
            className="block px-2 py-2.5 text-sm font-semibold text-brand-strong"
          >
            View all {label.toLowerCase()}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export function MobileNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [electricalOpen, setElectricalOpen] = useState(false);
  const [climateOpen, setClimateOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setElectricalOpen(false);
        setClimateOpen(false);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const isInPanel = (target: EventTarget | null) => {
      const panel = document.getElementById("mobile-nav-panel");
      return Boolean(panel && target instanceof Node && panel.contains(target));
    };

    const onWheel = (event: WheelEvent) => {
      if (!isInPanel(event.target)) event.preventDefault();
    };
    const onTouchMove = (event: TouchEvent) => {
      if (!isInPanel(event.target)) event.preventDefault();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (SCROLL_LOCK_KEYS.has(event.key) && !isInPanel(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", onWheel, { passive: false, capture: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false, capture: true });
    document.addEventListener("keydown", onKeyDown, { capture: true });

    return () => {
      document.removeEventListener("wheel", onWheel, { capture: true });
      document.removeEventListener("touchmove", onTouchMove, { capture: true });
      document.removeEventListener("keydown", onKeyDown, { capture: true });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setElectricalOpen(false);
      setClimateOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setElectricalOpen(false);
    setClimateOpen(false);
  }, [pathname]);

  const close = () => setIsOpen(false);

  return (
    <header className="advanta-desktop-nav sticky top-0 z-[120] lg:hidden">
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Advanta Services home"
          className="min-w-0 flex-1 py-1 pr-3"
          onClick={(event) => {
            close();
            if (pathname !== "/") return;
            event.preventDefault();
            if (window.location.hash) window.history.replaceState(null, "", "/");
            scrollToPageTop();
          }}
        >
          <AdvantaLogo width={168} height={36} className="h-auto w-full max-w-[168px]" priority />
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggleButton className="dark:hover:bg-white/10" />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border hover:border-brand-strong hover:text-brand-strong"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-[73px] z-[110] bg-viewer/50"
          />
          <div
            id="mobile-nav-panel"
            className="advanta-desktop-nav absolute inset-x-0 top-full z-[120] max-h-[min(70vh,calc(100svh-73px))] overflow-y-auto shadow-lg"
          >
            <nav aria-label="Mobile navigation" className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6">
              <MobileDropdown
                label="Electrical"
                indexHref="/electrical"
                items={ELECTRICAL_NAV_LINKS}
                isOpen={electricalOpen}
                onToggle={() => setElectricalOpen((open) => !open)}
                onClose={close}
              />
              <MobileDropdown
                label="Air conditioning"
                indexHref="/air-conditioning"
                items={CLIMATE_NAV_LINKS}
                isOpen={climateOpen}
                onToggle={() => setClimateOpen((open) => !open)}
                onClose={close}
              />

              {PRIMARY_NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    close();
                    if (item.href === "/contact" && pathname === "/contact") {
                      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                    }
                  }}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:text-brand-strong"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact#enquiry-form"
                onClick={() => {
                  close();
                  if (pathname === "/contact") {
                    window.requestAnimationFrame(() => {
                      const el = document.getElementById("enquiry-form");
                      if (!el) return;
                      const top = el.getBoundingClientRect().top + window.scrollY - 72;
                      window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "auto" });
                    });
                  }
                }}
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-button px-4 py-3 text-sm font-semibold text-button-ink transition hover:opacity-90"
              >
                Get a quote
              </Link>
              <a
                href={business.phoneTel}
                onClick={close}
                className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-[var(--border)] px-4 py-3 text-sm font-semibold text-foreground transition hover:border-brand-strong hover:text-brand-strong"
              >
                Call {business.phoneDisplay}
              </a>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
