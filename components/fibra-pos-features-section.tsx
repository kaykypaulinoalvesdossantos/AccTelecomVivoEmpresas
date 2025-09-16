"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Download, ExternalLink } from "lucide-react"
import { fibraPosConfig } from "@/data/fibra-pos-data"

export function FibraPosFeaturesSection() {
  const { features } = fibraPosConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Recursos</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">{features.title}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">{features.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {features.sections.map((section, index) => (
            <Card key={section.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {section.title}
                </CardTitle>
                <p className="text-gray-600 mb-4">{section.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {section.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* App Links for Vivo Valoriza */}
                {section.appLinks && (
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-900">Baixe o app Vivo Empresas:</p>
                    <div className="flex gap-3">
                      <a
                        href={section.appLinks.googlePlay}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span className="text-sm">Google Play</span>
                      </a>
                      <a
                        href={section.appLinks.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span className="text-sm">App Store</span>
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
