export const ENQUIRY_TRADES = [
  { value: "electrical", label: "Electrical" },
  { value: "air-conditioning", label: "Air conditioning" },
] as const;

export const ENQUIRY_SERVICES = [
  { value: "electrical-install", label: "Electrical installation", trade: "electrical" },
  { value: "rewire", label: "Rewire", trade: "electrical" },
  { value: "fuseboard", label: "Fuseboard", trade: "electrical" },
  { value: "eicr", label: "EICR", trade: "electrical" },
  { value: "lighting", label: "Lighting", trade: "electrical" },
  { value: "ev-charging", label: "EV charging", trade: "electrical" },
  { value: "sockets", label: "Additional sockets", trade: "electrical" },
  { value: "three-phase", label: "Three-phase", trade: "electrical" },
  { value: "fault-finding", label: "Fault finding and repairs", trade: "electrical" },
  { value: "outbuildings", label: "Garage, workshop or outbuilding supply", trade: "electrical" },
  { value: "pat-testing", label: "PAT testing", trade: "electrical" },
  { value: "alarms", label: "Intruder alarms", trade: "electrical" },
  { value: "cctv", label: "CCTV", trade: "electrical" },
  { value: "air-con-install", label: "Air conditioning installation", trade: "air-conditioning" },
  { value: "air-con-service", label: "Air conditioning servicing", trade: "air-conditioning" },
  { value: "air-con-repair", label: "Air conditioning repairs", trade: "air-conditioning" },
  { value: "air-con-replacement", label: "Air conditioning replacement", trade: "air-conditioning" },
  { value: "other", label: "Other", trade: "both" },
] as const;

export const ENQUIRY_PREFERRED_CONTACT = [
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;

export const ENQUIRY_HEARD_ABOUT = [
  { value: "google", label: "Google" },
  { value: "social", label: "Social" },
  { value: "recommendation", label: "Recommendation" },
  { value: "other", label: "Other" },
] as const;

export const ENQUIRY_LOCATIONS = [
  { value: "spalding", label: "Spalding" },
  { value: "peterborough", label: "Peterborough" },
  { value: "wisbech", label: "Wisbech" },
  { value: "boston", label: "Boston" },
  { value: "stamford", label: "Stamford" },
  { value: "lincolnshire", label: "Lincolnshire" },
  { value: "cambridgeshire", label: "Cambridgeshire" },
  { value: "norfolk", label: "Norfolk" },
  { value: "suffolk", label: "Suffolk" },
  { value: "essex", label: "Essex" },
  { value: "hertfordshire", label: "Hertfordshire" },
  { value: "northamptonshire", label: "Northamptonshire" },
  { value: "rutland", label: "Rutland" },
  { value: "other", label: "Other" },
] as const;

export type EnquiryTradeValue = (typeof ENQUIRY_TRADES)[number]["value"];
export type EnquiryServiceValue = (typeof ENQUIRY_SERVICES)[number]["value"];
export type EnquiryPreferredContactValue = (typeof ENQUIRY_PREFERRED_CONTACT)[number]["value"];
export type EnquiryHeardAboutValue = (typeof ENQUIRY_HEARD_ABOUT)[number]["value"];
export type EnquiryLocationValue = (typeof ENQUIRY_LOCATIONS)[number]["value"];

const SERVICE_LABELS = new Map(ENQUIRY_SERVICES.map((option) => [option.value, option.label]));
const CONTACT_LABELS = new Map(ENQUIRY_PREFERRED_CONTACT.map((option) => [option.value, option.label]));
const HEARD_ABOUT_LABELS = new Map(ENQUIRY_HEARD_ABOUT.map((option) => [option.value, option.label]));
const LOCATION_LABELS = new Map(ENQUIRY_LOCATIONS.map((option) => [option.value, option.label]));
const TRADE_LABELS = new Map(ENQUIRY_TRADES.map((option) => [option.value, option.label]));

export function servicesForTrade(trade: EnquiryTradeValue | "") {
  if (!trade) return [];
  return ENQUIRY_SERVICES.filter((service) => service.trade === trade || service.trade === "both");
}

export function tradeForService(value: string): EnquiryTradeValue | "" {
  const match = ENQUIRY_SERVICES.find((service) => service.value === value);
  if (!match || match.trade === "both") return "";
  return match.trade;
}

export function getEnquiryServiceLabel(value: string) {
  return SERVICE_LABELS.get(value as EnquiryServiceValue);
}
export function getEnquiryPreferredContactLabel(value: string) {
  return CONTACT_LABELS.get(value as EnquiryPreferredContactValue);
}
export function getEnquiryHeardAboutLabel(value: string) {
  return HEARD_ABOUT_LABELS.get(value as EnquiryHeardAboutValue);
}
export function getEnquiryLocationLabel(value: string) {
  return LOCATION_LABELS.get(value as EnquiryLocationValue);
}
export function getEnquiryTradeLabel(value: string) {
  return TRADE_LABELS.get(value as EnquiryTradeValue);
}

export function isEnquiryServiceValue(value: string): value is EnquiryServiceValue {
  return SERVICE_LABELS.has(value as EnquiryServiceValue);
}
export function isEnquiryPreferredContactValue(value: string): value is EnquiryPreferredContactValue {
  return CONTACT_LABELS.has(value as EnquiryPreferredContactValue);
}
export function isEnquiryHeardAboutValue(value: string): value is EnquiryHeardAboutValue {
  return HEARD_ABOUT_LABELS.has(value as EnquiryHeardAboutValue);
}
export function isEnquiryLocationValue(value: string): value is EnquiryLocationValue {
  return LOCATION_LABELS.has(value as EnquiryLocationValue);
}
export function isEnquiryTradeValue(value: string): value is EnquiryTradeValue {
  return TRADE_LABELS.has(value as EnquiryTradeValue);
}
