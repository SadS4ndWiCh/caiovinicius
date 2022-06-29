import { NextPage } from "next";

import { Header } from "@components/Header";
import { Link } from "@components/Link";
import { Project } from "@components/Project";
import { Footer } from "@components/Footer";

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <div
      className='min-h-screen relative before:content-[""] before:block before:w-full before:h-1 before:bg-identity '
    >
      <div className='h-full container px-4 mx-auto bg-grid bg-center bg-contain bg-repeat-y md:px-0'>
        <Header />
        <div className='block mt-20 md:flex md:justify-between md:flex-row'>
          <div className='max-w-[553px]'>
            <h1 className='font-extrabold text-4xl text-center text-heading leading-tight md:text-5xl md:text-left'>
              I&apos;m Caio Vinícius,<br />
              an 18 year old Brazilian <br />
              web developer.
            </h1>
            <p className='mt-3 text-center md:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas orci, porta enim pulvinar cras urna. 
              Suspendisse vel interdum odio nisl, senectus. Enim proin fermentum urna consectetur est nulla dui.<br /><br />
              Vitae neque, enim molestie nisl accumsan mattis quis ridiculus nec. Aliquam orci nibh id in egestas sed sociis 
              facilisi. Fusce metus rhoncus augue risus, molestie.
            </p>
          </div>

          <div
            className='flex items-center gap-1 max-w-[553px] w-full mt-10 md:flex-col md:max-w-none md:w-fit md:mt-0'
          >
            <Link
              href='https://twitter.com/SadSAndWiCh_'
              className='shrink-0 flex items-center justify-center w-[38px] h-[38px] bg-white transition-colors hover:bg-primary-100'
            >
              <FaTwitter className='text-primary-900' size={20} />
            </Link>
            <Link
              href='https://github.com/SadS4ndWiCh'
              className='shrink-0 flex items-center justify-center w-[38px] h-[38px] bg-white transition-colors hover:bg-primary-100'
            >
              <FaGithub className='text-primary-900' size={20} />
            </Link>
            <Link
              href='https://www.linkedin.com/in/caiocamargo007/'
              className='shrink-0 flex items-center justify-center w-[38px] h-[38px] bg-white transition-colors hover:bg-primary-100'
            >
              <FaLinkedinIn className='text-primary-900' size={20} />
            </Link>

            <div className='w-full h-[1px] bg-primary-100 md:w-[1px] md:h-5/6' />
          </div>
        </div>
        <main className='mt-16 md:mt-24'>
          <h2 className='text-5xl font-extrabold text-heading'>
            Projetcs
          </h2>
          
          <div className='flex flex-col gap-9 mt-9'>
            <Project />
            <Project />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
};

export default Home;