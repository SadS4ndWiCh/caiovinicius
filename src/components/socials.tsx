import { cn } from '~/lib/utils'

import { buttonVariants } from './ui/button'
import { siteConfig } from '~/config/site'

export function Socials() {
  return (
    <ul className="flex">
      {siteConfig.socials.map(social => (
        <li key={social.title}>
          <a
            href={social.href}
            rel="noreferrer"
            target="_blank"
            className={cn(buttonVariants({ variant: 'link' }), 'text-muted-foreground')}
          >
            {social.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
