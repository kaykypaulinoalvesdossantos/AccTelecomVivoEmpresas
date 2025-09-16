"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Phone, BarChart3, MapPin } from "lucide-react"
import { vivoGestaoData } from "@/data/vivo-gestao-data"

const iconMap = {
  Shield,
  Phone,
  BarChart3,
  MapPin
}

export function VivoGestaoBenefitsSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-[#EB3C7D]/10 to-[#660099]/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Benefícios do Vivo Gestão
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra como o Vivo Gestão pode transformar a gestão de dispositivos móveis da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vivoGestaoData.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                  <div className="bg-gradient-to-r from-[#660099] via-[#8B00FF] to-[#EB3C7D] rounded-xl h-full w-full"></div>
                </div>
                
                <CardContent className="relative bg-white rounded-xl p-6 h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Entre em contato conosco e descubra como o Vivo Gestão pode beneficiar sua empresa
            </p>
            <a 
              href="https://wa.me/551123629665" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#660099] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Solicitar Proposta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}