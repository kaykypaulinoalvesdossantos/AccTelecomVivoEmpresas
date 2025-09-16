import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { MovelAparelhoHeroSection } from "@/components/movel-aparelho-hero-section"
import { MovelAparelhoPlansSection } from "@/components/movel-aparelho-plans-section"
import { MovelAparelhoMobilePlansSection } from "@/components/movel-aparelho-mobile-plans-section"
import { MovelAparelhoBenefitsSection } from "@/components/movel-aparelho-benefits-section"
import { MovelAparelhoFAQSection } from "@/components/movel-aparelho-faq-section"
import { MovelAparelhoCTASection } from "@/components/movel-aparelho-cta-section"

export default function MovelAparelhoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Pacotes", href: "/pacotes" },
            { label: "Móvel + Aparelho", href: "/pacotes/movel-aparelho" },
          ]}
        />
      </div>

      <MovelAparelhoHeroSection />
      <MovelAparelhoPlansSection />
      <MovelAparelhoMobilePlansSection />
      <MovelAparelhoBenefitsSection />
      <MovelAparelhoFAQSection />
      <MovelAparelhoCTASection />

      <Footer />
    </div>
  )
}
