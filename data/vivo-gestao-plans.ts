// Mock data editável para os planos do Vivo Gestão
export const mockPlansData = {
  portabilidade: [
    {
      id: 1,
      offerType: "5G",
      title: "Plano de Celular 5G",
      data: "16 GB",
      price: "R$ 39,99",
      period: "por mês",
      benefits: ["Ligações ilimitadas", "SMS ilimitado", "Apps ilimitados", "5G incluso"],
      isFeatured: false
    },
    {
      id: 2,
      offerType: "MDM",
      title: "16 GB MDM",
      data: "25 GB",
      price: "R$ 44,99",
      period: "por mês",
      benefits: ["Ligações ilimitadas", "SMS ilimitado", "Apps ilimitados", "5G incluso", "Gestão de dispositivos"],
      isFeatured: true,
      featuredBadge: "MAIS CONTRATADO"
    },
    {
      id: 3,
      offerType: "EMPRESARIAL",
      title: "Plano Empresarial",
      data: "110 GB",
      price: "R$ 54,99",
      period: "por mês",
      benefits: ["Ligações ilimitadas", "SMS ilimitado", "Apps ilimitados", "5G incluso", "Suporte prioritário"],
      isFeatured: false
    },
    {
      id: 4,
      offerType: "PREMIUM",
      title: "Plano Premium",
      data: "200 GB",
      price: "R$ 59,99",
      period: "por mês",
      benefits: ["Ligações ilimitadas", "SMS ilimitado", "Apps ilimitados", "5G incluso", "Suporte VIP", "Roaming internacional"],
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
      isFeatured: false
    },
    {
      id: 3,
      offerType: "OFERTA EXCLUSIVA",
      title: "Plano de Celular + MDM",
      data: "6 GB",
      dataDetails: "6 GB uso livre + bônus",
      planType: "Plano Pós 5G",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      mdm: {
        title: "MDM",
        features: ["Gestão de dispositivos", "Plano Bloqueio de Chip"]
      },
      price: "R$ 44,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: false
    },
    {
      id: 4,
      offerType: "MENOR PREÇO POR GB",
      title: "Plano de Celular 5G",
      data: "100 GB",
      dataDetails: "100 GB uso livre + bônus",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      price: "R$ 99,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: false
    }
  ],
  mdm: [
    {
      id: 1,
      offerType: "OFERTA EXCLUSIVA",
      title: "Plano de Celular + MDM",
      data: "6 GB",
      planType: "Planos Pós 5G",
      network: "Melhor rede móvel do Brasil",
      mdm: {
        title: "MDM",
        features: ["Gestão de dispositivos", "Plano Bloqueio de Chip"]
      },
      price: "R$ 44,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: false
    },
    {
      id: 2,
      offerType: "OFERTA EXCLUSIVA",
      title: "Plano de Celular + MDM",
      data: "15 GB",
      planType: "Planos Pós 5G",
      network: "Melhor rede móvel do Brasil",
      mdm: {
        title: "MDM",
        features: ["Gestão de dispositivos", "Plano Bloqueio de Chip"]
      },
      price: "R$ 59,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: false
    },
    {
      id: 3,
      offerType: "OFERTA EXCLUSIVA",
      title: "Plano de Celular + MDM",
      data: "20 GB",
      planType: "Planos Pós 5G",
      network: "Melhor rede móvel do Brasil",
      mdm: {
        title: "MDM",
        features: ["Gestão de dispositivos", "Plano Bloqueio de Chip"]
      },
      price: "R$ 64,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: false
    },
    {
      id: 4,
      offerType: "OFERTA EXCLUSIVA",
      title: "Plano de Celular + MDM",
      data: "30 GB",
      planType: "Planos Pós 5G",
      network: "Melhor rede móvel do Brasil",
      mdm: {
        title: "MDM",
        features: ["Gestão de dispositivos", "Plano Bloqueio de Chip"]
      },
      price: "R$ 74,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      isFeatured: false
    }
  ],
  pacotesAdicionais: [
    {
      id: 1,
      offerType: "PACOTE ADICIONAL",
      data: "16 GB",
      calls: "Ligações e SMS para qualquer operadora",
      options: [
        { name: "Redes Sociais", apps: "Instagram, Facebook, X e mais...", selected: true },
        { name: "Streaming", apps: "Netflix, Youtube, Spotify e mais..", selected: false },
        { name: "Comunicação", apps: "Microsoft Teams e Cisco Webex", selected: false }
      ],
      speed: "5G mais rápido do mundo",
      price: "R$ 49,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Gubee"],
      isFeatured: false
    },
    {
      id: 2,
      offerType: "PACOTE ADICIONAL",
      data: "25 GB",
      calls: "Ligações e SMS para qualquer operadora",
      options: [
        { name: "Redes Sociais", apps: "Instagram, Facebook, X e mais...", selected: true },
        { name: "Streaming", apps: "Netflix, Youtube, Spotify e mais..", selected: false },
        { name: "Comunicação", apps: "Microsoft Teams e Cisco Webex", selected: false }
      ],
      speed: "5G mais rápido do mundo",
      price: "R$ 64,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Gubee"],
      isFeatured: false
    },
    {
      id: 3,
      offerType: "PACOTE ADICIONAL",
      data: "30 GB",
      calls: "Ligações e SMS para qualquer operadora",
      options: [
        { name: "Redes Sociais", apps: "Instagram, Facebook, X e mais...", selected: true },
        { name: "Streaming", apps: "Netflix, Youtube, Spotify e mais..", selected: false },
        { name: "Comunicação", apps: "Microsoft Teams e Cisco Webex", selected: false }
      ],
      speed: "5G mais rápido do mundo",
      price: "R$ 69,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Gubee"],
      isFeatured: false
    },
    {
      id: 4,
      offerType: "PACOTE ADICIONAL",
      data: "40 GB",
      calls: "Ligações e SMS para qualquer operadora",
      options: [
        { name: "Redes Sociais", apps: "Instagram, Facebook, X e mais...", selected: true },
        { name: "Streaming", apps: "Netflix, Youtube, Spotify e mais..", selected: false },
        { name: "Comunicação", apps: "Microsoft Teams e Cisco Webex", selected: false }
      ],
      speed: "5G mais rápido do mundo",
      price: "R$ 79,99",
      period: "/mês",
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
