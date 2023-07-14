import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import { IBM_Plex_Sans as FontSans } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'
import { siteConfig } from '~/config/site'
import '~/styles/global.css'

import { Footer } from '~/components/layouts/footer'
import { Separator } from '~/components/ui/separator'

import { cn } from '~/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  creator: 'Caio Vinícius',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body
        className={cn(
          'flex flex-col min-h-screen bg-slate-950 font-sans antialiased',
          fontSans.variable,
        )}
      >
        <main className="flex-1">{children}</main>

        <Separator className="my-6 bg-slate-800" />

        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
