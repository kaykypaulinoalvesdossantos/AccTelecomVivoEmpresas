"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Check, Smartphone, ChevronDown, ArrowLeft, ArrowRight } from "lucide-react"
import { mockPlansData, Plan } from "@/data/vivo-gestao-plans"

export function VivoGestaoPlansSection(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState("portabilidade")
  const [currentPage, setCurrentPage] = useState(0)

  const currentPlans = mockPlansData[activeTab as keyof typeof mockPlansData] || []
  const plansPerPage = 4
  const totalPages = Math.ceil(currentPlans.length / plansPerPage)
  const startIndex = currentPage * plansPerPage
  const endIndex = startIndex + plansPerPage
  const displayedPlans = currentPlans.slice(startIndex, endIndex)

  const renderPlanCard = (plan: Plan, index: number) => {
    return (
      <Card key={plan.id} className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 bg-white border border-gray-200">
        {/* Banner superior */}
        <div className="bg-gradient-to-r from-[#660099] to-[#8B00FF] text-white text-center py-2 text-xs font-semibold">
          {plan.offerType}
        </div>

        <CardHeader className="text-center pt-4 pb-4">
          {/* Título do plano */}
          {plan.title && (
            <CardTitle className="text-lg font-bold text-gray-900 mb-3">
              {plan.title}
            </CardTitle>
          )}
          
          {/* Dados e ícone */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <Smartphone className="w-5 h-5 text-[#660099]" />
            <span className="text-3xl font-bold text-gray-900 leading-none">{plan.data}</span>
          </div>
          
          {/* Detalhes dos dados */}
          {plan.dataDetails && (
            <p className="text-sm text-gray-600 mb-3">{plan.dataDetails}</p>
          )}
          
          {/* Tipo de plano */}
          {plan.planType && (
            <p className="text-sm text-gray-600 mb-2">{plan.planType}</p>
          )}
          
          {/* Rede */}
          {plan.network && (
            <p className="text-sm text-gray-600 mb-3">{plan.network}</p>
          )}
          
          {/* Bônus de portabilidade */}
          {plan.portabilityBonus && (
            <div className="border-t border-gray-200 pt-3 mb-3">
              <p className="text-sm text-[#660099] font-medium">{plan.portabilityBonus}</p>
            </div>
          )}
          
          {/* Features */}
          {plan.features && (
            <div className="space-y-1 mb-3">
              {plan.features.map((feature: string, i: number) => (
                <p key={i} className="text-sm text-gray-600">{feature}</p>
              ))}
            </div>
          )}
          
          {/* MDM Section */}
          {plan.mdm && (
            <div className="border-t border-gray-200 pt-3 mb-3">
              <h4 className="text-sm font-semibold text-[#660099] mb-2">{plan.mdm.title}</h4>
              {plan.mdm.features.map((feature: string, i: number) => (
                <p key={i} className="text-xs text-gray-600 mb-1">{feature}</p>
              ))}
              <a href="#" className="text-xs text-[#660099] hover:underline">Saiba mais</a>
            </div>
          )}
          
          {/* Calls info */}
          {plan.calls && (
            <p className="text-sm text-gray-600 mb-3">{plan.calls}</p>
          )}
          
          {/* Options for pacotes adicionais */}
          {plan.options && (
            <div className="space-y-3 mb-3">
              {plan.options.map((option: any, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 mt-0.5 flex-shrink-0 ${
                    option.selected 
                      ? 'bg-[#660099] border-[#660099]' 
                      : 'border-gray-300'
                  }`}>
                    {option.selected && (
                      <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">+ 10 GB {option.name}</p>
                    <p className="text-xs text-gray-600">{option.apps}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Speed info */}
          {plan.speed && (
            <p className="text-sm text-gray-600 mb-3">{plan.speed}</p>
          )}
        </CardHeader>

        <CardContent className="px-6 py-4">
          {/* Benefícios */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-800">Benefícios:</span>
            <div className="flex gap-2">
              {plan.benefits.map((benefit: string, i: number) => (
                <div key={i} className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Preço */}
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-gray-900 leading-none">
              {plan.price}
            </div>
            <div className="text-sm text-gray-600">{plan.period}</div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button className="w-full bg-gradient-to-r from-[#EB3C7D] to-[#CC3D70] text-white font-semibold py-3 rounded-lg hover:from-[#d4346f] hover:to-[#b83562] transition-all duration-300 shadow-md">
            Assinar Plano
          </Button>
          <div className="w-full mt-3">
            <a href="#" className="text-sm text-[#660099] hover:underline flex items-center justify-center gap-1">
              Mais detalhes
              <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#" className="text-sm text-[#660099] hover:underline block text-center mt-1">
              Mais informações
            </a>
          </div>
        </CardFooter>
      </Card>
    )
  }

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Escolha o plano ideal para sua empresa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Planos flexíveis que se adaptam às necessidades do seu negócio
          </p>
        </div>

        {/* Tabs de navegação */}
        <div className="max-w-5xl mx-auto mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="portabilidade" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#8B00FF] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                PORTABILIDADE
              </TabsTrigger>
              <TabsTrigger 
                value="novaLinha" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#8B00FF] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                Móvel
              </TabsTrigger>
              <TabsTrigger 
                value="mdm" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#8B00FF] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                M2M
              </TabsTrigger>
              <TabsTrigger 
                value="pacotesAdicionais" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#8B00FF] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                Fibra
              </TabsTrigger>
              <TabsTrigger 
                value="beneficios" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#8B00FF] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                Benefícios
              </TabsTrigger>
              <TabsTrigger 
                value="planos" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#8B00FF] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                Planos
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Cards dos planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
          {displayedPlans.map((plan, index) => renderPlanCard(plan, index))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="p-2 text-[#660099] hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentPage 
                      ? 'bg-[#660099]' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 text-[#660099] hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Entre em contato conosco e descubra como o Vivo Gestão pode beneficiar sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#660099] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Solicitar Proposta
              </Button>
              <Button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#660099] transition-colors duration-300">
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
