import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Layout/Section";
import { RevealBlock } from "@/components/Layout/useRevealInView";
import { business } from "@/lib/site-config";

const highlights = [
  "Electrical and air conditioning, equal weight",
  "Spalding, Peterborough and the towns between",
  "Qualified and insured",
  "Most air-conditioning systems: 5-year warranty",
];

export function AboutIntro() {
  return (
    <Section majorSeam>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <RevealBlock variant="slide-left" className="relative h-[320px] overflow-hidden rounded-md md:h-[460px]">
          <Image
            src="/advanta/photos/about/engineer.webp"
            alt="Advanta engineer installing a Fujitsu Airstage system"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </RevealBlock>
        <RevealBlock variant="slide-right" className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Local, personal, two trades</h2>
          <p className="text-muted text-base leading-8">
            Advanta Services LTD trades as Advanta Electrical & Climate. We are a small firm working
            around Spalding and Peterborough. You get lots of experience, honest pricing, and support
            after the install.
          </p>
          <p className="text-muted text-base leading-8">
            The van is a Ford Transit Custom, YS67 TKE. Chris is the person you deal with. Hours are
            Monday to Friday, 08:00 to 17:00, with weekend work by arrangement.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-strong" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 text-sm">
            <p>
              Call or WhatsApp{" "}
              <a href={business.phoneTel} className="text-base font-semibold text-foreground hover:text-brand-strong">
                {business.phoneDisplay}
              </a>
            </p>
            <p className="text-muted">Monday to Friday, 08:00 to 17:00. Weekend by arrangement.</p>
          </div>
        </RevealBlock>
      </div>
    </Section>
  );
}
