import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegistroDominioHeroSection } from "@/components/registro-dominio-hero-section"
import { RegistroDominioWhySection } from "@/components/registro-dominio-why-section"
import { RegistroDominioPlansSection } from "@/components/registro-dominio-plans-section"
import { RegistroDominioChooseSection } from "@/components/registro-dominio-choose-section"
import { RegistroDominioTipsSection } from "@/components/registro-dominio-tips-section"
import { RegistroDominioFaqSection } from "@/components/registro-dominio-faq-section"
import { RegistroDominioRelatedSection } from "@/components/registro-dominio-related-section"
import { RegistroDominioCtaSection } from "@/components/registro-dominio-cta-section"

export default function RegistroDominioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <RegistroDominioHeroSection />
        <RegistroDominioWhySection />
        <RegistroDominioPlansSection />
        <RegistroDominioChooseSection />
        <RegistroDominioTipsSection />
        <RegistroDominioFaqSection />
        <RegistroDominioRelatedSection />
        <RegistroDominioCtaSection />
      </main>
      <Footer />
    </>
  )
}
