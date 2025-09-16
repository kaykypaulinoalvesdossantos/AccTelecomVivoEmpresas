import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { OitoZeroZeroHeroSection } from "@/components/0800-0300-hero-section"
import { OitoZeroZeroPlans0800Section } from "@/components/0800-0300-plans-0800-section"
import { OitoZeroZeroPlans0800CustomizadoSection } from "@/components/0800-0300-plans-0800-customizado-section"
import { OitoZeroZeroFacilidadesSection } from "@/components/0800-0300-facilidades-section"
import { OitoZeroZeroBenefitsSection } from "@/components/0800-0300-benefits-section"
import { OitoZeroZeroHowItWorksSection } from "@/components/0800-0300-how-it-works-section"
import { OitoZeroZeroPlatformSection } from "@/components/0800-0300-platform-section"
import { OitoZeroZeroFaqSection } from "@/components/0800-0300-faq-section"
import { OitoZeroZeroCtaSection } from "@/components/0800-0300-cta-section"

export default function OitoZeroZeroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Voz e Colaboração", href: "/voz-colaboracao" },
            { label: "0800 e 0300", href: "/voz-colaboracao/0800-0300" },
          ]}
        />
      </div>

      <OitoZeroZeroHeroSection />
      <OitoZeroZeroPlans0800Section />
      <OitoZeroZeroPlans0800CustomizadoSection />
      <OitoZeroZeroFacilidadesSection />
      <OitoZeroZeroBenefitsSection />
      <OitoZeroZeroHowItWorksSection />
      <OitoZeroZeroPlatformSection />
      <OitoZeroZeroFaqSection />
      <OitoZeroZeroCtaSection />

      <Footer />
    </div>
  )
}
