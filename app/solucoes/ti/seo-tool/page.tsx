import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import SeoToolHeroSection from "@/components/seo-tool-hero-section"
import SeoToolIntroSection from "@/components/seo-tool-intro-section"
import SeoToolBenefitsSection from "@/components/seo-tool-benefits-section"
import SeoToolPlansSection from "@/components/seo-tool-plans-section"
import SeoToolHowSection from "@/components/seo-tool-how-section"
import SeoToolFaqSection from "@/components/seo-tool-faq-section"
import SeoToolRelatedSection from "@/components/seo-tool-related-section"
import SeoToolCtaSection from "@/components/seo-tool-cta-section"

export default function SeoToolPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <SeoToolHeroSection />
        <SeoToolIntroSection />
        <SeoToolBenefitsSection />
        <SeoToolPlansSection />
        <SeoToolHowSection />
        <SeoToolFaqSection />
        <SeoToolRelatedSection />
        <SeoToolCtaSection />
      </main>
      <Footer />
    </>
  )
}
