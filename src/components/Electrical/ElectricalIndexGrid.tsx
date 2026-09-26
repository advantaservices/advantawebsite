import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Layout/Section";
import { RevealBlock } from "@/components/Layout/useRevealInView";
import type { ServiceNavItem } from "@/components/Navigation/serviceNavLinks";

export function ServiceIndexGrid({
  items,
  eyebrow,
  title,
  lead,
}: {
  items: readonly ServiceNavItem[];
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <Section majorSeam>
      <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong md:text-xs">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
        <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">{lead}</p>
      </RevealBlock>
      <ul className="mx-auto mt-12 max-w-7xl space-y-8 lg:space-y-10">
        {items.map((service, index) => {
          const imageFirst = index % 2 === 0;
          return (
            <RevealBlock
              key={service.href}
              as="li"
              variant="fade-up"
              className="relative overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)]"
            >
              <span
                className={`absolute inset-y-0 z-10 w-1 bg-brand-strong ${imageFirst ? "right-0" : "left-0"}`}
                aria-hidden
              />
              <div className="grid lg:grid-cols-2 lg:items-stretch">
                <Link
                  href={service.href}
                  className={`relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-full ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                </Link>
                <div className={`p-5 md:p-6 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
                  <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-strong">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    <Link href={service.href} className="hover:text-brand-strong">
                      {service.label}
                    </Link>
                  </h3>
                  <p className="text-muted mt-3 text-sm leading-relaxed md:text-base">{service.blurb}</p>
                  <ul className="mt-4 space-y-2.5 border-t border-[var(--border)] pt-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-strong" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="mt-4 inline-flex text-sm font-semibold text-brand-strong hover:underline">
                    View full detail
                  </Link>
                </div>
              </div>
            </RevealBlock>
          );
        })}
      </ul>
    </Section>
  );
}
