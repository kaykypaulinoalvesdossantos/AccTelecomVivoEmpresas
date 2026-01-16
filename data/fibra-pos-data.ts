// Dados mockados para a página Fibra + Pós
// Baseado no print da página oficial da Vivo Empresas

export const fibraPosConfig = {
  // Configurações gerais
  contact: {
    phone: "11 98915-0001",
    whatsapp: "https://wa.me/5511989150001",
    supportHours: "24 horas por dia, 7 dias por semana"
  },

  // Informações do hero
  hero: {
    badge: "FIBRA + PÓS",
    title: "O plano com Fibra + Pós perfeito para você já está no seu carrinho",
    subtitle: "Internet de alta velocidade + telefonia móvel empresarial",
    description: "Combine internet fibra ótica de até 700 Mega com telefonia móvel de até 26GB de dados. Solução completa para sua empresa com economia e praticidade.",
    primaryButton: "Finalizar Pedido",
    secondaryButton: "Falar com Especialista",
    cartIcon: true,
    stats: [
      { number: "700+", label: "Mega de Internet", icon: "Wifi" },
      { number: "26GB", label: "Dados Móveis", icon: "Smartphone" },
      { number: "Grátis", label: "Wi-Fi Incluso", icon: "Router" },
      { number: "24/7", label: "Suporte", icon: "Headphones" }
    ]
  },

  // Planos Fibra + Pós
  plans: [
    {
      id: "fibra-pos-400",
      name: "Fibra + Pós",
      internet: "400 Mega",
      mobile: "19GB",
      features: ["Instalação e Wi-Fi grátis", "Portabilidade +10GB", "Débito automático +3GB", "20GB extra com fibra"],
      price: "R$ 119,98/mês",
      popular: false,
      button: "Assinar plano",
      buttonSecondary: "Mais detalhes"
    },
    {
      id: "fibra-pos-500",
      name: "Fibra + Pós",
      internet: "500 Mega",
      mobile: "19GB",
      features: ["Instalação e Wi-Fi grátis", "Portabilidade +10GB", "Débito automático +3GB", "20GB extra com fibra"],
      price: "R$ 129,98/mês",
      popular: false,
      button: "Assinar plano",
      buttonSecondary: "Mais detalhes"
    },
    {
      id: "fibra-pos-700",
      name: "Fibra + Pós",
      internet: "700 Mega",
      mobile: "26GB",
      features: ["Instalação e Wi-Fi grátis", "Portabilidade +10GB", "Débito automático +3GB", "20GB extra com fibra"],
      price: "R$ 139,98/mês",
      popular: true,
      button: "Assinar plano",
      buttonSecondary: "Mais detalhes"
    },
    {
      id: "fibra-pos-1gb",
      name: "Fibra + Pós",
      internet: "1 Giga",
      mobile: "26GB",
      features: ["Instalação e Wi-Fi grátis", "Portabilidade +10GB", "Débito automático +3GB", "20GB extra com fibra"],
      price: "R$ 399,98/mês",
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
          id: "fibra-pos-voz-400",
          name: "Fibra + Pós + Voz",
          internet: "400 Mega",
          mobile: "19GB",
          features: ["Instalação e Wi-Fi grátis", "Portabilidade +10GB", "Débito automático +3GB", "Voz Fixa"],
          price: "R$ 149,98/mês",
          popular: false,
          button: "Assinar plano"
        },
        {
          id: "fibra-pos-voz-500",
          name: "Fibra + Pós + Voz",
          internet: "500 Mega",
          mobile: "19GB",
          features: ["Instalação e Wi-Fi grátis", "Portabilidade +10GB", "Débito automático +3GB", "Voz Fixa"],
          price: "R$ 159,98/mês",
          popular: false,
          button: "Assinar plano"
        },
        {
          id: "fibra-pos-voz-700",
          name: "Fibra + Pós + Voz",
          internet: "700 Mega",
          mobile: "26GB",
          features: ["Instalação e Wi-Fi grátis", "Portabilidade +10GB", "Débito automático +3GB", "Voz Fixa"],
          price: "R$ 169,98/mês",
          popular: true,
          badge: "MAIS CONSUMIDO",
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
          features: ["Instalação e Wi-Fi Grátis", "Vivo Valoriza"],
          price: "R$ 89,99/mês",
          popular: false,
          button: "Assinar plano"
        },
        {
          id: "vivo-fibra-700",
          name: "Vivo Fibra 700 Mega",
          internet: "700 Mega",
          features: ["Instalação e Wi-Fi Grátis", "Vivo Valoriza"],
          price: "R$ 99,99/mês",
          popular: true,
          badge: "MELHOR OFERTA",
          button: "Assinar plano"
        },
        {
          id: "vivo-fibra-1gb",
          name: "Vivo Fibra 1 Giga",
          internet: "1 Giga",
          features: ["Instalação e Wi-Fi Grátis", "Vivo Valoriza"],
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
      }
    ]
  },

  // CTA final
  finalCta: {
    title: "Pronto para contratar seu pacote Fibra + Pós?",
    subtitle: "Fale com nossos especialistas e finalize seu pedido",
    primaryButton: "Finalizar Pedido",
    secondaryButton: "Falar com Especialista"
  }
}
