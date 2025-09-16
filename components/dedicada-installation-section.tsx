"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, CheckCircle } from "lucide-react"
import { dedicadaConfig } from "@/data/dedicada-data"

export function DedicadaInstallationSection() {
  const { installationProcess, contact } = dedicadaConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Processo de Instalação</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {installationProcess.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {installationProcess.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {installationProcess.steps.map((step, index) => (
            <Card
              key={index}
              className="relative text-center p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Laptop className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-colors mb-6"
          >
            {installationProcess.button}
          </a>
          <p className="text-xs sm:text-sm text-gray-500">
            * Processo de instalação pode variar conforme localização e disponibilidade técnica.
          </p>
        </div>
      </div>
    </section>
  )
}
