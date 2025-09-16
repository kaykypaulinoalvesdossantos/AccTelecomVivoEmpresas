"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Network } from "lucide-react"
import { dedicadaConfig } from "@/data/dedicada-data"

export function DedicadaPlansSection() {
  const { plans, contact } = dedicadaConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Planos Empresariais</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Conheça os planos Vivo de Link Dedicado:</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Links dedicados com velocidade simétrica garantida e SLA premium para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.dedicada.map((plan, index) => (
            <div key={plan.id} className="relative">
              {plan.popular && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-white border border-purple-200 text-purple-600 px-2 py-1 text-xs font-semibold shadow-sm">
                    Mais Contratado
                  </Badge>
                </div>
              )}
              
              <Card className="relative transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white border border-gray-200">
                <CardHeader className="text-center pb-4 pt-6 sm:pt-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Network className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{plan.description}</CardDescription>

                  <div className="space-y-2">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600">{plan.speed}</div>
                    <div className="text-sm sm:text-base text-gray-600">Simétrico</div>
                    <div className="space-y-1">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                        {plan.price}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {plan.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start text-xs sm:text-sm">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2 sm:space-y-3">
                    <Button
                      className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" : "bg-purple-600 hover:bg-purple-700"} text-white`}
                      asChild
                    >
                      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                        {plan.button}
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full text-xs sm:text-sm"
                      asChild
                    >
                      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                        Mais detalhes
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-center text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Precisa de ajuda?</h3>
              <p className="text-white/90">(11) 2362-9665</p>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-[#660099] hover:bg-white/95 font-semibold px-8 py-3 shadow-lg border-2 border-white"
              asChild
            >
              <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            * Preços podem variar conforme localização e disponibilidade técnica.
          </p>
        </div>
      </div>
    </section>
  )
}
