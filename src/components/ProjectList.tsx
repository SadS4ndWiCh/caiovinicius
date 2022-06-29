import { IProject, Project } from "./Project";

type Props = {
  projects: IProject[];
};

export const ProjectList = ({ projects }: Props) => {
  return (
    <div className='flex flex-col gap-9 mt-9'>
      { projects.map(project => (
        <Project
          key={project.id}
          project={project}
        />
      )) }
    </div>
  )
};