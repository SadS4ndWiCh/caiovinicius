import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export const Socials = () => {
  return (
    <div
      className='flex items-center gap-1 w-full mt-10 md:flex-col md:max-w-none md:w-fit md:mt-0'
    >
      <a
        href='https://twitter.com/SadSAndWiCh_'
        target='_blank'
        rel='noreferrer'
        className='shrink-0 flex items-center justify-center w-[38px] h-[38px] bg-white transition-colors hover:bg-primary-100'
      >
        <FaTwitter className='text-primary-900' size={20} />
      </a>
      <a
        href='https://github.com/SadS4ndWiCh'
        target='_blank'
        rel='noreferrer'
        className='shrink-0 flex items-center justify-center w-[38px] h-[38px] bg-white transition-colors hover:bg-primary-100'
      >
        <FaGithub className='text-primary-900' size={20} />
      </a>
      <a
        href='https://www.linkedin.com/in/caiocamargo007/'
        target='_blank'
        rel='noreferrer'
        className='shrink-0 flex items-center justify-center w-[38px] h-[38px] bg-white transition-colors hover:bg-primary-100'
      >
        <FaLinkedinIn className='text-primary-900' size={20} />
      </a>

      <div className='w-full h-[1px] bg-primary-100 md:w-[1px] md:h-5/6' />
    </div>
  )
};