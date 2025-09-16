"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, CheckCircle } from "lucide-react"
import { sipTrunkingConfig } from "@/data/sip-trunking-data"

export function SipTrunkingCondicoesGeraisSection() {
  const { generalConditions, contact } = sipTrunkingConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-200 text-sm sm:text-base">Informações</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {generalConditions.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative transition-all duration-300 hover:shadow-2xl bg-white border border-gray-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">Termos e Condições</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {generalConditions.conditions.map((condition, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm">{condition}</span>
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
