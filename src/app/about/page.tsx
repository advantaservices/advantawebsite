import { PageHero } from "@/components/Layout/PageHero";
import { AboutIntro } from "@/components/About/AboutIntro";
import { JsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Advanta Services | Electrical & Climate",
  description:
    "Advanta Services LTD trades as Advanta Electrical & Climate. Electrical and air conditioning around Spalding and Peterborough. Qualified and insured.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About"
        title="A local firm for two trades"
        lead="Lots of experience, qualified and insured, working around Spalding and Peterborough. You deal with us directly."
        imageSrc="/advanta/photos/about/van.webp"
        imageAlt="Advanta Services Ford Transit Custom YS67 TKE"
        compact
      />
      <AboutIntro />
    </>
  );
}
