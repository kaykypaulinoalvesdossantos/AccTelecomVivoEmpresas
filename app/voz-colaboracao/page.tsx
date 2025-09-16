import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { VozColaboracaoHeroSection } from "@/components/voz-colaboracao-hero-section"
import { VozColaboracaoServicesSection } from "@/components/voz-colaboracao-services-section"
import { VozColaboracaoBenefitsSection } from "@/components/voz-colaboracao-benefits-section"
import { VozColaboracaoFAQSection } from "@/components/voz-colaboracao-faq-section"
import { VozColaboracaoCTASection } from "@/components/voz-colaboracao-cta-section"

export default function VozColaboracaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Voz e Colaboração", href: "/voz-colaboracao" },
          ]}
        />
      </div>

      <VozColaboracaoHeroSection />
      <VozColaboracaoServicesSection />
      <VozColaboracaoBenefitsSection />
      <VozColaboracaoFAQSection />
      <VozColaboracaoCTASection />

      <Footer />
    </div>
  )
}
