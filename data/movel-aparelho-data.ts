export const movelAparelhoConfig = {
  hero: {
    badge: "MÓVEL + APARELHO",
    title: "Combos Móveis para sua Empresa",
    description: "Combine planos móveis empresariais com os melhores smartphones do mercado. Economia garantida e tecnologia de ponta para sua equipe.",
    primaryButton: "Ver Ofertas",
    secondaryButton: "Falar com Consultor",
    stats: [
      { number: "24x", label: "Sem Juros", icon: "Smartphone" },
      { number: "100%", label: "Frete Grátis", icon: "Truck" },
      { number: "5G", label: "Tecnologia", icon: "Wifi" },
      { number: "24h", label: "Suporte", icon: "Headphones" }
    ]
  },

  combos: [
    {
      id: "moto-g05",
      brand: "MOTOROLA",
      device: "Moto G05 For Business 4G",
      storage: "128 GB",
      specs: {
        screen: "6.7\"",
        cameras: "50 + 5 MP / 8 MP",
        battery: "5000 mAh"
      },
      plan: "A partir do 6GB",
      devicePrice: "R$ 38,00",
      planPrice: "R$ 39,99",
      totalPrice: "R$ 77,99/mês",
      installments: "24x sem juros",
      features: [
        "Plano móvel a partir de 6GB",
        "Frete grátis para todo Brasil",
        "Suporte técnico 24/7",
        "Garantia estendida disponível",
        "Troca em até 7 dias"
      ],
      popular: true,
      image: "/telefone-movel-aparelho/MotoG05ForBusiness4G.jpg"
    },
    {
      id: "moto-g15",
      brand: "MOTOROLA",
      device: "Moto G15 4G",
      storage: "128 GB",
      specs: {
        screen: "6.7\"",
        cameras: "50 MP / 5 MP / 8 MP",
        battery: "5000 mAh"
      },
      plan: "A partir do 6GB",
      devicePrice: "R$ 35,00",
      planPrice: "R$ 39,99",
      totalPrice: "R$ 74,99/mês",
      installments: "24x sem juros",
      features: [
        "Plano móvel a partir de 6GB",
        "Frete grátis para todo Brasil",
        "Suporte técnico 24/7",
        "Garantia estendida disponível",
        "Troca em até 7 dias"
      ],
      popular: false,
      image: "/telefone-movel-aparelho/MotoG154G.jpg"
    },
    {
      id: "galaxy-a36",
      brand: "SAMSUNG",
      device: "Galaxy A36 5G",
      storage: "256 GB",
      specs: {
        screen: "6.7\"",
        cameras: "50 + 8 + 5 MP / 12 MP",
        battery: "5000 mAh"
      },
      plan: "A partir do 20GB",
      devicePrice: "R$ 88,00",
      planPrice: "R$ 59,99",
      totalPrice: "R$ 147,99/mês",
      installments: "24x sem juros",
      features: [
        "Plano móvel a partir de 20GB",
        "Frete grátis para todo Brasil",
        "Suporte técnico 24/7",
        "Garantia Samsung oficial",
        "Troca em até 7 dias"
      ],
      popular: false,
      image: "/telefone-movel-aparelho/GalaxyA365G.jpg"
    },
    {
      id: "galaxy-s24-fe",
      brand: "SAMSUNG",
      device: "Galaxy S24 FE",
      storage: "256 GB",
      specs: {
        screen: "6.1\"",
        cameras: "50 + 12 + 8 MP / 10 MP",
        battery: "4500 mAh"
      },
      plan: "A partir do 20GB",
      devicePrice: "R$ 127,00",
      planPrice: "R$ 59,99",
      totalPrice: "R$ 186,99/mês",
      installments: "24x sem juros",
      features: [
        "Plano móvel a partir de 20GB",
        "Frete grátis para todo Brasil",
        "Suporte técnico 24/7",
        "Garantia Samsung oficial",
        "Troca em até 7 dias"
      ],
      popular: false,
      image: "/telefone-movel-aparelho/GalaxyS24FE.jpg"
    },
    {
      id: "iphone-15",
      brand: "APPLE",
      device: "iPhone 15",
      storage: "256 GB",
      specs: {
        screen: "6.1\"",
        cameras: "48 + 12 MP / 12 MP",
        battery: "3349 mAh"
      },
      plan: "100GB Exclusivo",
      devicePrice: "R$ 228,00",
      planPrice: "R$ 99,99",
      totalPrice: "R$ 327,99/mês",
      installments: "24x sem juros",
      features: [
        "Plano móvel 100GB exclusivo",
        "Frete grátis para todo Brasil",
        "Suporte técnico 24/7",
        "Garantia Apple oficial",
        "Troca em até 7 dias"
      ],
      popular: false,
      image: "/telefone-movel-aparelho/iphone15.jpg"
    }
  ],

  // Planos móveis disponíveis
  mobilePlans: {
    title: "Planos Móveis Disponíveis",
    subtitle: "Escolha o plano ideal para sua empresa",
    plans: [
      {
        category: "A partir do 6GB",
        color: "purple",
        plans: [
          { name: "6 GB", price: "R$ 39,99" },
          { name: "15 GB", price: "R$ 54,99" }
        ]
      },
      {
        category: "A partir do 20GB",
        color: "pink",
        plans: [
          { name: "20 GB", price: "R$ 59,99" },
          { name: "30 GB", price: "R$ 69,99" },
          { name: "40 GB", price: "R$ 79,99" },
          { name: "50 GB", price: "R$ 89,99" }
        ]
      },
      {
        category: "100GB Exclusivo",
        color: "blue",
        plans: [
          { name: "100 GB", price: "R$ 99,99" }
        ]
      }
    ]
  },

  benefits: [
    {
      icon: "Smartphone",
      title: "Aparelhos Premium",
      description: "Os melhores smartphones das principais marcas do mercado"
    },
    {
      icon: "Wifi",
      title: "Planos Empresariais",
      description: "Planos móveis otimizados para necessidades empresariais"
    },
    {
      icon: "Truck",
      title: "Frete Grátis",
      description: "Entrega gratuita para todo o território nacional"
    },
    {
      icon: "Shield",
      title: "Garantia Estendida",
      description: "Proteção adicional para seus dispositivos móveis"
    },
    {
      icon: "Headphones",
      title: "Suporte 24/7",
      description: "Atendimento especializado sempre disponível"
    },
    {
      icon: "CreditCard",
      title: "Sem Juros",
      description: "Parcelamento em até 24x sem acréscimo"
    }
  ],

  faq: [
    {
      question: "O que é o Vivo Combo?",
      answer: "O Vivo Combo é uma oferta que combina um smartphone com um plano móvel empresarial, oferecendo economia e praticidade para sua empresa."
    },
    {
      question: "Quais produtos tenho no Oferta Combo: Móvel + Aparelho?",
      answer: "Você recebe um smartphone de sua escolha junto com um plano móvel Smart Business, incluindo dados, minutos e SMS para uso empresarial."
    },
    {
      question: "Qual é o melhor combo para empresas?",
      answer: "O melhor combo depende das necessidades da sua empresa. Oferecemos opções desde 6GB até 100GB de dados, com smartphones de diferentes marcas e especificações."
    },
    {
      question: "Posso contratar sendo cliente atual?",
      answer: "Sim, clientes atuais podem contratar novos combos ou fazer upgrade de seus planos existentes."
    },
    {
      question: "O que é o Vivo Valoriza?",
      answer: "O Vivo Valoriza é um programa de fidelidade que oferece benefícios exclusivos para clientes empresariais, incluindo descontos e serviços especiais."
    },
    {
      question: "Posso adicionar seguro ao meu aparelho?",
      answer: "Sim, oferecemos seguro para celular com cobertura completa contra roubo, furto e danos acidentais."
    },
    {
      question: "Como cancelar um combo?",
      answer: "O cancelamento pode ser feito através do nosso atendimento ao cliente ou em uma de nossas lojas. Consulte as condições contratuais."
    }
  ],

  contact: {
    whatsapp: "https://wa.me/5511989150001",
    phone: "11989150001",
    email: "empresas@vivo.com.br"
  }
}
