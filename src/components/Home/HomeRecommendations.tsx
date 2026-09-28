"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Section } from "@/components/Layout/Section";

const recommendations = [
  {
    initials: "Matthew Clark",
    letters: "MC",
    place: "Google",
    date: "4 months ago",
    quote:
      "Advanta Services installed a Fujitsu Airstage air conditioning system for us. Very professional and knowledgeable from quotation to completion. Great communication and very reliable. Highly recommend Chris @ Advanta Services. We are extremely pleased with our installation.",
  },
  {
    initials: "Andrew Croker",
    letters: "AC",
    place: "Google",
    date: "2 months ago",
    quote: "I had a EV charger installed by Chris from Advanta Services, and the experience…",
  },
  {
    initials: "Gary Read",
    letters: "GR",
    place: "Google",
    date: "4 months ago",
    quote:
      "Fabulous service from start to finish. Installed AC in our bedroom. Nice tidy work and good communication throughout. Definitely recommend",
  },
  {
    initials: "Ryan Burgess",
    letters: "RB",
    place: "Google",
    date: "4 months ago",
    quote:
      "Had some electrical work done by Chris recently and couldn’t be happier. Turned up on time, really professional, tidy work and everything was done to a high standard. Great communication throughout and very fair pricing too. You can tell he takes pride in his work. Would definitely recommend to anyone needing electrical work done.",
  },
  {
    initials: "Harrison Price",
    letters: "HP",
    place: "Google",
    date: "4 months ago",
    quote:
      "Excellent company and customer service! Answered all my questions would definetly recommend and will use them again.",
  },
  {
    initials: "JetNow Drainage",
    letters: "JN",
    place: "Google",
    date: "4 months ago",
    quote:
      "They were professional, punctual, and clearly very knowledgeable. The work was completed to a high standard, everything was explained clearly, and they left the area clean and tidy afterwards.",
  },
  {
    initials: "Luke Simmons",
    letters: "LS",
    place: "Google",
    date: "3 months ago",
    quote:
      "Really positive experience. Chris installed aircon for us, his work was extremely professional and neat, explained everything clearly. Will definitely be using him again for electrical work.",
  },
  {
    initials: "Jove Brown",
    letters: "JB",
    place: "Google",
    date: "4 months ago",
    quote: "Had them over for a full rewire , top service, clean and tidy work , only company I’ll use from now on!!",
  },
  {
    initials: "Harvey",
    letters: "H",
    place: "Google",
    date: "4 months ago",
    quote: "Chris installed aircon at short notice to our house and it’s brilliant. Cheers Chris!",
  },
  {
    initials: "Abbie Martin",
    letters: "AM",
    place: "Google",
    date: "4 months ago",
    quote: "Great company who did an excellent job, definitely recommend",
  },
  {
    initials: "Emily S",
    letters: "ES",
    place: "Google",
    date: "a week ago",
    quote:
      "Absolutely brilliant service from start to finish. There was a delay with the product, but I was kept fully informed the whole time, and the communication and customer service were excellent.",
  },
  {
    initials: "Melisa Laycock-van Spyk",
    letters: "ML",
    place: "Google",
    date: "2 weeks ago",
    quote:
      "We are really happy with the Air Conditioning unit installed by Chris and Josh. Despite a surge in demand for units resulting in some slight delays due to the repeated heatwaves this summer, I was really happy with the turnaround from…",
  },
] as const;

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand-strong" aria-hidden>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.6 12.2 6.7l5.5.6-4.1 3.7 1.2 5.4L10 13.8 5.2 16.4l1.2-5.4L2.3 7.3l5.5-.6L10 1.6Z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  item,
  className = "",
}: {
  item: (typeof recommendations)[number];
  className?: string;
}) {
  return (
    <article
      className={`flex w-[19.5rem] shrink-0 flex-col rounded-md border border-[var(--border)] bg-[var(--surface)] p-5 sm:w-[22rem] ${className}`}
    >
      <Stars />
      <p className="mt-3 line-clamp-3 min-h-[4.875em] text-sm leading-relaxed text-foreground md:line-clamp-4 md:min-h-[6.5em]">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-button text-xs font-semibold tracking-wide text-button-ink">
          {item.letters}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-foreground">{item.initials}</span>
          <span className="text-muted block text-xs">
            {item.place} · {item.date}
          </span>
        </span>
      </div>
    </article>
  );
}

function ReviewStrip() {
  const [viewportRef] = useEmblaCarousel({ loop: true, dragFree: true, align: "start" }, [
    AutoScroll({ speed: 0.8, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true }),
  ]);
  const slides = [...recommendations, ...recommendations];

  return (
    <div
      ref={viewportRef}
      className="relative left-1/2 mt-8 w-screen max-w-[100vw] -translate-x-1/2 cursor-grab overflow-hidden py-1 select-none active:cursor-grabbing motion-reduce:hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      aria-hidden="true"
    >
      <div className="flex">
        {slides.map((item, index) => (
          <div key={`${item.initials}-${index}`} className="mr-4 flex min-w-0 shrink-0">
            <ReviewCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomeRecommendations() {
  return (
    <Section muted>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong md:text-xs">
          Recommendations
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          What customers have said
        </h2>
        <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
          Taken from the Google reviews. The wording is theirs.
        </p>
      </div>

      <ul className="sr-only">
        {recommendations.map((item) => (
          <li key={item.initials}>
            {item.initials}, {item.place}: {item.quote}
          </li>
        ))}
      </ul>

      <ReviewStrip />

      <ul className="mx-auto mt-8 hidden max-w-6xl grid-cols-1 gap-4 motion-reduce:grid md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((item) => (
          <li key={item.initials}>
            <ReviewCard item={item} className="w-full" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
