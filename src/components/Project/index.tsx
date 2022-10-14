import Image from "next/image";
import { motion } from 'framer-motion';
import { useInViewAnimation } from '@hooks/useInViewAnimation';

import { FiArrowUpRight } from 'react-icons/fi';
import { FaGithub } from "react-icons/fa";
import { Text } from "@components/Text";
import { Heading } from "@components/Heading";

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
      variants={variants}
      transition={{
        duration: 1,
      }}
      className='grid grid-cols-1 gap-7 md:grid-cols-2 md:items-start'
    >
      <Image
        src={project.image[0].url}
        width={project.image[0].width}
        height={project.image[0].height}
        className='w-full aspect-video rounded-md'
        loading='lazy'
        alt={project.name}
      />
      
      <div className='flex-1'>
        <motion.header
          initial='hidden'
          animate={controls}
          variants={variants}
          transition={{ delay: .25, duration: 1 }}
        >
          <div className='flex items-center gap-2'>
            { project.tags.map(tag => (
              <div key={tag} className='w-fit bg-identity rounded-full px-[0.125rem] py-[0.125rem]'>
                <Text
                  size='sm'
                  className='block text-[10px] px-3 py-[0.125rem] rounded-full bg-primary-900 text-white uppercase tracking-widest'
                >
                  { tag }
                </Text>
              </div>
            )) }
          </div>
          <Heading asChild size='md'>
            <h3
              className='mt-1'
            >
              { project.name }
            </h3>
          </Heading>
        </motion.header>
        
        <Text asChild>
          <motion.p
            initial='hidden'
            animate={controls}
            variants={variants}
            transition={{ delay: .5, duration: 1 }}
            className='mt-4'
          >
            { project.description }
          </motion.p>
        </Text>
        
        <motion.footer
          initial='hidden'
          animate={controls}
          variants={variants}
          transition={{ delay: .75, duration: 1 }}
          className='flex items-center justify-between mt-4'
        >
          <Text asChild size='sm'>
            <a
              href={project.sourceCode}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 px-3 py-2 text-white border border-primary-300 rounded-full transition-colors hover:bg-primary-300'
            >
              Source Code <FaGithub size={16} />
            </a>
          </Text>
          { project.demo && (
            <Text asChild size='sm'>
              <a
                href={project.demo}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-1 px-3 py-2 text-white border border-primary-300 rounded-full bg-primary-300 transition-colors hover:bg-primary-900'
              >
                View Demo <FiArrowUpRight size={16} />
              </a>
            </Text>
          ) }
        </motion.footer>
      </div>
    </motion.div>
  )
};