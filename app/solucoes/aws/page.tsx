import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { AWSHeroSection } from "@/components/aws-hero-section"
import { AWSOverviewSection } from "@/components/aws-overview-section"
import { AWSBenefitsSection } from "@/components/aws-benefits-section"
import { AWSResourcesSection } from "@/components/aws-resources-section"
import { AWSDifferentialsSection } from "@/components/aws-differentials-section"
import { AWSFAQSection } from "@/components/aws-faq-section"
import { AWSSolutionsSection } from "@/components/aws-solutions-section"
import { AWSCTASection } from "@/components/aws-cta-section"

export default function AWSPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
              { label: "Home", href: "/" },
            { label: "Soluções Digitais", href: "/solucoes" },
              { label: "AWS Cloud" }
            ]}
          />
        </div>
        <AWSHeroSection />
        <AWSOverviewSection />
        <AWSBenefitsSection />
        <AWSResourcesSection />
        <AWSDifferentialsSection />
        <AWSFAQSection />
        <AWSSolutionsSection />
        <AWSCTASection />
      </main>
      <Footer />
    </div>
  )
}
