import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'

import '@styles/global.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
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
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
