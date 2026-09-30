import { PageHero } from "@/components/Layout/PageHero";
import { GalleryGrid } from "@/components/Gallery/GalleryGrid";
import { JsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Gallery | Advanta Services",
  description: "Finished electrical and air conditioning work around Spalding and Peterborough. Lighting, fuseboards, rewires, EV charging and air conditioning installs.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])} />
      <PageHero
        eyebrow="Gallery"
        title="Finished work"
        lead="Finished electrical and air conditioning work from houses, commercial rooms and sites around Spalding and Peterborough. Lighting, fuseboards, rewires, EV charging and air conditioning installs."
        imageSrc="/advanta/photos/hero/gym-led-ceiling.webp"
        imageAlt="LED ceiling lighting in a commercial gym"
        compact
      />
      <GalleryGrid />
    </>
  );
}
