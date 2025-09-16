"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, MessageCircle } from "lucide-react"
import { sateliteConfig } from "@/data/satelite-data"

export function SateliteFAQSection() {
  const { faq, contact } = sateliteConfig

  const whatsappUrl = `${contact.whatsapp}?text=${encodeURIComponent(faq.whatsappMessage)}`

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Suporte</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">{faq.title}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {faq.subtitle}
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 shadow-lg">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{faq.title}</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                {faq.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  {faq.button}
                </a>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg"
                >
                  Ligar {contact.phone}
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-200">
                <p className="text-sm text-gray-500">
                  💬 WhatsApp disponível 24/7 | 📞 Telefone: {contact.phone}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
