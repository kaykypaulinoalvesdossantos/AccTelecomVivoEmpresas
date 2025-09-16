import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { SobreEmpresaHeroSection } from "@/components/sobre-empresa-hero-section"
import { SobreEmpresaAboutSection } from "@/components/sobre-empresa-about-section"
import { SobreEmpresaValuesSection } from "@/components/sobre-empresa-values-section"
import { SobreEmpresaTeamSection } from "@/components/sobre-empresa-team-section"
import { SobreEmpresaCTASection } from "@/components/sobre-empresa-cta-section"

export default function SobreEmpresaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Sobre a Empresa", href: "/sobre" },
          ]}
        />
      </div>

      <SobreEmpresaHeroSection />
      <SobreEmpresaAboutSection />
      <SobreEmpresaValuesSection />
      <SobreEmpresaTeamSection />
      <SobreEmpresaCTASection />

      <Footer />
    </div>
  )
}