import { motion } from 'framer-motion';

import { Icons } from './Icons';

const SOCIALS_LINKS = [
  {
    title: 'Twitter',
    href: 'https://twitter.com/SadSAndWiCh_',
    Icon: Icons.twitter
  },
  {
    title: 'Github',
    href: 'https://github.com/SadS4ndWiCh',
    Icon: Icons.github
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/caiocamargo007/',
    Icon: Icons.linkedin
  },
]

const socialVariants = {
  hidden: {
    opacity: 0,
  },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15 + .5,
    },
  })
};

export const Socials = () => {
  return (
    <div
      className='flex items-center gap-6 mt-12'
    >
      { SOCIALS_LINKS.map((social, i) => (
        <motion.a
          key={social.title}
          custom={i}
          initial='hidden'
          animate='visible'
          variants={socialVariants}
          href={social.href}
          target='_blank'
          rel='noreferrer'
          className='group flex items-center gap-4 text-zinc-300 hover:text-white'
        >
          <social.Icon className='w-5 h-5 fill-zinc-300 group-hover:fill-white' />
          { social.title }
          <Icons.arrow className='w-5 h-5 -rotate-45' />
        </motion.a>
      )) }
    </div>
  )
};