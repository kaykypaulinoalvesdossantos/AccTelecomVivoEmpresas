import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Router5GHeroSection } from "@/components/router5g-hero-section"
import { Router5GPlansSection } from "@/components/router5g-plans-section"
import { Router5GEquipmentSection } from "@/components/router5g-equipment-section"
import { Router5GBenefitsSection } from "@/components/router5g-benefits-section"
import { Router5GDifferentialsSection } from "@/components/router5g-differentials-section"
import { Router5GFAQSection } from "@/components/router5g-faq-section"
import { Router5GCTASection } from "@/components/router5g-cta-section"

export default function Roteador5GPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Planos", href: "/planos" },
            { label: "Roteador 5G" }
          ]} />
        </div>
        <Router5GHeroSection />
        <Router5GPlansSection />
        <Router5GEquipmentSection />
        <Router5GBenefitsSection />
        <Router5GDifferentialsSection />
        <Router5GFAQSection />
        <Router5GCTASection />
      </main>
      <Footer />
    </div>
  )
}
