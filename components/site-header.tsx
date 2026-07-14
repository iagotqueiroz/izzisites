"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#faq" },
]

const WHATSAPP_URL =
  "https://wa.me/5527998154219?text=Ol%C3%A1%2C%20quero%20um%20site%20com%20a%20IzziSites!"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
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

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
            className="font-semibold"
          >
            Fale conosco
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Navegação mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button
              render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
              className="mt-2 font-semibold"
            >
              Fale conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
