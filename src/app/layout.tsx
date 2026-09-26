import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DesktopNavbar } from "@/components/Navigation/DesktopNavbar";
import { MobileNavbar } from "@/components/Navigation/MobileNavbar";
import { ScrollToTopOnNavigate } from "@/components/Navigation/ScrollToTopOnNavigate";
import { ComingSoonScreen } from "@/components/ComingSoon/ComingSoonScreen";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { SiteFooter } from "@/components/Footer/SiteFooter";
import { CookieConsentBanner } from "@/components/CookieConsent/CookieConsentBanner";
import { GoogleConsentSync } from "@/components/Analytics/GoogleConsentSync";
import { FloatingWhatsappButton } from "@/components/Contact/FloatingWhatsappButton";
import { GOOGLE_CONSENT_DEFAULTS_SCRIPT } from "@/components/CookieConsent/googleConsentMode";
import {
  areasServed,
  business,
  openingHoursSpecification,
  sameAs,
  siteDescription,
  siteUrl,
} from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Electrician", "HVACBusiness"],
  "@id": `${siteUrl}/#localbusiness`,
  name: business.name,
  legalName: business.legalName,
  alternateName: business.tradingAs,
  url: siteUrl,
  logo: `${siteUrl}/advanta/logo/mark-on-light.png`,
  image: `${siteUrl}${business.ogImagePath}`,
  description: siteDescription,
  telephone: business.phoneIntl,
  email: business.email,
  areaServed: [...areasServed],
  openingHoursSpecification,
  ...(sameAs.length ? { sameAs } : {}),
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical installation and repairs" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air conditioning installation and servicing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "EICR testing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "EV charger installation" } },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Electrician & Air Conditioning in Spalding | Advanta",
    template: "%s | Advanta",
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    locale: "en_GB",
    title: "Electrician & Air Conditioning in Spalding | Advanta",
    description: siteDescription,
    siteName: business.name,
    images: [
      {
        url: business.ogImagePath,
        width: business.ogImageWidth,
        height: business.ogImageHeight,
        alt: `${business.name}, electrical and climate`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrician & Air Conditioning in Spalding | Advanta",
    description: siteDescription,
    images: [business.ogImagePath],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const comingSoonFlag = process.env.coming_soon ?? process.env.COMING_SOON ?? "";
  const isComingSoon = comingSoonFlag.toLowerCase() === "true";

  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: GOOGLE_CONSENT_DEFAULTS_SCRIPT.replace(/<\//g, "<\\/"),
          }}
        />
        <GoogleConsentSync />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {isComingSoon ? (
            <ComingSoonScreen />
          ) : (
            <>
              <ScrollToTopOnNavigate />
              <MobileNavbar />
              <DesktopNavbar />
              <main className="min-w-0 flex-1 overflow-x-clip">{children}</main>
              <SiteFooter />
              <FloatingWhatsappButton />
              <CookieConsentBanner />
            </>
          )}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
