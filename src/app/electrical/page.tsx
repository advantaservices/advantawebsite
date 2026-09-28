import { PageHero } from "@/components/Layout/PageHero";
import { ServiceIndexGrid } from "@/components/Electrical/ElectricalIndexGrid";
import { ServiceClosingCta } from "@/components/Electrical/ServiceClosingCta";
import { ELECTRICAL_NAV_LINKS } from "@/components/Navigation/serviceNavLinks";
import { JsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Electrical Services in Spalding & Peterborough | Advanta",
  description:
    "Domestic, commercial, industrial and agricultural electrical work around Spalding and Peterborough. Rewires, fuseboards, lighting, three-phase, EICRs, EV charging, PAT testing, alarms and CCTV.",
  path: "/electrical",
});

export default function ElectricalIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Electrical", path: "/electrical" }])} />
      <PageHero
        eyebrow="Electrical"
        title="Electrical work across Lincolnshire and Cambridgeshire"
        lead="Domestic, commercial, industrial and agricultural electrical work. Rewires, fuseboards, sockets, lighting, three-phase, fault finding, EICRs, EV chargers, outbuildings, PAT testing, alarms and CCTV."
        imageSrc="/advanta/photos/electrical/showroom-lighting.webp"
        imageAlt="Finished commercial lighting by Advanta Services"
        compact
        actionsClassName="hero-actions"
      />
      <ServiceIndexGrid
        items={ELECTRICAL_NAV_LINKS}
        eyebrow="All electrical"
        title="Choose the work you need"
        lead="Below is just a few of the services that we offer. Open one for the detail, or send a single enquiry with photos and a postcode."
      />
      <ServiceClosingCta
        title="Tell us what needs doing"
        lead="A short description, a photo of the board if you have one, and the postcode. We will say what the work is, and come back with a price."
        primaryLabel="Get a quote"
      />
    </>
  );
}
