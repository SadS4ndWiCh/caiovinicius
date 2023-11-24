import Image from 'next/image'

import { siteConfig } from '~/config/site'

import { Projects } from '~/components/projects'
import { Socials } from '~/components/socials'

export default async function Home() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto p-4 space-y-6">
      <section className="mt-4 space-y-3">
        <div className='flex flex-col sm:flex-row items-center text-center sm:text-left gap-4'>
          <Image
            src="https://github.com/SadS4ndWiCh.png"
            width={600}
            height={600}
            alt="Foto de perfil do GitHub"
            className='w-24 h-24'
          />
          <div>
            <h1 className="text-xl">{siteConfig.name}</h1>
            <p className="text-muted-foreground leading-relaxed">Definitely a web developer</p>
            <Socials />
          </div>
        </div>
      </section>

      <section>
        <div className='p-6 border border-border space-y-2'>
          <p>Hello, I'm Caio Vinícius, a Brazilian studying Systems Analysis and Development.</p>
          <p>
            When I'm not coding, I enjoy researching new technologies or exploring new tools, but I
            can't miss some funny videos to distract myself, some songs to refresh my mind and play
            some games to relax... maybe...
          </p>
        </div>
      </section>

      <section className="flex-1 space-y-2">
        <h2 className="text-xl">Projects</h2>

        <Projects />
      </section>
    </div>
  )
}
