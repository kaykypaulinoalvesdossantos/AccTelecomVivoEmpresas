import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { M2MHeroSection } from "@/components/m2m-hero-section"
import { M2MPlansSection } from "@/components/m2m-plans-section"
import { M2MBenefitsSection } from "@/components/m2m-benefits-section"
import { M2MKitePlatformSection } from "@/components/m2m-kite-platform-section"
import { M2MServicesSection } from "@/components/m2m-services-section"
import { M2MFAQSection } from "@/components/m2m-faq-section"
import { M2MCTASection } from "@/components/m2m-cta-section"

export default function M2MPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Planos", href: "/planos" },
            { label: "M2M" }
          ]} />
        </div>
        <M2MHeroSection />
        <M2MPlansSection />
        <M2MBenefitsSection />
        <M2MKitePlatformSection />
        <M2MServicesSection />
        <M2MFAQSection />
        <M2MCTASection />
      </main>
      <Footer />
    </div>
  )
}
