import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { NumeroUnicoHeroSection } from "@/components/numero-unico-hero-section"
import { NumeroUnicoPlansSection } from "@/components/numero-unico-plans-section"
import { NumeroUnicoFacilidadesSection } from "@/components/numero-unico-facilidades-section"
import { NumeroUnicoImportantInfoSection } from "@/components/numero-unico-important-info-section"

export default function NumeroUnicoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Voz e Colaboração", href: "/voz-colaboracao" },
            { label: "Número Único", href: "/voz-colaboracao/numero-unico" },
          ]}
        />
      </div>

      <NumeroUnicoHeroSection />
      <NumeroUnicoPlansSection />
      <NumeroUnicoFacilidadesSection />
      <NumeroUnicoImportantInfoSection />

      <Footer />
    </div>
  )
}
