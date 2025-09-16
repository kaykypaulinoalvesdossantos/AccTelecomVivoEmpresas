"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Award, Target, CheckCircle, Star } from "lucide-react"

export function SobreEmpresaHeroSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">
            Conheça mais sobre a nossa empresa
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 lg:mb-8">
            Acc Telecom
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            Parceiro Autorizado Vivo Empresas com mais de 15 anos de experiência no mercado de telecomunicações. 
            Oferecemos soluções completas e personalizadas para empresas que buscam excelência em conectividade e comunicação.
          </p>

          {/* Certificações e Credenciais */}
          <div className="mb-8 lg:mb-12">
            <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Parceiro Autorizado Vivo</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">Certificação Técnica</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">ISO 9001</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 lg:mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-sm text-gray-600">Anos de Experiência</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Empresas Atendidas</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Suporte</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="#sobre">Saiba Mais</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
