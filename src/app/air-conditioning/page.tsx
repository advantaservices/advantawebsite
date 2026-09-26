import { PageHero } from "@/components/Layout/PageHero";
import { ServiceIndexGrid } from "@/components/Electrical/ElectricalIndexGrid";
import { ServiceClosingCta } from "@/components/Electrical/ServiceClosingCta";
import { CLIMATE_NAV_LINKS } from "@/components/Navigation/serviceNavLinks";
import { JsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Air Conditioning Installation, Lincolnshire | Advanta",
  description:
    "Domestic and commercial air conditioning around Spalding and Peterborough. Single and multi-split installation, servicing, fault finding, repairs and replacements. Most new systems: 5-year warranty.",
  path: "/air-conditioning",
});

export default function ClimateIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Air conditioning", path: "/air-conditioning" }])}
      />
      <PageHero
        eyebrow="Air conditioning"
        title="Air conditioning for homes and commercial sites"
        lead="This is the climate side of the firm: air conditioning for houses and commercial sites. Install, service and repair. Fujitsu, Daikin, Mitsubishi and Haier. Most new systems carry a 5-year warranty."
        imageSrc="/advanta/photos/climate/fujitsu-living-room.webp"
        imageAlt="Fujitsu indoor air-conditioning unit in a living room"
        compact
        actionsClassName="hero-actions"
      />
      <ServiceIndexGrid
        items={CLIMATE_NAV_LINKS}
        eyebrow="Air conditioning"
        title="Install or service"
        lead="Installation for a new system, or servicing and repair for plant that is already on the wall."
      />
      <ServiceClosingCta
        title="Install, a service, or a system that has stopped"
        lead="Photos of the indoor and outdoor units, and the postcode, are enough to start. We will say whether it is a new system, a service or a repair, and what happens next."
        primaryLabel="Get a quote"
      />
    </>
  );
}
