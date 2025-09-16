// Dados mockados para a página de Pacotes
// Baseado no print da página oficial da Vivo Empresas

export const pacotesConfig = {
  // Configurações gerais
  contact: {
    phone: "11 2362-9665",
    whatsapp: "https://wa.me/551123629665",
    supportHours: "24 horas por dia, 7 dias por semana"
  },

  // Informações do hero geral
  hero: {
    badge: "PACOTES EMPRESARIAIS",
    title: "Pacotes completos para sua empresa",
    subtitle: "Internet, telefonia e muito mais em um só lugar",
    description: "Combine internet fibra ótica de alta velocidade com telefonia móvel e fixa para sua empresa. Soluções completas com economia e praticidade.",
    primaryButton: "Ver Pacotes",
    secondaryButton: "Falar com Especialista",
    stats: [
      { number: "600+", label: "Mega de Internet", icon: "Wifi" },
      { number: "26GB", label: "Dados Móveis", icon: "Smartphone" },
      { number: "Grátis", label: "Wi-Fi Incluso", icon: "Router" },
      { number: "24/7", label: "Suporte", icon: "Headphones" }
    ]
  },

  // Planos Fibra + Pós
  fibraPosPlans: [
    {
      id: "fibra-pos-600-mdm",
      name: "Fibra + Pós + MDM",
      internet: "600 Mega",
      mobile: "23GB",
      features: ["Confiante Empresas + MDM", "+10GB na Portabilidade"],
      price: "R$ 129,98/mês",
      originalPrice: "R$ 159,98/mês",
      discount: "19% OFF",
      popular: false,
      button: "Analisar plano",
      buttonSecondary: "Mais detalhes"
    },
    {
      id: "fibra-pos-600",
      name: "Fibra + Pós",
      internet: "600 Mega",
      mobile: "26GB",
      features: ["+10GB na Portabilidade"],
      price: "R$ 129,98/mês",
      originalPrice: "R$ 159,98/mês",
      discount: "19% OFF",
      popular: true,
      button: "Assinar plano",
      buttonSecondary: "Mais detalhes"
    },
    {
      id: "fibra-pos-700-mdm",
      name: "Fibra + Pós + MDM",
      internet: "700 Mega",
      mobile: "23GB",
      features: ["Confiante Empresas + MDM", "+10GB na Portabilidade"],
      price: "R$ 139,98/mês",
      originalPrice: "R$ 179,98/mês",
      discount: "22% OFF",
      popular: false,
      button: "Analisar plano",
      buttonSecondary: "Mais detalhes"
    },
    {
      id: "fibra-pos-700",
      name: "Fibra + Pós",
      internet: "700 Mega",
      mobile: "26GB",
      features: ["+10GB na Portabilidade"],
      price: "R$ 139,98/mês",
      popular: false,
      button: "Assinar plano",
      buttonSecondary: "Mais detalhes"
    }
  ],

  // Pacotes Exclusivos
  exclusivePackages: {
    title: "Confira também nossos pacotes exclusivos para sua empresa",
    tabs: ["Fibra + Pós + Voz", "Vivo Fibra"],
    activeTab: "Fibra + Pós + Voz",
    plans: {
      "fibra-pos-voz": [
        {
          id: "fibra-pos-voz-600",
          name: "Fibra + Pós + Voz",
          internet: "600 Mega",
          mobile: "26GB",
          features: ["Inclusão de Wi-Fi grátis", "+10GB na Portabilidade", "Voz Fixa"],
          price: "R$ 159,98/mês",
          originalPrice: "R$ 199,98/mês",
          discount: "20% OFF",
          popular: false,
          button: "Analisar plano"
        },
        {
          id: "fibra-pos-voz-700",
          name: "Fibra + Pós + Voz",
          internet: "700 Mega",
          mobile: "35GB",
          features: ["Inclusão de Wi-Fi grátis", "+10GB na Portabilidade", "Voz Fixa"],
          price: "R$ 184,09/mês",
          originalPrice: "R$ 229,09/mês",
          discount: "20% OFF",
          popular: true,
          badge: "MAIS CONSUMIDO",
          button: "Assinar plano"
        },
        {
          id: "fibra-pos-voz-1gb",
          name: "Fibra + Pós + Voz",
          internet: "1GB",
          mobile: "40GB",
          features: ["Inclusão de Wi-Fi grátis", "+10GB na Portabilidade", "Voz Fixa"],
          price: "R$ 389,99/mês",
          originalPrice: "R$ 489,99/mês",
          discount: "20% OFF",
          popular: false,
          button: "Assinar plano"
        }
      ],
      "vivo-fibra": [
        {
          id: "vivo-fibra-400",
          name: "Vivo Fibra 400 Mega",
          internet: "400 Mega",
          features: ["Instalação e Wi-Fi Grátis", "Vivo Valoriza"],
          price: "R$ 79,99/mês",
          popular: false,
          button: "Assinar plano"
        },
        {
          id: "vivo-fibra-500",
          name: "Vivo Fibra 500 Mega",
          internet: "500 Mega",
          features: ["500 Mega + Microsoft 365", "Instalação e Wi-Fi Grátis", "Vivo Valoriza"],
          price: "R$ 89,99/mês",
          popular: false,
          button: "Assinar plano"
        },
        {
          id: "vivo-fibra-700",
          name: "Vivo Fibra 700 Mega",
          internet: "700 Mega",
          features: ["700 Mega + 25 GB - MBM", "Instalação e Wi-Fi Grátis", "Vivo Valoriza"],
          price: "R$ 99,99/mês",
          popular: true,
          badge: "MELHOR OFERTA DO MÊS",
          button: "Assinar plano"
        },
        {
          id: "vivo-fibra-1giga",
          name: "Vivo Fibra 1 Giga",
          internet: "1 Giga",
          features: ["1 Giga + Microsoft 365", "Instalação e Wi-Fi Grátis", "Vivo Valoriza"],
          price: "R$ 299,99/mês",
          popular: false,
          button: "Assinar plano"
        }
      ]
    }
  },

  // Recursos e Benefícios
  features: {
    title: "Banda larga com fibra ótica, Wi-Fi grátis e muito mais",
    subtitle: "Veja tudo que você vai poder aproveitar",
    sections: [
      {
        id: "vivo-internet-fibra",
        title: "Vivo Internet Fibra",
        description: "Internet de alta velocidade com fibra ótica",
        features: [
          "Velocidade simétrica de até 1GB",
          "Wi-Fi grátis incluso",
          "Instalação gratuita",
          "Suporte técnico 24/7",
          "Garantia de velocidade"
        ],
        image: "/professional-businesswoman.png"
      },
      {
        id: "telefonia-pos",
        title: "Telefonia Pós",
        description: "Linha móvel empresarial com dados ilimitados",
        features: [
          "Dados móveis de até 40GB",
          "Ligações ilimitadas",
          "SMS ilimitado",
          "Roaming nacional",
          "Suporte empresarial"
        ],
        image: "/professional-businessman.png"
      },
      {
        id: "plano-celular",
        title: "Plano de Celular",
        description: "Plano móvel completo para sua empresa",
        features: [
          "Múltiplas linhas",
          "Gestão centralizada",
          "Controle de gastos",
          "Relatórios detalhados",
          "Suporte especializado"
        ],
        image: "/professional-business-team-using-smartphones-in-mo.png"
      },
      {
        id: "vivo-valoriza",
        title: "Vivo Valoriza Empresas",
        description: "Vantagens exclusivas para empresas",
        features: [
          "Descontos em parceiros",
          "Programa de fidelidade",
          "Benefícios exclusivos",
          "Suporte prioritário",
          "Gestão de conta online"
        ],
        image: "/professional-sales-manager.png",
        appLinks: {
          googlePlay: "https://play.google.com/store/apps/details?id=com.vivo.empresas",
          appStore: "https://apps.apple.com/app/vivo-empresas/id123456789"
        }
      }
    ]
  },

  // FAQ
  faq: {
    title: "Perguntas Frequentes",
    questions: [
      {
        question: "O que é o Vivo Total Empresas?",
        answer: "O Vivo Total Empresas é um pacote completo que combina internet fibra ótica de alta velocidade com telefonia móvel e fixa, oferecendo economia e praticidade para empresas."
      },
      {
        question: "Qual o melhor combo com internet e celular?",
        answer: "O melhor combo depende das necessidades da sua empresa. Para empresas pequenas, recomendamos o Fibra + Pós 600 Mega com 26GB. Para empresas maiores, o Fibra + Pós + Voz 700 Mega com 35GB oferece mais recursos."
      },
      {
        question: "Qual a vantagem do plano Vivo Fibra para empresas?",
        answer: "O Vivo Fibra para empresas oferece velocidade simétrica, Wi-Fi grátis, instalação gratuita, suporte técnico 24/7 e garantia de velocidade, além de benefícios exclusivos do programa Vivo Valoriza."
      },
      {
        question: "Posso adicionar mais linhas ao meu pacote?",
        answer: "Sim, você pode adicionar quantas linhas precisar ao seu pacote empresarial. Entre em contato conosco para personalizar sua solução."
      },
      {
        question: "Como funciona a portabilidade de números?",
        answer: "A portabilidade é gratuita e você mantém seu número atual. Oferecemos +10GB de dados móveis como bônus na portabilidade."
      },
      {
        question: "O que está incluído no MDM (Mobile Device Management)?",
        answer: "O MDM inclui gestão centralizada de dispositivos móveis, controle de aplicativos, políticas de segurança, backup automático e suporte técnico especializado."
      }
    ]
  },

  // CTA final
  finalCta: {
    title: "Pronto para escolher seu pacote ideal?",
    subtitle: "Fale com nossos especialistas e encontre a solução perfeita para sua empresa",
    primaryButton: "Falar com Especialista",
    secondaryButton: "Ver Todos os Pacotes"
  }
}
