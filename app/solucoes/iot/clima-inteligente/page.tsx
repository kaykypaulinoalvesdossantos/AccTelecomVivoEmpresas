import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClimaInteligenteHeroSection } from "@/components/clima-inteligente-hero-section"
import { ClimaInteligenteApplicationsSection } from "@/components/clima-inteligente-applications-section"
import { ClimaInteligenteSensorsSection } from "@/components/clima-inteligente-sensors-section"
import { ClimaInteligenteBenefitsSection } from "@/components/clima-inteligente-benefits-section"
import { ClimaInteligenteFaqSection } from "@/components/clima-inteligente-faq-section"
import { ClimaInteligenteRelatedSection } from "@/components/clima-inteligente-related-section"
import { ClimaInteligenteCtaSection } from "@/components/clima-inteligente-cta-section"

export default function ClimaInteligentePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ClimaInteligenteHeroSection />
        <ClimaInteligenteApplicationsSection />
        <ClimaInteligenteSensorsSection />
        <ClimaInteligenteBenefitsSection />
        <ClimaInteligenteFaqSection />
        <ClimaInteligenteRelatedSection />
        <ClimaInteligenteCtaSection />
      </main>
      <Footer />
    </>
  )
}
