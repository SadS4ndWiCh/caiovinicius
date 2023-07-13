import { Heading } from "~/components/ui/Heading";
import { IProject } from "~/types";
import { Project } from "../Project";

type Props = {
  projects: IProject[];
};

export const Projects = ({ projects }: Props) => {
  return (
    <section id='projects' className='container mx-auto'>
      <Heading asChild size='lg'>
        <h2>
          Projetcs
        </h2>
      </Heading>

      <div className='flex flex-col gap-9 mt-9'>
        {projects.map(project => (
          <Project
            key={project._id}
            project={project}
          />
        ))}
      </div>
    </section>

  )
};