import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { MelhoresOfertasHeroSection } from "@/components/melhores-ofertas-hero-section"
import { MelhoresOfertasMobilePlansSection } from "@/components/melhores-ofertas-mobile-plans-section"
import { MelhoresOfertasSmartphonesSection } from "@/components/melhores-ofertas-smartphones-section"
import { MelhoresOfertasDigitalSolutionsSection } from "@/components/melhores-ofertas-digital-solutions-section"
import { MelhoresOfertasOtherServicesSection } from "@/components/melhores-ofertas-other-services-section"
import { MelhoresOfertasAwardsSection } from "@/components/melhores-ofertas-awards-section"

export default function MelhoresOfertasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Melhores Ofertas" }
            ]}
          />
        </div>
        <MelhoresOfertasHeroSection />
        <MelhoresOfertasMobilePlansSection />
        <MelhoresOfertasSmartphonesSection />
        <MelhoresOfertasDigitalSolutionsSection />
        <MelhoresOfertasOtherServicesSection />
        <MelhoresOfertasAwardsSection />
      </main>
      <Footer />
    </div>
  )
}
