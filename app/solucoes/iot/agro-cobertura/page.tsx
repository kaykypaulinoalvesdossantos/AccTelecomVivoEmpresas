import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgroCoberturaHeroSection } from "@/components/agro-cobertura-hero-section"
import { AgroCoberturaIntroSection } from "@/components/agro-cobertura-intro-section"
import { AgroCoberturaBenefitsSection } from "@/components/agro-cobertura-benefits-section"
import { AgroCoberturaSolutionsSection } from "@/components/agro-cobertura-solutions-section"
import { AgroCoberturaNetworksSection } from "@/components/agro-cobertura-networks-section"
import { AgroCoberturaRelatedSection } from "@/components/agro-cobertura-related-section"
import { AgroCoberturaCtaSection } from "@/components/agro-cobertura-cta-section"

export default function AgroCoberturaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AgroCoberturaHeroSection />
        <AgroCoberturaIntroSection />
        <AgroCoberturaBenefitsSection />
        <AgroCoberturaSolutionsSection />
        <AgroCoberturaNetworksSection />
        <AgroCoberturaRelatedSection />
        <AgroCoberturaCtaSection />
      </main>
      <Footer />
    </>
  )
}
