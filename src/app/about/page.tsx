import { PageHero } from "@/components/Layout/PageHero";
import { AboutIntro } from "@/components/About/AboutIntro";
import { JsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Advanta Services | Electrical & Climate",
  description:
    "Chris has been in the industry for over 10 years. Advanta Services LTD covers electrical work and air conditioning around Spalding and Peterborough.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About"
        title="A local firm for two trades"
        lead="Chris has been in the industry for over 10 years. Electrical and climate, based around Spalding and Peterborough. You deal with him directly."
        imageSrc="/advanta/photos/about/van.webp"
        imageAlt="Advanta Services van on a local job"
        compact
      />
      <AboutIntro />
    </>
  );
}
