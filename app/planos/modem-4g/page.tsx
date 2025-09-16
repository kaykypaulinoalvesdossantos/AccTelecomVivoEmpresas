import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Modem4GHeroSection } from "@/components/modem4g-hero-section"
import { Modem4GComboSection } from "@/components/modem4g-combo-section"
import { Modem4GEquipmentSection } from "@/components/modem4g-equipment-section"
import { Modem4GHowToSection } from "@/components/modem4g-how-to-section"
import { Modem4GBenefitsSection } from "@/components/modem4g-benefits-section"
import { Modem4GDataManagementSection } from "@/components/modem4g-data-management-section"
import { Modem4GFAQSection } from "@/components/modem4g-faq-section"
import { Modem4GSolutionsSection } from "@/components/modem4g-solutions-section"
import { Modem4GCTASection } from "@/components/modem4g-cta-section"

export default function Modem4GPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Planos", href: "/planos" },
            { label: "Modem 4G" }
          ]} />
        </div>
        <Modem4GHeroSection />
        <Modem4GComboSection />
        <Modem4GEquipmentSection />
        <Modem4GHowToSection />
        <Modem4GBenefitsSection />
        <Modem4GDataManagementSection />
        <Modem4GFAQSection />
        <Modem4GSolutionsSection />
        <Modem4GCTASection />
      </main>
      <Footer />
    </div>
  )
}
