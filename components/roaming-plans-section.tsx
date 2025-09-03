"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Search, Globe } from "lucide-react"

export function RoamingPlansSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Conheça os planos do Vivo Travel
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua viagem internacional
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="cliente" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="cliente" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                Já sou cliente
              </TabsTrigger>
              <TabsTrigger 
                value="novo" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                Quero ser cliente
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cliente">
              <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        Consulte seu país de destino
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Verifique operadoras parceiras, serviços disponíveis e mais informações 
                        que podem ajudar na viagem.
                      </p>
                      <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                        <Search className="w-4 h-4 mr-2" />
                        Consultar país
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="novo">
              <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        Seja cliente Vivo e aproveite o Vivo Travel
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Contrate um plano Vivo e tenha acesso ao Vivo Travel para suas viagens internacionais. 
                        Conectividade global com a qualidade Vivo.
                      </p>
                      <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                        Contratar Plano
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
