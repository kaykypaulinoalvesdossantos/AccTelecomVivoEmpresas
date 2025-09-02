import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { PortabilityHeroSection } from "@/components/portability-hero-section"
import { PortabilityPlansSection } from "@/components/portability-plans-section"
import { PortabilityInfoSection } from "@/components/portability-info-section"
import { PortabilityTypesSection } from "@/components/portability-types-section"
import { PortabilityImportantInfoSection } from "@/components/portability-important-info-section"
import { PortabilityStepsSection } from "@/components/portability-steps-section"
import { PortabilityReasonsSection } from "@/components/portability-reasons-section"
import { PortabilityBenefitsSection } from "@/components/portability-benefits-section"
import { PortabilityFAQSection } from "@/components/portability-faq-section"

export default function PortabilidadePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" }, 
            { label: "Planos", href: "/planos" }, 
            { label: "Portabilidade" }
          ]} />
        </div>
        <PortabilityHeroSection />
        <PortabilityPlansSection />
        <PortabilityInfoSection />
        <PortabilityTypesSection />
        <PortabilityImportantInfoSection />
        <PortabilityStepsSection />
        <PortabilityReasonsSection />
        <PortabilityBenefitsSection />
        <PortabilityFAQSection />
      </main>
      <Footer />
    </div>
  )
}
