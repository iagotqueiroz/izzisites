import { MessageCircle } from "lucide-react"
import { InstagramIcon } from "@/components/instagram-icon"

const INSTAGRAM_URL = "https://www.instagram.com/izzisites/"
const WHATSAPP_URL = "https://wa.me/5527998154219?text=Ol%C3%A1%2C%20IzziSites!"

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#faq" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2" aria-label="IzziSites - início">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-simbolo-sem-fundo-5LsTREPCdMHVi1Et5u3WR6Ab2J8OH4.png"
                alt="IzziSites"
                className="h-9 w-9"
              />
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                Izzi<span className="text-primary">Sites</span>
              </span>
            </a>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sua empresa merece ser encontrada, lembrada e escolhida. Transformamos presença digital
              em crescimento.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Rodapé">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Navegação
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Contato
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <InstagramIcon className="h-4 w-4" />
              @izzisites
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IzziSites. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
