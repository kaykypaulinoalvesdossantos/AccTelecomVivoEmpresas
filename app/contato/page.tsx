import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Fale Conosco" }]} />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
