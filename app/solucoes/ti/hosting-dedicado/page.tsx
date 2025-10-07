import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HostingDedicadoHeroSection } from "@/components/hosting-dedicado-hero-section"
import { HostingDedicadoIntroSection } from "@/components/hosting-dedicado-intro-section"
import { HostingDedicadoBenefitsSection } from "@/components/hosting-dedicado-benefits-section"
import { HostingDedicadoWhyVivoSection } from "@/components/hosting-dedicado-why-vivo-section"
import { HostingDedicadoComponentsSection } from "@/components/hosting-dedicado-components-section"
import { HostingDedicadoSupportSection } from "@/components/hosting-dedicado-support-section"
import { HostingDedicadoFaqSection } from "@/components/hosting-dedicado-faq-section"
import { HostingDedicadoCtaSection } from "@/components/hosting-dedicado-cta-section"

export default function HostingDedicadoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HostingDedicadoHeroSection />
        <HostingDedicadoIntroSection />
        <HostingDedicadoBenefitsSection />
        <HostingDedicadoWhyVivoSection />
        <HostingDedicadoComponentsSection />
        <HostingDedicadoSupportSection />
        <HostingDedicadoFaqSection />
        <HostingDedicadoCtaSection />
      </main>
      <Footer />
    </>
  )
}
