import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { VivoGestaoHeroSection } from "@/components/vivo-gestao-hero-section"
import { VivoGestaoPlansSection } from "@/components/vivo-gestao-plans-section"
import { VivoGestaoBenefitsSection } from "@/components/vivo-gestao-benefits-section"
import { VivoGestaoFAQSection } from "@/components/vivo-gestao-faq-section"
import { VivoGestaoCTASection } from "@/components/vivo-gestao-cta-section"

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
        <VivoGestaoBenefitsSection />
        <VivoGestaoFAQSection />
        <VivoGestaoCTASection />
      </main>
      <Footer />
    </div>
  )
}