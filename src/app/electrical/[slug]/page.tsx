import { notFound } from "next/navigation";
import { electricalContent, electricalSlugs } from "@/components/Electrical/content/electricalContent";
import { ServiceLandingPage } from "@/components/Electrical/ServiceLandingPage";
import { buildPageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return electricalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const page = electricalContent[slug];
  if (!page) return {};
  return buildPageMetadata({
    title: page.meta.title,
    description: page.meta.description,
    path: page.path,
    image: page.hero.imageSrc,
    imageAlt: page.hero.imageAlt,
  });
}

export default async function ElectricalLandingPage({ params }: Params) {
  const { slug } = await params;
  const page = electricalContent[slug];
  if (!page) notFound();
  return <ServiceLandingPage page={page} parent={{ name: "Electrical", path: "/electrical" }} />;
}
