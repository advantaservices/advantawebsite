import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Layout/Section";
import { RevealBlock } from "@/components/Layout/useRevealInView";
import { business } from "@/lib/site-config";

const highlights = [
  "Electrical and air conditioning, equal weight",
  "Domestic, commercial, industrial and agricultural",
  "Qualified and insured",
  "Passionate about the work",
];

export function AboutIntro() {
  return (
    <Section majorSeam>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <RevealBlock variant="slide-left" className="relative h-[320px] overflow-hidden rounded-md md:h-[460px]">
          <Image
            src="/advanta/photos/about/engineer.webp"
            alt="Advanta engineer installing a Fujitsu air-conditioning system"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </RevealBlock>
        <RevealBlock variant="slide-right" className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Two trades, one person to deal with</h2>
          <p className="text-muted text-base leading-8">
            Chris has been in the industry for over 10 years. Advanta Services LTD is his company.
            The work is electrical and air conditioning, given the same attention, across domestic,
            commercial, industrial and agricultural jobs around Spalding and Peterborough.
          </p>
          <p className="text-muted text-base leading-8">
            You speak to Chris, not a call centre. He is qualified and insured, and he is passionate
            about doing the job properly. {business.hoursLabel}
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-strong" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 text-sm">
            <p>
              Call or WhatsApp{" "}
              <a href={business.phoneTel} className="text-base font-semibold text-foreground hover:text-brand-strong">
                {business.phoneDisplay}
              </a>
            </p>
            <p className="text-muted">{business.hoursLabel}</p>
          </div>
        </RevealBlock>
      </div>
    </Section>
  );
}
