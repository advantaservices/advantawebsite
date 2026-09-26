import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

const aiCrawlerUserAgents = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlerUserAgents, allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
