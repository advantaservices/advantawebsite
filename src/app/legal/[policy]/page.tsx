import { notFound } from "next/navigation";
import { PageHero } from "@/components/Layout/PageHero";
import { LegalContent } from "@/components/Legal/LegalContent";
import { getLegalPolicy, getLegalPolicySlugs, legalPolicyPath } from "@/components/Legal/legalRoutes";
import { JsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ policy: string }> };

export function generateStaticParams() {
  return getLegalPolicySlugs().map((policy) => ({ policy }));
}

export async function generateMetadata({ params }: Params) {
  const { policy: slug } = await params;
  const policy = getLegalPolicy(slug);
  if (!policy) return {};
  return buildPageMetadata({
    title: policy.title,
    description: `${policy.title} for the Advanta Services website operated by Advanta Services LTD. Last updated ${policy.lastUpdated}.`,
    path: legalPolicyPath(policy.id),
  });
}

export default async function LegalPolicyPage({ params }: Params) {
  const { policy: slug } = await params;
  const policy = getLegalPolicy(slug);
  if (!policy) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Legal", path: "/legal" },
          { name: policy.title, path: legalPolicyPath(policy.id) },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms, privacy and cookies"
        lead="Straightforward information about using this website and how we handle your data."
        imageSrc="/advanta/photos/hero/van.webp"
        imageAlt="Advanta Services van"
        compact
        secondaryHref="/about"
        secondaryLabel="About us"
      />
      <LegalContent policy={policy} />
    </>
  );
}
