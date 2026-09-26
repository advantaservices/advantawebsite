import Image from "next/image";
import { Section } from "@/components/Layout/Section";
import type { ServiceFeatureBlock } from "@/components/Electrical/serviceLandingShared";
import { RevealBlock } from "@/components/Layout/useRevealInView";

type ServiceFeatureGridProps = {
  title: string;
  lead?: string;
  blocks: ServiceFeatureBlock[];
  imageSrc?: string;
  imageAlt?: string;
};

export function ServiceFeatureGrid({ title, lead, blocks, imageSrc, imageAlt }: ServiceFeatureGridProps) {
  return (
    <Section>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch lg:gap-x-12 lg:gap-y-8">
        <RevealBlock variant="fade-up" className="lg:col-start-2 lg:row-start-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong md:text-xs">What we cover</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
          {lead ? <p className="text-muted mt-4 max-w-xl text-sm leading-relaxed md:text-base">{lead}</p> : null}
        </RevealBlock>

        {imageSrc ? (
          <RevealBlock
            variant="slide-left"
            className="relative aspect-[16/10] overflow-hidden rounded-md lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:h-full lg:min-h-[28rem]"
          >
            <Image src={imageSrc} alt={imageAlt ?? ""} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
          </RevealBlock>
        ) : null}

        <div className={`grid gap-4 ${imageSrc ? "lg:col-start-2 lg:row-start-2" : ""}`}>
          {blocks.map((block, index) => (
            <RevealBlock
              key={block.title}
              variant="rise"
              className="relative overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6"
            >
              <span className="absolute inset-y-0 left-0 w-1 bg-brand-strong" aria-hidden />
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-strong">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{block.title}</h3>
              {block.intro ? <p className="text-muted mt-2 text-sm leading-relaxed">{block.intro}</p> : null}
              <ul className="mt-4 space-y-2.5 border-t border-[var(--border)] pt-4">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-strong" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealBlock>
          ))}
        </div>
      </div>
    </Section>
  );
}
