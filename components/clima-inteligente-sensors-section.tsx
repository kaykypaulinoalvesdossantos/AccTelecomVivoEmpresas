"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Droplets, Wind, Sun, Thermometer, Gauge, Waves } from "lucide-react"

export function ClimaInteligenteSensorsSection() {
  const sensors = [
    "Nível de precipitação das chuvas",
    "Velocidade e direção do vento",
    "Nível de radiação solar",
    "Temperatura e umidade relativa do ar",
    "Umidade do solo",
    "Nível de vazão de rios, lagos, canais e outros",
    "Pressão atmosférica",
    "Qualidade do ar e água"
  ]

  const sensorIcons = [
    Droplets,
    Wind,
    Sun,
    Thermometer,
    Gauge,
    Waves,
    Gauge,
    Droplets
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                Sensores Avançados
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Clima Inteligente tem sensores que
                <span className="block text-[#660099]">medem:</span>
              </h2>
            </div>

            {/* Sensors List */}
            <div className="space-y-4">
              {sensors.map((sensor, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{sensor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Representation */}
          <div className="relative">
            <div className="relative z-10">
              {/* Weather Station Visualization */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] p-6 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <Sun className="w-5 h-5 text-[#660099]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Estação Meteorológica</h3>
                      <p className="text-white/90 text-sm">Sensores em tempo real</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Sensor Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {sensorIcons.slice(0, 4).map((Icon, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="w-12 h-12 bg-[#660099] rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-sm text-gray-600">
                          {index === 0 && "Chuva"}
                          {index === 1 && "Vento"}
                          {index === 2 && "Sol"}
                          {index === 3 && "Temp"}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Sensors */}
                  <div className="grid grid-cols-2 gap-4">
                    {sensorIcons.slice(4, 8).map((Icon, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="w-12 h-12 bg-[#EB3C7D] rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-sm text-gray-600">
                          {index === 0 && "Solo"}
                          {index === 1 && "Água"}
                          {index === 2 && "Pressão"}
                          {index === 3 && "Qualidade"}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="bg-gradient-to-r from-[#660099]/5 to-[#EB3C7D]/5 rounded-xl p-4 border border-[#660099]/10">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">Status dos Sensores</h4>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Sensores ativos:</span>
                        <span className="font-semibold text-[#660099]">8/8</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Última atualização:</span>
                        <span className="font-semibold text-[#EB3C7D]">2 min atrás</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#660099]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#EB3C7D]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
