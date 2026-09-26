"use client";

import Link from "next/link";
import { Section } from "@/components/Layout/Section";
import { RevealBlock } from "@/components/Layout/useRevealInView";
import { electricsCoverageAreas } from "@/components/Home/HomeLocations";

export function AreasSeo() {
  return (
    <Section id="counties" muted majorSeam>
      <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong md:text-xs">Wider patch</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Counties and towns</h2>
        <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
          Every county on the map has a page. Spalding, Peterborough, Wisbech, Boston and Stamford each have a town page as well.
        </p>
      </RevealBlock>
      <ul className="areas-counties mx-auto mt-8 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {electricsCoverageAreas.map((area) => (
          <RevealBlock key={area.id} as="li" variant="rise" className="border-t border-[var(--border)] pt-4">
            <h3 className="text-base font-semibold text-foreground">
              <Link href={`/areas/${area.id}`} className="hover:text-brand-strong">
                {area.county}
              </Link>
            </h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">{area.towns.join(", ")}</p>
            <Link href={`/areas/${area.id}`} className="mt-3 inline-flex text-sm font-semibold text-brand-strong hover:underline">
              Open {area.county} page
            </Link>
          </RevealBlock>
        ))}
      </ul>
    </Section>
  );
}
