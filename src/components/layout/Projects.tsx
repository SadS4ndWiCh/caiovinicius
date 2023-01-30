import { motion } from "framer-motion";
import { Heading } from "@components/ui/Heading";
import { IProject, Project } from "../Project";

import { useInViewAnimation } from "@hooks/useInViewAnimation";
import { fadeInDown } from "src/utils/animations";

type Props = {
  projects: IProject[];
};

export const Projects = ({ projects }: Props) => {
	const { ref, controls } = useInViewAnimation({
		animationVariantName: 'visible',
		options: {
			threshold: .1
		}
	});


  return (
    <section id='projects' className='container mx-auto'>
      <Heading asChild size='lg'>
        <motion.h2
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={fadeInDown}
          transition={{ duration: 1 }}
        >
          Projetcs
        </motion.h2>
      </Heading>

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