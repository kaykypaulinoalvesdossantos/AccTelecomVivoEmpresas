import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HospedagemSiteHeroSection } from "@/components/hospedagem-site-hero-section"
import { HospedagemSiteIntroSection } from "@/components/hospedagem-site-intro-section"
import { HospedagemSitePlansSection } from "@/components/hospedagem-site-plans-section"
import { HospedagemSiteSecuritySection } from "@/components/hospedagem-site-security-section"
import { HospedagemSiteComparisonSection } from "@/components/hospedagem-site-comparison-section"
import { HospedagemSiteFaqSection } from "@/components/hospedagem-site-faq-section"
import { HospedagemSiteRelatedSection } from "@/components/hospedagem-site-related-section"
import { HospedagemSiteCtaSection } from "@/components/hospedagem-site-cta-section"

export default function HospedagemSitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <HospedagemSiteHeroSection />
        <HospedagemSiteIntroSection />
        <HospedagemSitePlansSection />
        <HospedagemSiteSecuritySection />
        <HospedagemSiteComparisonSection />
        <HospedagemSiteFaqSection />
        <HospedagemSiteRelatedSection />
        <HospedagemSiteCtaSection />
      </main>
      <Footer />
    </>
  )
}
