import { cachedClient } from 'src/sanity/lib/client'
import { aboutQuery, projectsQuery } from 'src/sanity/lib/queries'

import { IProject } from 'src/types'

type About = {
  summary: string
  aboutMe: string
}

export default async function Home() {
  const projects: IProject[] = await cachedClient(projectsQuery)
  const about: About = await cachedClient(aboutQuery)

  return (
    <main>
      <h1>Hello WOrld</h1>
    </main>
  )
}
