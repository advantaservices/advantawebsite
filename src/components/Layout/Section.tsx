import type { ReactNode } from "react";

export const SECTION_PAD_Y = "pt-14 md:pt-20 pb-10 md:pb-14";
export const SECTION_SHELL = `scroll-mt-28 ${SECTION_PAD_Y} bg-[var(--background)]`;
export const SECTION_SHELL_MUTED = `scroll-mt-28 ${SECTION_PAD_Y} bg-[var(--surface-muted)]`;
export const SECTION_PAD_Y_MAJOR_SEAM = "pt-14 md:pt-20 pb-14 md:pb-20";
export const SECTION_SHELL_MAJOR_SEAM = `scroll-mt-28 ${SECTION_PAD_Y_MAJOR_SEAM} bg-[var(--background)]`;
export const HERO_BOTTOM_ONLY = "pb-14 md:pb-20";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
  majorSeam?: boolean;
};

export function Section({ id, children, className = "", muted = false, majorSeam = false }: SectionProps) {
  const pad = majorSeam ? SECTION_PAD_Y_MAJOR_SEAM : SECTION_PAD_Y;
  const bg = muted ? "bg-[var(--surface-muted)]" : "bg-[var(--background)]";

  return (
    <section id={id} className={`scroll-mt-28 overflow-x-clip ${pad} ${bg} ${className}`}>
      <div className="mx-auto w-full min-w-0 max-w-7xl px-6">{children}</div>
    </section>
  );
}
