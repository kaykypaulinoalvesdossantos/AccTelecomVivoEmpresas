"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Check, ShoppingCart } from "lucide-react"
import { fibraRepetidorConfig } from "@/data/fibra-repetidor-data"

export function FibraRepetidorConhecaSection() {
  const { conheca, contact } = fibraRepetidorConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base w-fit">
                Tecnologia
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                {conheca.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {conheca.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Principais benefícios:</h3>
              <ul className="space-y-3">
                {conheca.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
            <Card className="relative bg-white shadow-xl border border-gray-200">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-gray-800 flex items-center justify-center">
                    <Wifi className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{conheca.product.name}</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">{conheca.product.price}</div>
                    <div className="text-sm text-gray-500">{conheca.product.installment}</div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      {conheca.product.shipping}
                    </Badge>
                  </div>
                </div>

                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {conheca.product.button}
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
