"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, HelpCircle } from "lucide-react"

export function RoamingRelatedSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                GUIA VIVO TRAVEL
              </h3>
              <p className="text-gray-600 mb-6">
                Baixe nosso guia e esteja preparado para a sua viagem
              </p>
              <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-2 rounded-lg">
                Confira
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                AJUDA
              </h3>
              <p className="text-gray-600 mb-6">
                Tire suas dúvidas sobre os serviços Vivo Empresas
              </p>
              <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-2 rounded-lg">
                Consulte
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Legal Information */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-xl p-6 border border-[#660099]/20 max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Informações importantes:</strong> As tarifas de roaming internacional incluem 
              ligações, dados e SMS. Consulte as tarifas específicas do seu destino antes de viajar. 
              O Vivo Travel está sujeito à disponibilidade de rede local e parcerias com operadoras internacionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
