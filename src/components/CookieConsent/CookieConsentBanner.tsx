"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_ACCEPTED,
  COOKIE_CONSENT_ESSENTIAL_ONLY,
  hasStoredConsentChoice,
  setStoredConsent,
  type CookieConsentValue,
} from "@/components/CookieConsent/cookieConsent";

export { COOKIE_CONSENT_ACCEPTED, COOKIE_CONSENT_ESSENTIAL_ONLY } from "@/components/CookieConsent/cookieConsent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hasStoredConsentChoice()) return;
    const timer = window.setTimeout(() => setVisible(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = (value: CookieConsentValue) => {
    setStoredConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-[130] mx-auto max-w-6xl rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-4 shadow-[0_18px_45px_-24px_rgba(12,20,26,0.4)] md:bottom-6 md:px-6 md:py-5 dark:shadow-[0_18px_45px_-24px_rgba(0,0,0,0.65)]"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="min-w-0 flex-1 space-y-2">
          <h2 id="cookie-consent-title" className="text-base font-semibold text-foreground">
            Cookies on this site
          </h2>
          <p id="cookie-consent-desc" className="text-sm leading-relaxed text-[var(--text-muted)]">
            We use cookies as explained in our{" "}
            <Link
              href="/legal/cookie-policy"
              className="font-medium text-brand-strong underline-offset-2 hover:underline"
            >
              Cookie policy
            </Link>
            {", including those needed for the site to work and optional analytics. Choose "}
            <strong className="font-semibold text-foreground">Accept</strong> to allow analytics cookies, or{" "}
            <strong className="font-semibold text-foreground">Essential only</strong> to use necessary cookies only.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3 md:justify-end">
          <button
            type="button"
            onClick={() => dismiss(COOKIE_CONSENT_ACCEPTED)}
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-button px-6 py-2.5 text-sm font-semibold text-button-ink shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-button/45"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => dismiss(COOKIE_CONSENT_ESSENTIAL_ONLY)}
            className="inline-flex cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-brand-strong/45 hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong/40"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
