"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"
import { sateliteConfig } from "@/data/satelite-data"

export function SateliteLegalSection() {
  const { legalInfo } = sateliteConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Informações Importantes</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">{legalInfo.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Termos e Condições</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {legalInfo.content.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
