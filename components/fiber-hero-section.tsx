"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wifi, Zap, Shield, Users, Router } from "lucide-react"
import { fiberConfig } from "@/data/fiber-data"

export function FiberHeroSection() {
  const { hero, contact } = fiberConfig

  const iconMap = {
    Wifi: Wifi,
    Shield: Shield,
    Users: Users,
    Zap: Zap,
    Router: Router
  }

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm sm:text-base">
                <Zap className="w-4 h-4 mr-2" />
                {hero.badge}
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {hero.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-white">
                  {hero.subtitle}
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-purple-100 leading-relaxed">
                {hero.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              {hero.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-purple-200">{feature.label}</div>
                      <div className="text-sm sm:text-base lg:text-lg font-semibold truncate">{feature.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-purple-900 hover:bg-purple-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-colors text-center"
              >
                {hero.primaryButton}
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent"
                asChild
              >
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de falar com um especialista sobre Vivo Fibra" target="_blank" rel="noopener noreferrer">
                  {hero.secondaryButton}
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Router className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Vivo Fibra Empresarial</h3>
                    <p className="text-purple-200 text-sm sm:text-base">A internet mais rápida do Brasil</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                    <div className="bg-white/10 rounded-xl p-3 sm:p-4">
                      <div className="text-lg sm:text-2xl font-bold text-pink-300">99.5%</div>
                      <div className="text-xs sm:text-sm text-purple-200">Disponibilidade</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 sm:p-4">
                      <div className="text-lg sm:text-2xl font-bold text-pink-300">Wi-Fi 6</div>
                      <div className="text-xs sm:text-sm text-purple-200">Tecnologia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-400/30 to-purple-500/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tl from-purple-400/30 to-pink-500/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}