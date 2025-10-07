"use client"

import React from "react"
import { ShoppingCart, Mail, Settings, CheckCircle } from "lucide-react"

export default function SeoToolHowSection() {
  const steps = [
    {
      number: "1",
      icon: ShoppingCart,
      title: "Contrate o plano ideal para seu site",
      description: "E aguarde a confirmação da compra.",
      color: "from-[#660099] to-[#8B2C9E]"
    },
    {
      number: "2", 
      icon: Mail,
      title: "Receba o e-mail com dados de login",
      description: "Em até 48h.",
      color: "from-[#8B2C9E] to-[#EB3C7D]"
    },
    {
      number: "3",
      icon: Settings,
      title: "Configure seu SEO Tool",
      description: "E conheça as ferramentas disponíveis.",
      color: "from-[#EB3C7D] to-[#660099]"
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Pronto! Você já pode melhorar",
      description: "O posicionamento do seu site!",
      color: "from-[#660099] to-[#EB3C7D]"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Saiba como é fácil assinar e usar o SEO Tool
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Em poucos passos você estará otimizando seu site para os mecanismos de busca
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Step Number */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Step Content */}
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                      <step.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#660099] to-[#EB3C7D] transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
