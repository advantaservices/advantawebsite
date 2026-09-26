import { business } from "@/lib/site-config";

export const SERVICE_PHONE_LABEL = business.phoneDisplay;
export const SERVICE_PHONE_TEL = business.phoneTel;
export const SERVICE_EMAIL = business.email;
export const SERVICE_AREAS_SHORT = "Spalding · Peterborough · Wisbech · Boston · Stamford";

export type ServiceFaqItem = {
  question: string;
  /** Desktop answer. Also used for structured data. */
  answer: string;
  /** Shorter answer for the narrow layout. Falls back to `answer` when omitted. */
  answerMobile?: string;
};

export type ServiceProcessStep = {
  title: string;
  body: string;
};

export type ServiceProcessContent = {
  title: string;
  intro: string;
  steps: ServiceProcessStep[];
};

export type ServiceFeatureBlock = {
  title: string;
  intro?: string;
  items: string[];
};

export type ServiceLandingContent = {
  slug: string;
  path: string;
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    imageSrc: string;
    imageAlt: string;
    primaryCtaLabel: string;
  };
  features: {
    title: string;
    lead: string;
    blocks: ServiceFeatureBlock[];
    imageSrc: string;
    imageAlt: string;
  };
  process: ServiceProcessContent;
  faqs: ServiceFaqItem[];
  closing: { title: string; lead: string; primaryLabel: string };
  schemaType?: "Service" | "HVACBusiness";
};

export const primaryBtnClass =
  "group inline-flex items-center justify-center gap-2 rounded-md bg-button px-6 py-3 text-sm font-semibold text-button-ink transition-all duration-200 ease-out motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-button/45";

export const heroSecondaryBtnClass =
  "group inline-flex items-center justify-center gap-2 rounded-md border border-on-dark/55 bg-viewer/20 px-6 py-3 text-sm font-semibold text-on-dark transition-all duration-200 ease-out hover:border-on-dark hover:bg-viewer/40 motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-dark/70";
