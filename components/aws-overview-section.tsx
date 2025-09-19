"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, BarChart3, Server, Folder, Mail, Zap, Database, Cpu } from "lucide-react"

export function AWSOverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
                <Cloud className="w-4 h-4 mr-2" />
                AWS Cloud
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Conheça a AWS Cloud
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A AWS é a plataforma de nuvem mais adotada e abrangente do mundo, oferecendo mais de 175 serviços completos 
                de centros de dados em todo o globo. Milhões de clientes, incluindo as startups de crescimento mais rápido, 
                as maiores empresas e as principais agências governamentais, estão usando a AWS para reduzir custos, 
                aumentar a agilidade e acelerar a inovação.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Machine Learning</h3>
                    <p className="text-sm text-gray-600">IA e ML integrados</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Data Lakes</h3>
                    <p className="text-sm text-gray-600">Análise de big data</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">IoT</h3>
                    <p className="text-sm text-gray-600">Internet das Coisas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Analytics</h3>
                    <p className="text-sm text-gray-600">Análise avançada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center">
                  <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Analytics</h3>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 text-center">
                  <Server className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Servidores</h3>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 text-center">
                  <Folder className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Storage</h3>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 text-center">
                  <Mail className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Comunicação</h3>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
