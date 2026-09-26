import Link from "next/link";
import { Section } from "@/components/Layout/Section";
import { locations } from "@/components/Areas/areas-data";
import { RevealBlock } from "@/components/Layout/useRevealInView";

const coverageHref = "/areas#counties";

export function ServiceAreas() {
  return (
    <Section>
      <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong md:text-xs">Local</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Where we work</h2>
        <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
          Based around Spalding and Peterborough. We cover Lincolnshire, Cambridgeshire, Norfolk, Suffolk, Essex, Hertfordshire, Northamptonshire and Rutland. Call us with the town and the job.
        </p>
      </RevealBlock>

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 md:hidden">
        {locations.map((area) => (
          <div key={area.slug} className="min-w-0 border-t border-[var(--border)] pt-3">
            <h3 className="text-sm font-semibold">
              <Link href={`/areas/${area.slug}`} className="hover:text-brand-strong">
                {area.county}
              </Link>
            </h3>
            <p className="text-muted mt-1 truncate text-xs leading-relaxed">{area.towns.join(", ")}</p>
          </div>
        ))}
        <div className="border-t border-[var(--border)] pt-3">
          <h3 className="text-sm font-semibold">
            <Link href={coverageHref} className="hover:text-brand-strong">
              See all coverage
            </Link>
          </h3>
          <p className="mt-1 text-xs leading-relaxed">
            <Link href={coverageHref} className="font-medium text-brand-strong hover:underline">
              Full area list
            </Link>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 hidden max-w-7xl gap-6 sm:grid-cols-2 md:grid lg:grid-cols-5">
        {locations.map((area) => (
          <RevealBlock key={area.slug} variant="rise" className="border-t border-[var(--border)] pt-4">
            <h3 className="text-base font-semibold">
              <Link href={`/areas/${area.slug}`} className="hover:text-brand-strong">
                {area.county}
              </Link>
            </h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">{area.towns.slice(0, 6).join(", ")}</p>
          </RevealBlock>
        ))}
        <RevealBlock variant="rise" className="border-t border-[var(--border)] pt-4">
          <h3 className="text-base font-semibold">
            <Link href={coverageHref} className="hover:text-brand-strong">
              See all coverage
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-relaxed">
            <Link href={coverageHref} className="font-medium text-brand-strong hover:underline">
              Click here to see full coverage
            </Link>
          </p>
        </RevealBlock>
      </div>
    </Section>
  );
}
