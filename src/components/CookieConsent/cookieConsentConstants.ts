export const COOKIE_CONSENT_STORAGE_KEY = "advantaservices_cookie_consent_v1";

export const COOKIE_CONSENT_ACCEPTED = "accepted";
export const COOKIE_CONSENT_ESSENTIAL_ONLY = "essential_only";
export const COOKIE_CONSENT_CHANGED_EVENT = "advantaservices_cookie_consent_changed";

export type CookieConsentValue =
  | typeof COOKIE_CONSENT_ACCEPTED
  | typeof COOKIE_CONSENT_ESSENTIAL_ONLY;
