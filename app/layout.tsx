import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IzziSites | Sua Empresa na Internet',
  description:
    'Sua empresa merece ser encontrada, lembrada e escolhida. A IzziSites transforma sua presença digital em crescimento com sites profissionais, rápidos e responsivos.',
  generator: 'v0.app',
  keywords: [
    'criação de sites',
    'desenvolvimento web',
    'presença digital',
    'sites responsivos',
    'SEO',
    'IzziSites',
  ],
  openGraph: {
    title: 'IzziSites | Sua Empresa na Internet',
    description:
      'Transformamos presença digital em crescimento. Sites profissionais, rápidos e responsivos para o seu negócio.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0c2417',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
