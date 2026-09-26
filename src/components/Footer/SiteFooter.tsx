"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AdvantaLogo } from "@/components/Brand/AdvantaLogo";
import { CLIMATE_NAV_LINKS, ELECTRICAL_DROPDOWN_LINKS } from "@/components/Navigation/serviceNavLinks";
import { business } from "@/lib/site-config";

const footerLegalLinks = [
  { label: "Terms of use", href: "/legal/terms-of-use" },
  { label: "Privacy policy", href: "/legal/privacy-policy" },
  { label: "Cookie policy", href: "/legal/cookie-policy" },
];

const socialIconBtnClass =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-sm transition hover:-translate-y-px hover:border-brand-strong/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong/40";

const socials = [
  { label: "Facebook", href: business.facebookUrl, icon: "/icons/facebook.svg" },
  { label: "Instagram", href: business.instagramUrl, icon: "/icons/instagram.svg" },
  { label: "LinkedIn", href: business.linkedinUrl, icon: "/icons/linkedin.svg" },
].filter((item) => item.href);

function Chevron({ className }: { className?: string }) {
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

const companyLinks = [
  { label: "Areas", href: "/areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

function FooterColumn({
  id,
  label,
  labelHref,
  links,
}: {
  id: string;
  label: string;
  labelHref?: string;
  links: readonly { label: string; href: string; emphasis?: boolean }[];
}) {
  const [open, setOpen] = useState(false);
  const headingClass = "text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-strong";

  return (
    <div>
      <button
        type="button"
        className={`flex items-center gap-1.5 sm:hidden ${headingClass}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <Chevron className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {labelHref ? (
        <Link href={labelHref} className={`hidden hover:underline sm:inline ${headingClass}`}>
          {label}
        </Link>
      ) : (
        <span className={`hidden sm:inline ${headingClass}`}>{label}</span>
      )}
      <nav
        id={id}
        aria-label={label}
        className={`flex-col gap-1.5 text-sm ${open ? "mt-3 flex" : "hidden"} sm:mt-3 sm:flex`}
      >
        {links.map((link) => (
          <Link
            key={`${link.href}-${link.label}`}
            href={link.href}
            className={link.emphasis ? "font-medium text-brand-strong hover:underline" : "text-muted hover:text-brand-strong"}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="advanta-desktop-nav border-t border-[color:var(--nav-footer-edge)]">
      <div className="mx-auto w-full max-w-7xl px-6 pt-8 pb-10 md:pt-10 md:pb-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-sm shrink-0">
            <Link href="/" aria-label="Advanta Services home" className="inline-block leading-none">
              <AdvantaLogo width={200} />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground">
              A small local firm for electrical and air conditioning, based around Spalding and Peterborough. Qualified and insured.
            </p>
            <div className="mt-4 space-y-1.5 text-sm">
              <p>
                <a href={`mailto:${business.email}`} className="font-medium text-brand-strong hover:underline">
                  {business.email}
                </a>
              </p>
              <p>
                <a href={business.phoneTel} className="font-medium hover:text-brand-strong">
                  {business.phoneDisplay}
                </a>
              </p>
              <p className="text-muted text-xs">Monday to Friday, 08:00 to 17:00.</p>
            </div>
            {socials.length > 0 ? (
              <div className="mt-4 flex flex-wrap items-center gap-2" aria-label="Advanta Services on social media">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={socialIconBtnClass}
                    aria-label={`Advanta Services on ${social.label}`}
                  >
                    <Image src={social.icon} alt="" width={18} height={18} unoptimized className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:flex sm:gap-x-16">
            <FooterColumn
              id="footer-electrical-links"
              label="Electrical"
              labelHref="/electrical"
              links={[
                ...ELECTRICAL_DROPDOWN_LINKS.map((link) => ({ label: link.label, href: link.href })),
                { label: "All electrical", href: "/electrical", emphasis: true },
              ]}
            />
            <FooterColumn
              id="footer-climate-links"
              label="Air conditioning"
              labelHref="/air-conditioning"
              links={CLIMATE_NAV_LINKS.map((link) => ({ label: link.label, href: link.href }))}
            />
            <FooterColumn id="footer-company-links" label="Company" links={companyLinks} />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[color:var(--nav-footer-edge)] pt-6 text-xs text-foreground md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-1">{business.legalName}, trading as {business.tradingAs}.</p>
            <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          </div>
          <nav aria-label="Legal and policies" className="flex flex-wrap gap-x-3 gap-y-1">
            {footerLegalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
