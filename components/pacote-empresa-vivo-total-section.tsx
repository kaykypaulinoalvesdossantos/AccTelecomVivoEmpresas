"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Smartphone, Phone, Check } from "lucide-react"
import { pacoteEmpresaConfig } from "@/data/pacote-empresa-data"

export function PacoteEmpresaVivoTotalSection() {
  const { vivoTotal, beneficios } = pacoteEmpresaConfig

  return (
    <>
      {/* Seção de Benefícios */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
              {beneficios.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {beneficios.description}
            </p>
          </div>
        </div>
      </section>

      {/* Banner Vivo Total */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-pink-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm sm:text-base">
              Solução Completa
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
              {vivoTotal.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-purple-100 mb-8 lg:mb-12 max-w-3xl mx-auto">
              {vivoTotal.subtitle}
            </p>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
              <CardContent className="p-6 sm:p-8">
                <p className="text-base sm:text-lg text-purple-100 mb-6">
                  {vivoTotal.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vivoTotal.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Icons */}
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm text-purple-100">Internet</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm text-purple-100">Móvel</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm text-purple-100">Telefone</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
