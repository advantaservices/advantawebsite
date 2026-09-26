import { LegalMarkdown } from "@/components/Legal/LegalMarkdown";
import { LegalPolicyTabs } from "@/components/Legal/LegalPolicyTabs";
import type { LegalPolicy } from "@/components/Legal/legal";

export function LegalContent({ policy }: { policy: LegalPolicy }) {
  return (
    <section id="legal-policy" className="scroll-mt-24 py-10 md:py-14">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-6 md:mb-8">
          <LegalPolicyTabs />
        </div>
        <article className="space-y-5 rounded-md border border-[var(--border)] border-l-[3px] border-l-brand-strong bg-[var(--surface)] p-6 md:p-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{policy.title}</h2>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              Last updated: {policy.lastUpdated}
            </p>
          </div>
          <div className="space-y-4">
            <LegalMarkdown markdown={policy.markdown} />
          </div>
        </article>
      </div>
    </section>
  );
}
