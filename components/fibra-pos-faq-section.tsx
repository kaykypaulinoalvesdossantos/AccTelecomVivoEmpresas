"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { fibraPosConfig } from "@/data/fibra-pos-data"

export function FibraPosFAQSection() {
  const { faq, contact } = fibraPosConfig
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Suporte</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">{faq.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12 lg:mb-16">
          {faq.questions.map((item, index) => (
            <Card key={index} className="border border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-left text-base sm:text-lg font-medium text-gray-900">
                    {item.question}
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
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Ainda tem dúvidas?</h3>
              <p className="text-gray-600 mb-6">
                Nossa equipe de especialistas está pronta para ajudar você a escolher o melhor pacote Fibra + Pós.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Falar com Especialista
                </a>
                <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                  Ligar {contact.phone}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
