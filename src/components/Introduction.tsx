import { motion } from 'framer-motion';

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

export const Introduction = () => {
  return (
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
        I&apos;m Caio Vinícius,<br />
        an 18 year old Brazilian <br />
        web developer.
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
      Hey! I&apos;ve been studying web development for just over a year. I&apos;m currently doing an internship at {' '}
      <a href="https://compass.uol" className='underline underline-offset-2 text-zinc-300 hover:text-zinc-100'>Compass.UOL</a> as a Product 
      Designer, which has been very good for me to improve on UI/UX issues.
      </motion.p>
    </div>
  )
};