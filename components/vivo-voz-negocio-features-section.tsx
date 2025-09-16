"use client"

import { Phone, Mic, BarChart, Users, Smartphone, Shield } from "lucide-react"
import { vivoVozNegocioConfig } from "@/data/vivo-voz-negocio-data"

export function VivoVozNegocioFeaturesSection() {
  const { features } = vivoVozNegocioConfig

  const IconComponent = (iconName: string) => {
    switch (iconName) {
      case "Phone": return Phone
      case "Mic": return Mic
      case "BarChart": return BarChart
      case "Users": return Users
      case "Smartphone": return Smartphone
      case "Shield": return Shield
      default: return Phone
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Funcionalidades do Vivo Voz Negócio
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra todas as funcionalidades que fazem do Vivo Voz Negócio a solução ideal para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = IconComponent(feature.icon)
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
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Tecnologia de Ponta para sua Empresa
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-purple-100 mb-6 max-w-3xl mx-auto">
            Nossa central telefônica virtual utiliza a mais avançada tecnologia em nuvem, 
            garantindo qualidade HD, segurança total e disponibilidade 24/7.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">HD</div>
              <div className="text-purple-100 text-sm sm:text-base">qualidade de voz</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">SSL</div>
              <div className="text-purple-100 text-sm sm:text-base">criptografia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">API</div>
              <div className="text-purple-100 text-sm sm:text-base">integração total</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
