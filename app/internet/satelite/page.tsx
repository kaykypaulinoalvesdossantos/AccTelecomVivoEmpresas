import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { SateliteHeroSection } from "@/components/satelite-hero-section"
import { SatelitePlansSection } from "@/components/satelite-plans-section"
import { SateliteFAQSection } from "@/components/satelite-faq-section"
import { SateliteServicesSection } from "@/components/satelite-services-section"
import { SateliteLegalSection } from "@/components/satelite-legal-section"
import { SateliteCTASection } from "@/components/satelite-cta-section"

export default function InternetSatelitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Internet", href: "/internet" },
            { label: "Internet Satélite", href: "/internet/satelite" },
          ]}
        />
      </div>

      <SateliteHeroSection />
      <SatelitePlansSection />
      <SateliteFAQSection />
      <SateliteServicesSection />
      <SateliteLegalSection />
      <SateliteCTASection />

      <Footer />
    </div>
  )
}
