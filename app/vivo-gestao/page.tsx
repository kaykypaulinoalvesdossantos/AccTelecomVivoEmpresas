import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { VivoGestaoHeroSection } from "@/components/vivo-gestao-hero-section"
import { VivoGestaoFeaturesSection } from "@/components/vivo-gestao-features-section"
import { VivoGestaoBenefitsSection } from "@/components/vivo-gestao-benefits-section"
import { VivoGestaoFAQSection } from "@/components/vivo-gestao-faq-section"
import { VivoGestaoContactSection } from "@/components/vivo-gestao-contact-section"

export default function VivoGestaoPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Vivo Gestão" }
          ]} />
        </div>
        <VivoGestaoHeroSection />
        <VivoGestaoFeaturesSection />
        <VivoGestaoBenefitsSection />
        <VivoGestaoFAQSection />
        <VivoGestaoContactSection />
      </main>
      <Footer />
    </div>
  )
}
