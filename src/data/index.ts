import {
  Wifi,
  TowerControl as Tower,
  Network,
  Router,
  ShieldCheck,
  Cloud,
  Code2,
  Cctv,
  Bot,
  Activity,
  BrainCircuit,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

export const SERVICES = [
  {
    title: "Conectividade & Telecom",
    icon: Wifi,
    description:
      "Implantação de redes, enlaces rádio e conectividade urbana/rural.",
    tags: ["Redes", "Enlaces Rádio", "Áreas Rurais", "Corporativo"],
    color: "text-blue-400",
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Fibra Óptica & FTTH",
    icon: Network,
    description: "Redes FTTH, backbone óptico e certificação de fibra.",
    tags: ["FTTH", "Backbone", "Fusão", "Certificação"],
    color: "text-purple-400",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Torres & Infraestrutura",
    icon: Tower,
    description: "Instalação e manutenção de torres e antenas.",
    tags: ["Torres", "Antenas", "Cabeamento", "Vistorias"],
    color: "text-orange-400",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Redes Corporativas",
    icon: Router,
    description: "Wi-Fi profissional e redes seguras VLAN/VPN.",
    tags: ["Wi-Fi Pro", "VLAN/VPN", "Redundância", "Switching"],
    color: "text-green-400",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Segurança da Informação",
    icon: ShieldCheck,
    description: "Firewall, VPN segura e proteção contra ataques.",
    tags: ["Firewall", "LGPD", "DDoS", "Monitoramento"],
    color: "text-red-400",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Cloud & Data Center",
    icon: Cloud,
    description: "Migração, virtualização e gestão de nuvem híbrida.",
    tags: ["Cloud Híbrida", "Backup", "Virtualização", "Recuperação"],
    color: "text-sky-400",
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Desenv. de Software",
    icon: Code2,
    description: "Sistemas web personalizados e integrações via API.",
    tags: ["Sistemas Web", "APIs", "Dashboards", "ISPs"],
    color: "text-pink-400",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Segurança Eletrônica",
    icon: Cctv,
    description: "CFTV, controle de acesso e alarmes inteligentes.",
    tags: ["CFTV", "Biometria", "Alarmes", "Portaria Remota"],
    color: "text-yellow-400",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Automação Inteligente",
    icon: Bot,
    description: "Soluções IoT e automação predial/residencial.",
    tags: ["IoT", "Smart Home", "Predial", "Integração"],
    color: "text-indigo-400",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Monitoramento NOC",
    icon: Activity,
    description: "Suporte 24/7 e gestão ativa de ativos de TI.",
    tags: ["NOC 24/7", "SLA", "Suporte", "Gestão de Ativos"],
    color: "text-emerald-400",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Consultoria Tecnológica",
    icon: BrainCircuit,
    description: "Planejamento, viabilidade e expansão de infraestrutura.",
    tags: ["Consultoria", "Projetos", "Viabilidade", "Expansão"],
    color: "text-gold",
    colSpan: "md:col-span-3 lg:col-span-3",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Mudar para a Starnet foi a melhor decisão para minha empresa. A velocidade é consistente e o suporte é incrível.",
    name: "Marcos Silva",
    role: "Líder Técnico, CreativeFlow",
    rating: 5,
    gender: "male",
  },
  {
    quote:
      "Finalmente um provedor que entrega a velocidade prometida. Jogar online nunca foi tão liso, zero lag.",
    name: "Sarah Jenkins",
    role: "Pro Gamer",
    rating: 5,
    gender: "female",
  },
  {
    quote:
      "A instalação foi rápida e profissional. O equipamento é moderno e o streaming em 4K roda perfeito.",
    name: "Davi Mello",
    role: "Residencial",
    rating: 4,
    gender: "male",
  },
];

export const ABOUT_FEATURES = [
  {
    icon: "⚙️",
    title: "Infraestrutura Própria de Alta Capacidade e Escalabilidade",
    description:
      "Backbone robusto com rede própria, alta redundância e capacidade preparada para crescimento contínuo e operações críticas.",
  },
  {
    icon: "🕒",
    title: "Monitoramento 24/7 com SLA e Alta Disponibilidade",
    description:
      "Supervisão contínua da rede e dos serviços, com indicadores de desempenho, resposta rápida e garantia de disponibilidade.",
  },
  {
    icon: "🛡️",
    title: "Segurança da Informação com Proteção Multicamadas",
    description:
      "Firewall avançado, criptografia, controle de acesso e políticas de segurança para garantir integridade, confidencialidade e disponibilidade dos dados.",
  },
  {
    icon: "☁️",
    title: "Cloud Computing e Automação Inteligente",
    description:
      "Infraestrutura em nuvem escalável, virtualização de ambientes e soluções de automação residencial e corporativa integradas para máxima eficiência operacional.",
  },
];

export const CONTACT_INFO = {
  address: "AVENIDA ARTHUR ROQUE, 1419, CONGÓS.",
  city: "Macapá - AP",
  phone: "(96) 98104-4966",
  email: "adm@starnet.dev.br",
};

export const SOCIAL_LINKS = [
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
];

export const FOOTER_LINKS = {
  navigation: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Nossos Serviços", href: "#servicos" },
    { label: "Avaliações", href: "#avaliacao" },
    { label: "Contato", href: "#contato" },
  ],
  legal: [
    { label: "Termos de Uso", href: "#" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Contrato de Serviço", href: "#" },
  ],
};
