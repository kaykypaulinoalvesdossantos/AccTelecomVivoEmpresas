import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DevicesHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
              Dispositivos Empresariais
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Dispositivos de Alta Performance para sua{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Empresa
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Equipamentos modernos e confiáveis para impulsionar a produtividade da sua equipe.
              Smartphones, tablets e acessórios com tecnologia de ponta e suporte empresarial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" asChild>
                <a href="#dispositivos">Ver Dispositivos</a>
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de falar com um especialista sobre dispositivos empresariais" target="_blank" rel="noopener noreferrer">
                  Falar com Especialista
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Suporte Técnico</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">99%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/iphone-15-pro-in-purple-gradient-background.png"
                alt="iPhone 15 Pro"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
