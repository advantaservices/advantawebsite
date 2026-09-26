import { Resend } from "resend";
import {
  getEnquiryHeardAboutLabel,
  getEnquiryLocationLabel,
  getEnquiryPreferredContactLabel,
  getEnquiryServiceLabel,
  getEnquiryTradeLabel,
  isEnquiryHeardAboutValue,
  isEnquiryLocationValue,
  isEnquiryPreferredContactValue,
  isEnquiryServiceValue,
  isEnquiryTradeValue,
} from "@/components/Contact/enquiryFormOptions";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "chris@advantaservices.co.uk";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Advanta Services <onboarding@resend.dev>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const MAX_FILES = 5;
const MAX_TOTAL_BYTES = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyTurnstile(token: string, remoteip: string | null): Promise<boolean> {
  if (!TURNSTILE_SECRET) return true;
  if (!token) return false;
  try {
    const body = new URLSearchParams({ secret: TURNSTILE_SECRET, response: token });
    if (remoteip) body.append("remoteip", remoteip);
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const data = (await response.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("[contact] Turnstile verification error", err);
    return false;
  }
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ ok: false, error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (String(formData.get("company") ?? "").trim()) {
    return Response.json({ ok: true });
  }

  const turnstileToken = String(formData.get("turnstileToken") ?? "");
  const remoteip = request.headers.get("CF-Connecting-IP") ?? request.headers.get("x-forwarded-for");
  if (!(await verifyTurnstile(turnstileToken, remoteip))) {
    return Response.json({ ok: false, error: "Verification failed. Please refresh and try again." }, { status: 400 });
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const postcode = String(formData.get("postcode") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const trade = String(formData.get("trade") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const serviceOther = String(formData.get("serviceOther") ?? "").trim();
  const isHomepage = String(formData.get("source") ?? "").trim() === "homepage";
  const preferredContact = String(formData.get("preferredContact") ?? "").trim();
  const heardAbout = String(formData.get("heardAbout") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();

  if (!name || !email || !phone || !message || (!isHomepage && !postcode)) {
    return Response.json(
      { ok: false, error: "Please complete your name, phone, email, postcode and message." },
      { status: 400 },
    );
  }
  if ((trade || !isHomepage) && !isEnquiryTradeValue(trade)) {
    return Response.json({ ok: false, error: "Please select a valid trade." }, { status: 400 });
  }
  if ((service || !isHomepage) && !isEnquiryServiceValue(service)) {
    return Response.json({ ok: false, error: "Please select a valid service." }, { status: 400 });
  }
  if (service === "other" && !serviceOther) {
    return Response.json({ ok: false, error: "Please tell us which service you need under Other." }, { status: 400 });
  }
  if (preferredContact && !isEnquiryPreferredContactValue(preferredContact)) {
    return Response.json({ ok: false, error: "Please select a valid contact method." }, { status: 400 });
  }
  if (heardAbout && !isEnquiryHeardAboutValue(heardAbout)) {
    return Response.json({ ok: false, error: "Please select how you heard about us." }, { status: 400 });
  }
  if (location && !isEnquiryLocationValue(location)) {
    return Response.json({ ok: false, error: "Please select a valid location." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const files = formData.getAll("attachments").filter((entry): entry is File => entry instanceof File && entry.size > 0);
  if (files.length > MAX_FILES) {
    return Response.json({ ok: false, error: `Please attach no more than ${MAX_FILES} files.` }, { status: 400 });
  }
  const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
  if (totalBytes > MAX_TOTAL_BYTES) {
    return Response.json({ ok: false, error: "Attachments are too large (10MB total maximum)." }, { status: 400 });
  }
  const invalidFile = files.find((file) => file.type && !ALLOWED_FILE_TYPES.includes(file.type));
  if (invalidFile) {
    return Response.json({ ok: false, error: "Attachments must be images, PDFs or Word documents." }, { status: 400 });
  }

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
    })),
  );

  const tradeDisplay = isEnquiryTradeValue(trade) ? (getEnquiryTradeLabel(trade) ?? trade) : "Not specified";
  const serviceDisplay = !service
    ? "Not specified"
    : service === "other"
      ? `Other - ${serviceOther}`
      : (getEnquiryServiceLabel(service) ?? service);
  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #0c141a; line-height: 1.5;">
      <h2 style="margin: 0 0 16px; color: #0078A8;">New website enquiry</h2>
      ${isHomepage ? `<p><strong>Form:</strong> Homepage estimate</p>` : ""}
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Postcode:</strong> ${escapeHtml(postcode || "Not provided")}</p>
      <p><strong>Trade:</strong> ${escapeHtml(tradeDisplay)}</p>
      <p><strong>Service:</strong> ${escapeHtml(serviceDisplay)}</p>
      <p><strong>Preferred contact:</strong> ${escapeHtml((getEnquiryPreferredContactLabel(preferredContact) ?? preferredContact) || "Not provided")}</p>
      <p><strong>Location:</strong> ${escapeHtml((getEnquiryLocationLabel(location) ?? location) || "Not provided")}</p>
      <p><strong>How they heard about us:</strong> ${escapeHtml((getEnquiryHeardAboutLabel(heardAbout) ?? heardAbout) || "Not provided")}</p>
      <p style="margin: 16px 0 4px;"><strong>Message:</strong></p>
      <p style="margin: 0; padding: 12px 16px; background: #e7f3f8; border-left: 3px solid #00AEEF; border-radius: 4px;">${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      ${attachments.length ? `<p style="margin: 16px 0 0; color: #4b5c67; font-size: 13px;">${attachments.length} attachment(s) included.</p>` : ""}
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      // Optional later: bcc process.env.TRADIFY_BCC once Chris supplies a Tradify enquiry address.
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      html,
      text: [
        "New website enquiry",
        ...(isHomepage ? ["Form: Homepage estimate"] : []),
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Postcode: ${postcode || "Not provided"}`,
        `Trade: ${tradeDisplay}`,
        `Service: ${serviceDisplay}`,
        `Preferred contact: ${(getEnquiryPreferredContactLabel(preferredContact) ?? preferredContact) || "Not provided"}`,
        `Location: ${(getEnquiryLocationLabel(location) ?? location) || "Not provided"}`,
        `How they heard: ${(getEnquiryHeardAboutLabel(heardAbout) ?? heardAbout) || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      attachments: attachments.length ? attachments : undefined,
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return Response.json({ ok: false, error: "Could not send your message. Please try again." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error", err);
    return Response.json({ ok: false, error: "Could not send your message. Please try again." }, { status: 500 });
  }
}
