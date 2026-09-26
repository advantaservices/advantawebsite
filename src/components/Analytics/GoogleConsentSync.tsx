"use client";

import { useEffect } from "react";
import {
  COOKIE_CONSENT_CHANGED_EVENT,
  getStoredConsent,
} from "@/components/CookieConsent/cookieConsent";
import { updateGoogleConsent } from "@/components/CookieConsent/googleConsentMode";

/** Keeps Google Consent Mode in sync with the stored cookie choice, including changes made after load. */
export function GoogleConsentSync() {
  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) updateGoogleConsent(stored);

    const onConsentChange = () => {
      const value = getStoredConsent();
      if (value) updateGoogleConsent(value);
    };

    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, onConsentChange);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, onConsentChange);
  }, []);

  return null;
}
