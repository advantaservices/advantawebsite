import {
  COOKIE_CONSENT_ACCEPTED,
  COOKIE_CONSENT_CHANGED_EVENT,
  COOKIE_CONSENT_ESSENTIAL_ONLY,
  COOKIE_CONSENT_STORAGE_KEY,
  type CookieConsentValue,
} from "@/components/CookieConsent/cookieConsentConstants";

export {
  COOKIE_CONSENT_ACCEPTED,
  COOKIE_CONSENT_ESSENTIAL_ONLY,
  COOKIE_CONSENT_CHANGED_EVENT,
  type CookieConsentValue,
} from "@/components/CookieConsent/cookieConsentConstants";

export function getStoredConsent(): CookieConsentValue | null {
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (value === COOKIE_CONSENT_ACCEPTED || value === COOKIE_CONSENT_ESSENTIAL_ONLY) {
      return value;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function hasAnalyticsConsent(): boolean {
  return getStoredConsent() === COOKIE_CONSENT_ACCEPTED;
}

export function setStoredConsent(value: CookieConsentValue): void {
  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGED_EVENT, { detail: value }));
}

export function hasStoredConsentChoice(): boolean {
  return getStoredConsent() !== null;
}
