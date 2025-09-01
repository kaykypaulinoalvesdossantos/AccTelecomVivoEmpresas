import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { MobileHeroSection } from "@/components/mobile-hero-section"
import { DetailedMobilePlans } from "@/components/detailed-mobile-plans"
import { MobileBenefits } from "@/components/mobile-benefits"
import { PortabilitySection } from "@/components/portability-section"
import { MobileFAQ } from "@/components/mobile-faq"
import { MobileTestimonials } from "@/components/mobile-testimonials"

export default function PlanosMoveisPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Planos", href: "/planos" }, { label: "Planos Móveis" }]}
          />
        </div>
        <MobileHeroSection />
        <DetailedMobilePlans />
        <MobileBenefits />
        <PortabilitySection />
        <MobileTestimonials />
        <MobileFAQ />
      </main>
      <Footer />
    </div>
  )
}
