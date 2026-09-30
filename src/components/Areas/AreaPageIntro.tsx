import Link from "next/link";
import { Section } from "@/components/Layout/Section";
import { RevealBlock } from "@/components/Layout/useRevealInView";
import { primaryBtnClass, SERVICE_PHONE_LABEL, SERVICE_PHONE_TEL } from "@/components/Electrical/serviceLandingShared";
import { business } from "@/lib/site-config";

export function AreaPageIntro({ county, paragraphs }: { county: string; paragraphs: string[] }) {
  return (
    <Section>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-12">
        <RevealBlock variant="fade-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong md:text-xs">In this area</p>
          <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Electrical and air conditioning across {county}
          </h2>
          <div className="mt-5 space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-muted max-w-2xl text-sm leading-relaxed md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </RevealBlock>
        <RevealBlock variant="rise" className="themed-card rounded-md p-5 md:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong">Call us</p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">Book work in {county}</p>
          <p className="text-muted mt-2 text-sm leading-relaxed">
            Qualified and insured. Electrical and air conditioning. Straightforward jobs can often be priced from photos. Larger work may need a survey. Monday to Friday, 08:00 to 17:00, with emergency call-outs out of hours.
          </p>
          <a href={SERVICE_PHONE_TEL} className="mt-4 block text-2xl font-semibold tracking-tight text-foreground hover:text-brand-strong">
            {SERVICE_PHONE_LABEL}
          </a>
          <a href={`mailto:${business.email}`} className="text-muted mt-1 block text-sm hover:text-brand-strong">
            {business.email}
          </a>
          <Link href="/contact#enquiry-form" className={`${primaryBtnClass} mt-5`}>
            Get a quote
          </Link>
        </RevealBlock>
      </div>
    </Section>
  );
}
