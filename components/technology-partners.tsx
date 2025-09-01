"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Award, CheckCircle } from "lucide-react"

const partners = [
  {
    name: "Microsoft",
    logo: "/placeholder.svg?height=60&width=120&text=Microsoft",
    description: "Parceria oficial Microsoft 365 e Azure",
    category: "Cloud & Produtividade",
  },
  {
    name: "Google",
    logo: "/placeholder.svg?height=60&width=120&text=Google",
    description: "Google Workspace e Google Cloud Platform",
    category: "Cloud & Colaboração",
  },
  {
    name: "AWS",
    logo: "/placeholder.svg?height=60&width=120&text=AWS",
    description: "Amazon Web Services - Infraestrutura Cloud",
    category: "Cloud Computing",
  },
  {
    name: "Cisco",
    logo: "/placeholder.svg?height=60&width=120&text=Cisco",
    description: "Soluções de rede e segurança empresarial",
    category: "Networking & Security",
  },
  {
    name: "VMware",
    logo: "/placeholder.svg?height=60&width=120&text=VMware",
    description: "Virtualização e infraestrutura digital",
    category: "Virtualização",
  },
  {
    name: "Fortinet",
    logo: "/placeholder.svg?height=60&width=120&text=Fortinet",
    description: "Cibersegurança e proteção avançada",
    category: "Cybersecurity",
  },
  {
    name: "Huawei",
    logo: "/placeholder.svg?height=60&width=120&text=Huawei",
    description: "Equipamentos de rede e 5G",
    category: "Telecomunicações",
  },
  {
    name: "IBM",
    logo: "/placeholder.svg?height=60&width=120&text=IBM",
    description: "Soluções empresariais e IA",
    category: "Enterprise Solutions",
  },
]

const certifications = [
  {
    title: "ISO 27001",
    description: "Certificação de Segurança da Informação",
    icon: CheckCircle,
  },
  {
    title: "ISO 9001",
    description: "Certificação de Qualidade",
    icon: Award,
  },
  {
    title: "ANATEL",
    description: "Licenciado pela Agência Nacional de Telecomunicações",
    icon: Building2,
  },
]

export function TechnologyPartners() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Building2 className="w-4 h-4 mr-2" />
            Parceiros Tecnológicos
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tecnologia de ponta com
            <span className="block text-[#660099]">parceiros globais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com os maiores líderes mundiais em tecnologia para oferecer as melhores soluções e garantir que
            sua empresa tenha acesso às inovações mais avançadas do mercado.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {partners.map((partner, index) => (
            <Card key={index} className="professional-card border-0 bg-gray-50 hover:bg-white">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="h-12 mx-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{partner.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {partner.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-[#660099] to-[#E91E63] rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Certificações e Reconhecimentos</h3>
            <p className="text-xl text-white/90">
              Nosso compromisso com a excelência é reconhecido por órgãos nacionais e internacionais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-2xl">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{cert.title}</h4>
                <p className="text-white/80">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div>
            <div className="text-4xl font-bold text-[#660099] mb-2">20+</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#660099] mb-2">50+</div>
            <div className="text-gray-600">Parceiros Tecnológicos</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#660099] mb-2">99.9%</div>
            <div className="text-gray-600">SLA de Disponibilidade</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#660099] mb-2">24/7</div>
            <div className="text-gray-600">Suporte Especializado</div>
          </div>
        </div>
      </div>
    </section>
  )
}
