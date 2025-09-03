import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { RoamingHeroSection } from "@/components/roaming-hero-section"
import { RoamingFeaturesSection } from "@/components/roaming-features-section"
import { RoamingPlansSection } from "@/components/roaming-plans-section"
import { RoamingVoiceWiFiSection } from "@/components/roaming-voice-wifi-section"
import { RoamingUSASection } from "@/components/roaming-usa-section"
import { RoamingFAQSection } from "@/components/roaming-faq-section"
import { RoamingRelatedSection } from "@/components/roaming-related-section"
import { RoamingSolutionsSection } from "@/components/roaming-solutions-section"

export default function RoamingInternacionalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Planos", href: "/planos" },
            { label: "Roaming Internacional" }
          ]} />
        </div>
        <RoamingHeroSection />
        <RoamingFeaturesSection />
        <RoamingPlansSection />
        <RoamingVoiceWiFiSection />
        <RoamingUSASection />
        <RoamingFAQSection />
        <RoamingRelatedSection />
        <RoamingSolutionsSection />
      </main>
      <Footer />
    </div>
  )
}
