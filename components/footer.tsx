"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Produtos e Serviços",
      links: ["Planos Móveis", "Internet Fibra", "Soluções Cloud", "Dispositivos", "IoT Empresarial"],
    },
    {
      title: "Soluções",
      links: ["Pequenas Empresas", "Médias Empresas", "Grandes Corporações", "Governo", "Saúde"],
    },
    {
      title: "Suporte",
      links: ["Central de Ajuda", "Área do Cliente", "Fale Conosco", "Ouvidoria", "Loja Online"],
    },
    {
      title: "Empresa",
      links: ["Sobre a Vivo", "Carreiras", "Imprensa", "Investidores", "Sustentabilidade"],
    },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center">
              <img
                src="/230919_Vivo-empresas_RGB_neg-branco.png"
                alt="Vivo Empresas Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm opacity-80">
              Conectando empresas ao futuro digital com as melhores soluções em tecnologia e conectividade.
            </p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-lg">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre produtos e serviços da Vivo Empresas" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Newsletter */}
        <div className="border-t border-white/20 mt-12 pt-8 grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Phone className="h-4 w-4" />
                <span>(11) 2362-9665</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Mail className="h-4 w-4" />
                <span>sac@acctelecom.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <MapPin className="h-4 w-4" />
                <span>Atendimento em todo o Brasil</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Newsletter</h4>
            <p className="text-sm opacity-80">Receba novidades e ofertas exclusivas para empresas.</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Seu e-mail empresarial"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="bg-secondary hover:bg-secondary/90" onClick={() => window.open('https://wa.me/5511989150001?text=Olá! Gostaria de receber novidades e ofertas da Vivo Empresas', '_blank')}>
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-sm opacity-80">© 2025 ACC Telecom. Todos os direitos reservados.</div>
          <div className="flex space-x-6 text-sm opacity-80">
            <a href="https://wa.me/5511989150001?text=Olá! Gostaria de saber sobre a Política de Privacidade" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity cursor-pointer">
              Política de Privacidade
            </a>
            <a href="https://wa.me/5511989150001?text=Olá! Gostaria de saber sobre os Termos de Uso" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity cursor-pointer">
              Termos de Uso
            </a>
            <a href="https://wa.me/5511989150001?text=Olá! Gostaria de saber sobre a Política de Cookies" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity cursor-pointer">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}