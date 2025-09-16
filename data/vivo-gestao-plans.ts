// Mock data editável para os planos do Vivo Gestão
export const mockPlansData = {
  portabilidade: [
    {
      id: 1,
      offerType: "OFERTA POR TEMPO LIMITADO",
      title: "Plano de Celular 5G",
      data: "6 GB",
      dataDetails: "6 GB uso livre + bônus",
      portabilityBonus: "10 GB de bônus para portabilidade",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      price: "R$ 39,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: false
    },
    {
      id: 2,
      offerType: "OFERTA POR TEMPO LIMITADO",
      title: "Plano de Celular 5G",
      data: "15 GB",
      dataDetails: "15 GB uso livre + bônus",
      portabilityBonus: "10 GB de bônus para portabilidade",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      price: "R$ 54,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: true
    },
    {
      id: 3,
      offerType: "OFERTA POR TEMPO LIMITADO",
      title: "Plano de Celular 5G",
      data: "20 GB",
      dataDetails: "20 GB uso livre + bônus",
      portabilityBonus: "10 GB de bônus para portabilidade",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      price: "R$ 59,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: false
    }
  ],
  novaLinha: [
    {
      id: 1,
      offerType: "OFERTA IMPERDÍVEL",
      title: "Plano de Celular 5G",
      data: "6 GB",
      dataDetails: "6 GB uso livre + bônus",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      price: "R$ 39,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: false
    },
    {
      id: 2,
      offerType: "OFERTA MAIS VENDIDA",
      title: "Plano de Celular 5G",
      data: "15 GB",
      dataDetails: "15 GB uso livre + bônus",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      price: "R$ 54,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: true
    },
    {
      id: 3,
      offerType: "OFERTA EXCLUSIVA",
      title: "Plano de Celular 5G",
      data: "20 GB",
      dataDetails: "20 GB uso livre + bônus",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      price: "R$ 59,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: false
    }
  ],
  mdm: [
    {
      id: 1,
      offerType: "OFERTA POR TEMPO LIMITADO",
      title: "Plano de Celular + MDM",
      data: "6 GB",
      dataDetails: "6 GB uso livre + bônus",
      portabilityBonus: "10 GB de bônus para portabilidade",
      planType: "Planos Pós 5G",
      network: "Melhor rede móvel do Brasil",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      mdm: {
        title: "MDM",
        features: ["Gestão de dispositivos", "Plano Bloqueio de Chip"]
      },
      price: "R$ 39,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: false
    },
    {
      id: 2,
      offerType: "OFERTA POR TEMPO LIMITADO",
      title: "Plano de Celular + MDM",
      data: "15 GB",
      dataDetails: "15 GB uso livre + bônus",
      portabilityBonus: "10 GB de bônus para portabilidade",
      planType: "Planos Pós 5G",
      network: "Melhor rede móvel do Brasil",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      mdm: {
        title: "MDM",
        features: ["Gestão de dispositivos", "Plano Bloqueio de Chip"]
      },
      price: "R$ 54,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: true
    },
    {
      id: 3,
      offerType: "OFERTA POR TEMPO LIMITADO",
      title: "Plano de Celular + MDM",
      data: "20 GB",
      dataDetails: "20 GB uso livre + bônus",
      portabilityBonus: "10 GB de bônus para portabilidade",
      planType: "Planos Pós 5G",
      network: "Melhor rede móvel do Brasil",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      mdm: {
        title: "MDM",
        features: ["Gestão de dispositivos", "Plano Bloqueio de Chip"]
      },
      price: "R$ 59,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: false
    }
  ],
  pacotesAdicionais: [
    {
      id: 1,
      offerType: "PACOTE ADICIONAL",
      data: "10 GB",
      calls: "Ligações e SMS para qualquer operadora",
      options: [
        { name: "Redes Sociais", apps: "Instagram, Facebook, X e mais...", selected: true },
        { name: "Streaming", apps: "Netflix, Youtube, Spotify e mais..", selected: false },
        { name: "Comunicação", apps: "Microsoft Teams e Cisco Webex", selected: false }
      ],
      speed: "5G mais rápido do mundo",
      price: "R$ 10,00",
      period: "/mês por linha",
      benefits: ["VR", "Buser", "Gubee"],
      isFeatured: false
    }
  ],
  beneficios: [
    {
      id: 1,
      offerType: "BENEFÍCIOS",
      title: "Benefícios Vivo Gestão",
      data: "Inclusos",
      price: "Grátis",
      period: "nos planos",
      benefits: ["Gestão de dispositivos", "Controle de dados", "Relatórios", "Suporte 24/7"],
      isFeatured: false
    }
  ],
  planos: [
    {
      id: 1,
      offerType: "PLANOS",
      title: "Todos os Planos",
      data: "Disponíveis",
      price: "Consulte",
      period: "preços",
      benefits: ["5G", "MDM", "Fibra", "Móvel"],
      isFeatured: false
    }
  ]
}

// Tipos TypeScript para os planos
export interface PlanOption {
  name: string
  apps: string
  selected: boolean
}

export interface MDMFeatures {
  title: string
  features: string[]
}

export interface Plan {
  id: number
  offerType: string
  title?: string
  data: string
  dataDetails?: string
  portabilityBonus?: string
  planType?: string
  network?: string
  features?: string[]
  mdm?: MDMFeatures
  calls?: string
  options?: PlanOption[]
  speed?: string
  price: string
  period: string
  benefits: string[]
  isFeatured: boolean
  featuredBadge?: string
}

export interface PlansData {
  portabilidade: Plan[]
  novaLinha: Plan[]
  mdm: Plan[]
  pacotesAdicionais: Plan[]
  beneficios: Plan[]
  planos: Plan[]
}
