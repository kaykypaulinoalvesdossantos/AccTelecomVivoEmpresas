import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ColocationHeroSection } from "@/components/colocation-hero-section"
import { ColocationIntroSection } from "@/components/colocation-intro-section"
import { ColocationBenefitsSection } from "@/components/colocation-benefits-section"
import { ColocationWhyVivoSection } from "@/components/colocation-why-vivo-section"
import { ColocationAvailabilitySection } from "@/components/colocation-availability-section"
import { ColocationCageSection } from "@/components/colocation-cage-section"
import { ColocationCtaSection } from "@/components/colocation-cta-section"

export default function ColocationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ColocationHeroSection />
        <ColocationIntroSection />
        <ColocationBenefitsSection />
        <ColocationWhyVivoSection />
        <ColocationAvailabilitySection />
        <ColocationCageSection />
        <ColocationCtaSection />
      </main>
      <Footer />
    </>
  )
}
