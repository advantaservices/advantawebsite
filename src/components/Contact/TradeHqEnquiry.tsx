import { Section } from "@/components/Layout/Section";

const TRADEHQ_ENQUIRY_URL = "https://tradehq.co.uk/advantaservices/enquire";

export function TradeHqEnquiry() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">TradeHQ enquiry</h2>
        <iframe
          src={TRADEHQ_ENQUIRY_URL}
          title="TradeHQ enquiry form"
          className="mt-6 h-[70rem] w-full rounded-md border border-[var(--border)] bg-surface"
        />
      </div>
    </Section>
  );
}
