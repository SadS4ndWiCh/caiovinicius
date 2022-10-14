import { Heading } from '@components/Heading';
import { Text } from '@components/Text';
import { motion } from 'framer-motion';
import { Socials } from '../Socials';

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
      className='block mt-20 sm:flex sm:justify-between sm:flex-row before:absolute before:inset-0 before:-z-10 before:max-h-screen before:bg-lights before:bg-no-repeat '
    >
      <div className='sm:max-w-[553px]'>
        <Heading asChild size='lg'>
          <motion.h1
            initial='hidden'
            animate='visible'
            variants={variants}
            transition={{
              duration: .5
            }}
            className='leading-tight text-center text-heading whitespace-pre-line sm:text-5xl sm:text-left'
          >
            { heading }
          </motion.h1>
        </Heading>
        
        
        <Text asChild>
          <motion.p
            initial='hidden'
            animate='visible'
            variants={variants}
            transition={{
              delay: .25,
              duration: .5
            }}
            className='mt-3 md:text-left'
          >
            { summary }
          </motion.p>
        </Text>
      </div>

      <Socials />
    </section>
    
  )
};