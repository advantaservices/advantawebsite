"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Desktop sticky nav is h-20; nudge a little past so the hero strip is fully clear. */
const ENQUIRY_FORM_OFFSET_PX = 72;

export function scrollToPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function scrollToHashOrTop() {
  const rawHash = window.location.hash.replace(/^#/, "");
  // Guard against accidental #enquiry-form#enquiry-form in the URL.
  const hash = rawHash.split("#").filter(Boolean)[0] ?? "";

  if (hash) {
    const el = document.getElementById(hash);
    if (!el) {
      window.requestAnimationFrame(() => {
        const retry = document.getElementById(hash);
        if (!retry) return;
        const top =
          retry.getBoundingClientRect().top + window.scrollY - ENQUIRY_FORM_OFFSET_PX;
        window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "auto" });
      });
      return;
    }

    const top = el.getBoundingClientRect().top + window.scrollY - ENQUIRY_FORM_OFFSET_PX;
    window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "auto" });
    return;
  }

  scrollToPageTop();
}

/**
 * Sticky headers make the App Router keep the previous scroll offset on
 * soft navigations. Jump to top on path change, or to a hash target when present
 * (e.g. /contact#enquiry-form for Get a quote).
 */
export function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const isFirstPath = useRef(true);

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (isFirstPath.current) {
      isFirstPath.current = false;
      if (window.location.hash) {
        const frame = window.requestAnimationFrame(scrollToHashOrTop);
        return () => window.cancelAnimationFrame(frame);
      }
      return;
    }

    scrollToHashOrTop();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("hashchange", scrollToHashOrTop);
    return () => window.removeEventListener("hashchange", scrollToHashOrTop);
  }, []);

  return null;
}
