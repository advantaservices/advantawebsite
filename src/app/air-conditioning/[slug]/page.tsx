import { notFound } from "next/navigation";
import { climateContent, climateSlugs } from "@/components/Climate/content/climateContent";
import { ServiceLandingPage } from "@/components/Electrical/ServiceLandingPage";
import { buildPageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return climateSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const page = climateContent[slug];
  if (!page) return {};
  return buildPageMetadata({
    title: page.meta.title,
    description: page.meta.description,
    path: page.path,
    image: page.hero.imageSrc,
    imageAlt: page.hero.imageAlt,
  });
}

export default async function ClimateLandingPage({ params }: Params) {
  const { slug } = await params;
  const page = climateContent[slug];
  if (!page) notFound();
  return <ServiceLandingPage page={page} parent={{ name: "Air conditioning", path: "/air-conditioning" }} />;
}
