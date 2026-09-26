import {
  COOKIE_CONSENT_ACCEPTED,
  COOKIE_CONSENT_STORAGE_KEY,
  type CookieConsentValue,
} from "@/components/CookieConsent/cookieConsentConstants";

export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "";

export const GOOGLE_CONSENT_GRANTED = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
  functionality_storage: "granted",
  personalization_storage: "granted",
} as const;

export const GOOGLE_CONSENT_DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
} as const;

export const GOOGLE_CONSENT_DEFAULTS_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "granted",
  wait_for_update: 2000,
});
gtag("set", "ads_data_redaction", true);
gtag("set", "url_passthrough", true);
try {
  var storedConsent = localStorage.getItem("${COOKIE_CONSENT_STORAGE_KEY}");
  if (storedConsent === "${COOKIE_CONSENT_ACCEPTED}") {
    gtag("consent", "update", ${JSON.stringify(GOOGLE_CONSENT_GRANTED)});
  }
} catch (e) {}
`;

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { gtag?: GtagFn }).gtag;
}

export function updateGoogleConsent(value: CookieConsentValue): void {
  const gtag = getGtag();
  if (!gtag) return;

  gtag(
    "consent",
    "update",
    value === COOKIE_CONSENT_ACCEPTED ? GOOGLE_CONSENT_GRANTED : GOOGLE_CONSENT_DENIED,
  );
}
