"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { dedicadaConfig } from "@/data/dedicada-data"

export function DedicadaFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
  const { faqs, lanToLanFaqs } = dedicadaConfig

  // Filtrar FAQs por categoria
  const faqsDedicada = faqs.filter(faq => faq.category === "dedicada")
  const faqsLanToLan = lanToLanFaqs.filter(faq => faq.category === "lan-to-lan")

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Dúvidas Frequentes</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Internet Dedicada e LAN-to-LAN: o que são e mais dúvidas</h2>
        </div>

        <Tabs defaultValue="dedicada" className="mb-12 lg:mb-16">
          <TabsList className="grid w-full grid-cols-2 max-w-md sm:max-w-lg mx-auto mb-8 sm:mb-12">
            <TabsTrigger value="dedicada" className="text-xs sm:text-sm">Internet Dedicada</TabsTrigger>
            <TabsTrigger value="lan-to-lan" className="text-xs sm:text-sm">LAN-to-LAN</TabsTrigger>
          </TabsList>

          <TabsContent value="dedicada" className="space-y-4 sm:space-y-6">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Internet Dedicada: principais dúvidas</h3>
            </div>
            {faqsDedicada.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <button
                    className="w-full text-left flex items-center justify-between"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="lan-to-lan" className="space-y-4 sm:space-y-6">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">LAN-to-LAN: principais dúvidas</h3>
            </div>
            {faqsLanToLan.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <button
                    className="w-full text-left flex items-center justify-between"
                    onClick={() => setOpenFAQ(openFAQ === index + 100 ? null : index + 100)}
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openFAQ === index + 100 ? (
                      <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index + 100 && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
