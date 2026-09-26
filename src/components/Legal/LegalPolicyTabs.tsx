"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { legalPolicies } from "@/components/Legal/legal";
import { legalPolicyPath } from "@/components/Legal/legalRoutes";

export function LegalPolicyTabs() {
  const pathname = usePathname();

  return (
    <nav aria-label="Choose a policy" className="flex flex-wrap items-center gap-2 md:gap-3">
      {legalPolicies.map((policy) => {
        const href = legalPolicyPath(policy.id);
        const isActive = pathname === href;
        return (
          <Link
            key={policy.id}
            href={`${href}#legal-policy`}
            onClick={() => {
              if (pathname !== href) return;
              document.getElementById("legal-policy")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`rounded-md border px-4 py-2.5 text-sm font-semibold ${
              isActive
                ? "border-button bg-button text-button-ink"
                : "border-[var(--border)] bg-[var(--surface)] text-foreground hover:border-brand-strong hover:text-brand-strong"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {policy.title}
          </Link>
        );
      })}
    </nav>
  );
}
