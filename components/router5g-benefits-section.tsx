"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Signal, Wifi, Shield, Clock, MapPin, CheckCircle } from "lucide-react"

export function Router5GBenefitsSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Descubra todas as vantagens do Roteador 5G para seu negócio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Além de ter conexão estável até mesmo fora da área de cobertura, veja todas as vantagens para sua empresa:
          </p>
        </div>

        {/* Seção com imagem de dispositivos conectados */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">Conecte até 128 dispositivos simultaneamente.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">Fácil de usar, basta plugar à tomada para se conectar.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">Conexão para diversos dispositivos de qualquer lugar.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">Experiência de banda larga com mobilidade, qualidade e velocidade 5G da Vivo.</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-200/20 rounded-3xl p-8 shadow-2xl">
              <img 
                src="/router-5g/vivo-empresas-dispositivos-conectados-esquerda-2405-943x832.png" 
                alt="Dispositivos conectados ao Roteador 5G"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Seção com imagem de diferenciais */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-200/20 rounded-3xl p-8 shadow-2xl">
              <img 
                src="/router-5g/vivo-empresas-diferenciais-2312-943x832.png" 
                alt="Diferenciais Vivo Empresas"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Diferenciais Vivo Empresas que transformam seu dia-a-dia
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">Eleita a melhor rede móvel do Brasil pelo prêmio P3 Mobile Bench.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">Maior cobertura em internet móvel do país, com mais de 96% da população coberta.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">Central de relacionamento exclusiva e especializada.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
