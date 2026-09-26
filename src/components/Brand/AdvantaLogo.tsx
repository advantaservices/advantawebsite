"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const LIGHT_LOGO_SRC = "/advanta/logo/lockup-on-light.png";
const DARK_LOGO_SRC = "/advanta/logo/lockup-for-dark.png";
const LOGO_ASPECT_RATIO = 1806 / 388;

type AdvantaLogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  variant?: "auto" | "light" | "dark";
};

export function AdvantaLogo({
  className = "",
  width = 220,
  priority = false,
  variant = "auto",
}: AdvantaLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const renderedHeight = Math.round(width / LOGO_ASPECT_RATIO);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const logoSrc =
    variant === "dark"
      ? DARK_LOGO_SRC
      : variant === "light"
        ? LIGHT_LOGO_SRC
        : mounted && resolvedTheme === "dark"
          ? DARK_LOGO_SRC
          : LIGHT_LOGO_SRC;

  return (
    <Image
      src={logoSrc}
      alt="Advanta Services, electrical and climate"
      width={width}
      height={renderedHeight}
      className={`object-contain object-left ${className}`}
      style={{ width, height: "auto" }}
      priority={priority}
    />
  );
}
