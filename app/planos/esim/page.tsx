import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ESimHeroSection } from "@/components/esim-hero-section"
import { ESimPlansSection } from "@/components/esim-plans-section"
import { ESimAdvantagesSection } from "@/components/esim-advantages-section"
import { ESimActivationSection } from "@/components/esim-activation-section"
import { ESimComparisonSection } from "@/components/esim-comparison-section"
import { ESimCompatibleDevicesSection } from "@/components/esim-compatible-devices-section"
import { ESimFAQSection } from "@/components/esim-faq-section"
import { ESimRelatedSection } from "@/components/esim-related-section"
import { ESimCTASection } from "@/components/esim-cta-section"

export default function ESimPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Planos", href: "/planos" },
            { label: "eSIM" }
          ]} />
        </div>
        <ESimHeroSection />
        <ESimPlansSection />
        <ESimAdvantagesSection />
        <ESimActivationSection />
        <ESimComparisonSection />
        <ESimCompatibleDevicesSection />
        <ESimFAQSection />
        <ESimRelatedSection />
        <ESimCTASection />
      </main>
      <Footer />
    </div>
  )
}
