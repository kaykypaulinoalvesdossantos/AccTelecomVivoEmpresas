import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmailProfissionalHeroSection } from "@/components/email-profissional-hero-section"
import { EmailProfissionalIntroSection } from "@/components/email-profissional-intro-section"
import { EmailProfissionalPlansSection } from "@/components/email-profissional-plans-section"
import { EmailProfissionalWhySection } from "@/components/email-profissional-why-section"
import { EmailProfissionalCompareSection } from "@/components/email-profissional-compare-section"
import { EmailProfissionalFeaturesSection } from "@/components/email-profissional-features-section"
import { EmailProfissionalHowSection } from "@/components/email-profissional-how-section"
import { EmailProfissionalAccessSection } from "@/components/email-profissional-access-section"
import { EmailProfissionalFaqSection } from "@/components/email-profissional-faq-section"
import { EmailProfissionalRelatedSection } from "@/components/email-profissional-related-section"
import { EmailProfissionalCtaSection } from "@/components/email-profissional-cta-section"

export default function EmailProfissionalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <EmailProfissionalHeroSection />
        <EmailProfissionalIntroSection />
        <EmailProfissionalPlansSection />
        <EmailProfissionalWhySection />
        <EmailProfissionalCompareSection />
        <EmailProfissionalFeaturesSection />
        <EmailProfissionalHowSection />
        <EmailProfissionalAccessSection />
        <EmailProfissionalFaqSection />
        <EmailProfissionalRelatedSection />
        <EmailProfissionalCtaSection />
      </main>
      <Footer />
    </>
  )
}
