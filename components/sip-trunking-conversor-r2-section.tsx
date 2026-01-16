"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Info, ExternalLink } from "lucide-react"
import { sipTrunkingConfig } from "@/data/sip-trunking-data"

export function SipTrunkingConversorR2Section() {
  const { conversorR2, contact } = sipTrunkingConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm sm:text-base">Equipamento</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {conversorR2.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative transition-all duration-300 hover:shadow-2xl bg-white border border-gray-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Informações Importantes</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  {conversorR2.description}
                </p>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-blue-800 font-medium">{conversorR2.additionalInfo}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    Falar com Consultor
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
