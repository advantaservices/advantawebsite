"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { business } from "@/lib/site-config";

const SHOW_AFTER_MS = 10_000;
const VISIBLE_FOR_MS = 8_000;

export function FloatingWhatsappButton() {
  const [phase, setPhase] = useState<"hidden" | "in" | "out">("hidden");

  useEffect(() => {
    let hideTimer = 0;
    const showTimer = window.setTimeout(() => {
      setPhase("in");
      hideTimer = window.setTimeout(() => setPhase("out"), VISIBLE_FOR_MS);
    }, SHOW_AFTER_MS);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  const promptOpen = phase !== "hidden";

  return (
    <a
      href={business.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={promptOpen ? undefined : "Chat with Advanta Services on WhatsApp"}
      className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center"
    >
      {promptOpen ? (
        <span className="absolute right-[calc(100%+0.45rem)] top-1/2 -translate-y-1/2">
          <span
            className={`whatsapp-prompt relative block whitespace-nowrap rounded-[1.15rem] rounded-br-md bg-[var(--whatsapp-bubble)] px-3.5 py-2.5 text-sm text-[var(--whatsapp-bubble-ink)] shadow-[0_2px_8px_rgba(12,20,26,0.12)] ${
              phase === "in" ? "whatsapp-prompt-in" : ""
            }`}
          >
            Need help? Chat with us
            <svg aria-hidden viewBox="0 0 14 18" className="absolute -right-[7px] bottom-0 h-4 w-3">
              <path fill="var(--whatsapp-bubble)" d="M0 1c1.2 6 4.2 10 14 17H0V1Z" />
            </svg>
          </span>
        </span>
      ) : null}
      <span className="whatsapp-horizontal-shake inline-flex h-16 w-16 items-center justify-center transition duration-200 hover:-translate-y-1 hover:scale-105">
        <Image src="/icons/whatsapp.svg" alt="" width={64} height={64} className="h-16 w-16" unoptimized />
      </span>
    </a>
  );
}
