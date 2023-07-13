import '@styles/global.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Roboto } from 'next/font/google';
import { Footer } from '~/components/layout/Footer';
import { Header } from '~/components/layout/Header';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Caio Vinícius',
    template: '%s | Caio Vinícius'
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
      <body className={roboto.className}>
        <div className='flex flex-col min-h-screen relative before:sticky before:top-0 before:left-0 before:right-0 before:content-[""] before:z-50 before:block before:w-full before:h-1 before:bg-identity'>
          <div className='h-full lg:px-0'>
            <Header />

            <main>
              {children}
            </main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}