import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { CloudPlusHeroSection } from "@/components/cloud-plus-hero-section"
import { CloudPlusOverviewSection } from "@/components/cloud-plus-overview-section"
import { CloudPlusBenefitsSection } from "@/components/cloud-plus-benefits-section"
import { CloudPlusResourcesSection } from "@/components/cloud-plus-resources-section"
import { CloudPlusContractingSection } from "@/components/cloud-plus-contracting-section"
import { CloudPlusConfigurationsSection } from "@/components/cloud-plus-configurations-section"
import { CloudPlusStorageSection } from "@/components/cloud-plus-storage-section"
import { CloudPlusPackagesSection } from "@/components/cloud-plus-packages-section"
import { CloudPlusWhyVivoSection } from "@/components/cloud-plus-why-vivo-section"
import { CloudPlusFAQSection } from "@/components/cloud-plus-faq-section"
import { CloudPlusCTASection } from "@/components/cloud-plus-cta-section"

export default function CloudPlusPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Soluções Digitais", href: "/solucoes" },
              { label: "Cloud Plus" }
            ]}
          />
        </div>
        <CloudPlusHeroSection />
        <CloudPlusOverviewSection />
        <CloudPlusBenefitsSection />
        <CloudPlusResourcesSection />
        <CloudPlusContractingSection />
        <CloudPlusConfigurationsSection />
        <CloudPlusStorageSection />
        <CloudPlusPackagesSection />
        <CloudPlusWhyVivoSection />
        <CloudPlusFAQSection />
        <CloudPlusCTASection />
      </main>
      <Footer />
    </div>
  )
}
