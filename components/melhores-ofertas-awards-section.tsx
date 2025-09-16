"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Phone, ArrowRight } from "lucide-react"

export function MelhoresOfertasAwardsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Opensignal Award */}
            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <Badge className="mb-4 bg-yellow-100 text-yellow-800 text-sm font-semibold">
                  5G GLOBAL WINNER 2024
                </Badge>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  Opensignal 5G Global Awards 2024
                </CardTitle>
                <p className="text-gray-700 text-sm">
                  Eleito o 5G mais rápido do mundo pelo prêmio OpenSignal
                </p>
              </CardHeader>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  WhatsApp
                </CardTitle>
                <p className="text-gray-700 text-sm mb-4">
                  Fale conosco pelo WhatsApp para contratar Fibra ou plano de celular
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold"
                  asChild
                >
                  <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                    Fale Conosco
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Portability */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <ArrowRight className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  Portabilidade
                </CardTitle>
                <p className="text-gray-700 text-sm mb-4">
                  Portabilidade Vivo Empresas, traga já seu número de celular! Saiba tudo de portabilidade para sua empresa e aproveite as melhores ofertas.
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold"
                  asChild
                >
                  <a href="/portabilidade">
                    Vem pra Vivo
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
