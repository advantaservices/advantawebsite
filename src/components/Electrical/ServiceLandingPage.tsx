import { ServiceHero } from "@/components/Electrical/ServiceHero";
import { ServiceFeatureGrid } from "@/components/Electrical/ServiceFeatureGrid";
import { ServiceProcess } from "@/components/Electrical/ServiceProcess";
import { ServiceAreas } from "@/components/Electrical/ServiceAreas";
import { ServiceFaq } from "@/components/Electrical/ServiceFaq";
import { ServiceClosingCta } from "@/components/Electrical/ServiceClosingCta";
import { JsonLd } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { buildServiceSchema } from "@/lib/service-schema";
import { buildFaqSchema } from "@/lib/faq-schema";
import type { ServiceLandingContent } from "@/components/Electrical/serviceLandingShared";

export function ServiceLandingPage({
  page,
  parent,
}: {
  page: ServiceLandingContent;
  parent: { name: string; path: string };
}) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: parent.name, path: parent.path },
            { name: page.hero.title, path: page.path },
          ]),
          buildServiceSchema({
            name: page.hero.title,
            description: page.meta.description,
            path: page.path,
            image: page.hero.imageSrc,
            additionalType: page.schemaType,
          }),
          buildFaqSchema(page.faqs),
        ]}
      />
      <ServiceHero {...page.hero} />
      <ServiceFeatureGrid {...page.features} />
      <ServiceProcess
        title={page.process.title}
        intro={page.process.intro}
        steps={page.process.steps}
        images={[
          { src: page.hero.imageSrc, alt: page.hero.imageAlt },
          { src: page.features.imageSrc, alt: page.features.imageAlt },
        ]}
      />
      <ServiceClosingCta {...page.closing} />
      <ServiceAreas />
      <ServiceFaq items={page.faqs} />
    </>
  );
}
