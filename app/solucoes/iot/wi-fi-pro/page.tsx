import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WifiProHeroSection } from "@/components/wifi-pro-hero-section"
import { WifiProBenefitsSection } from "@/components/wifi-pro-benefits-section"
import { WifiProFeaturesSection } from "@/components/wifi-pro-features-section"
import { WifiProSalesSection } from "@/components/wifi-pro-sales-section"
import { WifiProConnectSection } from "@/components/wifi-pro-connect-section"
import { WifiProFaqSection } from "@/components/wifi-pro-faq-section"
import { WifiProRelatedSection } from "@/components/wifi-pro-related-section"
import { WifiProCtaSection } from "@/components/wifi-pro-cta-section"

export default function WifiProPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <WifiProHeroSection />
        <WifiProBenefitsSection />
        <WifiProFeaturesSection />
        <WifiProSalesSection />
        <WifiProConnectSection />
        <WifiProFaqSection />
        <WifiProRelatedSection />
        <WifiProCtaSection />
      </main>
      <Footer />
    </>
  )
}
