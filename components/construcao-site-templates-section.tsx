"use client"

import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, Palette, ArrowRight } from "lucide-react"

export default function ConstrucaoSiteTemplatesSection() {
  const [activeCategory, setActiveCategory] = useState("Beleza")

  const categories = [
    "Beleza", "Culinária", "Hospedagem e Eventos", "Educação"
  ]

  const templates = [
    {
      title: "Make Signature",
      category: "Beleza",
      description: "Template elegante para salões de beleza e estética",
      image: "make-signature",
      overlayText: "Você brilhando e se sentindo o máximo",
      overlaySubtext: "Ajudamos você a sentir-se maravilhosamente bem e ter o look para isso",
      buttonText: "AGENDE SEU HORÁRIO"
    },
    {
      title: "Moda Criativa", 
      category: "Beleza",
      description: "Template moderno para lojas de moda",
      image: "moda-criativa",
      overlayText: "Moda exclusiva e atual",
      overlaySubtext: "Descubra o melhor look para você",
      buttonText: "VER COLEÇÃO"
    },
    {
      title: "Barbearia do Paulo",
      category: "Beleza",
      description: "Template profissional para barbearias e estética masculina",
      image: "barbearia-paulo",
      overlayText: "CABELEIREIRO E ESTÉTICA PARA O HOMEM CONTEMPORÂNEO",
      overlaySubtext: "Combinamos novas tendências e nossos conhecimentos a experiência em estética masculina",
      buttonText: ""
    },
    {
      title: "Bistrô São Paulo",
      category: "Culinária",
      description: "Template sofisticado para restaurantes e bistrôs",
      image: "bistro-sp",
      overlayText: "",
      overlaySubtext: "",
      buttonText: ""
    },
    {
      title: "Culinária Artesanal",
      category: "Culinária", 
      description: "Template para restaurantes artesanais",
      image: "culinaria-artesanal",
      overlayText: "BEM-VINDOS!",
      overlaySubtext: "Uma experiência gastronômica para recordar",
      buttonText: ""
    },
    {
      title: "Doce Encanto",
      category: "Culinária",
      description: "Template para confeitarias e docerias",
      image: "doce-encanto",
      overlayText: "Especialistas em sobremesas artesanais para qualquer ocasião",
      overlaySubtext: "Desde bolos de casamento até bolos de aniversário inesquecíveis",
      buttonText: ""
    },
    {
      title: "Elemental Hotel",
      category: "Hospedagem e Eventos",
      description: "Template moderno para hotéis",
      image: "elemental-hotel",
      overlayText: "",
      overlaySubtext: "",
      buttonText: ""
    },
    {
      title: "Life Viagens",
      category: "Hospedagem e Eventos",
      description: "Template para agências de viagem",
      image: "life-viagens",
      overlayText: "",
      overlaySubtext: "",
      buttonText: ""
    },
    {
      title: "Prime Eventos",
      category: "Hospedagem e Eventos",
      description: "Template para empresas de eventos",
      image: "prime-eventos",
      overlayText: "PRIME EVENTOS",
      overlaySubtext: "ESPERAMOS VÊ-LO EM BREVE!",
      buttonText: "BOOK TICKETS"
    },
    {
      title: "Centro Estudantil",
      category: "Educação",
      description: "Template para centros educacionais",
      image: "centro-estudantil",
      overlayText: "APRENDA CONOSCO",
      overlaySubtext: "Sua aprendizagem em boas mãos",
      buttonText: "Ligue para nós"
    },
    {
      title: "Educação Infantil",
      category: "Educação",
      description: "Template para escolas infantis",
      image: "educacao-infantil",
      overlayText: "EM BOAS MÃOS",
      overlaySubtext: "Cuidado infantil especializado em que você pode confiar",
      buttonText: "ENVIAR"
    },
    {
      title: "Escola de Idiomas",
      category: "Educação",
      description: "Template para escolas de idiomas",
      image: "escola-idiomas",
      overlayText: "APRENDA CONOSCO",
      overlaySubtext: "Sua aprendizagem em boas mãos",
      buttonText: "Ligue para nós"
    }
  ]

  const filteredTemplates = templates.filter(template => 
    template.category === activeCategory
  )

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Palette className="w-4 h-4 mr-2" />
            Templates
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Templates de sites por
            <span className="block text-[#660099]">tipos de negócio</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha entre centenas de templates profissionais, 
            cada um otimizado para diferentes tipos de negócio.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`cursor-pointer ${
                activeCategory === category
                  ? "bg-[#660099] hover:bg-[#660099]/90 text-white"
                  : "border-[#660099] text-[#660099] hover:bg-[#660099] hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Mini Website Template */}
              <div className="relative h-64 bg-white border border-gray-200 rounded-lg overflow-hidden">
                {/* Browser Header */}
                <div className="bg-gray-100 px-3 py-2 flex items-center space-x-2 border-b">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-2 py-1 text-xs text-gray-500 text-center">
                    {template.title.toLowerCase().replace(/\s+/g, '')}.com.br
                  </div>
                </div>

                {/* Website Content */}
                <div className="p-3 h-full">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-[#660099] rounded flex items-center justify-center">
                        <Monitor className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-bold text-gray-800">{template.title}</span>
                    </div>
                    <nav className="flex space-x-2 text-xs text-gray-600">
                      <span>Início</span>
                      <span>Contato</span>
                      <span>Serviços</span>
                    </nav>
                  </div>

                  {/* Main Content based on template type */}
                  {template.image === "make-signature" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-pink-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs">💄</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Você brilhando</h3>
                        <p className="text-xs text-gray-600">Se sentindo o máximo</p>
                        <button className="mt-2 px-3 py-1 bg-pink-500 text-white text-xs rounded">AGENDE</button>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-pink-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Maquiagem</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-purple-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Cabelo</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-pink-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Estética</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {template.image === "moda-criativa" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs">👗</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Moda exclusiva</h3>
                        <p className="text-xs text-gray-600">E atual</p>
                        <button className="mt-2 px-3 py-1 bg-orange-500 text-white text-xs rounded">VER COLEÇÃO</button>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-orange-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Feminino</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-yellow-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Masculino</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-orange-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Acessórios</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {template.image === "barbearia-paulo" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-red-100 to-blue-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs">✂️</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Barbearia</h3>
                        <p className="text-xs text-gray-600">Estética masculina</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-red-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Corte</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-blue-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Barba</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-red-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Estética</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {template.image === "bistro-sp" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-amber-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs">🍽️</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Bistrô</h3>
                        <p className="text-xs text-gray-600">São Paulo</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-amber-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Pratos</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-orange-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Bebidas</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-amber-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Sobremesas</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {template.image === "culinaria-artesanal" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs">👨‍🍳</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Bem-vindos!</h3>
                        <p className="text-xs text-gray-600">Experiência gastronômica</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-green-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Menu</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-yellow-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Especiais</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-green-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Eventos</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {template.image === "doce-encanto" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-pink-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs">🧁</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Doce Encanto</h3>
                        <p className="text-xs text-gray-600">Sobremesas artesanais</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-pink-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Bolos</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-purple-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Doces</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-pink-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Festas</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {template.image === "elemental-hotel" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-blue-100 to-gray-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs">🏨</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Elemental Hotel</h3>
                        <p className="text-xs text-gray-600">Hospedagem moderna</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-blue-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Quartos</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-gray-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Serviços</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-blue-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Reservas</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {template.image === "life-viagens" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-cyan-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs">✈️</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Life Viagens</h3>
                        <p className="text-xs text-gray-600">Suas férias ideais</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-cyan-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Destinos</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-blue-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Pacotes</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-cyan-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Hotéis</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {template.image === "prime-eventos" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs">🎉</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Prime Eventos</h3>
                        <p className="text-xs text-gray-600">Esperamos vê-lo!</p>
                        <button className="mt-2 px-3 py-1 bg-purple-500 text-white text-xs rounded">BOOK TICKETS</button>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-purple-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Eventos</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-pink-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Ingressos</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-purple-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Contato</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {template.image === "centro-estudantil" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs">📚</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Aprenda conosco</h3>
                        <p className="text-xs text-gray-600">Sua aprendizagem</p>
                        <button className="mt-2 px-3 py-1 bg-yellow-500 text-white text-xs rounded">Ligue para nós</button>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-yellow-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Cursos</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-orange-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Professores</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-yellow-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Material</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {template.image === "educacao-infantil" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs">👶</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Em boas mãos</h3>
                        <p className="text-xs text-gray-600">Cuidado infantil</p>
                        <button className="mt-2 px-3 py-1 bg-green-500 text-white text-xs rounded">ENVIAR</button>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-green-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Berçário</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-blue-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Educação</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-green-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Atividades</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {template.image === "escola-idiomas" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs">🌍</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Aprenda conosco</h3>
                        <p className="text-xs text-gray-600">Sua aprendizagem</p>
                        <button className="mt-2 px-3 py-1 bg-indigo-500 text-white text-xs rounded">Ligue para nós</button>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-indigo-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Inglês</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-purple-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Espanhol</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-indigo-100 rounded mx-auto mb-1"></div>
                          <span className="text-xs text-gray-600">Francês</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Template</div>
                  <h3 className="text-xl font-semibold text-gray-900">{template.title}</h3>
                  <p className="text-gray-600 text-sm">{template.description}</p>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full text-[#660099] hover:text-[#660099]/80 hover:bg-[#660099]/10 cursor-pointer group"
                >
                  Veja o template
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Templates */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-[#660099] hover:bg-[#660099]/90 text-white cursor-pointer px-8 py-4"
          >
            Ver Todos os Templates
          </Button>
        </div>
      </div>
    </section>
  )
}
