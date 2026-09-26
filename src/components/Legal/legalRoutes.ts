import type { LegalPolicy } from "@/components/Legal/legal";
import { legalPolicies } from "@/components/Legal/legal";

export function getLegalPolicy(slug: string): LegalPolicy | undefined {
  return legalPolicies.find((policy) => policy.id === slug);
}

export function getLegalPolicySlugs(): string[] {
  return legalPolicies.map((policy) => policy.id);
}

export function legalPolicyPath(slug: string): string {
  return `/legal/${slug}`;
}
