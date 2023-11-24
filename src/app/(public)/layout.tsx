import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { siteConfig } from '~/config/site'
import '~/styles/global.css'

import { Footer } from '~/components/layouts/footer'
import { Separator } from '~/components/ui/separator'

import { cn } from '~/lib/utils'
import { fontSans } from '../fonts'

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
          'flex flex-col min-h-screen bg-background text-foreground font-sans antialiased',
          fontSans.variable,
        )}
      >
        <main className="min-h-screen">{children}</main>

        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
