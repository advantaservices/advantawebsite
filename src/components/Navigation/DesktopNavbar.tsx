"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToPageTop } from "@/components/Navigation/ScrollToTopOnNavigate";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";
import { AdvantaLogo } from "@/components/Brand/AdvantaLogo";
import { ServiceMenuIcon } from "@/components/Navigation/serviceMenuIcons";
import {
  CLIMATE_NAV_LINKS,
  ELECTRICAL_NAV_LINKS,
  PRIMARY_NAV_LINKS,
  type ServiceNavItem,
} from "@/components/Navigation/serviceNavLinks";

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

function NavDropdown({
  label,
  indexHref,
  items,
}: {
  label: string;
  indexHref: string;
  items: readonly ServiceNavItem[];
}) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center">
        <Link
          href={indexHref}
          className="rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:text-brand-strong"
        >
          {label}
        </Link>
        <button
          type="button"
          aria-label={`${label} pages`}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
          className="-ml-1 inline-flex h-9 w-8 items-center justify-center rounded-md text-foreground transition-colors hover:text-brand-strong"
        >
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          role="menu"
          className={`absolute left-0 top-full z-50 pt-1 ${items.length > 6 ? "w-[28rem]" : "w-64"}`}
        >
          <div className="overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)] py-2 shadow-[0_18px_40px_-24px_rgba(12,20,26,0.45)] dark:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.65)]">
            <div className={items.length > 6 ? "grid grid-cols-2" : undefined}>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-brand-soft/60 hover:text-brand-strong"
              >
                <ServiceMenuIcon href={item.href} />
                <span className="min-w-0 leading-snug">{item.label}</span>
              </Link>
            ))}
            </div>
            <div className="mt-1 border-t border-[var(--border)] px-3 pt-2">
              <Link
                href={indexHref}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-semibold text-brand-strong transition-colors hover:text-brand"
              >
                View all {label.toLowerCase()}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <header className="advanta-desktop-nav sticky top-0 z-[70] hidden lg:block">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 xl:px-8">
        <Link
          href="/"
          aria-label="Advanta Services home"
          className="shrink-0 py-2"
          onClick={(event) => {
            if (pathname !== "/") return;
            event.preventDefault();
            if (window.location.hash) window.history.replaceState(null, "", "/");
            scrollToPageTop();
          }}
        >
          <AdvantaLogo width={196} priority />
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-0.5 whitespace-nowrap xl:gap-2">
          <NavDropdown label="Electrical" indexHref="/electrical" items={ELECTRICAL_NAV_LINKS} />
          <NavDropdown label="Air conditioning" indexHref="/air-conditioning" items={CLIMATE_NAV_LINKS} />

          {PRIMARY_NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                if (item.href === "/contact" && pathname === "/contact") {
                  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                }
              }}
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:text-brand-strong"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact#enquiry-form"
            onClick={() => {
              if (pathname === "/contact") {
                window.requestAnimationFrame(() => {
                  const el = document.getElementById("enquiry-form");
                  if (!el) return;
                  const top = el.getBoundingClientRect().top + window.scrollY - 72;
                  window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "auto" });
                });
              }
            }}
            className="ml-2 inline-flex items-center rounded-md bg-button px-4 py-2.5 text-sm font-semibold text-button-ink transition hover:opacity-90"
          >
            Get a quote
          </Link>
          <ThemeToggleButton className="ml-1 dark:hover:bg-white/10" />
        </nav>
      </div>
    </header>
  );
}
