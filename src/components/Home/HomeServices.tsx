import Image from "next/image";
import Link from "next/link";
import { Cable, Fan, Lightbulb, PlugZap, ShieldCheck, Snowflake, Wrench, Zap } from "lucide-react";
import { Section } from "@/components/Layout/Section";
import { RevealBlock } from "@/components/Layout/useRevealInView";

const tiles = [
  {
    title: "Rewires",
    href: "/electrical/rewires",
    icon: Cable,
    image: "/advanta/photos/electrical/rewire-trunking.webp",
    alt: "Trunking and first-fix cabling during a rewire",
  },
  {
    title: "Fuseboards",
    href: "/electrical/fuseboards",
    icon: Zap,
    image: "/advanta/photos/electrical/fuseboard-hager.webp",
    alt: "Hager fuseboard second fix",
  },
  {
    title: "EICR testing",
    href: "/electrical/eicr",
    icon: ShieldCheck,
    image: "/advanta/photos/electrical/eicr-old-board.webp",
    alt: "Older consumer unit opened during an EICR",
  },
  {
    title: "Lighting",
    href: "/electrical/lighting",
    icon: Lightbulb,
    image: "/advanta/photos/electrical/landing-handrail.webp",
    alt: "LED handrail lighting on a residential landing",
  },
  {
    title: "EV charging",
    href: "/electrical/ev-charging",
    icon: PlugZap,
    image: "/advanta/photos/electrical/ev-rolec.webp",
    alt: "Rolec home EV charger on a brick cottage",
  },
  {
    title: "Installations",
    href: "/electrical/installations",
    icon: Wrench,
    image: "/advanta/photos/electrical/plant-room.webp",
    alt: "Commercial plant room panel and cable tray during an installation",
  },
  {
    title: "Air conditioning install",
    href: "/air-conditioning/installations",
    icon: Snowflake,
    image: "/advanta/photos/climate/fujitsu-living-room.webp",
    alt: "Fujitsu indoor air-conditioning unit in a living room",
  },
  {
    title: "Air conditioning servicing",
    href: "/air-conditioning/servicing",
    icon: Fan,
    image: "/advanta/photos/climate/service-charging.webp",
    alt: "Outdoor air-conditioning unit being serviced",
  },
];

export function HomeServices() {
  return (
    <Section muted>
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong md:text-xs">
          What we do
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          <span className="sm:hidden">Electrical and air conditioning</span>
          <span className="hidden sm:inline">Electrical and air conditioning services</span>
        </h2>
        <p className="text-muted mx-auto mt-3 text-sm leading-relaxed md:whitespace-nowrap md:text-base">
          Domestic, commercial, industrial and agricultural jobs around Spalding, Peterborough and Wisbech.
        </p>
      </div>

      <ul className="home-services-grid mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {tiles.map((tile) => {
          const Icon = tile.icon;
          return (
            <RevealBlock key={tile.href} as="li" variant="rise">
              <Link href={tile.href} className="themed-card group block overflow-hidden rounded-md">
                <span className="relative block aspect-[16/10]">
                  <Image
                    src={tile.image}
                    alt={tile.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="flex items-center gap-2 px-4 py-3">
                  <Icon className="h-4 w-4 text-brand-strong" aria-hidden strokeWidth={2} />
                  <span className="text-sm font-semibold text-foreground group-hover:text-brand-strong">{tile.title}</span>
                </span>
              </Link>
            </RevealBlock>
          );
        })}
      </ul>

      <p className="text-muted mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed md:text-[15px]">
        View all{" "}
        <Link href="/electrical" className="font-semibold text-brand-strong underline-offset-4 hover:underline">
          electrical services
        </Link>{" "}
        and{" "}
        <Link
          href="/air-conditioning"
          className="font-semibold text-brand-strong underline-offset-4 hover:underline"
        >
          <span className="sm:hidden">AC services</span>
          <span className="hidden sm:inline">air conditioning services</span>
        </Link>.
      </p>
    </Section>
  );
}
