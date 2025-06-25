import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { HowItWorks } from "@/components/how-it-works"
import { WhoItsFor } from "@/components/who-its-for"
import { Benefits } from "@/components/benefits"
import { TeamSection } from "@/components/team-section"
import { RealTimeMonitoring } from "@/components/real-time-monitoring"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SciencePeaks - AI-Powered Personalized Physical Activity Ecosystem",
  description: "Transform your health with our intelligent ecosystem that personalizes physical activity using AI, biomarkers, and heart rate variability metrics. Discover how technology meets wellness.",
  alternates: {
    canonical: "https://www.sciencepeaks.ai",
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.sciencepeaks.ai",
            url: "https://www.sciencepeaks.ai",
            name: "SciencePeaks - AI-Powered Personalized Physical Activity",
            description: "Transform your health with our intelligent ecosystem that personalizes physical activity using AI, biomarkers, and heart rate variability metrics.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.sciencepeaks.ai/#website",
              url: "https://www.sciencepeaks.ai",
              name: "SciencePeaks"
            },
            about: {
              "@type": "Thing",
              name: "Health Technology"
            },
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "SciencePeaks",
              applicationCategory: "HealthApplication",
              operatingSystem: "All",
              description: "AI-powered personalized physical activity ecosystem"
            }
          })
        }}
      />
      <main className="flex min-h-screen flex-col">
        <Header />
        <Hero />
        <section id="about" aria-labelledby="about-heading">
          <About />
        </section>
        <section id="how-it-works" aria-labelledby="how-it-works-heading">
          <HowItWorks />
        </section>
        <section id="who-its-for" aria-labelledby="who-its-for-heading">
          <WhoItsFor />
        </section>
        <section id="benefits" aria-labelledby="benefits-heading">
          <Benefits />
        </section>
        <section id="monitoring" aria-labelledby="monitoring-heading">
          <RealTimeMonitoring />
        </section>
        <section id="team" aria-labelledby="team-heading">
          <TeamSection />
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  )
}
