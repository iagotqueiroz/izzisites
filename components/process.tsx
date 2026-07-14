const STEPS = [
  {
    number: "01",
    title: "Conversa inicial",
    description:
      "Entendemos o seu negócio, seus objetivos e o que a sua empresa precisa para se destacar na internet.",
  },
  {
    number: "02",
    title: "Criação do layout",
    description:
      "Desenvolvemos um design personalizado e responsivo, alinhado à identidade da sua marca.",
  },
  {
    number: "03",
    title: "Ajustes e revisão",
    description:
      "Você acompanha o resultado e solicita as alterações necessárias até ficar do jeito ideal.",
  },
  {
    number: "04",
    title: "Publicação",
    description:
      "Colocamos seu site no ar com hospedagem, domínio, SSL e SEO — pronto para receber clientes.",
  },
]

export function Process() {
  return (
    <section id="processo" className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Do briefing ao site no ar em poucos passos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Um processo simples e transparente, sem complicação e sem termos técnicos difíceis.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-border/60 bg-background p-7">
              <span className="font-display text-4xl font-extrabold text-primary/30">{step.number}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
