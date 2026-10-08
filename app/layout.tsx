import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const poppins = localFont({
  src: [
    {
      path: "../public/landing/fonts/poppins-regular-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/landing/fonts/poppins-bold-latin.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});
const description =
  "Wearable activity, overnight physiology and personal context for fatigue and recovery follow-up in oncology care and professional sport.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sciencepeaks.ai"),
  title: {
    default: "SciencePeaks | Activity, fatigue and recovery",
    template: "%s",
  },
  description,
  authors: [{ name: "SciencePeaks" }],
  creator: "SciencePeaks",
  publisher: "SciencePeaks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "SciencePeaks",
    title: "SciencePeaks | A fuller picture of fatigue and recovery",
    description,
    images: [
      {
        url: "/landing/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "SciencePeaks: activity and physiology connected for professional follow-up.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SciencePeaks | Activity, fatigue and recovery",
    description,
    images: ["/landing/social-preview.jpg"],
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.sciencepeaks.ai/#organization",
    name: "SciencePeaks",
    url: "https://www.sciencepeaks.ai/",
    logo: "https://www.sciencepeaks.ai/logo.svg",
    description,
  };
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <noscript>
          <style>{`
            .sp-menu-button,.sp-motion-button,.sp-nav-cta,.sp-story-tabs,
            .sp-explorer-tabs,.sp-wearable-button,.sp-volume-control input,
            .sp-volume-range-ends{display:none!important}
            .sp-header{position:relative!important;top:12px!important}
            .sp-hero{padding-top:65px!important}
            .sp-nav{height:auto!important;flex-wrap:wrap}
            .sp-nav-links{display:flex!important;position:static!important;
              flex-direction:row!important;flex-wrap:wrap;background:transparent!important;
              border:0!important;padding:0!important}
            .sp-logo-window{overflow:visible;mask-image:none}
            .sp-logo-track{animation:none!important;width:auto!important}
            .sp-logo-set{flex-wrap:wrap;justify-content:center}
            .sp-logo-set[aria-hidden=true]{display:none}
            .sp-hero-light{animation:none!important}
          `}</style>
        </noscript>
      </head>
      <body className={poppins.variable}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
