import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { FibraPosHeroSection } from "@/components/fibra-pos-hero-section"
import { FibraPosPlansSection } from "@/components/fibra-pos-plans-section"
import { FibraPosExclusiveSection } from "@/components/fibra-pos-exclusive-section"
import { FibraPosFeaturesSection } from "@/components/fibra-pos-features-section"
import { FibraPosFAQSection } from "@/components/fibra-pos-faq-section"
import { FibraPosCTASection } from "@/components/fibra-pos-cta-section"

export default function FibraPosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Pacotes", href: "/pacotes" },
            { label: "Fibra + Pós", href: "/pacotes/fibra-pos" },
          ]}
        />
      </div>

      <FibraPosHeroSection />
      <FibraPosPlansSection />
      <FibraPosExclusiveSection />
      <FibraPosFeaturesSection />
      <FibraPosFAQSection />
      <FibraPosCTASection />

      <Footer />
    </div>
  )
}
