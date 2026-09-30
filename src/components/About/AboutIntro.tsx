import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Layout/Section";
import { RevealBlock } from "@/components/Layout/useRevealInView";
import { business } from "@/lib/site-config";

const highlights = [
  "Electrical and air conditioning from one company",
  "About 10 years electrical, 4 years air conditioning",
  "ECS Gold Card, 2391 and 18th Edition",
  "NAPIT registered. REFCOM registered",
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
            Chris has about 10 years in electrical work and 4 years in air conditioning. Advanta
            Services LTD is his company, company number {business.companyNumber}. The work covers
            both trades: electrical installation, and air conditioning that heats as well as cools,
            for domestic, commercial, industrial and agricultural jobs around Spalding and Peterborough.
          </p>
          <p className="text-muted text-base leading-8">
            You speak to Chris. He holds an electrical NVQ, the 2391 inspection and testing
            qualification, an ECS Gold Card with Approved Electrician grading, and the 18th Edition.
            Electrical work is NAPIT registered. Air conditioning is REFCOM registered.
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
