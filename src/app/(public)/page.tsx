import { siteConfig } from '~/config/site'

import { cachedClient } from '~/sanity/lib/client'
import { aboutQuery } from '~/sanity/lib/queries'

import { Projects } from '~/components/projects'
import { Socials } from '~/components/socials'
import { Separator } from '~/components/ui/separator'

type About = {
  summary: string
  aboutMe: string
}

export default async function Home() {
  const about: About = await cachedClient(aboutQuery)

  return (
    <div className="flex flex-col max-w-3xl mx-auto p-4">
      <section className="mt-4 space-y-3 before:absolute before:top-0 before:left-0 before:right-0 before:h-[50vh] before:-z-20 before:bg-grid-slate-900/60 after:absolute after:top-0 after:left-0 after:right-0 after:h-[50vh] after:bg-gradient-to-b after:from-black/0 after:to-80% after:to-slate-950 after:-z-10">
        <div className="space-y-1">
          <h1 className="text-white font-bold text-xl">{siteConfig.name}</h1>
          <p className="text-slate-300 leading-relaxed">{about.summary}</p>
        </div>

        <Socials />
      </section>

      <Separator className="my-6 bg-slate-800" />

      <section className="flex-1 space-y-2">
        <h2 className="text-white text-xl font-bold">Projects</h2>

        <Projects />
      </section>

      <Separator className="my-6 bg-slate-800" />

      <section className="space-y-2">
        <h2 className="text-white text-xl font-bold">About me</h2>

        <p className="text-slate-300 leading-relaxed whitespace-pre-line">
          {about.aboutMe}
        </p>
      </section>
    </div>
  )
}
