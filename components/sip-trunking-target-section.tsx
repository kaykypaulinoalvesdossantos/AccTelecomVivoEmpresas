"use client"

import { Phone, Building, ArrowRight, CheckCircle } from "lucide-react"
import { sipTrunkingConfig } from "@/data/sip-trunking-data"

export function SipTrunkingTargetSection() {
  const { target } = sipTrunkingConfig

  const IconComponent = (iconName: string) => {
    switch (iconName) {
      case "Phone": return Phone
      case "Building": return Building
      case "ArrowRight": return ArrowRight
      case "CheckCircle": return CheckCircle
      default: return Phone
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {target.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {target.audiences.map((audience, index) => {
            const Icon = IconComponent(audience.icon)
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {audience.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {audience.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
