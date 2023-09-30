import { cachedClient } from '~/sanity/lib/client'
import { projectsQuery } from '~/sanity/lib/queries'

import { IProject } from '~/types'

export async function Projects() {
  const projects: IProject[] = await cachedClient(projectsQuery)

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <a
          key={project._id}
          href={project.sourceCode}
          rel="noreferrer"
          target="_blank"
          className="block space-y-1 rounded relative group"
        >
          <div className="space-y-2">
            <h3 className="group-hover:underline group-hover:underline-offset-4">
              {project.title}
            </h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
