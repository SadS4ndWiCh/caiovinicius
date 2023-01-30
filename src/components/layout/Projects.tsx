import { Heading } from "@components/ui/Heading";
import { motion } from "framer-motion";
import { IProject, Project } from "../Project";

import { useInViewAnimation } from "@hooks/useInViewAnimation";

type Props = {
  projects: IProject[];
};

const variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
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
          variants={variants}
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