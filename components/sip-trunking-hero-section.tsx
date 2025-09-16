"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, DollarSign, Headphones, Shield } from "lucide-react"
import { sipTrunkingConfig } from "@/data/sip-trunking-data"

export function SipTrunkingHeroSection() {
  const { hero, contact } = sipTrunkingConfig

  const IconComponent = (iconName: string) => {
    switch (iconName) {
      case "Phone": return Phone
      case "DollarSign": return DollarSign
      case "Headphones": return Headphones
      case "Shield": return Shield
      default: return Phone
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-3 md:space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm md:text-base mx-auto lg:mx-0">
                <Phone className="w-4 h-4 mr-2" />
                {hero.badge}
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {hero.title}
              </h1>
              <p className="text-base md:text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                {hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-purple-900 hover:bg-purple-50 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-colors"
              >
                {hero.primaryButton}
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white hover:bg-white/10 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-colors bg-transparent"
              >
                {hero.secondaryButton}
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {hero.stats.map((stat, index) => {
                  const Icon = IconComponent(stat.icon)
                  return (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                      <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
