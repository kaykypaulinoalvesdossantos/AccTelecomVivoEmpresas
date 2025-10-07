"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle, Star, Users, Shield } from "lucide-react"

export function EmailProfissionalHeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#660099] via-[#8B2C9E] to-[#EB3C7D] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-6 py-3 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              E-MAIL PROFISSIONAL
            </Badge>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Aumente seu
                <span className="block text-white/90">profissionalismo</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Crie um e-mail corporativo com o @ da sua empresa
              </p>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <div className="text-4xl font-bold">A partir de R$5,90/mês</div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#660099] hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Saiba mais
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Mail className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">E-mail Corporativo</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">Profissionalismo</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">Credibilidade</p>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Dashboard */}
          <div className="relative">
            <div className="relative z-10">
              {/* Email Dashboard - Different Layout */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] p-6 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#660099]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">E-mail Profissional</h3>
                      <p className="text-white/90">Conta corporativa</p>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content - Side by Side Layout */}
                <div className="p-6 h-full">
                  <div className="grid grid-cols-2 gap-6 h-full">
                    {/* Left Side - Stats */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Recursos Principais</h4>
                      
                      {/* Large Stat Cards */}
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-[#660099] to-[#8B2C9E] rounded-xl p-4 text-white">
                          <div className="text-3xl font-bold">1GB</div>
                          <div className="text-sm text-white/90">Armazenamento</div>
                        </div>
                        <div className="bg-gradient-to-r from-[#EB3C7D] to-[#8B2C9E] rounded-xl p-4 text-white">
                          <div className="text-3xl font-bold">50</div>
                          <div className="text-sm text-white/90">Contas</div>
                        </div>
                        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
                          <div className="text-3xl font-bold">24/7</div>
                          <div className="text-sm text-white/90">Suporte</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Features */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Recursos Inclusos</h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Webmail avançado</div>
                            <div className="text-sm text-gray-600">Interface moderna</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Shield className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Antivírus e antispam</div>
                            <div className="text-sm text-gray-600">Proteção total</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Backup automático</div>
                            <div className="text-sm text-gray-600">Dados seguros</div>
                          </div>
                        </div>
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
