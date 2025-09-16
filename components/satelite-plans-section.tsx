"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Satellite } from "lucide-react"
import { sateliteConfig } from "@/data/satelite-data"

export function SatelitePlansSection() {
  const { plans, contact } = sateliteConfig

  const renderPlanCard = (plan: any) => (
    <Card
      key={plan.id}
      className={`relative transition-all duration-300 hover:shadow-2xl ${plan.popular ? "ring-2 ring-purple-500 scale-105 shadow-xl" : "hover:scale-105"}`}
    >
      {plan.popular && (
        <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-4 py-1 text-xs sm:text-sm">
            {plan.badge}
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-4 pt-6 sm:pt-8">
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <Satellite className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <CardTitle className="text-lg sm:text-xl font-bold">{plan.name}</CardTitle>
        
        <div className="space-y-2 mt-3">
          <div className="text-sm text-purple-600 font-semibold">{plan.speed}</div>
          <div className="space-y-1">
            {plan.originalPrice && (
              <div className="text-sm text-gray-400 line-through">{plan.originalPrice}</div>
            )}
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              {plan.price}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          {plan.features.map((feature: string, featureIndex: number) => (
            <li key={featureIndex} className="flex items-start text-xs sm:text-sm">
              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-2 sm:space-y-3">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-block text-center py-2 px-3 sm:px-4 rounded-md font-medium transition-colors text-sm sm:text-base ${plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`}
          >
            {plan.button}
          </a>
          <Button variant="ghost" className="w-full text-xs sm:text-sm">
            Mais detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Planos Empresariais</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Conecte sua Empresa com a Internet Satélite da Vivo</h2>
        </div>

        <Tabs defaultValue="combo-modem-4g" className="mb-12 lg:mb-16">
          <TabsList className="grid w-full grid-cols-3 max-w-md sm:max-w-lg mx-auto mb-8 sm:mb-12">
            {plans.tabs.map((tab) => (
              <TabsTrigger 
                key={tab} 
                value={tab.toLowerCase().replace(/\s+/g, '-')} 
                className="text-xs sm:text-sm"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="combo-modem-4g">
            <div className="text-center mb-8">
              <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                {plans.descriptions.modem4g}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {plans.modem4g.map(renderPlanCard)}
            </div>
          </TabsContent>

          <TabsContent value="combo-vivo-box">
            <div className="text-center mb-8">
              <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                {plans.descriptions.vivoBox}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {plans.vivoBox.map(renderPlanCard)}
            </div>
          </TabsContent>

          <TabsContent value="internet-satelite">
            <div className="text-center mb-8">
              <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                {plans.descriptions.satelite}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {plans.satelite.map(renderPlanCard)}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            * Preços podem variar conforme localização e disponibilidade técnica.
          </p>
        </div>
      </div>
    </section>
  )
}
