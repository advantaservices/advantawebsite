import Link from "next/link";
import { Section } from "@/components/Layout/Section";
import { RevealBlock } from "@/components/Layout/useRevealInView";

const townPages: Record<string, string> = {
  Spalding: "/areas/spalding",
  Pinchbeck: "/areas/spalding",
  Peterborough: "/areas/peterborough",
  Wisbech: "/areas/wisbech",
  Boston: "/areas/boston",
  Stamford: "/areas/stamford",
};

export function AreaPageTowns({ county, towns }: { county: string; towns: string[] }) {
  const linked = towns.some((town) => townPages[town]);

  return (
    <Section muted>
      <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong md:text-xs">Towns</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Towns we cover in {county}</h2>
        <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
          Electrical and air conditioning in the towns below.
          {linked ? " Open a town where it has its own page." : " Call us with the town and the job."}
        </p>
      </RevealBlock>
      <ul className="area-towns mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {towns.map((town) => {
          const href = townPages[town];
          return (
            <RevealBlock key={town} as="li" variant="rise" className="themed-card rounded-md px-3 py-3">
              <span className="flex items-start gap-2 text-sm font-semibold text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-strong" aria-hidden />
                {href ? (
                  <Link href={href} className="hover:text-brand-strong">
                    {town}
                  </Link>
                ) : (
                  <span>{town}</span>
                )}
              </span>
            </RevealBlock>
          );
        })}
      </ul>
    </Section>
  );
}
