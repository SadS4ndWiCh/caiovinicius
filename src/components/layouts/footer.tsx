import Link from 'next/link'

import { links, siteConfig } from '~/config/site'

import { cn } from '~/lib/utils'

import { Spotify } from '../spotify'
import { buttonVariants } from '../ui/button'

export function Footer() {
  return (
    <footer>
      <div className="max-w-3xl mx-auto flex flex-col p-4 gap-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          <Spotify />

          <nav className="flex justify-end gap-4">
            {siteConfig.footerNav.map((nav) => (
              <div key={nav.title}>
                <h4 className="text-center font-bold text-sm">
                  {nav.title}
                </h4>

                <ul>
                  {nav.items.map((link) => (
                    <li key={link.title} className="text-center">
                      <Link
                        href={link.href}
                        rel={link.external ? 'noreferrer' : undefined}
                        target={link.external ? '_blank' : undefined}
                        className={cn(
                          buttonVariants({ variant: 'link', size: 'sm' }),
                          'text-muted-foreground text-sm',
                        )}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            Built by{' '}
            <a
              href={links.github}
              className="text-foreground hover:underline hover:underline-offset-4"
            >
              Caio Vinícius
            </a>
          </p>
          <p className="text-muted-foreground text-xs text-center flex-shrink-0 md:text-left">
            All rights reserved © Caio Vinícius 2023
          </p>
        </div>
      </div>
    </footer>
  )
}
