import React from "react"
import { VivoGestaoHeroSection } from "@/components/vivo-gestao-hero-section"
import { VivoGestaoFeaturesSection } from "@/components/vivo-gestao-features-section"
import { VivoGestaoBenefitsSection } from "@/components/vivo-gestao-benefits-section"
import { VivoGestaoFAQSection } from "@/components/vivo-gestao-faq-section"
import { VivoGestaoContactSection } from "@/components/vivo-gestao-contact-section"

export default function VivoGestaoPage(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      <VivoGestaoHeroSection />
      <VivoGestaoFeaturesSection />
      <VivoGestaoBenefitsSection />
      <VivoGestaoFAQSection />
      <VivoGestaoContactSection />
    </div>
  )
}
