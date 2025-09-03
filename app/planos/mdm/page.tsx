import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { MDMHeroSection } from "@/components/mdm-hero-section"
import { MDMPlansSection } from "@/components/mdm-plans-section"
import { MDMActivationSection } from "@/components/mdm-activation-section"
import { MDMBenefitsSection } from "@/components/mdm-benefits-section"
import { MDMTargetSection } from "@/components/mdm-target-section"
import { MDMLGPDSection } from "@/components/mdm-lgpd-section"
import { MDMFAQSection } from "@/components/mdm-faq-section"
import { MDMSolutionsSection } from "@/components/mdm-solutions-section"

export default function MDMPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Planos", href: "/planos" },
            { label: "MDM" }
          ]} />
        </div>
        <MDMHeroSection />
        <MDMPlansSection />
        <MDMActivationSection />
        <MDMBenefitsSection />
        <MDMTargetSection />
        <MDMLGPDSection />
        <MDMFAQSection />
        <MDMSolutionsSection />
      </main>
      <Footer />
    </div>
  )
}
