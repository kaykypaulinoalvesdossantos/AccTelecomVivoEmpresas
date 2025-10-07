import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Microsoft365HeroSection } from "@/components/microsoft-365-hero-section"
import { Microsoft365OverviewSection } from "@/components/microsoft-365-overview-section"
import { Microsoft365FeaturesSection } from "@/components/microsoft-365-features-section"
import { Microsoft365PlansSection } from "@/components/microsoft-365-plans-section"
import { Microsoft365VolumeDiscountSection } from "@/components/microsoft-365-volume-discount-section"
import { Microsoft365BenefitsSection } from "@/components/microsoft-365-benefits-section"
import { Microsoft365PackagesSection } from "@/components/microsoft-365-packages-section"
import { Microsoft365FAQSection } from "@/components/microsoft-365-faq-section"
import { Microsoft365CTASection } from "@/components/microsoft-365-cta-section"

export default function Microsoft365Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Soluções Digitais", href: "/solucoes" },
              { label: "Microsoft 365" }
            ]}
          />
        </div>
        <Microsoft365HeroSection />
        <Microsoft365OverviewSection />
        <Microsoft365FeaturesSection />
        <Microsoft365PlansSection />
        <Microsoft365VolumeDiscountSection />
        <Microsoft365BenefitsSection />
        <Microsoft365PackagesSection />
        <Microsoft365FAQSection />
        <Microsoft365CTASection />
      </main>
      <Footer />
    </div>
  )
}