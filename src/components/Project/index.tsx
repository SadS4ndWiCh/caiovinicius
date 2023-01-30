import Image from "next/image";
import { motion } from 'framer-motion';

import { Buttons } from "./Buttons";
import { Header } from "./Header";

import { useInViewAnimation } from '@hooks/useInViewAnimation';
import { fadeInDown } from "src/utils/animations";

export interface IProject {
  id: string;
  name: string;
  description: string;
  tags: string[];
  sourceCode: string;
  demo?: string;
  image: {
    width: number;
    height: number;
    url: string;
  }[]
};

type Props = {
  project: IProject
};

export const Project = ({ project }: Props) => {
  const { ref, controls } = useInViewAnimation({
    animationVariantName: 'visible',
    options: {
      threshold: .1,
    }
  })

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={fadeInDown}
      transition={{ duration: 1 }}
      className='grid grid-cols-1 gap-7 md:grid-cols-2 md:items-start'
    >
      <Image
        src={project.image[0].url}
        width={project.image[0].width}
        height={project.image[0].height}
        className='w-full aspect-video rounded-md duration-500'
        loading='lazy'
        alt={project.name}
      />
      
      <div className='flex-1'>
        <Header
          data={{
            tags: project.tags,
            name: project.name,
            description: project.description,
          }}
          controls={controls}
          variants={fadeInDown}
        />

        <Buttons
          data={{ sourceCode: project.sourceCode, demo: project.demo }}
          animate={controls}
          variants={fadeInDown}
        />
      </div>
    </motion.div>
  )
};