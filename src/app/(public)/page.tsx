import { siteConfig } from '~/config/site'

import { sanityFetch } from '~/sanity/lib/client'
import { aboutQuery } from '~/sanity/lib/queries'

import { Projects } from '~/components/projects'
import { Socials } from '~/components/socials'
import { Separator } from '~/components/ui/separator'

type About = {
  summary: string
  aboutMe: string
}

export default async function Home() {
  const about = await sanityFetch<About>({
    query: aboutQuery,
    tags: ['about']
  });

  return (
    <div className="flex flex-col max-w-3xl mx-auto p-4">
      <section className="mt-4 space-y-3">
        <div className="space-y-1">
          <h1 className="text-xl">{siteConfig.name}</h1>
          <p className="text-muted-foreground leading-relaxed">{about.summary}</p>
        </div>

        <Socials />
      </section>

      <Separator className="my-6 bg-secondary" />

      <section className="flex-1 space-y-2">
        <h2 className="text-xl">Projects</h2>

        <Projects />
      </section>

      <Separator className="my-6 bg-secondary" />

      <section className="space-y-2">
        <h2 className="text-xl">About me</h2>

        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
          {about.aboutMe}
        </p>
      </section>
    </div>
  )
}
