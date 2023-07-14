import Image from 'next/image'

import { cachedClient } from '~/sanity/lib/client'
import { urlForImage } from '~/sanity/lib/image'
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
  )
}
