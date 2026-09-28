import { PageHero } from "@/components/Layout/PageHero";
import { HomeLocations } from "@/components/Home/HomeLocations";
import { AreasSeo } from "@/components/Areas/AreasSeo";
import { JsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Areas We Cover | Spalding, Peterborough and beyond | Advanta",
  description:
    "A small local firm based around Spalding and Peterborough, also covering Lincolnshire, Cambridgeshire, Norfolk, Suffolk, Essex, Hertfordshire, Northamptonshire and Rutland.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Areas", path: "/areas" }])} />
      <PageHero
        eyebrow="Coverage"
        title="The areas we cover"
        lead="Spalding, Peterborough, Wisbech, Boston and Stamford, and the towns and villages around them. We also cover Lincolnshire, Cambridgeshire, Norfolk, Suffolk, Essex, Hertfordshire, Northamptonshire and Rutland. Call us with the job."
        imageSrc="/advanta/photos/hero/van.webp"
        imageAlt="Advanta Services van covering Lincolnshire and Cambridgeshire"
        compact
      />
      <HomeLocations
        variant="electrics"
        sectionId="map"
        majorSeam={false}
        detailBasePath="/areas"
        heading={{
          kicker: "Map",
          title: "Areas we cover",
          lead: "Tap an area for the towns, then open the page. Electrical and air conditioning, based around Spalding and Peterborough.",
        }}
      />
      <AreasSeo />
    </>
  );
}
