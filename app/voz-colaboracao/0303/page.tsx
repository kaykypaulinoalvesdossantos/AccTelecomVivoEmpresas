import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Zero303HeroSection } from "@/components/0303-hero-section"
import { Zero303PremisesSection } from "@/components/0303-premises-section"
import { Zero303PricingAndPortalsSection } from "@/components/0303-pricing-portals-section"
import { Zero303FacilidadesSection } from "@/components/0303-facilidades-section"
import { Zero303ImportantInfoSection } from "@/components/0303-important-info-section"

export default function Zero303Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Voz e Colaboração", href: "/voz-colaboracao" },
            { label: "0303", href: "/voz-colaboracao/0303" },
          ]}
        />
      </div>

      <Zero303HeroSection />
      <Zero303PremisesSection />
      <Zero303PricingAndPortalsSection />
      <Zero303FacilidadesSection />
      <Zero303ImportantInfoSection />

      <Footer />
    </div>
  )
}
