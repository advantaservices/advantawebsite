"use client";

import { useEffect, useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Section } from "@/components/Layout/Section";
import { business } from "@/lib/site-config";
import type { ServiceFaqItem } from "@/components/Electrical/serviceLandingShared";
import {
  ENQUIRY_HEARD_ABOUT,
  ENQUIRY_LOCATIONS,
  ENQUIRY_PREFERRED_CONTACT,
  ENQUIRY_TRADES,
  servicesForTrade,
  tradeForService,
  type EnquiryServiceValue,
  type EnquiryTradeValue,
} from "@/components/Contact/enquiryFormOptions";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
const MAX_FILES = 5;
const MAX_TOTAL_BYTES = 10 * 1024 * 1024;

const labelClass = "text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]";
const inputClass =
  "w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-[var(--text-muted)] focus:border-brand-strong focus:ring-2 focus:ring-brand-strong/25";
const selectClass = `${inputClass} cursor-pointer`;
const submitBtn =
  "mt-1 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-button px-6 py-3 text-sm font-semibold text-button-ink transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:self-start";

type ContactFormProps = {
  variant?: "home" | "page";
  faqs?: ServiceFaqItem[];
  defaultService?: EnquiryServiceValue | "";
  defaultTrade?: EnquiryTradeValue | "";
};

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function ContactForm({
  variant = "home",
  faqs,
  defaultService = "",
  defaultTrade = "",
}: ContactFormProps) {
  const isPage = variant === "page";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [trade, setTrade] = useState<EnquiryTradeValue | "">(defaultTrade);
  const [selectedService, setSelectedService] = useState<EnquiryServiceValue | "">(defaultService);
  const [preferredContact, setPreferredContact] = useState("");
  const [heardAbout, setHeardAbout] = useState("");
  const [location, setLocation] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const availableServices = servicesForTrade(trade);
  const field = (page: string, home = "") => `flex min-w-0 flex-col gap-2 ${isPage ? page : home}`;

  useEffect(() => {
    setSelectedService(defaultService);
    if (defaultService) setTrade(tradeForService(defaultService));
    else if (defaultTrade) setTrade(defaultTrade);
  }, [defaultService, defaultTrade]);

  function handleFilesSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    if (selected.length) {
      setFiles((prev) => {
        const combined = [...prev];
        for (const file of selected) {
          const isDuplicate = combined.some(
            (existing) =>
              existing.name === file.name && existing.size === file.size && existing.lastModified === file.lastModified,
          );
          if (!isDuplicate && combined.length < MAX_FILES) combined.push(file);
        }
        return combined;
      });
      if (status === "error") setStatus("idle");
    }
    event.target.value = "";
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const postcode = String(formData.get("postcode") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const serviceOther = String(formData.get("serviceOther") ?? "").trim();

    if (!name || !email || !phone || !postcode || !message) {
      setErrorMessage("Please complete your name, phone, email, postcode and message.");
      setStatus("error");
      return;
    }
    if (!trade) {
      setErrorMessage("Please choose electrical or air conditioning.");
      setStatus("error");
      return;
    }
    if (!service) {
      setErrorMessage("Please select the service you are enquiring about.");
      setStatus("error");
      return;
    }
    if (service === "other" && !serviceOther) {
      setErrorMessage("Please tell us which service you need under Other.");
      setStatus("error");
      return;
    }

    const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
    if (totalBytes > MAX_TOTAL_BYTES) {
      setErrorMessage("Attachments are too large (10MB total maximum).");
      setStatus("error");
      return;
    }
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setErrorMessage("Please wait a moment for the verification to finish, then try again.");
      setStatus("error");
      return;
    }

    formData.delete("attachments");
    files.forEach((file) => formData.append("attachments", file));
    formData.set("turnstileToken", turnstileToken);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        turnstileRef.current?.reset();
        setTurnstileToken("");
        return;
      }
      form.reset();
      setFiles([]);
      setTrade("");
      setSelectedService(defaultService);
      setPreferredContact("");
      setHeardAbout("");
      setLocation("");
      turnstileRef.current?.reset();
      setTurnstileToken("");
      setStatus("success");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
      turnstileRef.current?.reset();
      setTurnstileToken("");
    }
  }

  const aside = (
    <aside className={isPage ? "lg:pl-10" : "lg:pr-10"}>
      {isPage ? (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong">Contact details</p>
      ) : null}
      <div>
        <p className={labelClass}>Email</p>
        <a href={`mailto:${business.email}`} className="mt-1.5 block text-base font-semibold hover:underline">
          {business.email}
        </a>
      </div>
      <div className="mt-6">
        <p className={labelClass}>Phone</p>
        <a href={business.phoneTel} className="mt-1.5 block text-[15px] font-medium hover:text-brand-strong">
          {business.phoneDisplay}
        </a>
        <p className="text-muted mt-1 text-xs leading-snug">{business.hoursLabel}</p>
      </div>
      <div className="mt-6">
        <p className={labelClass}>Coverage</p>
        <p className="mt-1.5 text-[15px] font-medium leading-snug">
          Based around Spalding and Peterborough, including Wisbech, Boston and Stamford, plus the counties on the map.
        </p>
      </div>

      {isPage && faqs && faqs.length > 0 ? (
        <div className="mt-10 border-t border-[var(--border)] pt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong">FAQ</p>
          <h2 className="mt-2 text-lg font-semibold tracking-tight text-foreground">Common questions</h2>
          <div className="mt-4 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-3 py-3 text-left hover:text-brand-strong"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span className="text-sm font-semibold text-foreground">{item.question}</span>
                    <span className={`mt-0.5 shrink-0 text-brand-strong ${isOpen ? "rotate-45" : ""}`} aria-hidden>
                      +
                    </span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="text-muted pb-3 text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </aside>
  );

  const form = (
    <form className={`flex flex-col gap-4 ${isPage ? "lg:pr-10" : "lg:pl-10"}`} onSubmit={handleSubmit} noValidate>
      {isPage ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong">Contact form</p>
      ) : null}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="enquiry-company">Company</label>
        <input id="enquiry-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className={isPage ? "grid grid-cols-10 gap-x-3 gap-y-4" : "grid grid-cols-1 gap-4 sm:grid-cols-2"}>
        <div className={field("order-1 col-span-5 sm:order-0 sm:col-span-10", "sm:col-span-2")}>
          <label htmlFor="enquiry-name" className={labelClass}>
            Full name <span className="text-danger">*</span>
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={isPage ? "John Smith" : undefined}
            className={`${inputClass} mt-auto ${isPage ? "sm:placeholder:text-transparent" : ""}`}
          />
        </div>
        <div className={field("order-2 col-span-5 sm:order-0 sm:col-span-5")}>
          <label htmlFor="enquiry-phone" className={labelClass}>
            Phone <span className="text-danger">*</span>
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder={isPage ? "07123 456789" : undefined}
            className={`${inputClass} mt-auto ${isPage ? "sm:placeholder:text-transparent" : ""}`}
          />
        </div>
        <div className={field("order-3 col-span-7 sm:order-0 sm:col-span-5")}>
          <label htmlFor="enquiry-email" className={labelClass}>
            Email <span className="text-danger">*</span>
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={isPage ? "name@email.com" : undefined}
            className={`${inputClass} mt-auto ${isPage ? "sm:placeholder:text-transparent" : ""}`}
          />
        </div>
        <div className={field("order-4 col-span-3 sm:order-0 sm:col-span-5")}>
          <label htmlFor="enquiry-postcode" className={labelClass}>
            Postcode <span className="text-danger">*</span>
          </label>
          <input
            id="enquiry-postcode"
            name="postcode"
            type="text"
            autoComplete="postal-code"
            required
            placeholder={isPage ? "AB12 3DE" : undefined}
            className={`${inputClass} mt-auto px-2 sm:px-3 ${isPage ? "sm:placeholder:text-transparent" : ""}`}
          />
        </div>
        <div className={field("order-5 col-span-5 sm:order-0 sm:col-span-5")}>
          <label htmlFor="enquiry-trade" className={labelClass}>
            Trade <span className="text-danger">*</span>
          </label>
          <div className="relative mt-auto">
          <select
            id="enquiry-trade"
            name="trade"
            required
            value={trade}
            onChange={(event) => {
              const next = event.target.value as EnquiryTradeValue | "";
              setTrade(next);
              setSelectedService("");
            }}
            className={`${selectClass} ${isPage && !trade ? "max-sm:text-transparent" : ""}`}
          >
            <option value="" disabled className="text-foreground">
              Electrical or air conditioning
            </option>
            {ENQUIRY_TRADES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {isPage && !trade ? (
            <span aria-hidden className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-[var(--text-muted)] sm:hidden">
              Electrical or AC
            </span>
          ) : null}
          </div>
        </div>
        <div className={field("order-6 col-span-5 sm:order-0 sm:col-span-5")}>
          <label htmlFor="enquiry-service" className={labelClass}>
            Service <span className="text-danger">*</span>
          </label>
          <div className="relative mt-auto">
          <select
            id="enquiry-service"
            name="service"
            required
            disabled={!trade}
            value={selectedService}
            onChange={(event) => setSelectedService(event.target.value as EnquiryServiceValue | "")}
            className={`${selectClass} ${isPage && !trade ? "max-sm:text-transparent max-sm:disabled:text-transparent" : ""}`}
          >
            <option value="" disabled className="text-foreground">
              {trade ? "Select a service" : "Choose a trade first"}
            </option>
            {availableServices.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {isPage && !trade ? (
            <span aria-hidden className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-[var(--text-muted)] sm:hidden">
              Choose a trade
            </span>
          ) : null}
          </div>
        </div>
        <div className={field("order-7 col-span-6 sm:order-0 sm:col-span-5")}>
          <label htmlFor="enquiry-preferred-contact" className={`${labelClass} leading-tight`}>
            Preferred contact
          </label>
          <select
            id="enquiry-preferred-contact"
            name="preferredContact"
            value={preferredContact}
            onChange={(event) => setPreferredContact(event.target.value)}
            className={`${selectClass} mt-auto`}
          >
            <option value="">How should we reply?</option>
            {ENQUIRY_PREFERRED_CONTACT.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {selectedService === "other" ? (
          <div className={field("order-9 col-span-10 sm:order-0 sm:col-span-10", "sm:col-span-2")}>
            <label htmlFor="enquiry-service-other" className={labelClass}>
              Other service <span className="text-danger">*</span>
            </label>
            <input id="enquiry-service-other" name="serviceOther" type="text" required className={`${inputClass} mt-auto`} />
          </div>
        ) : null}
        <div className={field("order-8 col-span-4 sm:order-0 sm:col-span-5")}>
          <label htmlFor="enquiry-location" className={labelClass}>
            Location
          </label>
          <div className="relative mt-auto">
          <select
            id="enquiry-location"
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className={`${selectClass} ${isPage && !location ? "max-sm:text-transparent" : ""}`}
          >
            <option value="" className="text-foreground">
              Select your area
            </option>
            {ENQUIRY_LOCATIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {isPage && !location ? (
            <span aria-hidden className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-[var(--text-muted)] sm:hidden">
              Area
            </span>
          ) : null}
          </div>
        </div>
        <div className={field("order-10 col-span-10 sm:order-0 sm:col-span-5")}>
          <label htmlFor="enquiry-heard-about" className={labelClass}>
            How did you hear about us?
          </label>
          <select
            id="enquiry-heard-about"
            name="heardAbout"
            value={heardAbout}
            onChange={(event) => setHeardAbout(event.target.value)}
            className={`${selectClass} mt-auto`}
          >
            <option value="">Select an option</option>
            {ENQUIRY_HEARD_ABOUT.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="enquiry-message" className={labelClass}>
          Message <span className="text-danger">*</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          required
          className={`${inputClass} min-h-[100px] resize-y`}
          placeholder="Briefly describe the job."
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="enquiry-attachments" className={labelClass}>
          Photos <span className="font-normal normal-case text-[var(--text-muted)]">(optional, up to 5)</span>
        </label>
        <input
          id="enquiry-attachments"
          type="file"
          multiple
          accept="image/*,.pdf,.doc,.docx"
          onChange={handleFilesSelected}
          disabled={files.length >= MAX_FILES}
          className="block w-full cursor-pointer text-sm text-[var(--text-muted)] file:mr-3 file:rounded-md file:border-0 file:bg-brand-soft file:px-3 file:py-2 file:text-sm file:font-semibold file:text-brand-strong"
        />
        {files.length > 0 ? (
          <ul className="space-y-1.5">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${file.size}-${file.lastModified}`}
                className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm"
              >
                <span className="min-w-0 flex-1 truncate">{file.name}</span>
                <span className="text-muted text-xs">{formatBytes(file.size)}</span>
                <button type="button" onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))} className="text-muted hover:text-danger">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {TURNSTILE_SITE_KEY ? (
        <Turnstile
          ref={turnstileRef}
          siteKey={TURNSTILE_SITE_KEY}
          onSuccess={setTurnstileToken}
          onExpire={() => setTurnstileToken("")}
          onError={() => setTurnstileToken("")}
          options={{ theme: "auto", size: "flexible" }}
        />
      ) : null}
      <button type="submit" className={submitBtn} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <div aria-live="polite" className={status === "success" || status === "error" ? undefined : "sr-only"}>
        {status === "success" ? (
          <p className="text-sm font-medium text-success">
            Thanks. Your message has been sent. We will reply as soon as we can, usually the same working day.
          </p>
        ) : null}
        {status === "error" ? <p className="text-sm font-medium text-danger">{errorMessage}</p> : null}
      </div>
    </form>
  );

  return (
    <Section id={isPage ? "enquiry-form" : "contact"} majorSeam={isPage} className={isPage ? "!scroll-mt-16 md:!scroll-mt-20" : ""}>
      <div className={`mx-auto text-center ${isPage ? "max-w-3xl" : "max-w-5xl"}`}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong md:text-xs">
          {isPage ? "Enquiry form" : "Need a quote?"}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {isPage ? "Tell us about the job" : "Get in touch"}
        </h2>
        <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
          {isPage
            ? "Share a few details about what you need and where you are. We will come back with clear advice, usually the same working day."
            : "Send a quick message. We will reply as soon as we can, usually the same working day."}
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-[var(--border)] pt-8 md:mt-10 md:pt-10">
        <div
          className={`grid gap-8 lg:gap-0 lg:divide-x lg:divide-[var(--border)] ${
            isPage ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]" : "lg:grid-cols-[minmax(0,240px)_1fr]"
          }`}
        >
          {isPage ? (
            <>
              {form}
              {aside}
            </>
          ) : (
            <>
              {aside}
              {form}
            </>
          )}
        </div>
      </div>
    </Section>
  );
}
