import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { InternetHeroSection } from "@/components/internet-hero-section"
import { DetailedInternetPlans } from "@/components/detailed-internet-plans"
import { InternetBenefits } from "@/components/internet-benefits"
import { InternetTestimonials } from "@/components/internet-testimonials"
import { InternetFAQ } from "@/components/internet-faq"

export default function PlanosInternetPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Planos", href: "/planos" }, { label: "Internet Fibra" }]}
          />
        </div>
        <InternetHeroSection />
        <DetailedInternetPlans />
        <InternetBenefits />
        <InternetTestimonials />
        <InternetFAQ />
      </main>
      <Footer />
    </div>
  )
}
