"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menuKey: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveMegaMenu(menuKey)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 150) // Small delay to prevent accidental closing
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const megaMenuData = {
    produtos: {
      title: "Produtos e Serviços",
      sections: [
        {
          title: "MÓVEL",
          items: [
            { label: "Planos", href: "/planos/moveis" },
            { label: "Portabilidade", href: "/planos/portabilidade" },
            { label: "Roteador 5G", href: "/planos/roteador-5g" },
            { label: "Modem 4G e Internet Box", href: "/planos/modem-4g" },
            { label: "eSIM", href: "/planos/esim" },
            { label: "M2M", href: "/planos/m2m" },
            { label: "Roaming Internacional", href: "/planos/roaming-internacional" },
            { label: "Gestão de Dispositivos - MDM", href: "/planos/mdm" },
            { label: "Vivo Gestão", href: "/solucoes#gestao" },
          ],
        },
        {
          title: "INTERNET",
          items: [
            { label: "Vivo Fibra", href: "/internet/fibra" },
            { label: "Internet Dedicada", href: "/planos/internet#dedicada" },
            { label: "Internet Satélite", href: "/planos/internet#satelite" },
            { label: "Redes Corporativas", href: "/solucoes#redes" },
            { label: "Gestão de redes", href: "/solucoes#gestao-redes" },
          ],
        },
        {
          title: "PACOTES",
          items: [
            { label: "Fibra + Pós", href: "/planos#combo-fibra-pos" },
            { label: "Pacotes para sua empresa", href: "/planos#pacotes" },
            { label: "Fibra + Repetidor", href: "/planos#fibra-repetidor" },
            { label: "Móvel + Aparelho", href: "/planos#movel-aparelho" },
          ],
        },
        {
          title: "VOZ E COLABORAÇÃO",
          items: [
            { label: "Vivo Voz Negócio", href: "/solucoes#voz-negocio" },
            { label: "Sip Trunking", href: "/solucoes#sip-trunking" },
            { label: "0800 e 0300", href: "/solucoes#0800-0300" },
            { label: "Número único", href: "/solucoes#numero-unico" },
            { label: "0303", href: "/solucoes#0303" },
          ],
        },
        {
          title: "SHOPPING",
          items: [
            { label: "Smartphones", href: "/dispositivos#smartphones" },
            { label: "Informática", href: "/dispositivos#informatica" },
            { label: "Acessórios", href: "/dispositivos#acessorios" },
            { label: "Roteadores", href: "/dispositivos#roteadores" },
            { label: "Mundo Apple", href: "/dispositivos#apple" },
            { label: "Mundo Samsung", href: "/dispositivos#samsung" },
            { label: "Locação de Equipamentos", href: "/dispositivos#locacao" },
            { label: "Seguro Celular", href: "/dispositivos#seguro" },
          ],
        },
      ],
    },
    solucoes: {
      title: "Soluções Digitais",
      sections: [
        {
          title: "CLOUD",
          items: [
            { label: "AWS", href: "/solucoes#aws" },
            { label: "IBM Cloud", href: "/solucoes#ibm-cloud" },
            { label: "Cloud Azure", href: "/solucoes#azure" },
            { label: "Huawei Cloud", href: "/solucoes#huawei" },
            { label: "Cloud Plus", href: "/solucoes#cloud-plus" },
          ],
        },
        {
          title: "FERRAMENTAS DE COLABORAÇÃO",
          items: [
            { label: "Microsoft 365", href: "/solucoes#microsoft-365" },
            { label: "Microsoft Teams", href: "/solucoes#teams" },
            { label: "Gestão de Equipes", href: "/solucoes#gestao-equipes" },
            { label: "Google Workspace", href: "/solucoes#google-workspace" },
            { label: "Exchange Online", href: "/solucoes#exchange" },
            { label: "Gestão de Vendas - ERP", href: "/solucoes#erp" },
            { label: "Plataforma Digital", href: "/solucoes#plataforma-digital" },
          ],
        },
        {
          title: "IOT",
          items: [
            { label: "Wi-Fi Pro", href: "/solucoes#wifi-pro" },
            { label: "Frota Inteligente", href: "/solucoes#frota" },
            { label: "Gestão de Maquinário", href: "/solucoes#maquinario" },
            { label: "Clima Inteligente", href: "/solucoes#clima" },
            { label: "Agro Cobertura", href: "/solucoes#agro" },
            { label: "Open Gateway", href: "/solucoes#open-gateway" },
          ],
        },
        {
          title: "T.I.",
          items: [
            { label: "Hosting Dedicado", href: "/solucoes#hosting" },
            { label: "Colocation", href: "/solucoes#colocation" },
            { label: "Registro de Domínio", href: "/solucoes#dominio" },
            { label: "E-mail Profissional", href: "/solucoes#email" },
            { label: "Hospedagem de Site", href: "/solucoes#hospedagem" },
            { label: "Construtor de Sites", href: "/solucoes#construtor" },
            { label: "SEO Tool", href: "/solucoes#seo" },
          ],
        },
        {
          title: "SEGURANÇA",
          items: [
            { label: "Rede e Aplicação", href: "/solucoes#rede-aplicacao" },
            { label: "Segurança Gerenciada", href: "/solucoes#seguranca-gerenciada" },
            { label: "Exposição Digital", href: "/solucoes#exposicao-digital" },
            { label: "Consultoria em Cibersegurança", href: "/solucoes#consultoria-cyber" },
            { label: "Infraestrutura e Segurança Patrimonial", href: "/solucoes#infra-seguranca" },
          ],
        },
      ],
    },
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-white/85 via-white/80 to-white/85 backdrop-blur-xl border-b border-[#660099]/20 shadow-2xl' 
        : 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-3">
              <img
                src="/logo-acctelecom.png"
                alt="Acc Telecom Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#660099] to-[#EB3C7D] bg-clip-text text-transparent">
                  Acc Telecom
                </div>
                <span className="text-sm font-medium text-gray-600 group-hover:text-[#660099] transition-colors">
                  Parceiro Autorizado
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="relative" onMouseEnter={() => handleMouseEnter("produtos")} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center space-x-1 px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#660099] hover:bg-gray-50 rounded-lg transition-all duration-200">
                <span>Produtos e Serviços</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${activeMegaMenu === "produtos" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <div className="relative" onMouseEnter={() => handleMouseEnter("solucoes")} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center space-x-1 px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#660099] hover:bg-gray-50 rounded-lg transition-all duration-200">
                <span>Soluções Digitais</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${activeMegaMenu === "solucoes" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <Link
              href="/sobre"
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#660099] hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Por tipo de Empresa
            </Link>
            <Link
              href="/sobre"
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#660099] hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Ajuda e Benefícios
            </Link>
            <Link
              href="/planos"
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#660099] hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Melhores Ofertas
            </Link>
            <Link
              href="/contato"
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#660099] hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Autoatendimento
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {activeMegaMenu && megaMenuData[activeMegaMenu as keyof typeof megaMenuData] && (
          <div
            className={`absolute left-0 right-0 top-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/90 backdrop-blur-2xl border-b border-white/40 shadow-2xl' 
                : 'bg-white/98 backdrop-blur-md border-b border-gray-200/50 shadow-2xl'
            } z-40 -mt-px`}
            onMouseEnter={() => handleMouseEnter(activeMegaMenu)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-5 gap-12">
                {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].sections.map((section, index) => (
                  <div key={index} className="space-y-6">
                    <h3 className="font-bold text-sm text-[#660099] uppercase tracking-wider border-b border-[#660099]/20 pb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-[#660099] hover:bg-gray-50 transition-all duration-200 block py-2 px-3 rounded-md -mx-3"
                            onClick={() => setActiveMegaMenu(null)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background py-4">
            <nav className="space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-primary">Produtos e Serviços</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/planos/moveis"
                    className="block text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Planos Móveis
                  </Link>
                  <Link
                    href="/planos/portabilidade"
                    className="block text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portabilidade
                  </Link>
                  <Link
                    href="/planos/internet"
                    className="block text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Internet Fibra
                  </Link>
                  <Link
                    href="/dispositivos"
                    className="block text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dispositivos
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-primary">Soluções Digitais</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/solucoes"
                    className="block text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Soluções Completas
                  </Link>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                  <Link href="/contato" onClick={() => setIsMenuOpen(false)}>
                    Fale Conosco
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
