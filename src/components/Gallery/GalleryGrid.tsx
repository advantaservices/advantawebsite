"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryItems, galleryNote, type GalleryItem } from "@/lib/gallery-data";
import { Section } from "@/components/Layout/Section";
import { RevealBlock } from "@/components/Layout/useRevealInView";

const filters = [
  { id: "all", label: "All" },
  { id: "electrical", label: "Electrical" },
  { id: "air-con", label: "Air conditioning" },
  { id: "commercial", label: "Commercial" },
  { id: "domestic", label: "Domestic" },
] as const;

type FilterId = (typeof filters)[number]["id"];

function matches(item: GalleryItem, filter: FilterId) {
  if (filter === "all") return true;
  if (filter === "electrical" || filter === "air-con") return item.trade === filter;
  return item.finish === filter;
}

const navButtonClass =
  "inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md bg-button text-button-ink shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-dark";

export function GalleryGrid() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const items = useMemo(() => galleryItems.filter((item) => matches(item, filter)), [filter]);
  const active = openIndex !== null ? items[openIndex] : null;
  const filterLabel = filters.find((item) => item.id === filter)?.label ?? "All";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") setOpenIndex((index) => (index === null ? index : (index + 1) % items.length));
      if (event.key === "ArrowLeft") setOpenIndex((index) => (index === null ? index : (index - 1 + items.length) % items.length));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [items.length, openIndex]);

  function step(direction: 1 | -1) {
    setOpenIndex((index) => {
      if (index === null) return index;
      return (index + direction + items.length) % items.length;
    });
  }

  return (
    <>
      <div className="border-b border-[var(--border)] bg-[var(--surface)]">
        <RevealBlock variant="rise" className="gallery-filter mx-auto w-full max-w-7xl px-6 py-3 sm:py-4">
          <div role="group" aria-label="Filter photos" className="flex w-full flex-nowrap gap-1 overflow-x-auto rounded-md border border-[var(--border)] bg-[var(--background)] p-1">
            {filters.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setFilter(item.id);
                    setOpenIndex(null);
                  }}
                  className={`min-w-fit flex-1 cursor-pointer whitespace-nowrap rounded-md px-3 py-2 text-center text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-button ${
                    active ? "bg-button text-button-ink" : "text-foreground hover:bg-[var(--surface)]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </RevealBlock>
      </div>
    <Section majorSeam className="!pt-8 md:!pt-10">
      <ul className="gallery-grid grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <RevealBlock key={item.src} as="li" variant="rise">
            <div className="themed-card overflow-hidden rounded-md">
              <button type="button" onClick={() => setOpenIndex(index)} className="group block w-full cursor-pointer text-left">
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition duration-300 ease-out group-hover:scale-[1.04]"
                  />
                </span>
                <span className="line-clamp-2 block min-h-[2.75em] px-2.5 py-2 text-xs leading-snug text-foreground sm:hidden">{item.label}</span>
                <span className="hidden px-3 py-2.5 text-sm leading-snug text-foreground sm:block">{item.alt}</span>
              </button>
            </div>
          </RevealBlock>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={active ? active.alt : "Gallery photo"}
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none border-0 bg-viewer p-0 text-on-dark backdrop:bg-black/70"
        onClose={() => setOpenIndex(null)}
        onCancel={() => setOpenIndex(null)}
      >
        {active ? (
          <div className="flex h-full flex-col">
            <div className="relative min-h-0 flex-1">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain p-3 pb-0 sm:p-8 sm:pb-0"
                priority
              />
              <button type="button" onClick={() => setOpenIndex(null)} className={`${navButtonClass} absolute top-3 right-3`} aria-label="Close">
                <X className="h-5 w-5" />
              </button>
              {items.length > 1 ? (
                <>
                  <button type="button" onClick={() => step(-1)} className={`${navButtonClass} absolute top-1/2 left-3 -translate-y-1/2`} aria-label="Previous photo">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button type="button" onClick={() => step(1)} className={`${navButtonClass} absolute top-1/2 right-3 -translate-y-1/2`} aria-label="Next photo">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              ) : null}
            </div>
            <div className="shrink-0 border-t border-white/10 px-4 py-4 sm:px-8 sm:py-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-on-dark-accent">
                {openIndex! + 1} of {items.length}
                {filter === "all" ? "" : ` in ${filterLabel}`}
              </p>
              <h2 className="mt-1 text-lg font-semibold tracking-tight text-on-dark sm:text-xl">{active.alt}</h2>
              <p className="mt-2 text-sm leading-relaxed text-on-dark-muted sm:text-base">{galleryNote(active.kind)}</p>
            </div>
          </div>
        ) : null}
      </dialog>
    </Section>
    </>
  );
}
