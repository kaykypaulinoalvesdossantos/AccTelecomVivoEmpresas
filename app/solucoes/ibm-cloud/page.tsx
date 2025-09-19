import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { IBMHeroSection } from "@/components/ibm-hero-section"
import { IBMOverviewSection } from "@/components/ibm-overview-section"
import { IBMDifferentialsSection } from "@/components/ibm-differentials-section"
import { IBMWhyVivoSection } from "@/components/ibm-why-vivo-section"
import { IBMFAQSection } from "@/components/ibm-faq-section"
import { IBMSolutionsSection } from "@/components/ibm-solutions-section"

export default function IBMCloudPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Soluções Digitais", href: "/solucoes" },
              { label: "IBM Cloud" }
            ]}
          />
        </div>
        <IBMHeroSection />
        <IBMOverviewSection />
        <IBMDifferentialsSection />
        <IBMWhyVivoSection />
        <IBMFAQSection />
        <IBMSolutionsSection />
      </main>
      <Footer />
    </div>
  )
}
