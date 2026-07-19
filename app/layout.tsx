import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { GeistPixelGrid } from 'geist/font/pixel'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Servidor dos Programadores | Comunidade Discord de Tecnologia',
  description:
    'Comunidade de tecnologia para todos os públicos. Networking, dicas, eventos e muito mais de TI. Junte-se a mais de 20 mil devs no Discord do Servidor dos Programadores. Eventos sobre Figma, UI/UX, AI Agents, vagas, freelances e networking.',
  keywords: [
    'servidor dos programadores',
    'comunidade discord',
    'comunidade de programação',
    'comunidade de tecnologia',
    'networking dev',
    'eventos de programação',
    'vagas de programação',
    'freelance dev',
    'discord de programadores',
    'comunidade dev brasil',
    'aprender programação',
    'ui ux figma',
    'ai agents',
    'carreira dev',
  ],
  authors: [{ name: 'Servidor dos Programadores' }],
  creator: 'Servidor dos Programadores',
  publisher: 'Servidor dos Programadores',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Servidor dos Programadores | Comunidade Discord de Tecnologia',
    description:
      'Comunidade de tecnologia para todos os públicos. Networking, dicas, eventos e muito mais de TI. Junte-se a mais de 20 mil devs no Discord.',
    siteName: 'Servidor dos Programadores',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servidor dos Programadores',
    description:
      'Comunidade de tecnologia para todos os públicos. Networking, dicas, eventos, vagas e freelances. Junte-se a +20 mil devs no Discord.',
    creator: '@servidordosprogramadores',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: '#0F0F0F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${jetbrainsMono.variable} ${GeistPixelGrid.variable} bg-background`} suppressHydrationWarning>
      <body className="font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
