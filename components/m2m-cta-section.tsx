"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, ArrowRight } from "lucide-react"

export function M2MCTASection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Conheça mais sobre as soluções IoT Vivo Empresas
                  </h3>
                  <p className="text-white/90">
                    Descubra como a conectividade M2M pode transformar seu negócio
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-white text-[#660099] hover:bg-white/90 font-semibold px-8 py-3"
                asChild
              >
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de conhecer mais sobre soluções IoT Vivo Empresas" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 text-center text-white/80">
          <p className="text-sm">
            Para mais informações sobre soluções M2M e IoT, entre em contato com nossa equipe especializada
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">(11) 2362-9665</div>
              <p className="text-sm text-white/80">Central de Atendimento</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <p className="text-sm text-white/80">Suporte Técnico</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <p className="text-sm text-white/80">Cobertura Nacional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
