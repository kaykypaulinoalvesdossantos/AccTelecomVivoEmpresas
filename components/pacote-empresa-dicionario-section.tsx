"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react"
import { pacoteEmpresaConfig } from "@/data/pacote-empresa-data"

export function PacoteEmpresaDicionarioSection() {
  const { dicionario } = pacoteEmpresaConfig
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">
            <BookOpen className="w-4 h-4 mr-2" />
            Glossário
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">{dicionario.title}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Entenda os termos técnicos e conceitos dos nossos serviços empresariais
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {dicionario.terms.map((term, index) => (
            <Card key={index} className="border border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-left text-base sm:text-lg font-medium text-gray-900">
                    {term.term}
                  </CardTitle>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </CardHeader>
              {openItems.includes(index) && (
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">{term.definition}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
