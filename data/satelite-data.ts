// Dados mockados para a página de Internet Satélite
// Baseado no print da página oficial da Vivo Empresas

export const sateliteConfig = {
  // Configurações gerais
  contact: {
    phone: "11 2362-9665",
    whatsapp: "https://wa.me/551123629665",
    supportHours: "24 horas por dia, 7 dias por semana"
  },

  // Informações do hero
  hero: {
    badge: "INTERNET SATÉLITE",
    title: "Conecte sua Empresa com a Internet Satélite da Vivo",
    subtitle: "Conectividade de qualidade em áreas rurais e remotas",
    description: "A Vivo oferece cobertura 4G ampla, permitindo conexão de qualidade mesmo em áreas rurais. Nossa solução de Internet Satélite garante que sua empresa esteja sempre conectada, independentemente da localização.",
    primaryButton: "Contratar",
    secondaryButton: "Mais detalhes",
    stats: [
      { number: "99.9%", label: "Disponibilidade", icon: "Shield" },
      { number: "24/7", label: "Suporte", icon: "Clock" },
      { number: "100+", label: "Mbps", icon: "Zap" },
      { number: "Global", label: "Cobertura", icon: "Globe" }
    ]
  },

  // Planos de internet satélite
  plans: {
    tabs: ["Combo Modem 4G", "Combo Vivo Box", "Internet Satélite"],
    activeTab: "Internet Satélite",
    descriptions: {
      modem4g: "A Vivo oferece cobertura 4G ampla, permitindo conexão de qualidade mesmo em áreas rurais. Aproveite a velocidade e a confiabilidade da nossa rede móvel para manter sua empresa funcionando sem interrupções.",
      vivoBox: "Com o Vivo Box, sua empresa desfruta de uma conexão 4G estável, mesmo em áreas remotas, graças à abrangente cobertura nacional Vivo. Conecte-se simultaneamente em até 32 dispositivos na mesma rede.",
      satelite: "Nossa internet via satélite oferece uma conexão confiável em áreas remotas, permitindo que sua empresa esteja online em qualquer lugar do país. Realize videoconferências, gerencie seus negócios e mantenha-se atualizado."
    },
    modem4g: [
      {
        id: "modem4g-100gb",
        name: "100 GB",
        badge: "PLANO MAIS VENDIDO",
        price: "R$ 99,90/mês",
        originalPrice: "R$ 149,90/mês",
        discount: "33% OFF",
        speed: "Até 100 Mbps",
        features: [
          "+ Você Sempre Conectado",
          "+ Vantagens Vivo Valoriza"
        ],
        popular: true,
        button: "Contratar"
      },
      {
        id: "modem4g-40gb",
        name: "40 GB",
        price: "R$ 69,90/mês",
        originalPrice: "R$ 99,90/mês",
        discount: "30% OFF",
        speed: "Até 50 Mbps",
        features: [
          "+ Você Sempre Conectado",
          "+ Vantagens Vivo Valoriza"
        ],
        popular: false,
        button: "Contratar"
      },
      {
        id: "modem4g-10gb",
        name: "10 GB",
        price: "R$ 49,90/mês",
        originalPrice: "R$ 69,90/mês",
        discount: "29% OFF",
        speed: "Até 25 Mbps",
        features: [
          "+ Você Sempre Conectado",
          "+ Vantagens Vivo Valoriza"
        ],
        popular: false,
        button: "Contratar"
      }
    ],
    vivoBox: [
      {
        id: "vivoBox-200gb",
        name: "200 GB",
        badge: "PLANO MAIS VENDIDO",
        price: "R$ 149,90/mês",
        originalPrice: "R$ 199,90/mês",
        discount: "25% OFF",
        speed: "Até 100 Mbps",
        features: [
          "+ Até 32 aparelhos juntos",
          "+ Vantagens Vivo Valoriza"
        ],
        popular: true,
        button: "Contratar"
      },
      {
        id: "vivoBox-100gb",
        name: "100 GB",
        price: "R$ 99,90/mês",
        originalPrice: "R$ 149,90/mês",
        discount: "33% OFF",
        speed: "Até 50 Mbps",
        features: [
          "+ Até 32 aparelhos juntos",
          "+ Vantagens Vivo Valoriza"
        ],
        popular: false,
        button: "Contratar"
      },
      {
        id: "vivoBox-50gb",
        name: "50 GB",
        price: "R$ 69,90/mês",
        originalPrice: "R$ 99,90/mês",
        discount: "30% OFF",
        speed: "Até 25 Mbps",
        features: [
          "+ Até 32 aparelhos juntos",
          "+ Vantagens Vivo Valoriza"
        ],
        popular: false,
        button: "Contratar"
      }
    ],
    satelite: [
      {
        id: "satelite-100gb",
        name: "100 GB",
        badge: "PLANO MAIS VENDIDO",
        price: "R$ 199,90/mês",
        originalPrice: "R$ 299,90/mês",
        discount: "33% OFF",
        speed: "Até 100 Mbps",
        features: [
          "100 GB de dados mensais",
          "Velocidade até 100 Mbps",
          "Cobertura nacional",
          "Suporte técnico 24/7",
          "Instalação incluída",
          "Equipamento incluso",
          "Sem fidelidade",
          "Vantagens Vivo Valoriza"
        ],
        popular: true,
        button: "Contratar"
      },
      {
        id: "satelite-40gb",
        name: "40 GB",
        price: "R$ 149,90/mês",
        originalPrice: "R$ 199,90/mês",
        discount: "25% OFF",
        speed: "Até 50 Mbps",
        features: [
          "40 GB de dados mensais",
          "Velocidade até 50 Mbps",
          "Cobertura nacional",
          "Suporte técnico 24/7",
          "Instalação incluída",
          "Equipamento incluso",
          "Sem fidelidade",
          "Vantagens Vivo Valoriza"
        ],
        popular: false,
        button: "Contratar"
      },
      {
        id: "satelite-10gb",
        name: "10 GB",
        price: "R$ 99,90/mês",
        originalPrice: "R$ 149,90/mês",
        discount: "33% OFF",
        speed: "Até 25 Mbps",
        features: [
          "10 GB de dados mensais",
          "Velocidade até 25 Mbps",
          "Cobertura nacional",
          "Suporte técnico 24/7",
          "Instalação incluída",
          "Equipamento incluso",
          "Sem fidelidade",
          "Vantagens Vivo Valoriza"
        ],
        popular: false,
        button: "Contratar"
      }
    ]
  },

  // FAQ Section
  faq: {
    title: "Tire suas dúvidas",
    subtitle: "Tire suas dúvidas sobre Internet Satélite",
    description: "Nossa equipe de especialistas está pronta para esclarecer todas as suas dúvidas sobre Internet Satélite e ajudar você a escolher o melhor plano para sua empresa.",
    button: "Falar com Especialista",
    whatsappMessage: "Olá! Gostaria de tirar dúvidas sobre Internet Satélite da Vivo."
  },

  // Serviços adicionais
  additionalServices: [
    {
      id: "produtividade",
      title: "MAIS PRODUTIVIDADE",
      description: "Office 365 com 1TB de armazenamento",
      icon: "Laptop",
      button: "Confira >"
    },
    {
      id: "combos",
      title: "COMBOS",
      description: "Economize com Combos 2 ou 3 em 1",
      icon: "Package",
      button: "Confira >"
    },
    {
      id: "cloud-server",
      title: "CLOUD SERVER",
      description: "Hospedagem de sites e aplicações na nuvem",
      icon: "Cloud",
      button: "Confira >"
    }
  ],

  // Produtos relacionados - Notebooks
  relatedProducts: {
    title: "Monte seu escritório com a Vivo",
    products: [
      {
        id: "dell-latitude-3450-i7",
        name: "Notebook Dell Latitude 3450 SSD",
        specs: "256GB Intel Core i7-1355U (13ª geração) 16GB Preto 14\"",
        price: "A partir de R$ 7.128,00",
        button: "Compre agora"
      },
      {
        id: "lenovo-thinkpad-x13s",
        name: "Notebook Lenovo ThinkPad X13s 5G",
        specs: "16GB RAM 512GB SSD Tela 13.3\"",
        price: "A partir de R$ 10.851,00",
        button: "Compre agora"
      },
      {
        id: "dell-latitude-3450-i5",
        name: "Notebook Dell Latitude 3450 SSD",
        specs: "512GB Intel Core i5-1345U (13ª geração) 16GB Preto 14\"",
        price: "A partir de R$ 6.148,00",
        button: "Compre agora"
      },
      {
        id: "lenovo-v15-g3",
        name: "Notebook Lenovo V15 G3 IAP 15",
        specs: "8G 256",
        price: "A partir de R$ 3.407,00",
        button: "Compre agora"
      }
    ]
  },

  // Informações legais
  legalInfo: {
    title: "Informações Importantes",
    content: [
      "Dados ilimitados: Após o consumo da franquia contratada, a velocidade nominal de acesso será de até 64 kbps para navegação na internet e uso de aplicativos.",
      "Franquia mensal: Consumo válido por 30 dias corridos a partir da ativação do plano.",
      "Período de uso: Franquia válida por 30 dias corridos.",
      "Disponibilidade: Serviço disponível mediante análise técnica e cobertura.",
      "Velocidade mínima instantânea: 1 Mbps.",
      "Estados disponíveis: São Paulo, Rio de Janeiro, Minas Gerais, Espírito Santo, Paraná, Santa Catarina, Rio Grande do Sul, Bahia, Sergipe, Alagoas, Pernambuco, Paraíba, Rio Grande do Norte, Ceará, Piauí, Maranhão, Goiás, Mato Grosso, Mato Grosso do Sul, Distrito Federal, Tocantins, Pará, Amapá, Rondônia, Acre, Roraima e Amazonas.",
      "Valores e taxa de instalação para clientes Pessoa Jurídica com fidelidade de 36 meses. Para outras opções, ligue 11 2362-9665."
    ]
  },

  // CTA final
  finalCta: {
    title: "Pronto para conectar sua empresa?",
    subtitle: "Fale com nossos especialistas e descubra como a Internet Satélite pode transformar seu negócio",
    primaryButton: "Solicitar Proposta",
    secondaryButton: "Falar com Especialista"
  }
}
