import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { Socials } from "@components/Socials";
import { Introduction } from "@components/Introduction";
import { ProjectList } from "@components/ProjectList";
import { client } from "@lib/apollo";
import { gql } from "@apollo/client";
import { IProject } from "@components/Project";

type Props = {
  projects: IProject[];
};

const Home: NextPage<Props> = ({ projects }) => {
  return (
    <div
      className='flex flex-col items-center min-h-screen relative before:content-[""] before:block before:w-full before:h-1 before:bg-identity '
    >
      <Head>
        <title>Caio Vinícius</title>
      </Head>

      <div className='h-full container px-4 bg-grid bg-center bg-contain bg-repeat-y lg:px-0'>
        <Header />
        <div className='block mt-20 md:flex md:justify-between md:flex-row'>
          <Introduction />

          <Socials />
        </div>
        <main className='mt-16 md:mt-24'>
          <h2 className='text-5xl font-extrabold text-heading'>
            Projetcs
          </h2>
          
          <ProjectList projects={projects} />
        </main>

        <Footer />
      </div>
    </div>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const GET_PROJECTS_QUERY = gql`
  query {
    projects {
      id
      name
      description
      tags
      sourceCode
      demo
      image {
        width
        height
        url
      }
    }
  }
  `;

  const result = await client.query({
    query: GET_PROJECTS_QUERY,
  })
  
  return {
    props: {
      projects: result.data.projects,
    },
    revalidate: 60 * 60 * 24 // 1 Dia
  }
};

export default Home;