import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { DetailedPlansSection } from "@/components/detailed-plans-section"
import { PlansBenefitsSection } from "@/components/plans-benefits-section"
import { PlansHeroSection } from "@/components/plans-hero-section"
import { PlansFAQSection } from "@/components/plans-faq-section"

export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Planos" }]} />
        </div>
        <PlansHeroSection />
        <DetailedPlansSection />
        <PlansBenefitsSection />
        <PlansFAQSection />
      </main>
      <Footer />
    </div>
  )
}
