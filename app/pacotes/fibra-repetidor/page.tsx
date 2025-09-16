import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { FibraRepetidorHeroSection } from "@/components/fibra-repetidor-hero-section"
import { FibraRepetidorConhecaSection } from "@/components/fibra-repetidor-conheca-section"
import { FibraRepetidorOfertasSection } from "@/components/fibra-repetidor-ofertas-section"
import { FibraRepetidorSolucaoSection } from "@/components/fibra-repetidor-solucao-section"
import { FibraRepetidorServicosSection } from "@/components/fibra-repetidor-servicos-section"
import { FibraRepetidorFAQSection } from "@/components/fibra-repetidor-faq-section"
import { FibraRepetidorCTASection } from "@/components/fibra-repetidor-cta-section"

export default function FibraRepetidorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Pacotes", href: "/pacotes" },
            { label: "Fibra + Repetidor", href: "/pacotes/fibra-repetidor" },
          ]}
        />
      </div>

      <FibraRepetidorHeroSection />
      <FibraRepetidorConhecaSection />
      <FibraRepetidorOfertasSection />
      <FibraRepetidorSolucaoSection />
      <FibraRepetidorServicosSection />
      <FibraRepetidorFAQSection />
      <FibraRepetidorCTASection />

      <Footer />
    </div>
  )
}
