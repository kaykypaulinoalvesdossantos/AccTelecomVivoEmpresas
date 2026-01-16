"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronUp, Phone, MessageCircle, Users } from "lucide-react"
import { useState } from "react"
import { fiberConfig } from "@/data/fiber-data"

export function FiberFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
  const { faqs, formasContratacao, speedClaim, contact } = fiberConfig

  const iconMap = {
    MessageCircle: MessageCircle,
    Users: Users,
    Phone: Phone
  }

  // Filtrar FAQs por categoria
  const faqsProdutos = faqs.filter(faq => faq.category === "produtos")
  const faqsWifi = faqs.filter(faq => faq.category === "wifi")
  const faqsValoriza = faqs.filter(faq => faq.category === "valoriza")

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Dúvidas Frequentes</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Principais dúvidas</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre a Vivo Fibra Empresarial e encontre a solução ideal para sua empresa.
          </p>
        </div>

        <Tabs defaultValue="produtos" className="mb-12 lg:mb-16">
          <TabsList className="grid w-full grid-cols-3 max-w-md sm:max-w-lg mx-auto mb-8 sm:mb-12">
            <TabsTrigger value="produtos" className="text-xs sm:text-sm">Produtos e Vantagens</TabsTrigger>
            <TabsTrigger value="wifi" className="text-xs sm:text-sm">Wi-Fi</TabsTrigger>
            <TabsTrigger value="valoriza" className="text-xs sm:text-sm">Vivo Valoriza</TabsTrigger>
          </TabsList>

          <TabsContent value="produtos" className="space-y-4 sm:space-y-6">
            {faqsProdutos.map((faq, index) => (
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
            <div className="text-center">
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm sm:text-base">
                Ver mais
              </button>
            </div>
          </TabsContent>

          <TabsContent value="wifi" className="space-y-4 sm:space-y-6">
            {faqsWifi.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <button
                    className="w-full text-left flex items-center justify-between"
                    onClick={() => setOpenFAQ(openFAQ === index + 10 ? null : index + 10)}
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openFAQ === index + 10 ? (
                      <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index + 10 && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="valoriza" className="space-y-4 sm:space-y-6">
            {faqsValoriza.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <button
                    className="w-full text-left flex items-center justify-between"
                    onClick={() => setOpenFAQ(openFAQ === index + 20 ? null : index + 20)}
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openFAQ === index + 20 ? (
                      <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index + 20 && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Formas de Contratação */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Diversas formas para você ter sua Internet Vivo Fibra</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
          {formasContratacao.map((forma, index) => {
            const IconComponent = iconMap[forma.icon as keyof typeof iconMap]
            return (
              <Card key={index} className="text-center p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-r ${forma.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{forma.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">{forma.description}</p>
                  {forma.link && (
                    <a
                      href={`${forma.link}?text=Olá! Gostaria de contratação via WhatsApp`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
                    >
                      Abrir WhatsApp
                    </a>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Speed Claim */}
        <div className="text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{speedClaim.title}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            {speedClaim.subtitle}
          </p>
        </div>
      </div>
    </section >
  )
}