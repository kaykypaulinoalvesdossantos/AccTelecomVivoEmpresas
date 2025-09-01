import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { SolutionsHeroSection } from "@/components/solutions-hero-section"
import { DetailedSolutionsSection } from "@/components/detailed-solutions-section"
import { SolutionsBenefits } from "@/components/solutions-benefits"
import { SolutionsTestimonials } from "@/components/solutions-testimonials"
import { SolutionsFAQ } from "@/components/solutions-faq"

export default function SolucoesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Soluções Digitais" }]} />
        </div>
        <SolutionsHeroSection />
        <DetailedSolutionsSection />
        <SolutionsBenefits />
        <SolutionsTestimonials />
        <SolutionsFAQ />
      </main>
      <Footer />
    </div>
  )
}
