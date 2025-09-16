"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Mail } from "lucide-react"

export function SobreEmpresaCTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Contato</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com as melhores soluções em telecomunicações
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border border-gray-200 shadow-xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900">Entre em Contato</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 text-sm mb-4">Fale conosco pelo WhatsApp</p>
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                    asChild
                  >
                    <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                      Conversar
                    </a>
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Telefone</h3>
                  <p className="text-gray-600 text-sm mb-4">Ligue para nós</p>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-600 hover:bg-blue-50"
                    asChild
                  >
                    <a href="tel:+551123629665">
                      (11) 2362-9665
                    </a>
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">E-mail</h3>
                  <p className="text-gray-600 text-sm mb-4">Envie-nos um e-mail</p>
                  <Button
                    variant="outline"
                    className="w-full border-purple-500 text-purple-600 hover:bg-purple-50"
                    asChild
                  >
                    <a href="mailto:empresas@vivo.com.br">
                      Enviar E-mail
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
