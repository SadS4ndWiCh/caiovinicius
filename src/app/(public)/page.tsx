import Image from 'next/image'

import { Github, Linkedin, Twitter } from 'lucide-react'

import { cachedClient } from 'src/sanity/lib/client'
import { aboutQuery, projectsQuery } from 'src/sanity/lib/queries'
import { urlForImage } from '~/sanity/lib/image'

import { Spotify } from '~/components/spotify'
import { buttonVariants } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'

import { cn } from '~/lib/utils'

import { IProject } from 'src/types'

type About = {
  summary: string
  aboutMe: string
}

export default async function Home() {
  const projects: IProject[] = await cachedClient(projectsQuery)
  const about: About = await cachedClient(aboutQuery)

  return (
    <div className="flex flex-col max-w-3xl mx-auto p-4">
      <header className="mt-4">
        <div className="space-y-2">
          <h1 className="text-white font-bold text-xl">Caio Vinícius</h1>
          <p className="text-slate-300 leading-relaxed">
            Web developer with product design experience and passion for
            front-end. Proficient in Python, Javascript and C#. Studying
            Analisys and System Development. Continuous self-improvement and
            internship experience. Dedicated and driven.
          </p>

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
        </div>
      </header>

      <Separator className="my-6 bg-slate-800" />

      <section className="flex-1 space-y-2">
        <h2 className="text-white text-xl font-bold">Projects</h2>

        <div className="space-y-4">
          {projects.map((project) => (
            <a
              key={project._id}
              href={project.sourceCode}
              rel="noreferrer"
              target="_blank"
              className="block space-y-1 relative"
            >
              <Image
                src={urlForImage(project.thumb).url()}
                alt="project image"
                width={800}
                height={600}
                className="rounded-md h-72 object-cover"
              />
              <div className="md:absolute md:inset-0 md:bg-gradient-to-b md:from-slate-950/0 md:to-90% md:to-slate-950" />
              <div className="space-y-2 p-2 md:absolute md:bottom-0 md:left-0 md:right-0 md:p-4">
                <h3 className="text-white underline underline-offset-4">
                  {project.title}
                </h3>
                <p className="text-slate-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Separator className="my-6 bg-slate-800" />

      <section className="space-y-2">
        <h2 className="text-white text-xl font-bold">About me</h2>

        <p className="text-slate-300 leading-relaxed whitespace-pre-line">
          {about.aboutMe}
        </p>
      </section>

      <Separator className="my-6 bg-slate-800" />

      <footer className="flex flex-col items-center justify-between py-4 gap-4 md:flex-row">
        <Spotify />

        <p className="text-slate-400 text-sm flex-shrink-0">
          All rights reserved © Caio Vinícius 2023
        </p>
      </footer>
    </div>
  )
}
