import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { MicrosoftTeamsHeroSection } from "@/components/microsoft-teams-hero-section"
import { MicrosoftTeamsOverviewSection } from "@/components/microsoft-teams-overview-section"
import { MicrosoftTeamsPlansSection } from "@/components/microsoft-teams-plans-section"
import { MicrosoftTeamsFeaturesSection } from "@/components/microsoft-teams-features-section"
import { MicrosoftTeamsTargetSection } from "@/components/microsoft-teams-target-section"
import { MicrosoftTeamsWhyVivoSection } from "@/components/microsoft-teams-why-vivo-section"
import { MicrosoftTeamsFAQSection } from "@/components/microsoft-teams-faq-section"
import { MicrosoftTeamsCTASection } from "@/components/microsoft-teams-cta-section"

export default function MicrosoftTeamsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Soluções Digitais", href: "/solucoes" },
              { label: "Microsoft Teams" }
            ]}
          />
        </div>
        <MicrosoftTeamsHeroSection />
        <MicrosoftTeamsOverviewSection />
        <MicrosoftTeamsPlansSection />
        <MicrosoftTeamsFeaturesSection />
        <MicrosoftTeamsTargetSection />
        <MicrosoftTeamsWhyVivoSection />
        <MicrosoftTeamsFAQSection />
        <MicrosoftTeamsCTASection />
      </main>
      <Footer />
    </div>
  )
}

