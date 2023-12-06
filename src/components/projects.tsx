import { ArrowUpRight } from 'lucide-react';
import { projects } from '~/config/projects';

export async function Projects() {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.sourceCode}
          rel="noreferrer"
          target="_blank"
          className="block space-y-1 rounded relative group"
        >
          <div className="space-y-2">
            <h3 className="flex items-center group-hover:underline group-hover:underline-offset-4">
              <ArrowUpRight className='w-4 h-4 mr-1' /> {project.title}
            </h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
