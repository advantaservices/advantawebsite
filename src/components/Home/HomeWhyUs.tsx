import { Clock, Hammer, MapPin, ShieldCheck, Wallet, Wrench } from "lucide-react";
import { Section } from "@/components/Layout/Section";
import { RevealBlock } from "@/components/Layout/useRevealInView";
import { WHY_US_REASONS } from "@/components/Home/whyUsContent";

const reasonIcons = [Wrench, Hammer, Wallet, Clock, ShieldCheck, MapPin] as const;

export function HomeWhyUs() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong md:text-xs">
          Why Advanta
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Why choose Advanta
        </h2>
      </div>

      <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-x-4 gap-y-6 md:mt-10 md:gap-x-14 md:gap-y-10">
        {WHY_US_REASONS.map((reason, index) => {
          const Icon = reasonIcons[index];
          return (
            <RevealBlock key={reason.title} as="li" variant="rise">
              <div className="border-b border-[var(--border)] pb-4 md:flex md:gap-4 md:pb-6">
                <div className="flex items-center gap-3 md:block">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-strong md:h-14 md:w-14">
                    <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden strokeWidth={1.75} />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground md:hidden">{reason.title}</h3>
                </div>
                <div className="mt-2 min-w-0 flex-1 md:mt-0">
                  <h3 className="hidden text-base font-semibold text-foreground md:block">{reason.title}</h3>
                  <p className="text-muted text-xs leading-relaxed md:hidden">{reason.mobileBody}</p>
                  <p className="text-muted mt-2 hidden text-sm leading-relaxed md:block">{reason.body}</p>
                </div>
              </div>
            </RevealBlock>
          );
        })}
      </ul>
    </Section>
  );
}
