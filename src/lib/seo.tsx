import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/breadcrumb";
import { buildPageMetadata } from "@/lib/metadata";
import { buildServiceSchema } from "@/lib/service-schema";

export { buildPageMetadata, breadcrumbJsonLd, buildServiceSchema };
export type { BreadcrumbItem };

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
