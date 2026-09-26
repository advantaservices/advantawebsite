import { notFound } from "next/navigation";
import { getLocationBySlug, locations } from "@/components/Areas/areas-data";
import { PageHero } from "@/components/Layout/PageHero";
import { AreaPageIntro } from "@/components/Areas/AreaPageIntro";
import { AreaPageTowns } from "@/components/Areas/AreaPageTowns";
import { AreaPageServices } from "@/components/Areas/AreaPageServices";
import { AreaPageFaqAndCta } from "@/components/Areas/AreaPageFaqAndCta";
import { JsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { buildFaqSchema } from "@/lib/faq-schema";

type Params = { params: Promise<{ area: string }> };

export function generateStaticParams() {
  return locations.map((location) => ({ area: location.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { area: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return buildPageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/areas/${location.slug}`,
  });
}

export default async function AreaDetailPage({ params }: Params) {
  const { area: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Areas", path: "/areas" },
            { name: location.county, path: `/areas/${location.slug}` },
          ]),
          buildFaqSchema(location.faqs),
        ]}
      />
      <PageHero
        eyebrow={location.county}
        title={`Electrical and air conditioning in ${location.county}`}
        lead={location.heroDescription}
        imageSrc={location.heroImage}
        imageAlt={location.heroImageAlt}
        compact
        backHref="/areas"
        backLabel="Back to all areas"
      />
      <AreaPageIntro county={location.county} paragraphs={location.intro} />
      <AreaPageTowns county={location.county} towns={location.towns} />
      <AreaPageServices county={location.county} />
      <AreaPageFaqAndCta county={location.county} faqs={location.faqs} />
    </>
  );
}
