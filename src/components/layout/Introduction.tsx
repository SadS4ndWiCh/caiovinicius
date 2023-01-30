import { motion } from 'framer-motion';

import { Heading } from '@components/ui/Heading';
import { Text } from '@components/ui/Text';
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
      className='container flex flex-col justify-center lg:mx-auto min-h-screen'
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
            I&apos;m <span className='text-transparent bg-clip-text bg-identity'>Caio Vinícius</span>{'\n'}
            an 18 year old Brazilian{'\n'}
            <span className='text-transparent bg-clip-text bg-identity'>web developer</span>
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