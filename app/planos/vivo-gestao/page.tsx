import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { VivoGestaoHeroSection } from "@/components/vivo-gestao-hero-section"
import { VivoGestaoPlansSection } from "@/components/vivo-gestao-plans-section"
import { VivoGestaoAwardsSection } from "@/components/vivo-gestao-awards-section"
import { VivoGestaoBenefitsSection } from "@/components/vivo-gestao-benefits-section"
import { VivoGestaoEfficiencySection } from "@/components/vivo-gestao-efficiency-section"
import { VivoGestaoFAQSection } from "@/components/vivo-gestao-faq-section"
import { VivoGestaoFeaturesSection } from "@/components/vivo-gestao-features-section"

export default function VivoGestaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Planos", href: "/planos" },
            { label: "Vivo Gestão" }
          ]} />
        </div>
        <VivoGestaoHeroSection />
        <VivoGestaoPlansSection />
        <VivoGestaoAwardsSection />
        <VivoGestaoBenefitsSection />
        <VivoGestaoEfficiencySection />
        <VivoGestaoFAQSection />
        <VivoGestaoFeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
