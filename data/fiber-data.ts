// Dados mockados para a página de Vivo Fibra Empresarial
// Facilita alterações futuras de preços, planos e informações

export const fiberConfig = {
  // Configurações gerais
  contact: {
    phone: "11 2362-9665",
    whatsapp: "https://wa.me/551123629665",
    supportHours: "24 horas por dia, 7 dias por semana"
  },

  // Informações do hero
  hero: {
    badge: "INTERNET EMPRESARIAL",
    title: "Vivo Fibra",
    subtitle: "Empresarial",
    description: "Internet corporativa a partir de R$ 79,99 e Wi-Fi 6 com instalação rápida e atendimento personalizado. Conectividade de alta performance para impulsionar seu negócio.",
    primaryButton: "Assine Já",
    secondaryButton: "Compre no 11 2362-9665",
    features: [
      {
        icon: "Wifi",
        label: "Wi-Fi 6 Grátis",
        description: "Instalação Inclusa"
      },
      {
        icon: "Shield",
        label: "Suporte 24h",
        description: "Especializado"
      },
      {
        icon: "Users",
        label: "Vivo Valoriza",
        description: "Benefícios Exclusivos"
      }
    ]
  },

  // Planos de fibra
  fiberPlans: [
    {
      id: "fibra-400",
      name: "Vivo Fibra 400 Mega",
      speed: "400 Mega",
      price: "R$ 79,99",
      period: "/mês",
      description: "Ideal para pequenas empresas que precisam de conectividade básica",
      features: [
        "400 Mega + Microsoft 365",
        "Instalação e Wi-Fi Grátis",
        "Vivo Valoriza",
        "Suporte técnico 24h",
        "IP fixo incluído",
        "Backup na nuvem 50GB",
        "Portabilidade gratuita"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "fibra-500",
      name: "Vivo Fibra 500 Mega",
      speed: "500 Mega",
      price: "R$ 89,99",
      period: "/mês",
      description: "Solução completa para empresas de médio porte",
      features: [
        "500 Mega + Microsoft 365",
        "Instalação e Wi-Fi Grátis",
        "Vivo Valoriza",
        "Suporte técnico prioritário 24h",
        "IP fixo incluído",
        "Backup na nuvem 75GB",
        "Portabilidade gratuita",
        "Gerenciamento básico de rede"
      ],
      popular: false,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "fibra-700",
      name: "Vivo Fibra 700 Mega",
      speed: "700 Mega",
      price: "R$ 99,99",
      period: "/mês",
      description: "Perfeito para equipes médias com alta demanda de dados",
      features: [
        "700 Mega + 23 GB + MDM",
        "Instalação e Wi-Fi Grátis",
        "Vivo Valoriza",
        "Gestão de Dispositivos - MDM",
        "Suporte técnico prioritário 24h",
        "IP fixo incluído",
        "Backup na nuvem 100GB",
        "Portabilidade gratuita"
      ],
      popular: true,
      badge: "MELHOR OFERTA VIVO.COM.BR",
      badgeColor: "bg-green-500",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "fibra-1giga",
      name: "Vivo Fibra 1 Giga",
      speed: "1 Giga",
      price: "R$ 299,99",
      period: "/mês",
      description: "Máxima performance para grandes corporações",
      features: [
        "1 Giga + Microsoft 365",
        "Instalação e Wi-Fi Grátis",
        "Vivo Valoriza",
        "Suporte técnico VIP 24h",
        "IP fixo incluído",
        "Backup na nuvem 100GB",
        "Portabilidade gratuita",
        "Gerenciamento completo de rede",
        "Relatórios de consumo detalhados",
        "Consultor dedicado"
      ],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ],

  // Combos fibra + pós
  combos: [
    {
      id: "combo-600-mdm",
      name: "Fibra + Pós + MDM",
      speed: "600 Mega",
      mobile: "23GB",
      originalPrice: "R$ 159,98",
      price: "R$ 129,98",
      discount: "19% OFF",
      period: "/mês",
      description: "Combo completo com gestão de dispositivos",
      features: [
        "600 Mega (Vivo Fibra)",
        "23GB (Vivo Pós)",
        "Gestão de Dispositivos - MDM",
        "+10GB na Portabilidade",
        "Instalação e Wi-Fi Grátis",
        "Suporte técnico prioritário 24h",
        "Vivo Valoriza"
      ],
      popular: false,
      badge: "POR TEMPO LIMITADO",
      badgeColor: "bg-red-500",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "combo-600",
      name: "Fibra + Pós",
      speed: "600 Mega",
      mobile: "26GB",
      originalPrice: "R$ 159,98",
      price: "R$ 129,98",
      discount: "19% OFF",
      period: "/mês",
      description: "Internet fibra + plano móvel empresarial",
      features: [
        "600 Mega (Vivo Fibra)",
        "26GB (Vivo Pós)",
        "+10GB na Portabilidade",
        "Instalação e Wi-Fi Grátis",
        "Suporte técnico prioritário 24h",
        "Vivo Valoriza",
        "Roaming nacional gratuito"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "combo-700-mdm",
      name: "Fibra + Pós + MDM",
      speed: "700 Mega",
      mobile: "23GB",
      originalPrice: "R$ 179,98",
      price: "R$ 139,98",
      discount: "22% OFF",
      period: "/mês",
      description: "Combo premium com gestão de dispositivos",
      features: [
        "700 Mega (Vivo Fibra)",
        "23GB (Vivo Pós)",
        "Gestão de Dispositivos - MDM",
        "+10GB na Portabilidade",
        "Instalação e Wi-Fi Grátis",
        "Suporte técnico VIP 24h",
        "Vivo Valoriza",
        "Backup na nuvem 100GB"
      ],
      popular: true,
      badge: "POR TEMPO LIMITADO",
      badgeColor: "bg-red-500",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "combo-700",
      name: "Fibra + Pós",
      speed: "700 Mega",
      mobile: "26GB",
      price: "R$ 139,98",
      period: "/mês",
      description: "Internet fibra premium + plano móvel empresarial",
      features: [
        "700 Mega (Vivo Fibra)",
        "26GB (Vivo Pós)",
        "+10GB na Portabilidade",
        "Instalação e Wi-Fi Grátis",
        "Suporte técnico VIP 24h",
        "Vivo Valoriza",
        "Roaming nacional gratuito",
        "Backup na nuvem 100GB"
      ],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ],

  // Estatísticas
  stats: [
    { number: "99.5%", label: "Disponibilidade Garantida", icon: "Shield" },
    { number: "1Gbps", label: "Velocidade Máxima", icon: "Zap" },
    { number: "24/7", label: "Suporte Especializado", icon: "Headphones" },
    { number: "Wi-Fi 6", label: "Tecnologia Avançada", icon: "Wifi" }
  ],

  // Benefícios inclusos
  benefits: [
    {
      icon: "Zap",
      title: "Internet Mais Rápida do Brasil",
      description: "Prêmio Melhor Escolha 2023. Velocidade real de fibra óptica com estabilidade garantida",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: "Shield",
      title: "Conexão Mais Estável",
      description: "99.5% de disponibilidade garantida com redundância de rede e suporte técnico especializado",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: "Users",
      title: "Suporte e Atendimento Especializado",
      description: "Atendimento dedicado para empresas com consultores especializados e suporte prioritário",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: "Wifi",
      title: "Instalação e Wi-Fi Grátis",
      description: "Wi-Fi 6 inclusos sem custo adicional com instalação profissional em até 7 dias",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: "BarChart3",
      title: "Aplicativos para seu Negócio",
      description: "Apps corporativos inclusos com relatórios de consumo e gestão centralizada",
      color: "from-red-400 to-rose-500"
    },
    {
      icon: "Router",
      title: "Equipamentos Premium",
      description: "Modem Wi-Fi 6 e repetidores de última geração inclusos com tecnologia de ponta",
      color: "from-indigo-400 to-purple-500"
    }
  ],

  // Programa Vivo Valoriza
  vivoValoriza: [
    {
      icon: "VR",
      title: "Melhore a experiência de seus funcionários",
      description: "Ganhe 6 serviços adicionais para sua empresa",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Gupy",
      title: "Plataforma de recrutamento e seleção",
      description: "Gupy com 50% OFF nos 3 primeiros meses!",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "Wellhub",
      title: "Transforme sua empresa em um ambiente saudável",
      description: "Adquira agora mesmo com 30% de desconto!",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "ME",
      title: "MEI Conecte. Fácil gestão financeira",
      description: "Ideal para MEI, micro e pequenos negócios.",
      color: "from-orange-500 to-red-500"
    }
  ],

  // Wi-Fi 6 benefícios
  wifi6Benefits: [
    {
      icon: "Wifi",
      title: "Wi-Fi que assegura a velocidade da Fibra",
      description: "Tecnologia Wi-Fi 6 garante que você aproveite 100% da velocidade da fibra óptica",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "Users",
      title: "Melhor desempenho mesmo com vários dispositivos conectados",
      description: "Suporte a até 128 dispositivos simultâneos sem perda de performance",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Gauge",
      title: "Menor latência, oferecendo mais estabilidade na conexão",
      description: "Latência reduzida em até 75% comparado ao Wi-Fi 5",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "Zap",
      title: "Menor eficiência energética",
      description: "Consumo de energia reduzido em até 30% comparado às tecnologias anteriores",
      color: "from-yellow-500 to-orange-500"
    }
  ],

  // Especificações Wi-Fi 6
  wifi6Specs: [
    { label: "Alcance", value: "Até 300m²", icon: "Router" },
    { label: "Dispositivos", value: "128 simultâneos", icon: "Users" },
    { label: "Velocidade", value: "Até 1.2 Gbps", icon: "Zap" },
    { label: "Segurança", value: "WPA3", icon: "Shield" }
  ],

  // Formas de contratação
  formasContratacao: [
    {
      icon: "MessageCircle",
      title: "Comprar online pelo WhatsApp",
      description: "Contrate diretamente pelo WhatsApp com nossos especialistas",
      color: "from-green-500 to-emerald-500",
      link: "https://wa.me/551123629665"
    },
    {
      icon: "Users",
      title: "Compre com um atendente pelo chat",
      description: "Atendimento especializado via chat em tempo real",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Phone",
      title: "Ligue e compre pelo 11 2362-9665",
      description: "Central de vendas empresariais com consultores dedicados",
      color: "from-purple-500 to-pink-500"
    }
  ],

  // FAQ
  faqs: [
    {
      question: "Qual o telefone da Vivo Fibra Empresarial para contratar ou pedir suporte?",
      answer: "Para contratar ou solicitar suporte da Vivo Fibra Empresarial, você pode ligar para 11 2362-9665. Nossa central de atendimento empresarial está disponível 24 horas por dia, 7 dias por semana.",
      category: "produtos"
    },
    {
      question: "Quais os benefícios de contratar internet fibra para empresas? Por que escolher um plano Vivo Fibra Empresarial?",
      answer: "A Vivo Fibra Empresarial oferece velocidade real de fibra óptica, Wi-Fi 6 grátis, instalação sem custo, suporte especializado 24h, estabilidade garantida de 99.5%, e acesso aos benefícios do programa Vivo Valoriza Empresas.",
      category: "produtos"
    },
    {
      question: "Já comprei e quero acompanhar meu pedido, como faço?",
      answer: "Você pode acompanhar seu pedido através do nosso portal empresarial, pelo aplicativo Vivo Empresas ou ligando para nossa central de atendimento no 11 2362-9665.",
      category: "produtos"
    },
    {
      question: "Como funciona o Wi-Fi 6?",
      answer: "O Wi-Fi 6 é a tecnologia mais avançada de conectividade sem fio, oferecendo velocidades até 4x superiores ao Wi-Fi 5, suporte a mais dispositivos conectados simultaneamente e menor latência.",
      category: "wifi"
    },
    {
      question: "Como participar do programa Vivo Valoriza Empresas?",
      answer: "Ao contratar qualquer plano Vivo Fibra Empresarial, você automaticamente tem acesso aos benefícios do programa Vivo Valoriza Empresas, incluindo descontos exclusivos com nossos parceiros.",
      category: "valoriza"
    },
    {
      question: "Qual é o tempo de instalação da Vivo Fibra Empresarial?",
      answer: "A instalação da Vivo Fibra Empresarial é realizada em até 7 dias úteis após a contratação, com agendamento flexível para não interferir nas atividades da sua empresa.",
      category: "produtos"
    }
  ],

  // CTAs
  cta: {
    title: "✔ Economia e velocidade em 1 só plano!",
    subtitle: "Impulsione seu negócio com Vivo Fibra + plano de celular!",
    primaryButton: "Assinar Fibra + Pós",
    secondaryButton: "Verificar Cobertura"
  },

  // Speed claim
  speedClaim: {
    title: "A Vivo Fibra é a internet fixa mais rápida do Brasil!",
    subtitle: "Prêmio Melhor Escolha 2023. Internet fixa mais rápida do Brasil!"
  }
}
