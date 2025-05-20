import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { HowItWorks } from "@/components/how-it-works"
import { WhoItsFor } from "@/components/who-its-for"
import { Benefits } from "@/components/benefits"
import { RealTimeMonitoring } from "@/components/real-time-monitoring"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <WhoItsFor />
      <Benefits />
      <RealTimeMonitoring />
      <Contact />
      <Footer />
    </main>
  )
}
