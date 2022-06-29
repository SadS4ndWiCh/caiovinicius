import { NextPage } from "next";

import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { Socials } from "@components/Socials";
import { Introduction } from "@components/Introduction";
import { ProjectList } from "@components/ProjectList";

const Home: NextPage = () => {
  return (
    <div
      className='min-h-screen relative before:content-[""] before:block before:w-full before:h-1 before:bg-identity '
    >
      <div className='h-full container px-4 mx-auto bg-grid bg-center bg-contain bg-repeat-y md:px-0'>
        <Header />
        <div className='block mt-20 md:flex md:justify-between md:flex-row'>
          <Introduction />

          <Socials />
        </div>
        <main className='mt-16 md:mt-24'>
          <h2 className='text-5xl font-extrabold text-heading'>
            Projetcs
          </h2>
          
          <ProjectList />
        </main>

        <Footer />
      </div>
    </div>
  )
};

export default Home;