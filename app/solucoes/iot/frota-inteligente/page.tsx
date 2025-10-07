import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FrotaInteligenteHeroSection } from "@/components/frota-inteligente-hero-section"
import { FrotaInteligenteIntroSection } from "@/components/frota-inteligente-intro-section"
import { FrotaInteligentePlansSection } from "@/components/frota-inteligente-plans-section"
import { FrotaInteligenteBenefitsSection } from "@/components/frota-inteligente-benefits-section"
import { FrotaInteligenteFeaturesSection } from "@/components/frota-inteligente-features-section"
import { FrotaInteligenteComparisonSection } from "@/components/frota-inteligente-comparison-section"
import { FrotaInteligenteFaqSection } from "@/components/frota-inteligente-faq-section"
import { FrotaInteligenteCtaSection } from "@/components/frota-inteligente-cta-section"

export default function FrotaInteligentePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <FrotaInteligenteHeroSection />
        <FrotaInteligenteIntroSection />
        <FrotaInteligentePlansSection />
        <FrotaInteligenteBenefitsSection />
        <FrotaInteligenteFeaturesSection />
        <FrotaInteligenteComparisonSection />
        <FrotaInteligenteFaqSection />
        <FrotaInteligenteCtaSection />
      </main>
      <Footer />
    </>
  )
}
