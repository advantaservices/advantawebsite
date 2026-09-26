import { areasServed, siteUrl } from "@/lib/site-config";

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  image?: string;
  additionalType?: string;
};

export function buildServiceSchema({
  name,
  description,
  path,
  image,
  additionalType,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": additionalType ? ["Service", additionalType] : "Service",
    "@id": `${siteUrl}${path}#service`,
    name,
    description,
    serviceType: name,
    url: `${siteUrl}${path}`,
    image: image ? `${siteUrl}${image}` : undefined,
    provider: {
      "@id": `${siteUrl}/#localbusiness`,
    },
    areaServed: [...areasServed],
  };
}
