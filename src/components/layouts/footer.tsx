import Link from 'next/link'

import { siteConfig } from '~/config/site'

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
                <h4 className="text-center text-sm">
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
      </div>
    </footer>
  )
}
