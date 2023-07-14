import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import { IBM_Plex_Sans as FontSans } from 'next/font/google'

import '~/styles/global.css'

import { cn } from '~/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: 'Caio Vinícius',
    template: '%s | Caio Vinícius',
  },
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
          'min-h-screen bg-slate-950 font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
