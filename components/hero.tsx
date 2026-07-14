import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL =
  "https://wa.me/5527998154219?text=Ol%C3%A1%2C%20quero%20um%20site%20com%20a%20IzziSites!"

const HIGHLIGHTS = ["Layout personalizado", "100% responsivo", "SEO e SSL inclusos"]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.76 0.19 143 / 0.18) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
        <div className="flex flex-col items-start">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            IzziSites — Sua empresa na internet
          </span>
          <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
            Sua empresa merece ser <span className="text-primary">encontrada, lembrada</span> e escolhida.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Transformamos sua presença digital em crescimento. Criamos sites profissionais, rápidos e
            responsivos que colocam o seu negócio na frente dos clientes certos.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row">
            <Button
              render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
              size="lg"
              className="h-12 w-full px-7 text-base font-semibold sm:w-auto"
            >
              Quero meu site
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button render={<a href="#planos" />} size="lg" variant="outline" className="h-12 w-full px-7 text-base font-semibold sm:w-auto">
              Ver planos
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            className="absolute inset-0 -z-10 rounded-full blur-3xl"
            aria-hidden="true"
            style={{ background: "oklch(0.76 0.19 143 / 0.15)" }}
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-izzisites-Jyq6ioB79oWJp79TPuAVB5cJd6oNHQ.png"
            alt="Logotipo da IzziSites"
            className="w-full max-w-md rounded-3xl border border-border/60 shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
