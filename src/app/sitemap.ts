import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";
import { ELECTRICAL_NAV_LINKS, CLIMATE_NAV_LINKS } from "@/components/Navigation/serviceNavLinks";
import { locations } from "@/components/Areas/areas-data";

const routes = ["", "/electrical", "/air-conditioning", "/gallery", "/about", "/areas", "/contact", "/legal"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const extras = [
    ...ELECTRICAL_NAV_LINKS.map((item) => item.href),
    ...CLIMATE_NAV_LINKS.map((item) => item.href),
    ...locations.map((area) => `/areas/${area.slug}`),
    "/legal/terms-of-use",
    "/legal/privacy-policy",
    "/legal/cookie-policy",
  ];

  return [...routes, ...extras].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
