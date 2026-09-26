"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Section } from "@/components/Layout/Section";

const recommendations = [
  {
    initials: "M.C.",
    letters: "MC",
    place: "Pinchbeck",
    date: "29/11/2025",
    quote:
      "Highly recommended. Chris very professional, reliable and friendly. Fitted us in sooner than expected too.",
  },
  {
    initials: "C.B.",
    letters: "CB",
    place: "Althorne",
    date: "14/01/2024",
    quote:
      "Friendly, efficient, reliable service. Chris was easy to deal with, turned up when he said, and finished the work properly.",
  },
  {
    initials: "I.B.",
    letters: "IB",
    place: "Althorne",
    date: "14/01/2024",
    quote: "Highly recommended, great service at a good price. We were kept informed and the job was done as agreed.",
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
      <p className="mt-3 text-sm leading-relaxed text-foreground">&ldquo;{item.quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-button text-xs font-semibold tracking-wide text-button-ink">
          {item.letters}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-foreground">{item.initials}</span>
          <span className="text-muted block text-xs">
            {item.place} · {item.date} · Nextdoor
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
          <div key={`${item.initials}-${index}`} className="mr-4 min-w-0 shrink-0">
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
          A few notes left on Nextdoor. Chris can replace these with newer ones when he has them.
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

      <ul className="mx-auto mt-8 hidden max-w-6xl grid-cols-1 gap-4 motion-reduce:grid md:grid-cols-3">
        {recommendations.map((item) => (
          <li key={item.initials}>
            <ReviewCard item={item} className="w-full" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
