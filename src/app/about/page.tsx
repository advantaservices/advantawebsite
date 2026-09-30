import { PageHero } from "@/components/Layout/PageHero";
import { AboutIntro } from "@/components/About/AboutIntro";
import { JsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Advanta Services | Electrical & Climate",
  description:
    "About 10 years electrical and 4 years air conditioning. Advanta Services LTD, company number 17151983. ECS Gold Card, 2391, 18th Edition, NAPIT and REFCOM.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About"
        title="A local firm for two trades"
        lead="Electrical and air conditioning from one company, based around Spalding and Peterborough. 10 years in electrical work and 4 years in air conditioning, for domestic, commercial, industrial and agricultural jobs."
        imageSrc="/advanta/photos/about/van.webp"
        imageAlt="Advanta Services van on a local job"
        compact
      />
      <AboutIntro />
    </>
  );
}
