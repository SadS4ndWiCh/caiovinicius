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
          className="block space-y-1 relative border border-border p-6 transition-colors hover:border-foreground"
        >
          <div className="space-y-2">
            <h3 className="flex items-center">
              <ArrowUpRight className='w-4 h-4 mr-1' /> {project.title}
            </h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
