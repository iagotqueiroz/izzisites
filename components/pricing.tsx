import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL =
  "https://wa.me/5527998154219?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20planos%20da%20IzziSites!"

const CUSTOM_WHATSAPP_URL =
  "https://wa.me/5527998154219?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento%20para%20um%20plano%20personalizado!"

const PLANS = [
  {
    name: "Essencial",
    monthly: "82,90",
    cash: "497,00",
    setup: "120,00",
    description: "Ideal para começar sua presença digital com o essencial bem feito.",
    featured: false,
    features: [
      "Até 5 páginas",
      "Layout personalizado",
      "Design responsivo",
      "Botão de WhatsApp",
      "Formulário de contato",
      "SEO básico",
      "Certificado SSL",
      "1 alteração",
      "Suporte",
    ],
  },
  {
    name: "Performance",
    monthly: "132,90",
    cash: "797,00",
    setup: "120,00",
    description: "Tudo do Essencial, com mais recursos para o seu negócio crescer.",
    featured: true,
    features: [
      "Até 8 páginas",
      "Seções personalizadas",
      "Galeria de fotos",
      "Portfólio ou catálogo de serviços",
      "Hospedagem inclusa",
      "Domínio incluso",
      "3 alterações por mês",
      "Suporte prioritário",
    ],
  },
  {
    name: "Premium",
    monthly: "197,90",
    cash: "1.187,00",
    setup: "120,00",
    description: "Tudo do Performance, com o máximo de exclusividade e recursos avançados.",
    featured: false,
    features: [
      "Até 15 páginas",
      "Layout totalmente exclusivo",
      "Blog integrado",
      "SEO avançado",
      "5 alterações por mês",
      "Suporte prioritário",
    ],
  },
]

export function Pricing() {
  return (
    <section id="planos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Planos</span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Escolha o plano ideal para a sua empresa
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Preços transparentes, sem surpresas. Pague mensalmente ou à vista.
        </p>
      </div>

      <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl border p-8 ${
              plan.featured
                ? "border-primary bg-card shadow-2xl shadow-primary/10 lg:-mt-4 lg:mb-4"
                : "border-border/60 bg-card"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                Mais popular
              </span>
            )}

            <h3 className="font-display text-2xl font-bold text-card-foreground">{plan.name}</h3>
            <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground">
              {plan.description}
            </p>

            <div className="mt-6">
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-medium text-muted-foreground">R$</span>
                <span className="font-display text-5xl font-extrabold text-card-foreground">
                  {plan.monthly}
                </span>
                <span className="text-sm font-medium text-muted-foreground">/mês</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                ou R$ {plan.cash} à vista
                <span className="block">+ adesão de R$ {plan.setup}</span>
              </p>
            </div>

            <Button
              render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
              size="lg"
              variant={plan.featured ? "default" : "outline"}
              className="mt-6 w-full font-semibold"
            >
              Contratar {plan.name}
            </Button>

            <ul className="mt-8 flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-card-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Os planos Performance e Premium incluem todos os recursos dos planos anteriores.
      </p>

      <div className="mt-8 flex flex-col items-center gap-6 rounded-3xl border border-primary/40 bg-card p-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="max-w-2xl">
          <h3 className="font-display text-2xl font-bold text-card-foreground">Plano Personalizado</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Para empresas que precisam de funcionalidades, integrações ou requisitos além dos nossos
            planos padrão.
          </p>
        </div>
        <Button
          render={<a href={CUSTOM_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
          size="lg"
          className="w-full font-semibold sm:w-auto"
        >
          Solicitar orçamento
        </Button>
      </div>
    </section>
  )
}
