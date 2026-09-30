import { ServiceFaq } from "@/components/Electrical/ServiceFaq";
import { ServiceClosingCta } from "@/components/Electrical/ServiceClosingCta";
import type { ServiceFaqItem } from "@/components/Electrical/serviceLandingShared";
import { SERVICE_PHONE_LABEL } from "@/components/Electrical/serviceLandingShared";

export function AreaPageFaqAndCta({ county, faqs }: { county: string; faqs: ServiceFaqItem[] }) {
  return (
    <>
      <ServiceClosingCta
        title={`Call us about work in ${county}`}
        lead={`Electrical and air conditioning in ${county}. Tell us the job. Straightforward work can often be priced from photos, usually the same working day. Larger jobs may need a survey. Call ${SERVICE_PHONE_LABEL}.`}
        primaryLabel="Get a quote"
      />
      <ServiceFaq items={faqs} title={`Questions about electrical and air conditioning in ${county}`} />
    </>
  );
}
