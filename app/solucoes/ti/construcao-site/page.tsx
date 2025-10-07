import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ConstrucaoSiteHeroSection from "@/components/construcao-site-hero-section"
import ConstrucaoSiteIntroSection from "@/components/construcao-site-intro-section"
import ConstrucaoSitePlansSection from "@/components/construcao-site-plans-section"
import ConstrucaoSiteTemplatesSection from "@/components/construcao-site-templates-section"
import ConstrucaoSiteFeaturesSection from "@/components/construcao-site-features-section"
import ConstrucaoSiteSocialSection from "@/components/construcao-site-social-section"
import ConstrucaoSiteHowSection from "@/components/construcao-site-how-section"
import ConstrucaoSiteFaqSection from "@/components/construcao-site-faq-section"
import ConstrucaoSiteRelatedSection from "@/components/construcao-site-related-section"
import ConstrucaoSiteCtaSection from "@/components/construcao-site-cta-section"

export default function ConstrucaoSitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <ConstrucaoSiteHeroSection />
        <ConstrucaoSiteIntroSection />
        <ConstrucaoSitePlansSection />
        <ConstrucaoSiteTemplatesSection />
        <ConstrucaoSiteFeaturesSection />
        <ConstrucaoSiteSocialSection />
        <ConstrucaoSiteHowSection />
        <ConstrucaoSiteFaqSection />
        <ConstrucaoSiteRelatedSection />
        <ConstrucaoSiteCtaSection />
      </main>
      <Footer />
    </>
  )
}
