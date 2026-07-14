"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    question: "Quanto tempo leva para o meu site ficar pronto?",
    answer:
      "O prazo varia conforme o plano e a complexidade do projeto, mas trabalhamos de forma ágil. Após a conversa inicial e o envio dos materiais, você acompanha cada etapa até a publicação.",
  },
  {
    question: "O que é a taxa de adesão?",
    answer:
      "A adesão de R$ 120,00 é um valor único cobrado no início do projeto, referente à configuração inicial. Depois, você paga apenas a mensalidade do plano escolhido.",
  },
  {
    question: "Posso fazer alterações depois que o site estiver no ar?",
    answer:
      "Sim! Cada plano inclui um número de alterações. O Essencial inclui 1 alteração, o Performance 3 por mês e o Premium 5 por mês, sempre com suporte da nossa equipe.",
  },
  {
    question: "Hospedagem e domínio estão inclusos?",
    answer:
      "Nos planos Performance e Premium, a hospedagem e o domínio já estão inclusos. No plano Essencial, esses itens podem ser contratados à parte.",
  },
  {
    question: "Meu site vai aparecer no Google?",
    answer:
      "Todos os planos incluem SEO. O Essencial conta com SEO básico e o Premium com SEO avançado, ajudando sua empresa a ser encontrada por quem procura seus serviços.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Dúvidas</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl border border-border/60 bg-background">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 leading-relaxed text-muted-foreground">{faq.answer}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
