"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, User, Mail, Building } from "lucide-react"
import { dedicadaConfig } from "@/data/dedicada-data"

export function DedicadaContactSection() {
  const { contactForm } = dedicadaConfig

  const iconMap = {
    nome: User,
    telefone: Phone,
    email: Mail,
    cnpj: Building
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {contactForm.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {contactForm.subtitle}
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-4 sm:space-y-6">
                  {contactForm.fields.map((field, index) => {
                    const IconComponent = iconMap[field.name as keyof typeof iconMap]
                    return (
                      <div key={index} className="space-y-2">
                        <Label htmlFor={field.name} className="text-sm font-medium text-gray-700">
                          {field.label}
                        </Label>
                        <div className="relative">
                          <IconComponent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            required={field.required}
                            className="pl-10 h-11 sm:h-12"
                            placeholder={`Digite seu ${field.label.toLowerCase()}`}
                          />
                        </div>
                      </div>
                    )
                  })}
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold"
                  >
                    {contactForm.button}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Fale com nossos especialistas</h3>
                  <p className="text-gray-600">Nossa equipe está pronta para ajudar sua empresa a encontrar a melhor solução de conectividade.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Suporte 24/7</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Consultores especializados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
