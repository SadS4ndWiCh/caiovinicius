import { cachedClient } from '~/sanity/lib/client'
import { aboutQuery } from '~/sanity/lib/queries'

type About = {
  summary: string
  aboutMe: string
}

export async function About() {
  const about: About = await cachedClient(aboutQuery)

  return (
    <p className="text-slate-300 leading-relaxed whitespace-pre-line">
      {about.aboutMe}
    </p>
  )
}
