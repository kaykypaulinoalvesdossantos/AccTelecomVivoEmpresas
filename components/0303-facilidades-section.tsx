"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, DollarSign } from "lucide-react"
import { zero303Config } from "@/data/0303-data"

export function Zero303FacilidadesSection() {
  const { facilidades, funcionalidades } = zero303Config

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Facilidades</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Facilidades e Funcionalidades
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Cards de Facilidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {facilidades.map((facilidade, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                    {facilidade.name === "Super" ? (
                      <Star className="w-8 h-8 text-white" />
                    ) : (
                      <DollarSign className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{facilidade.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">{facilidade.price}</div>
                  <div className="text-sm text-gray-600">por mês</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabela de Funcionalidades */}
          <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
              <div className="grid grid-cols-5 gap-4 text-center">
                <CardTitle className="text-white font-bold text-sm">Funcionalidade</CardTitle>
                <CardTitle className="text-white font-bold text-sm">Básica</CardTitle>
                <CardTitle className="text-white font-bold text-sm">Avançada</CardTitle>
                <CardTitle className="text-white font-bold text-sm">Super</CardTitle>
                <CardTitle className="text-white font-bold text-sm">URA</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {funcionalidades.map((funcionalidade, index) => (
                <div key={index} className={`grid grid-cols-5 gap-4 p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200 last:border-b-0 hover:bg-blue-50 transition-colors duration-200`}>
                  <div className="text-gray-800 font-medium text-sm leading-relaxed flex items-center">
                    {funcionalidade.name}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {funcionalidade.basica ? (
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <X className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {funcionalidade.avancada ? (
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <X className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {funcionalidade.super ? (
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <X className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {funcionalidade.ura ? (
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <X className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
