"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info } from "lucide-react"
import { zero303Config } from "@/data/0303-data"

export function Zero303ImportantInfoSection() {
  const { importantInfo, contact } = zero303Config

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 text-sm sm:text-base">Informações</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Informações Importantes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border border-gray-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">Termos e Condições</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {importantInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm">{info}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                Falar com Consultor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
