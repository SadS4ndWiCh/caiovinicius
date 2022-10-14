import { motion } from "framer-motion";
import { IProject, Project } from "./";

type Props = {
  projects: IProject[];
};

export const Projects = ({ projects }: Props) => {
  return (
    <section id='projects' className='mt-16 md:mt-24'>
      <motion.h2
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='text-5xl font-extrabold text-heading'
      >
        Projetcs
      </motion.h2>

      <div className='flex flex-col gap-9 mt-9'>
        { projects.map(project => (
          <Project
            key={project.id}
            project={project}
          />
        )) }
      </div>     
    </section>
    
  )
};