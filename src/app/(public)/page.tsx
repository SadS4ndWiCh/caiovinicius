import Image from 'next/image'

import { Projects } from '~/components/projects'
import { Experiences } from '~/components/experiences'

export default async function Home() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto p-4 space-y-6">
      <section className="flex items-center justify-between mt-4">
        <Image
          src="https://github.com/SadS4ndWiCh.png"
          width={600}
          height={600}
          alt="Foto de perfil do GitHub"
          className='w-12 h-12 rounded-full'
        />
      </section>

      <section className='space-y-2'>
        <h1 className="text-2xl font-bold">Hello, I'm Caio Vinícius!</h1>
        <p>
          When I'm not coding, I enjoy researching new technologies or exploring new tools, but I
          can't miss some funny videos to distract myself, some songs to refresh my mind and play
          some games to relax... maybe...
        </p>
      </section>

      <section className="flex-1 space-y-2">
        <h2 className="text-xl">Projects</h2>

        <Projects />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl">Experiences</h2>

        <Experiences />
      </section>
    </div>
  )
}
