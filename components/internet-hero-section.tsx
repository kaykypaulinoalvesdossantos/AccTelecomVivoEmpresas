import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Wifi, Shield } from "lucide-react"

export function InternetHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-cyan-600 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Internet Empresarial</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Internet Fibra
            <span className="block text-cyan-300">Para Sua Empresa</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Velocidade garantida, estabilidade total e suporte especializado. A conectividade que sua empresa precisa
            para crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg font-semibold" asChild>
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de conhecer os planos de Internet Fibra para empresas" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Ver Planos
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de fazer um teste de velocidade e saber sobre Internet Fibra" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Teste de Velocidade
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="text-2xl font-bold mb-1">99.9%</div>
              <div className="text-cyan-200">Disponibilidade</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wifi className="h-8 w-8 text-blue-300" />
              </div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-cyan-200">Suporte Técnico</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-cyan-200">Fibra Óptica</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
