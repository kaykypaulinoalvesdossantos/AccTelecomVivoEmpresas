"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PlansHeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Mais que um plano: benefícios para todos com Vivo Valoriza Empresas
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
            Confira aqui as melhores ofertas para sua empresa
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Conecte agora nossos ofertas e tenha mais conectividade para sua empresa. Escolha o plano ideal e tenha mais
            benefícios.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
              Ver Planos Móveis
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              Ver Internet Fibra
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
