"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Wifi, ArrowRightLeft, Percent, HelpCircle } from "lucide-react"
import { dedicadaConfig } from "@/data/dedicada-data"

export function DedicadaOverviewSection() {
  const { overview } = dedicadaConfig

  const iconMap = {
    Settings: Settings,
    Wifi: Wifi,
    ArrowRightLeft: ArrowRightLeft,
    Percent: Percent,
    HelpCircle: HelpCircle
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {overview.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {overview.cards.map((card, index) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className="text-center p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-gray-50 to-white"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{card.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{card.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
