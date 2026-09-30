export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.advantaservices.co.uk";

const whatsappPrefill =
  "I've been on the Advanta Services website, and the project I'd like to discuss is...";

const defaultWhatsappUrl = "https://wa.me/447554576889";

function whatsappLink(base: string) {
  const url = new URL(base.trim() || defaultWhatsappUrl);
  if (!url.searchParams.has("text")) {
    url.searchParams.set("text", whatsappPrefill);
  }
  return url.toString();
}

export const business = {
  name: "Advanta Services",
  legalName: "Advanta Services LTD",
  companyNumber: "17151983",
  tagline: "Electrical and climate",
  phoneIntl: "+447554576889",
  phoneDisplay: "07554 576889",
  phoneTel: "tel:+447554576889",
  email: "chris@advantaservices.co.uk",
  whatsappUrl: whatsappLink(process.env.NEXT_PUBLIC_WHATSAPP_URL || defaultWhatsappUrl),
  ogImagePath: "/advanta/og/share.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  isOpen24Hours: false,
  isServiceAreaBusiness: true,
  hoursLabel: "Monday to Friday, 08:00 to 17:00. Emergency call-outs out of hours.",
  facebookUrl: "https://www.facebook.com/profile.php?id=61591142612055",
  instagramUrl: "https://www.instagram.com/advantaservices",
  linkedinUrl: "https://www.linkedin.com/company/advantaservices",
} as const;

export const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
];

export const areasServed = [
  "Spalding",
  "Pinchbeck",
  "Peterborough",
  "Wisbech",
  "Boston",
  "Stamford",
  "Lincolnshire",
  "Cambridgeshire",
  "Norfolk",
  "Suffolk",
  "Essex",
  "Hertfordshire",
  "Northamptonshire",
  "Rutland",
] as const;

export const sameAs = [
  business.facebookUrl,
  business.instagramUrl,
  business.linkedinUrl,
].filter(Boolean);

export const siteDescription =
  "A small local firm for electrical and air conditioning, based around Spalding and Peterborough, also covering Lincolnshire, Cambridgeshire and the counties around them.";
