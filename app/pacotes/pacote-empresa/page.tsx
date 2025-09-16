import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { PacoteEmpresaHeroSection } from "@/components/pacote-empresa-hero-section"
import { PacoteEmpresaOfertasSection } from "@/components/pacote-empresa-ofertas-section"
import { PacoteEmpresaOfertasAdicionaisSection } from "@/components/pacote-empresa-ofertas-adicionais-section"
import { PacoteEmpresaVivoTotalSection } from "@/components/pacote-empresa-vivo-total-section"
import { PacoteEmpresaFAQSection } from "@/components/pacote-empresa-faq-section"
import { PacoteEmpresaDicionarioSection } from "@/components/pacote-empresa-dicionario-section"
import { PacoteEmpresaCTASection } from "@/components/pacote-empresa-cta-section"

export default function PacoteEmpresaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Pacotes", href: "/pacotes" },
            { label: "Pacote para sua empresa", href: "/pacotes/pacote-empresa" },
          ]}
        />
      </div>

      <PacoteEmpresaHeroSection />
      <PacoteEmpresaOfertasSection />
      <PacoteEmpresaOfertasAdicionaisSection />
      <PacoteEmpresaVivoTotalSection />
      <PacoteEmpresaFAQSection />
      <PacoteEmpresaDicionarioSection />
      <PacoteEmpresaCTASection />

      <Footer />
    </div>
  )
}
