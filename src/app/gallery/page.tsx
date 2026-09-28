import { PageHero } from "@/components/Layout/PageHero";
import { GalleryGrid } from "@/components/Gallery/GalleryGrid";
import { JsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Gallery | Advanta Services",
  description: "Finished electrical and air-conditioning jobs around Spalding and Peterborough. Real sites, no stock vans.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])} />
      <PageHero
        eyebrow="Gallery"
        title="Finished work"
        lead="Lighting, fuseboards, air-con and the van. Finished shots. First-fix photos stay on the rewire and EICR pages."
        imageSrc="/advanta/photos/hero/gym-led-ceiling.webp"
        imageAlt="LED ceiling lighting in a commercial gym"
        compact
      />
      <GalleryGrid />
    </>
  );
}
