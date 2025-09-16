// Dados mockados para a página Pacote para sua empresa
// Baseado no print da página oficial da Vivo Empresas

export const pacoteEmpresaConfig = {
  // Configurações gerais
  contact: {
    phone: "11 2362-9665",
    whatsapp: "https://wa.me/551123629665",
    supportHours: "24 horas por dia, 7 dias por semana"
  },

  // Banner principal
  banner: {
    title: "VIVO EMPRESAS COMBO: FIBRA 700 MEGA, 24 GB E MDM",
    price: "R$ 139,90",
    button: "Compre no 11 2362-9665"
  },

  // Informações do hero
  hero: {
    title: "Pacotes Vivo Empresas para o seu negócio",
    subtitle: "Soluções completas que combinam internet, telefonia e serviços digitais para impulsionar sua empresa",
    description: "Encontre o pacote ideal para sua empresa com internet fibra ótica de alta velocidade, telefonia móvel e fixa, além de serviços digitais como MDM e Microsoft 365."
  },

  // Ofertas em destaque
  ofertasDestaque: [
    {
      id: "combo-fibra-movel-700",
      badge: "MAIS COMPLETO",
      name: "Combo Fibra + Móvel",
      internet: "700 Mega",
      internetType: "Vivo Fibra",
      mobile: "26 GB",
      mobileType: "Vivo Móvel",
      features: ["Instalação e Wi-Fi grátis", "20GB extra com fibra"],
      services: ["Portabilidade +10GB", "Débito automático +3GB"],
      checkmarks: ["Redes sociais +10GB (+R$10)"],
      price: "R$ 139,98/mês",
      popular: true,
      button: "Assinar Já",
      buttonSecondary: "Mais detalhes"
    },
    {
      id: "combo-fibra-movel-500",
      badge: "OFERTA ESPECIAL",
      name: "Combo Fibra + Móvel",
      internet: "500 Mega",
      internetType: "Vivo Fibra",
      mobile: "19 GB",
      mobileType: "Vivo Móvel",
      features: ["Instalação e Wi-Fi grátis", "20GB extra com fibra"],
      services: ["Portabilidade +10GB", "Débito automático +3GB"],
      checkmarks: ["Redes sociais +10GB (+R$10)"],
      price: "R$ 129,98/mês",
      popular: false,
      button: "Assinar Já",
      buttonSecondary: "Mais detalhes"
    },
    {
      id: "combo-fibra-movel-400",
      badge: "MELHOR OFERTA",
      name: "Combo Fibra + Móvel",
      internet: "400 Mega",
      internetType: "Vivo Fibra",
      mobile: "19 GB",
      mobileType: "Vivo Móvel",
      features: ["Instalação e Wi-Fi grátis", "20GB extra com fibra"],
      services: ["Portabilidade +10GB", "Débito automático +3GB"],
      checkmarks: ["Redes sociais +10GB (+R$10)"],
      price: "R$ 119,98/mês",
      popular: false,
      button: "Assinar Já",
      buttonSecondary: "Mais detalhes"
    },
    {
      id: "plano-movel-100gb",
      badge: "OFERTA EXCLUSIVA",
      name: "Plano Móvel Premium",
      mobile: "113 GB",
      mobileType: "Vivo Móvel",
      features: ["Melhor rede móvel do mundo"],
      services: ["Portabilidade +10GB", "Débito automático +3GB"],
      checkmarks: ["Redes sociais +10GB (+R$10)"],
      price: "R$ 99,99/mês",
      popular: false,
      button: "Assinar Plano",
      buttonSecondary: "Mais detalhes"
    }
  ],

  // Ofertas adicionais
  ofertasAdicionais: [
    {
      id: "plano-movel-33gb",
      badge: "OFERTA ESPECIAL",
      name: "Plano Móvel Completo",
      mobile: "33 GB",
      mobileType: "Vivo Móvel",
      features: ["Melhor rede móvel do mundo"],
      services: ["Portabilidade +10GB", "Débito automático +3GB"],
      checkmarks: ["Redes sociais +10GB (+R$10)"],
      price: "R$ 59,99/mês",
      popular: false,
      button: "Assinar Plano",
      buttonSecondary: "Mais detalhes"
    },
    {
      id: "plano-movel-28gb",
      badge: "POR TEMPO LIMITADO",
      name: "Plano Móvel Intermediário",
      mobile: "28 GB",
      mobileType: "Vivo Móvel",
      features: ["Melhor rede móvel do mundo"],
      services: ["Portabilidade +10GB", "Débito automático +3GB"],
      checkmarks: ["Redes sociais +10GB (+R$10)"],
      price: "R$ 54,99/mês",
      popular: false,
      button: "Assinar Plano",
      buttonSecondary: "Mais detalhes"
    },
    {
      id: "plano-movel-19gb",
      badge: "MELHOR OFERTA",
      name: "Plano Móvel Básico",
      mobile: "19 GB",
      mobileType: "Vivo Móvel",
      features: ["Melhor rede móvel do mundo"],
      services: ["Portabilidade +10GB", "Débito automático +3GB"],
      checkmarks: ["Redes sociais +10GB (+R$10)"],
      price: "R$ 39,99/mês",
      popular: true,
      button: "Assinar Plano",
      buttonSecondary: "Mais detalhes"
    },
    {
      id: "fibra-voz-700",
      badge: "MAIS VELOCIDADE",
      name: "Vivo Fibra + Voz",
      internet: "700 Mega",
      internetType: "Vivo Fibra",
      features: ["Instalação e Wi-Fi Grátis"],
      services: ["Voz Fixa (Ilimitada Brasil Empresas)"],
      value: "Vivo Valoriza",
      price: "R$ 129,99/mês",
      originalPrice: "R$ 149,99/mês",
      discount: "13% OFF",
      popular: false,
      button: "Assine Já",
      buttonSecondary: "Mais detalhes"
    }
  ],

  // Seção Vivo Total
  vivoTotal: {
    title: "VIVO TOTAL",
    subtitle: "Internet Fibra + Móvel + Telefone",
    description: "A solução completa para sua empresa com internet de alta velocidade, telefonia móvel e fixa em um só pacote.",
    features: [
      "Internet fibra ótica de até 1GB",
      "Telefonia móvel com dados ilimitados",
      "Voz fixa empresarial",
      "Wi-Fi grátis incluso",
      "Instalação gratuita",
      "Suporte técnico 24/7"
    ]
  },

  // Seção de benefícios
  beneficios: {
    title: "Faça negócios com todo Brasil com Ilimitado Brasil Empresas",
    description: "Com o prefixo 015, sua empresa pode fazer ligações ilimitadas para todo o território nacional, mantendo a comunicação sempre ativa com clientes e parceiros em qualquer lugar do Brasil."
  },

  // FAQ
  faq: {
    title: "Tire suas dúvidas",
    questions: [
      {
        question: "O que é Vivo Combo?",
        answer: "O Vivo Combo é uma solução completa que combina internet fibra ótica, telefonia móvel e fixa em um só pacote, oferecendo economia e praticidade para empresas."
      },
      {
        question: "Quais produtos posso inserir no Combo Vivo?",
        answer: "No Combo Vivo você pode incluir internet fibra ótica, planos móveis, voz fixa, serviços de MDM (gestão de dispositivos) e Microsoft 365, entre outros serviços digitais."
      },
      {
        question: "Onde comprar Combo de internet com TV?",
        answer: "Você pode adquirir nossos combos através do site, telefone 0800 770 8510, WhatsApp ou em nossas lojas físicas espalhadas pelo Brasil."
      },
      {
        question: "Como funciona o MDM (Mobile Device Management)?",
        answer: "O MDM permite gerenciar todos os dispositivos móveis da sua empresa de forma centralizada, incluindo controle de aplicativos, políticas de segurança e backup automático."
      },
      {
        question: "O Microsoft 365 está incluído em todos os pacotes?",
        answer: "O Microsoft 365 está disponível em pacotes específicos que incluem os planos Business Basic, oferecendo acesso às versões web e móvel dos aplicativos Office."
      },
      {
        question: "Posso personalizar meu pacote empresarial?",
        answer: "Sim, oferecemos pacotes flexíveis que podem ser personalizados conforme as necessidades específicas da sua empresa. Entre em contato conosco para uma proposta sob medida."
      }
    ]
  },

  // Dicionário
  dicionario: {
    title: "Dicionário de Vivo Combo",
    terms: [
      {
        term: "Combo de telefone",
        definition: "Pacote que combina serviços de telefonia móvel e fixa em uma única solução empresarial."
      },
      {
        term: "Celular Pós Pago",
        definition: "Plano móvel empresarial com franquia de dados, ligações e SMS incluídos no valor mensal."
      },
      {
        term: "Fibra óptica",
        definition: "Tecnologia de internet de alta velocidade que utiliza cabos de fibra óptica para transmitir dados com máxima eficiência."
      },
      {
        term: "Megas",
        definition: "Unidade de medida para velocidade de internet, onde 1 Mega = 1 Mbps (Megabits por segundo)."
      },
      {
        term: "TV aberta e TV fechada",
        definition: "TV aberta refere-se aos canais gratuitos, enquanto TV fechada são os canais pagos de assinatura."
      },
      {
        term: "MDM (Mobile Device Management)",
        definition: "Sistema de gestão de dispositivos móveis que permite controle centralizado, segurança e monitoramento de smartphones e tablets corporativos."
      },
      {
        term: "Microsoft 365",
        definition: "Suite de produtividade da Microsoft que inclui aplicativos como Word, Excel, PowerPoint, Outlook e Teams em versões web e móvel."
      },
      {
        term: "Voz Fixa",
        definition: "Serviço de telefonia fixa empresarial que permite ligações locais e interurbanas com qualidade superior."
      }
    ]
  },

  // CTA final
  finalCta: {
    title: "Pronto para escolher seu pacote empresarial?",
    subtitle: "Fale com nossos especialistas e encontre a solução ideal para sua empresa",
    primaryButton: "Falar com Especialista",
    secondaryButton: "Ver Todos os Pacotes"
  }
}
