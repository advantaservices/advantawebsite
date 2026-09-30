import { Suspense } from "react";
import { PageHero } from "@/components/Layout/PageHero";
import { Section } from "@/components/Layout/Section";
import { CONTACT_PAGE_FAQS } from "@/components/Contact/contactPageFaqs";
import { ContactPageForm } from "@/components/Contact/ContactPageForm";
import { HomeRecommendations } from "@/components/Home/HomeRecommendations";
import { JsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { buildFaqSchema } from "@/lib/faq-schema";
import { business } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Contact Advanta Services | Get a Quote",
  description: `Enquire for electrical or air conditioning around Spalding and Peterborough. Call ${business.phoneDisplay} or send the form.`,
  path: "/contact",
});

function ContactFormFallback() {
  return (
    <Section majorSeam>
      <p className="text-muted text-center text-sm">Loading the enquiry form…</p>
    </Section>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
          buildFaqSchema(CONTACT_PAGE_FAQS),
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lead="Call, or send the job and a photo. Electrical or air conditioning. We reply the same working day, and say whether we can price it from the photos or need to see the site."
        imageSrc="/advanta/photos/climate/fujitsu-living-room.webp"
        imageAlt="Fujitsu indoor air-conditioning unit in a living room"
        compact
      />
      <Suspense fallback={<ContactFormFallback />}>
        <ContactPageForm />
      </Suspense>
      <HomeRecommendations />
    </>
  );
}
