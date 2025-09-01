import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { Breadcrumb } from "@/components/breadcrumb"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Sobre" }]} />
          <AboutSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
