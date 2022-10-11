import { motion } from 'framer-motion';

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const SOCIALS_LINKS = [
  {
    id: 'social-twitter',
    href: 'https://twitter.com/SadSAndWiCh_',
    icon: <FaTwitter className='text-primary-900' size={20} />
  },
  {
    id: 'social-github',
    href: 'https://github.com/SadS4ndWiCh',
    icon: <FaGithub className='text-primary-900' size={20} />
  },
  {
    id: 'social-linkedin',
    href: 'https://www.linkedin.com/in/caiocamargo007/',
    icon: <FaLinkedinIn className='text-primary-900' size={20} />
  },
]

const socialVariants = {
  hidden: {
    opacity: 0,
  },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  })
};

export const Socials = () => {
  return (
    <div
      className='flex items-center gap-1 w-full mt-10 sm:flex-col sm:max-w-none sm:w-fit sm:mt-0'
    >
      { SOCIALS_LINKS.map((social, i) => (
        <motion.a
          key={social.id}
          custom={i}
          initial='hidden'
          animate='visible'
          variants={socialVariants}
          href={social.href}
          target='_blank'
          rel='noreferrer'
          className='shrink-0 flex items-center justify-center w-[38px] h-[38px] bg-white transition-colors hover:bg-primary-100'
        >
          { social.icon }
        </motion.a>
      )) }

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1 }}
        className='w-full h-[1px] bg-primary-100 sm:w-[1px] sm:h-full'
      />
    </div>
  )
};