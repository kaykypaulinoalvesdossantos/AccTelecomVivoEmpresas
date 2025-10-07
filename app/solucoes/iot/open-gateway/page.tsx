import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OpenGatewayHeroSection } from "@/components/open-gateway-hero-section"
import { OpenGatewayIntroSection } from "@/components/open-gateway-intro-section"
import { OpenGatewayOffersSection } from "@/components/open-gateway-offers-section"
import { OpenGatewayBenefitsSection } from "@/components/open-gateway-benefits-section"
import { OpenGatewayRelatedSection } from "@/components/open-gateway-related-section"
import { OpenGatewayCtaSection } from "@/components/open-gateway-cta-section"

export default function OpenGatewayPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <OpenGatewayHeroSection />
        <OpenGatewayIntroSection />
        <OpenGatewayOffersSection />
        <OpenGatewayBenefitsSection />
        <OpenGatewayRelatedSection />
        <OpenGatewayCtaSection />
      </main>
      <Footer />
    </>
  )
}
