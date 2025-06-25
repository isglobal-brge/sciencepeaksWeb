import type React from "react"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MovingGradientBackground } from "@/components/moving-gradient-background"
import { CookieBanner } from "@/components/cookie-banner"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "SciencePeaks - AI-Powered Personalized Physical Activity Ecosystem",
  description: "An intelligent ecosystem that personalizes physical activity using AI, biomarkers, and heart rate variability metrics. Transform your health with data-driven insights.",
  keywords: [
    "AI health",
    "personalized fitness",
    "heart rate variability",
    "biomarkers",
    "physical activity",
    "health technology",
    "wearable devices",
    "exercise prescription",
    "health monitoring",
    "fitness AI"
  ],
  authors: [{ name: "SciencePeaks Team" }],
  creator: "SciencePeaks",
  publisher: "SciencePeaks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sciencepeaks.ai",
    siteName: "SciencePeaks",
    title: "SciencePeaks - AI-Powered Personalized Physical Activity",
    description: "Transform your health with our intelligent ecosystem that personalizes physical activity using AI, biomarkers, and heart rate variability metrics.",
    images: [
      {
        url: "https://www.sciencepeaks.ai/sciencepeaks-wearable-device.png",
        width: 1200,
        height: 630,
        alt: "SciencePeaks Wearable Device Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SciencePeaks - AI-Powered Personalized Physical Activity",
    description: "Transform your health with our intelligent ecosystem that personalizes physical activity using AI, biomarkers, and heart rate variability metrics.",
    images: ["https://www.sciencepeaks.ai/sciencepeaks-wearable-device.png"],
    creator: "@sciencepeaks",
  },

  alternates: {
    canonical: "https://www.sciencepeaks.ai",
  },
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/logo.svg",
    apple: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.svg",
        color: "#1e3d83",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SciencePeaks",
              url: "https://www.sciencepeaks.ai",
              logo: "https://www.sciencepeaks.ai/logo.svg",
              description: "An intelligent ecosystem that personalizes physical activity using AI, biomarkers, and heart rate variability metrics.",
              foundingDate: "2024",
              industry: "Health Technology",
              sameAs: [
                "https://twitter.com/sciencepeaks",
                "https://linkedin.com/company/sciencepeaks"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                url: "https://www.sciencepeaks.ai#contact"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MovingGradientBackground />
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}
