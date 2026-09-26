import Image from "next/image";
import { Section } from "@/components/Layout/Section";
import type { ServiceProcessStep } from "@/components/Electrical/serviceLandingShared";
import { RevealBlock } from "@/components/Layout/useRevealInView";

export type ServiceProcessImage = {
  src: string;
  alt: string;
};

function uniqueImages(images: ServiceProcessImage[]) {
  const seen = new Set<string>();
  return images.filter((image) => {
    if (seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
}

export function ServiceProcess({
  title,
  intro,
  steps,
  images,
}: {
  title: string;
  intro: string;
  steps: ServiceProcessStep[];
  images: ServiceProcessImage[];
}) {
  const photos = uniqueImages(images);

  return (
    <Section>
      <div className="overflow-hidden rounded-md bg-[var(--process-panel)] text-[var(--process-ink)] shadow-[inset_0_0_0_1px_var(--process-edge)]">
        <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-stretch">
          <div className="order-1 px-6 pt-8 md:px-10 md:pt-12 lg:col-start-1 lg:row-start-1">
            <RevealBlock variant="fade-up">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--process-eyebrow)] md:text-xs">How it works</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-[var(--process-ink)] md:text-4xl">{title}</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--process-muted)] md:text-base">{intro}</p>
            </RevealBlock>
          </div>

          {photos.length > 0 ? (
            <div className="order-2 mt-6 flex flex-row gap-3 px-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:flex-col lg:justify-center lg:px-0 lg:py-10 lg:pr-4 lg:pl-0">
              {photos.map((photo, index) => (
                <RevealBlock
                  key={photo.src}
                  variant={index === 0 ? "slide-right" : "fade-up"}
                  className={`relative min-w-0 flex-1 overflow-hidden rounded-md ${
                    photos.length === 1 ? "aspect-[4/3]" : "aspect-[4/3] lg:aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={photos.length > 1 ? "(min-width: 1024px) 40vw, 50vw" : "(min-width: 1024px) 40vw, 100vw"}
                    className="object-cover"
                  />
                </RevealBlock>
              ))}
            </div>
          ) : null}

          <ol
            className={`order-3 list-none space-y-3 p-0 px-6 pb-8 md:px-10 md:pb-12 ${
              photos.length > 0 ? "mt-6 lg:col-start-1 lg:row-start-2 lg:mt-8" : "mt-8"
            }`}
          >
            {steps.map((step, index) => (
              <RevealBlock key={step.title} as="li" variant="rise">
                <div className="rounded-md bg-button p-4 text-button-ink md:p-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--process-step-mark)] text-sm font-semibold text-[var(--process-step-mark-ink)]">
                      <span className="sr-only">Step </span>
                      {index + 1}
                    </span>
                    <h3 className="text-base font-semibold text-button-ink">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-button-ink">{step.body}</p>
                </div>
              </RevealBlock>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
