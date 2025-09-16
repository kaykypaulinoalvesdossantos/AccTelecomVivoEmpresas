"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Smartphone, Shield, ArrowRight } from "lucide-react"
import { vivoGestaoData } from "@/data/vivo-gestao-data"

const iconMap = {
  BarChart3,
  Smartphone,
  Shield
}

export function VivoGestaoHeroSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-[#EB3C7D]/10 to-[#660099]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-4 py-2 mb-6">
            {vivoGestaoData.hero.badge}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            {vivoGestaoData.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            {vivoGestaoData.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-8 py-4 text-lg"
              asChild
            >
              <a href={vivoGestaoData.hero.cta.primary.href} target="_blank" rel="noopener noreferrer">
                <BarChart3 className="w-5 h-5 mr-2" />
                {vivoGestaoData.hero.cta.primary.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-[#660099] text-[#660099] hover:bg-[#660099] hover:text-white font-semibold px-8 py-4 text-lg"
              asChild
            >
              <a href={vivoGestaoData.hero.cta.secondary.href}>
                {vivoGestaoData.hero.cta.secondary.text}
              </a>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {vivoGestaoData.hero.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}