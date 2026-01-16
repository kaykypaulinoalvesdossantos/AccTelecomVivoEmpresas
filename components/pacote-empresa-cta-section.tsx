"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone } from "lucide-react"
import { pacoteEmpresaConfig } from "@/data/pacote-empresa-data"

export function PacoteEmpresaCTASection() {
  const { finalCta, contact } = pacoteEmpresaConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-pink-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm sm:text-base">
            <Phone className="w-4 h-4 mr-2" />
            Fale Conosco
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
            {finalCta.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-purple-100 mb-8 lg:mb-12 max-w-3xl mx-auto">
            {finalCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/5511989150001?text=Olá! Gostaria de falar com um especialista sobre pacotes empresariais`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-900 hover:bg-purple-50 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-colors cursor-pointer"
            >
              {finalCta.primaryButton}
            </a>
            <a
              href={`https://wa.me/5511989150001?text=Olá! Gostaria de ver catálogo de pacotes`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white hover:bg-white/10 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-colors bg-transparent cursor-pointer"
            >
              {finalCta.secondaryButton}
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-purple-100">
              📞 Telefone: {contact.phone} | 💬 WhatsApp disponível 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
