import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { AzureHeroSection } from "@/components/azure-hero-section"
import { AzureOverviewSection } from "@/components/azure-overview-section"
import { AzureBenefitsSection } from "@/components/azure-benefits-section"
import { AzureSolutionsSection } from "@/components/azure-solutions-section"
import { AzureFAQSection } from "@/components/azure-faq-section"
import { AzureGlobalSection } from "@/components/azure-global-section"
import { AzureWhyVivoSection } from "@/components/azure-why-vivo-section"
import { AzureCTASection } from "@/components/azure-cta-section"

export default function AzureCloudPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Soluções Digitais", href: "/solucoes" },
              { label: "Microsoft Azure Cloud" }
            ]}
          />
        </div>
        <AzureHeroSection />
        <AzureOverviewSection />
        <AzureBenefitsSection />
        <AzureSolutionsSection />
        <AzureFAQSection />
        <AzureGlobalSection />
        <AzureWhyVivoSection />
        <AzureCTASection />
      </main>
      <Footer />
    </div>
  )
}
