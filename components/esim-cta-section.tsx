"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react"

export function ESimCTASection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para migrar para eSIM?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como o eSIM pode transformar a conectividade da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Ligue para nós
              </h3>
              <p className="text-white/90 mb-4">
                Fale diretamente com nossos especialistas
              </p>
              <Button className="bg-white text-[#660099] hover:bg-white/90 font-semibold px-6 py-2 rounded-lg">
                0800 777 0000
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Chat online
              </h3>
              <p className="text-white/90 mb-4">
                Tire suas dúvidas em tempo real
              </p>
              <Button className="bg-white text-[#660099] hover:bg-white/90 font-semibold px-6 py-2 rounded-lg">
                Iniciar chat
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-1">Ativação em 24h</h4>
            <p className="text-white/80 text-sm">Processo rápido e seguro</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-1">Cobertura Nacional</h4>
            <p className="text-white/80 text-sm">Disponível em todo Brasil</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-1">Suporte 24/7</h4>
            <p className="text-white/80 text-sm">Assistência completa</p>
          </div>
        </div>
      </div>
    </section>
  )
}
