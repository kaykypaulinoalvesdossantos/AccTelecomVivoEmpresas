"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Shield, Archive, ArrowRight } from "lucide-react"

export function CloudPlusStorageSection() {
  const storageOptions = [
    {
      icon: Database,
      title: "Dados e arquivos",
      description: "Armazene todos os seus dados corporativos com segurança e alta disponibilidade",
      color: "#660099"
    },
    {
      icon: Shield,
      title: "Sistemas e aplicações",
      description: "Hospede suas aplicações e sistemas críticos com performance garantida",
      color: "#EB3C7D"
    },
    {
      icon: Archive,
      title: "Backups",
      description: "Realize backups automáticos e seguros de todos os seus dados importantes",
      color: "#FF9900"
    },
    {
      icon: Database,
      title: "Ambientes de desenvolvimento",
      description: "Crie ambientes de desenvolvimento e teste isolados e seguros",
      color: "#82D400"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Database className="w-4 h-4 mr-2" />
            O que posso armazenar no Cloud Server?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Armazenamento seguro e confiável
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra todas as possibilidades de armazenamento no Cloud Plus
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                O que posso armazenar no Cloud Server?
              </h3>
              <p className="text-lg text-gray-600">
                O Cloud Plus oferece armazenamento seguro e confiável para todos os tipos de dados e aplicações da sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {storageOptions.map((option, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: option.color }}>
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {option.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Benefícios do Armazenamento Cloud Plus
                  </h3>
                  <p className="text-gray-600">
                    Segurança, performance e confiabilidade
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span className="text-gray-700">Armazenamento seguro e criptografado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span className="text-gray-700">Alta disponibilidade e redundância</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span className="text-gray-700">Backup automático e recuperação</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <span className="text-gray-700">Escalabilidade sob demanda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quer saber mais sobre armazenamento?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe pode ajudar você a escolher a melhor solução de armazenamento para sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de saber mais sobre armazenamento no Cloud Plus', '_blank')}>
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de agendar uma consultoria sobre Cloud Plus', '_blank')}>
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
