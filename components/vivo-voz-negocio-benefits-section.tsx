"use client"

import { TrendingUp, DollarSign, Globe, BarChart, Shield, Headphones } from "lucide-react"
import { vivoVozNegocioConfig } from "@/data/vivo-voz-negocio-data"

export function VivoVozNegocioBenefitsSection() {
  const { benefits } = vivoVozNegocioConfig

  const IconComponent = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp": return TrendingUp
      case "DollarSign": return DollarSign
      case "Globe": return Globe
      case "BarChart": return BarChart
      case "Shield": return Shield
      case "Headphones": return Headphones
      default: return TrendingUp
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Benefícios do Vivo Voz Negócio
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme a comunicação da sua empresa com resultados mensuráveis
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = IconComponent(benefit.icon)
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
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ROI Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            ROI Comprovado
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-purple-100 mb-6 max-w-3xl mx-auto">
            Empresas que implementaram o Vivo Voz Negócio reportaram resultados significativos 
            em produtividade e redução de custos operacionais.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">40%</div>
              <div className="text-purple-100 text-sm sm:text-base">redução de custos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">60%</div>
              <div className="text-purple-100 text-sm sm:text-base">aumento de produtividade</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">90%</div>
              <div className="text-purple-100 text-sm sm:text-base">satisfação dos clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
