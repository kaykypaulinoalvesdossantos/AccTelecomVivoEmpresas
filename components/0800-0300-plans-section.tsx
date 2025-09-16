"use client"

import React, { useState } from "react"
import { Check, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { oitoZeroZeroConfig } from "@/data/0800-0300-data"

export function OitoZeroZeroPlansSection(): React.JSX.Element {
  const { plans0800, plans0300, contact } = oitoZeroZeroConfig
  const [activeTab, setActiveTab] = useState("0800")
  
  const currentPlans = activeTab === "0800" ? plans0800 : plans0300

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Soluções de atendimento e recebimento de chamadas por 0800 e 0300
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Melhore a experiência dos seus clientes por meio dos nossos serviços
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab("0800")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "0800"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              0800
            </button>
            <button
              onClick={() => setActiveTab("0300")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "0300"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              0300
            </button>
          </div>
        </div>

        {/* 0300 Info Section */}
        {activeTab === "0300" && (
          <div className="mb-12 lg:mb-16">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Um número 0300, custa muito baixo
                  </h3>
                  <div className="space-y-4 text-gray-600 text-sm sm:text-base lg:text-lg">
                    <p>
                      Disponibilize um número único 0300 e receba ligações de todo o país.
                    </p>
                    <p>
                      Conte com as facilidades para distribuir materiais publicitários e criar documentos e divida os custos das ligações com seu cliente final.
                    </p>
                    <p className="font-bold text-gray-900">
                      No 0300, o seu cliente é tarifado sempre de uma chamada local e a empresa é tarifada dos custos excedentes à chamada local.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 lg:p-8 text-white">
                    <h4 className="text-xl sm:text-2xl font-bold mb-4">
                      Vantagens do 0300
                    </h4>
                    <ul className="text-left space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Custo baixo para o cliente
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Cobertura nacional
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Divisão de custos
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Facilidade de divulgação
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {currentPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative p-6 lg:p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-purple-500 shadow-lg scale-105"
                  : "border-gray-200 hover:border-purple-300"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                  <Star className="w-4 h-4 mr-1" />
                  Mais Popular
                </Badge>
              )}

              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-lg sm:text-xl text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full cursor-pointer ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                      : "bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                    {plan.buttonText}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>

                {plan.id !== "customize" && plan.id !== "customize-0300" && (
                  <div className="mt-4">
                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium cursor-pointer"
                    >
                      Mais detalhes
                    </a>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Não encontrou o que precisa?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg">
              Nossa equipe de consultores pode criar um plano personalizado para atender às necessidades específicas da sua empresa.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-0"
            >
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                Falar com Consultor
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
