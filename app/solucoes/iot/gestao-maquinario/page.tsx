import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GestaoMaquinarioHeroSection } from "@/components/gestao-maquinario-hero-section"
import { GestaoMaquinarioIntroSection } from "@/components/gestao-maquinario-intro-section"
import { GestaoMaquinarioBenefitsSection } from "@/components/gestao-maquinario-benefits-section"
import { GestaoMaquinarioFaqSection } from "@/components/gestao-maquinario-faq-section"
import { GestaoMaquinarioRelatedSection } from "@/components/gestao-maquinario-related-section"
import { GestaoMaquinarioCtaSection } from "@/components/gestao-maquinario-cta-section"

export default function GestaoMaquinarioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <GestaoMaquinarioHeroSection />
        <GestaoMaquinarioIntroSection />
        <GestaoMaquinarioBenefitsSection />
        <GestaoMaquinarioFaqSection />
        <GestaoMaquinarioRelatedSection />
        <GestaoMaquinarioCtaSection />
      </main>
      <Footer />
    </>
  )
}
