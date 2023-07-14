import { Github, Linkedin, Twitter } from 'lucide-react'

import { cn } from '~/lib/utils'

import { buttonVariants } from './ui/button'

export function Socials() {
  return (
    <div className="space-x-2">
      <a
        href="https://twitter.com/SadSAndWiCh_"
        rel="noreferrer"
        target="_blank"
        className={cn(buttonVariants({ size: 'icon' }))}
      >
        <Twitter className="w-4 h-4" />
      </a>
      <a
        href="https://www.linkedin.com/in/caiocamargo007/"
        rel="noreferrer"
        target="_blank"
        className={cn(buttonVariants({ size: 'icon' }))}
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        href="https://github.com/SadS4ndWiCh"
        rel="noreferrer"
        target="_blank"
        className={cn(buttonVariants({ size: 'icon' }))}
      >
        <Github className="w-4 h-4" />
      </a>
    </div>
  )
}
