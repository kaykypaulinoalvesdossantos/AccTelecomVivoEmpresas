"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Users, TrendingUp } from "lucide-react"

export function SolutionsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
                Soluções Digitais que{" "}
                <span className="bg-gradient-to-r from-pink-300 to-white bg-clip-text text-transparent">
                  Transformam
                </span>{" "}
                seu Negócio
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed text-pretty">
                Tecnologias avançadas e serviços especializados para acelerar o crescimento da sua empresa no mundo
                digital.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 font-semibold px-8" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de conhecer as soluções digitais da Vivo Empresas" target="_blank" rel="noopener noreferrer">
                  Conhecer Soluções
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-900 font-semibold px-8 bg-transparent"
                asChild
              >
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de falar com um especialista em soluções digitais" target="_blank" rel="noopener noreferrer">
                  Falar com Especialista
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-pink-300" />
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-purple-200">Disponibilidade</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-pink-300" />
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-sm text-purple-200">Empresas</div>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 mx-auto mb-2 text-pink-300" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-purple-200">Suporte</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-pink-300" />
                <div className="text-2xl font-bold">40%</div>
                <div className="text-sm text-purple-200">+ Produtividade</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/professional-business-team-using-smartphones-in-mo.png"
                alt="Equipe profissional utilizando soluções digitais"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
