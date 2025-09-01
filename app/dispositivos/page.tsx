import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { DevicesHeroSection } from "@/components/devices-hero-section"
import { DetailedDevicesSection } from "@/components/detailed-devices-section"
import { DevicesBenefits } from "@/components/devices-benefits"
import { DevicesTestimonials } from "@/components/devices-testimonials"
import { DevicesFAQ } from "@/components/devices-faq"

export default function DispositivosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Dispositivos" }]} />
        </div>
        <DevicesHeroSection />
        <DetailedDevicesSection />
        <DevicesBenefits />
        <DevicesTestimonials />
        <DevicesFAQ />
      </main>
      <Footer />
    </div>
  )
}
