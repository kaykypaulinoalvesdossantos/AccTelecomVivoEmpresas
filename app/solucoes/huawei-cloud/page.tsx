import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { HuaweiHeroSection } from "@/components/huawei-hero-section"
import { HuaweiOverviewSection } from "@/components/huawei-overview-section"
import { HuaweiBenefitsSection } from "@/components/huawei-benefits-section"
import { HuaweiResourcesSection } from "@/components/huawei-resources-section"
import { HuaweiDifferentialsSection } from "@/components/huawei-differentials-section"
import { HuaweiFAQSection } from "@/components/huawei-faq-section"
import { HuaweiCTASection } from "@/components/huawei-cta-section"

export default function HuaweiCloudPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Soluções Digitais", href: "/solucoes" },
              { label: "Huawei Cloud" }
            ]}
          />
        </div>
        <HuaweiHeroSection />
        <HuaweiOverviewSection />
        <HuaweiBenefitsSection />
        <HuaweiResourcesSection />
        <HuaweiDifferentialsSection />
        <HuaweiFAQSection />
        <HuaweiCTASection />
      </main>
      <Footer />
    </div>
  )
}
