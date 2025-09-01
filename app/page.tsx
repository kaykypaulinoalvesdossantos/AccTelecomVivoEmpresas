import { Header } from "@/components/header"
import { ProfessionalHeroSection } from "@/components/professional-hero-section"
import { FeaturedSolutions } from "@/components/featured-solutions"
import { PlansShowcase } from "@/components/plans-showcase"
import { BusinessBenefits } from "@/components/business-benefits"
import { TechnologyPartners } from "@/components/technology-partners"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CallToActionSection } from "@/components/call-to-action-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProfessionalHeroSection />
        <FeaturedSolutions />
        <PlansShowcase />
        <BusinessBenefits />
        <TechnologyPartners />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}
