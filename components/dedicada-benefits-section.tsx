"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, FileSearch, Lock } from "lucide-react"
import { dedicadaConfig } from "@/data/dedicada-data"

export function DedicadaBenefitsSection() {
  const { exclusiveConnection, tailoredSolutions, contact } = dedicadaConfig

  const iconMap = {
    Bell: Bell,
    FileSearch: FileSearch,
    Lock: Lock
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Conexão Exclusiva */}
        <div className="mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  {exclusiveConnection.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {exclusiveConnection.description}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {exclusiveConnection.benefits.map((benefit, index) => {
                  const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
                  return (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{benefit.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-colors"
              >
                {exclusiveConnection.button}
              </a>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Lock className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Segurança Total</h3>
                    <p className="text-gray-600">Proteção avançada para seus dados empresariais com conexões criptografadas e monitoramento 24/7.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soluções Personalizadas */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  {tailoredSolutions.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {tailoredSolutions.description}
                </p>
              </div>

              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-colors"
              >
                {tailoredSolutions.button}
              </a>
            </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Bell className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Suporte Especializado</h3>
                    <p className="text-gray-600">Nossa equipe técnica está disponível 24/7 para garantir que sua empresa tenha sempre a melhor conectividade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
