"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type RefObject,
} from "react";

type UseRevealInViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

type UseRevealInViewResult<T extends HTMLElement> = {
  ref: RefObject<T | null>;
  isVisible: boolean;
  visibleClass: string;
};

/** Intersection-based reveal used across service landing sections. */
export function useRevealInView<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealInViewOptions = {},
): UseRevealInViewResult<T> {
  // Fire when a modest slice of the element is in the upper ~88% of the viewport,
  // so reveals happen as you scroll to them rather than far below the fold.
  const { threshold = 0.2, rootMargin = "0px 0px -12% 0px" } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return {
    ref,
    isVisible,
    visibleClass: isVisible ? "is-visible" : "",
  };
}

export const revealDelay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

type RevealVariant = "rise" | "fade-up" | "slide-left" | "slide-right";

const REVEAL_VARIANT_CLASS: Record<RevealVariant, string> = {
  rise: "reveal-rise",
  "fade-up": "reveal-fade-up",
  "slide-left": "reveal-slide-left",
  "slide-right": "reveal-slide-right",
};

type RevealBlockProps = {
  as?: ElementType;
  variant?: RevealVariant;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  threshold?: number;
  rootMargin?: string;
};

/**
 * Self-observing reveal wrapper. Use one per block so mobile stacks animate
 * as each item enters the viewport, not when a tall parent first appears.
 */
export function RevealBlock({
  as: Tag = "div",
  variant = "rise",
  className = "",
  style,
  children,
  threshold,
  rootMargin,
}: RevealBlockProps) {
  const { ref, visibleClass } = useRevealInView<HTMLElement>({ threshold, rootMargin });

  return (
    <Tag
      ref={ref}
      className={`${REVEAL_VARIANT_CLASS[variant]} ${visibleClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
