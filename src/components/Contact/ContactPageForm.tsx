"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/Contact/ContactForm";
import { CONTACT_PAGE_FAQS } from "@/components/Contact/contactPageFaqs";
import { isEnquiryServiceValue, type EnquiryServiceValue } from "@/components/Contact/enquiryFormOptions";

export function ContactPageForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") ?? "";
  const defaultService: EnquiryServiceValue | "" = isEnquiryServiceValue(serviceParam) ? serviceParam : "";

  return <ContactForm variant="page" faqs={CONTACT_PAGE_FAQS} defaultService={defaultService} />;
}
