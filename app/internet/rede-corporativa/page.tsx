import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { FiberHeroSection } from "@/components/fiber-hero-section"
import { DetailedFiberPlans } from "@/components/detailed-fiber-plans"
import { FiberBenefits } from "@/components/fiber-benefits"
import { FiberWiFi6Section } from "@/components/fiber-wifi6-section"
import { FiberFAQSection } from "@/components/fiber-faq-section"

export default function RedeCorporativaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" }, 
              { label: "Internet", href: "/internet" }, 
              { label: "Rede Corporativa" }
            ]}
          />
        </div>
        <FiberHeroSection />
        <DetailedFiberPlans />
        <FiberBenefits />
        <FiberWiFi6Section />
        <FiberFAQSection />
      </main>
      <Footer />
    </div>
  )
}
