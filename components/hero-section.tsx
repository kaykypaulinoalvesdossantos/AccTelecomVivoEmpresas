"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Wifi, Smartphone, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Conecte sua empresa ao
                <span className="text-primary block">futuro digital</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Soluções completas em conectividade, tecnologia e inovação para impulsionar o crescimento do seu
                negócio.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de conhecer os planos da Vivo Empresas" target="_blank" rel="noopener noreferrer">
                  Ver Planos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de falar com um consultor da Vivo Empresas" target="_blank" rel="noopener noreferrer">
                  Falar com Consultor
                </a>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Internet Fibra</div>
                  <div className="text-sm text-muted-foreground">Até 1GB</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Smartphone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">Planos Móveis</div>
                  <div className="text-sm text-muted-foreground">5G Ilimitado</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Segurança</div>
                  <div className="text-sm text-muted-foreground">Proteção Total</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 flex items-center justify-center">
              <img
                src="/modern-business-professional-using-smartphone-and-.png"
                alt="Profissional usando tecnologia Vivo"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-2xl shadow-lg animate-bounce">
              <div className="text-sm font-semibold">5G</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-2xl shadow-lg animate-pulse">
              <div className="text-sm font-semibold">Fibra</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
