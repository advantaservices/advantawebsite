"use client";

import { useState } from "react";
import { Section } from "@/components/Layout/Section";
import type { ServiceFaqItem } from "@/components/Electrical/serviceLandingShared";
import { RevealBlock } from "@/components/Layout/useRevealInView";

export function ServiceFaq({ items, title = "Frequently asked questions" }: { items: ServiceFaqItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section muted majorSeam>
      <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong md:text-xs">FAQ</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
      </RevealBlock>
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-3 py-4 text-left hover:text-brand-strong"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-sm font-semibold text-foreground">{item.question}</span>
                <span className={`text-brand-strong ${isOpen ? "rotate-45" : ""}`} aria-hidden>
                  +
                </span>
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="text-muted pb-4 text-sm leading-relaxed md:hidden">{item.answerMobile ?? item.answer}</p>
                  <p className="text-muted hidden pb-4 text-sm leading-relaxed md:block">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
