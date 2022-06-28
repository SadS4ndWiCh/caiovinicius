import { NextPage } from "next";

import { Header } from "@components/Header";
import { Link } from "@components/Link";
import { Twitter } from "@components/Icons/Twitter";
import { Github } from "@components/Icons/Github";
import { Project } from "@components/Project";
import { Footer } from "@components/Footer";

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <div className='h-full container p-0 mx-auto bg-grid bg-center bg-contain bg-repeat-y bg-'>
        <Header />
        <div className='flex justify-between mt-20'>
          <div className='max-w-[553px]'>
            <h1 className='font-extrabold text-5xl text-heading'>
              I&apos;m Caio Vinícius,<br />
              an 18 year old Brazilian <br />
              web developer.
            </h1>
            <p className='mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas orci, porta enim pulvinar cras urna. 
              Suspendisse vel interdum odio nisl, senectus. Enim proin fermentum urna consectetur est nulla dui.<br /><br />
              Vitae neque, enim molestie nisl accumsan mattis quis ridiculus nec. Aliquam orci nibh id in egestas sed sociis 
              facilisi. Fusce metus rhoncus augue risus, molestie.
            </p>
          </div>

          <div className='flex flex-col items-center gap-1'>
            <Link
              href='https://twitter.com/SadSAndWiCh_'
              className='shrink-0 flex items-center justify-center w-[38px] h-[38px] bg-white transition-colors hover:bg-primary-100'
            >
              <Twitter />
            </Link>
            <Link
              href='https://github.com/SadS4ndWiCh'
              className='shrink-0 flex items-center justify-center w-[38px] h-[38px] bg-white transition-colors hover:bg-primary-100'
            >
              <Github />
            </Link>

            <div className='w-[1px] h-full bg-primary-100' />
          </div>
        </div>
        <main className='mt-24'>
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