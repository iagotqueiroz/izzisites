import {
  MonitorSmartphone,
  Search,
  ShieldCheck,
  MessageCircle,
  Palette,
  Gauge,
} from "lucide-react"

const SERVICES = [
  {
    icon: Palette,
    title: "Layout personalizado",
    description:
      "Design exclusivo alinhado à identidade da sua marca, pensado para transmitir credibilidade e converter visitantes.",
  },
  {
    icon: MonitorSmartphone,
    title: "Design responsivo",
    description:
      "Seu site perfeito em qualquer tela — celular, tablet ou computador — para não perder nenhum cliente.",
  },
  {
    icon: Search,
    title: "SEO otimizado",
    description:
      "Estrutura preparada para o Google, ajudando sua empresa a ser encontrada por quem procura seus serviços.",
  },
  {
    icon: MessageCircle,
    title: "Contato direto",
    description:
      "Botão de WhatsApp e formulários integrados para que os clientes falem com você em um clique.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança SSL",
    description:
      "Certificado SSL incluso em todos os planos, garantindo confiança e proteção para os seus visitantes.",
  },
  {
    icon: Gauge,
    title: "Alta performance",
    description:
      "Sites rápidos e leves, com hospedagem e domínio configurados para uma experiência sem travamentos.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          O que fazemos
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Tudo que a sua empresa precisa para crescer online
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Cuidamos de cada detalhe para transformar a sua presença digital em resultados reais.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-border/60 bg-card p-7 transition-colors hover:border-primary/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-card-foreground">
              {service.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
