import { redirect } from "next/navigation";
import { legalPolicies } from "@/components/Legal/legal";
import { legalPolicyPath } from "@/components/Legal/legalRoutes";

export default function LegalIndexPage() {
  const first = legalPolicies[0];
  redirect(first ? legalPolicyPath(first.id) : "/");
}
