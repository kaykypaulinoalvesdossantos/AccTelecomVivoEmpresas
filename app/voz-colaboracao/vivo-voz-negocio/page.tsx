import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { VivoVozNegocioHeroSection } from "@/components/vivo-voz-negocio-hero-section"
import { VivoVozNegocioFeaturesSection } from "@/components/vivo-voz-negocio-features-section"
import { VivoVozNegocioPricingSection } from "@/components/vivo-voz-negocio-pricing-section"
import { VivoVozNegocioBenefitsSection } from "@/components/vivo-voz-negocio-benefits-section"
import { VivoVozNegocioFAQSection } from "@/components/vivo-voz-negocio-faq-section"
import { VivoVozNegocioCTASection } from "@/components/vivo-voz-negocio-cta-section"

export default function VivoVozNegocioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Voz e Colaboração", href: "/voz-colaboracao" },
            { label: "Vivo Voz Negócio", href: "/voz-colaboracao/vivo-voz-negocio" },
          ]}
        />
      </div>

      <VivoVozNegocioHeroSection />
      <VivoVozNegocioFeaturesSection />
      <VivoVozNegocioPricingSection />
      <VivoVozNegocioBenefitsSection />
      <VivoVozNegocioFAQSection />
      <VivoVozNegocioCTASection />

      <Footer />
    </div>
  )
}
