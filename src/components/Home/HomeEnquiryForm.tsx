"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import {
  ENQUIRY_LOCATIONS,
  ENQUIRY_SERVICES,
  tradeForService,
  type EnquiryServiceValue,
} from "@/components/Contact/enquiryFormOptions";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const labelClass = "text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]";
const inputClass =
  "w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 text-sm text-foreground outline-none transition placeholder:text-[var(--text-muted)] focus:border-brand-strong focus:ring-2 focus:ring-brand-strong/25";
const selectClass = `${inputClass} cursor-pointer`;
const submitBtn =
  "inline-flex w-full cursor-pointer items-center justify-center rounded-md bg-button px-5 py-2 text-sm font-semibold text-button-ink transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:self-start";

export function HomeEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedService, setSelectedService] = useState<EnquiryServiceValue | "">("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const electricalServices = ENQUIRY_SERVICES.filter((service) => service.trade === "electrical");
  const climateServices = ENQUIRY_SERVICES.filter((service) => service.trade === "air-conditioning");
  const otherServices = ENQUIRY_SERVICES.filter((service) => service.trade === "both");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const serviceOther = String(formData.get("serviceOther") ?? "").trim();

    if (!name || !email || !phone || !message) {
      setErrorMessage("Please add your name, phone, email and a short note about the job.");
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
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setErrorMessage("Please wait a moment for the verification to finish, then try again.");
      setStatus("error");
      return;
    }

    const trade = tradeForService(service);
    if (trade) formData.set("trade", trade);
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
      setSelectedService("");
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

  return (
    <section id="contact" className="van-band home-enquiry-band relative isolate scroll-mt-28 overflow-hidden bg-[var(--background)]">
      <Image
        src="/advanta/photos/home/enquiry-drive.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 pt-14 pb-14 md:pt-20 md:pb-20 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:pb-[108px]">
        <div className="w-full max-w-xl rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5 lg:max-w-[38rem]">
          <div className="border-l-2 border-brand-strong pl-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong">Need a quote</p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-foreground md:text-2xl">Tell us about your work</h2>
          </div>

          {status === "success" ? (
            <p className="mt-6 text-sm font-medium text-success" role="status">
              Thanks. Your enquiry has been sent. We will reply as soon as we can, usually the same working day.
            </p>
          ) : (
            <form className="mt-4 flex flex-col gap-2.5" onSubmit={handleSubmit} noValidate>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="home-enquiry-company">Company</label>
                <input id="home-enquiry-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <input type="hidden" name="source" value="homepage" />

              <div className="grid grid-cols-2 gap-x-2.5 gap-y-2">
                <div className="space-y-1">
                  <label htmlFor="home-enquiry-name" className={labelClass}>
                    Full name <span className="text-danger">*</span>
                  </label>
                  <input id="home-enquiry-name" name="name" type="text" autoComplete="name" required placeholder="John Smith" className={inputClass} />
                </div>
                <div className="space-y-1">
                  <label htmlFor="home-enquiry-phone" className={labelClass}>
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input id="home-enquiry-phone" name="phone" type="tel" autoComplete="tel" required placeholder="07123 456789" className={inputClass} />
                </div>
                <div className="col-span-2 space-y-1">
                  <label htmlFor="home-enquiry-email" className={labelClass}>
                    Email <span className="text-danger">*</span>
                  </label>
                  <input id="home-enquiry-email" name="email" type="email" autoComplete="email" required placeholder="name@email.com" className={inputClass} />
                </div>
                <div className="space-y-1">
                  <label htmlFor="home-enquiry-service" className={labelClass}>
                    Service <span className="text-danger">*</span>
                  </label>
                  <select
                    id="home-enquiry-service"
                    name="service"
                    required
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value as EnquiryServiceValue | "")}
                    className={selectClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <optgroup label="Electrical">
                      {electricalServices.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Air conditioning">
                      {climateServices.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Other">
                      {otherServices.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="home-enquiry-location" className={labelClass}>
                    Location
                  </label>
                  <select id="home-enquiry-location" name="location" className={selectClass} defaultValue="">
                    <option value="">Select your area</option>
                    {ENQUIRY_LOCATIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                {selectedService === "other" ? (
                  <div className="col-span-2 space-y-1">
                    <label htmlFor="home-enquiry-service-other" className={labelClass}>
                      Other service <span className="text-danger">*</span>
                    </label>
                    <input id="home-enquiry-service-other" name="serviceOther" type="text" required className={inputClass} />
                  </div>
                ) : null}
              </div>

              <div className="space-y-1">
                <label htmlFor="home-enquiry-message" className={labelClass}>
                  What do you need? <span className="text-danger">*</span>
                </label>
                <textarea
                  id="home-enquiry-message"
                  name="message"
                  rows={2}
                  required
                  placeholder="Briefly describe the job."
                  className={`${inputClass} min-h-[52px] resize-y`}
                />
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
                {status === "sending" ? "Sending…" : "Send enquiry"}
              </button>
              {status === "error" ? (
                <p className="text-sm font-medium text-danger" role="status">
                  {errorMessage}
                </p>
              ) : null}
            </form>
          )}
        </div>

        <div className="van-drive relative z-10 hidden h-[26rem] w-[30rem] max-w-none shrink-0 self-end lg:block">
          <Image
            src="/advanta/AdvantaVanNoBG.png"
            alt="Advanta Services Ford Transit Custom"
            fill
            sizes="(min-width: 1024px) 30rem, 70vw"
            className="object-contain object-right object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
