import Image from "next/image";
import { motion } from 'framer-motion';

import { Footer } from "./Footer";
import { Header } from "./Header";

import { useInViewAnimation } from '@hooks/useInViewAnimation';
import { fadeInDown } from "src/utils/animations";
import { urlFor } from "src/utils/url-for";

type Props = {
  project: Project
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
      <div className='relative w-full h-60'>
        <Image
          src={urlFor(project.thumb).url()}
          className='object-cover object-left w-full aspect-video rounded-md duration-500'
          loading='lazy'
          alt={project.title}
          fill
        />
      </div>
      
      <div className='flex-1'>
        <Header
          data={{
            tags: project.categories,
            name: project.title,
            description: project.description,
          }}
          controls={controls}
          variants={fadeInDown}
        />

        <Footer
          data={{ sourceCode: project.sourceCode, demo: project.demo }}
          animate={controls}
          variants={fadeInDown}
        />
      </div>
    </motion.div>
  )
};