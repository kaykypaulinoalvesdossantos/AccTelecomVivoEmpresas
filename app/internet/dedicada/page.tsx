import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { DedicadaHeroSection } from "@/components/dedicada-hero-section"
import { DedicadaOverviewSection } from "@/components/dedicada-overview-section"
import { DedicadaPlansSection } from "@/components/dedicada-plans-section"
import { DedicadaContactSection } from "@/components/dedicada-contact-section"
import { DedicadaBenefitsSection } from "@/components/dedicada-benefits-section"
import { DedicadaInstallationSection } from "@/components/dedicada-installation-section"
import { DedicadaFAQSection } from "@/components/dedicada-faq-section"
import { DedicadaCTASection } from "@/components/dedicada-cta-section"

export default function InternetDedicadaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Internet", href: "/internet" },
              { label: "Internet Dedicada" }
            ]}
          />
        </div>
        <DedicadaHeroSection />
        <DedicadaOverviewSection />
        <DedicadaPlansSection />
        <DedicadaContactSection />
        <DedicadaBenefitsSection />
        <DedicadaInstallationSection />
        <DedicadaFAQSection />
        <DedicadaCTASection />
      </main>
      <Footer />
    </div>
  )
}