"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users, ArrowRight } from "lucide-react"

export function Microsoft365VolumeDiscountSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Users className="w-4 h-4 mr-2" />
            Desconto Volume
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            TI - Microsoft 365 – Desconto Volume
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Política de redução de comissionamento na Plataforma Digital para casos a partir de 1 licença.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Todas as licenças mensais Microsoft estão elegíveis
              </h3>
              <p className="text-lg text-gray-600">
                Todas as licenças mensais Microsoft estão elegíveis e disponíveis na política de desconto por volume.
              </p>
            </div>

            <div className="bg-yellow-100 border-2 border-yellow-300 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h4 className="text-lg font-bold text-gray-900">IMPORTANTE!</h4>
              </div>
              <p className="text-gray-700 font-semibold">
                Redução na quantidade mínima de licenças!
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Informações Importantes
                  </h3>
                  <p className="text-gray-600">
                    Política de desconto por volume
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-400">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span className="text-gray-700 font-semibold">Mínimo de <span className="bg-yellow-200 px-2 py-1 rounded">01 Licença</span></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span className="text-gray-700">Licença Solo na Plataforma Digital</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span className="text-gray-700">Utilizar o fluxo de redução de comissionamento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Box */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-6 h-6" />
            <h3 className="text-xl font-bold">IMPORTANTE</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <span>Mínimo de <span className="bg-yellow-200 text-gray-900 px-2 py-1 rounded font-semibold">01 Licença</span></span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <span>Licença Solo na Plataforma Digital</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <span>Utilizar o fluxo de redução de comissionamento</span>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white rounded-2xl p-6 border-2 border-gray-100">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
              <span className="text-white font-bold text-sm">🇧🇷</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Disponível em todo o Brasil</h3>
              <p className="text-gray-600">Cobertura nacional</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quer saber mais sobre desconto por volume?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe pode explicar todos os detalhes da política de desconto por volume
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de saber mais sobre desconto por volume Microsoft 365', '_blank')}>
                Falar com Especialista
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de agendar uma consultoria sobre desconto volume Microsoft 365', '_blank')}>
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-gray-400">Material de uso interno</p>
        </div>
      </div>
    </section>
  )
}
