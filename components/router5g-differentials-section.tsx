"use client"

import React from "react"
import { CheckCircle } from "lucide-react"

export function Router5GDifferentialsSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gradient-to-br from-[#660099] to-[#EB3C7D]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Diferenciais Vivo Empresas que transformam seu dia a dia
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Produtividade Sem Limites</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/90">Melhor rede móvel do Brasil</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/90">Maior cobertura 5G nacional</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/90">Central de relacionamento exclusivo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/90">Suporte técnico especializado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/90">Soluções personalizadas para empresas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/90">Tecnologia de ponta com preços competitivos</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-white/80 mb-4">Disponibilidade</div>
                <div className="text-3xl font-bold text-white mb-2">1Gbps</div>
                <div className="text-sm text-white/80">Velocidade Máxima</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
