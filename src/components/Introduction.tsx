import { motion } from 'framer-motion';
import { Socials } from './Socials';

type Props = {
  heading: string;
  summary: string;
}

const variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Introduction = ({ heading, summary }: Props) => {
  return (
    <section
      id='introduction'
      className='block mt-20 md:flex md:justify-between md:flex-row'
    >
      <div className='md:max-w-[553px]'>
        <motion.h1
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{
            duration: .5
          }}
          className='font-extrabold leading-tight text-3xl text-center text-heading md:text-5xl md:text-left'
        >
          { heading }
        </motion.h1>
        
        <motion.p
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{
            delay: .25,
            duration: .5
          }}
          className='mt-3 leading-relaxed md:text-left'
        >
          { summary }
        </motion.p>
      </div>

      <Socials />
    </section>
    
  )
};