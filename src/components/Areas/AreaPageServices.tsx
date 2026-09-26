import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Layout/Section";
import { RevealBlock } from "@/components/Layout/useRevealInView";
import { LOCATION_SERVICE_LINKS } from "@/components/Areas/areas-data";

export function AreaPageServices({ county }: { county: string }) {
  return (
    <Section>
      <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong md:text-xs">What we do here</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Electrical and air conditioning services we provide in {county}
        </h2>
        <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
          Rewires, fuseboards, testing, lighting, EV charging and air conditioning installation, servicing and repairs. The same two trades, carried out in {county}. Call us or send the job through for a quote.
        </p>
      </RevealBlock>
      <ul className="area-services mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {LOCATION_SERVICE_LINKS.map((service) => {
          const trade = service.href.startsWith("/air-conditioning") ? "Air conditioning" : "Electrical";
          const raw = "navBlurb" in service ? service.navBlurb : service.points[0];
          const detail = raw.endsWith(".") ? raw : `${raw}.`;
          return (
            <RevealBlock key={service.href} as="li" variant="rise" className="themed-card overflow-hidden rounded-md">
              <Link href={service.href} className="group block h-full">
                <span className="relative block aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-300 ease-out group-hover:scale-[1.04]"
                  />
                </span>
                <span className="block p-3 sm:p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-strong sm:text-[11px]">{trade}</span>
                  <span className="mt-1 block text-sm font-semibold text-foreground group-hover:text-brand-strong sm:text-base">{service.label}</span>
                  <span className="text-muted mt-1.5 block text-xs leading-snug sm:hidden">{detail}</span>
                  <span className="text-muted mt-2 hidden text-sm leading-relaxed sm:block">Available in {county}. {detail}</span>
                  <span className="mt-2 inline-flex text-xs font-semibold text-brand-strong sm:mt-3 sm:text-sm">View full detail</span>
                </span>
              </Link>
            </RevealBlock>
          );
        })}
      </ul>
    </Section>
  );
}
