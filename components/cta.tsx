import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InstagramIcon } from "@/components/instagram-icon"

const WHATSAPP_URL =
  "https://wa.me/5527998154219?text=Ol%C3%A1%2C%20quero%20transformar%20a%20presen%C3%A7a%20digital%20da%20minha%20empresa!"
const INSTAGRAM_URL = "https://www.instagram.com/izzisites/"

export function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card px-6 py-14 text-center sm:px-12">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, oklch(0.76 0.19 143 / 0.22) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-simbolo-sem-fundo-5LsTREPCdMHVi1Et5u3WR6Ab2J8OH4.png"
            alt="IzziSites"
            className="mx-auto h-14 w-14"
          />
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Pronto para colocar a sua empresa na internet?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Fale com a IzziSites e descubra como transformar a sua presença digital em crescimento real.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
              size="lg"
              className="font-semibold"
            >
              Falar no WhatsApp
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              render={<a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" />}
              size="lg"
              variant="outline"
              className="font-semibold"
            >
              <InstagramIcon className="h-4 w-4" />
              Seguir no Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
