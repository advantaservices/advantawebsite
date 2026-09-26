import Image from "next/image";
import Link from "next/link";
import {
  heroSecondaryBtnClass,
  primaryBtnClass,
  SERVICE_EMAIL,
  SERVICE_PHONE_LABEL,
  SERVICE_PHONE_TEL,
} from "@/components/Electrical/serviceLandingShared";
import { RevealBlock } from "@/components/Layout/useRevealInView";

export function ServiceClosingCta({
  title,
  lead,
  primaryLabel,
  formHref = "/contact#enquiry-form",
}: {
  title: string;
  lead: string;
  primaryLabel: string;
  formHref?: string;
}) {
  return (
    <section
      className="advanta-cta-band van-band relative overflow-hidden bg-cta pt-8 pb-3 md:pt-10 lg:pt-14 lg:pb-10"
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-4 px-6 md:gap-6 lg:w-fit lg:flex-row lg:gap-[4.75rem]">
        <RevealBlock variant="fade-up" className="w-full max-w-xl shrink-0 lg:w-[36rem]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-dark-accent md:text-xs">Next step</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-on-dark md:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-on-dark-muted md:text-base">{lead}</p>
          <div className="hero-actions mt-8 flex flex-row gap-3">
            <Link href={formHref} className={primaryBtnClass}>
              {primaryLabel}
            </Link>
            <a href={SERVICE_PHONE_TEL} className={heroSecondaryBtnClass}>
              Call {SERVICE_PHONE_LABEL}
            </a>
          </div>
          <p className="mt-6 whitespace-nowrap text-[11px] tracking-tight text-on-dark-faint sm:whitespace-normal sm:text-xs sm:tracking-normal">
            Monday to Friday, 08:00 to 17:00 ·{" "}
            <a href={`mailto:${SERVICE_EMAIL}`} className="font-medium text-on-dark-accent hover:underline">
              {SERVICE_EMAIL}
            </a>
          </p>
        </RevealBlock>

        <div className="van-drive relative z-10 mx-auto aspect-[1024/687] h-[12.5rem] w-auto max-w-full shrink-0 overflow-hidden sm:h-[15.5rem] lg:mx-0 lg:aspect-auto lg:h-[28rem] lg:w-[36.5rem] lg:max-w-none lg:overflow-visible">
          <Image
            src="/advanta/AdvantaVanNoBG.png"
            alt="Advanta Services Ford Transit Custom"
            fill
            sizes="(min-width: 1024px) 36rem, 20rem"
            className="object-cover object-[center_55%] lg:object-contain lg:object-center"
          />
        </div>
      </div>
    </section>
  );
}
