import type { Metadata } from "next";
import { business, siteUrl } from "@/lib/site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

const shareImage = {
  url: business.ogImagePath,
  width: business.ogImageWidth,
  height: business.ogImageHeight,
  alt: `${business.name}, electrical and climate`,
  type: "image/png",
};

export function buildPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "en_GB",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage],
    },
  };
}
