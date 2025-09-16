import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { SipTrunkingHeroSection } from "@/components/sip-trunking-hero-section"
import { SipTrunkingOverviewSection } from "@/components/sip-trunking-overview-section"
import { SipTrunkingChamadaIdentificadaSection } from "@/components/sip-trunking-chamada-identificada-section"
import { SipTrunkingOferta2PSection } from "@/components/sip-trunking-oferta-2p-section"
import { SipTrunkingConversorR2Section } from "@/components/sip-trunking-conversor-r2-section"
import { SipTrunkingCondicoesGeraisSection } from "@/components/sip-trunking-condicoes-gerais-section"
import { SipTrunkingTargetSection } from "@/components/sip-trunking-target-section"
import { SipTrunkingBenefitsSection } from "@/components/sip-trunking-benefits-section"
import { SipTrunkingSecuritySection } from "@/components/sip-trunking-security-section"
import { SipTrunkingFAQSection } from "@/components/sip-trunking-faq-section"
import { SipTrunkingCTASection } from "@/components/sip-trunking-cta-section"

export default function SipTrunkingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Voz e Colaboração", href: "/voz-colaboracao" },
            { label: "SIP Trunking", href: "/voz-colaboracao/sip-trunking" },
          ]}
        />
      </div>

      <SipTrunkingHeroSection />
      <SipTrunkingOverviewSection />
      <SipTrunkingChamadaIdentificadaSection />
      <SipTrunkingOferta2PSection />
      <SipTrunkingConversorR2Section />
      <SipTrunkingCondicoesGeraisSection />
      <SipTrunkingTargetSection />
      <SipTrunkingBenefitsSection />
      <SipTrunkingSecuritySection />
      <SipTrunkingFAQSection />
      <SipTrunkingCTASection />

      <Footer />
    </div>
  )
}
