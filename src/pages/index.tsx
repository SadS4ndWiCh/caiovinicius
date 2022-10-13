import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { client } from "@lib/apollo";
import { gql } from "@apollo/client";

import { Header } from "@components/layout/Header";
import { Introduction } from "@components/layout/Introduction";
import { IProject } from "@components/Project";
import { Projects } from "@components/Project/Projects";
import { Footer } from "@components/layout/Footer";
import { About } from "@components/layout/About";

type Props = {
  projects: IProject[];
  detail: {
    heading: string;
    minimalSummary: string;
    about: string;
  }
};

const Home: NextPage<Props> = ({ projects, detail }) => {
  return (
    <div
      className='flex flex-col items-center min-h-screen relative before:sticky before:top-0 before:left-0 before:right-0 before:content-[""] before:block before:w-full before:h-1 before:bg-identity '
    >
      <Head>
        <title>Caio Vinícius</title>
        <meta name="description" content={detail.minimalSummary} />
      </Head>

      <div className='h-full container px-4 bg-grid bg-center bg-contain bg-repeat-y lg:px-0'>
        <Header />
        <Introduction heading={detail.heading} summary={detail.minimalSummary} />
        <Projects projects={projects} />
        <About about={detail.about} />
        <Footer />
      </div>
    </div>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const GET_INFORMATIONS_QUERY = gql`
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

    details {
      heading
      minimalSummary
      about
    }
  }
  `;

  const result = await client.query({
    query: GET_INFORMATIONS_QUERY,
  })
  
  return {
    props: {
      projects: result.data.projects,
      detail: result.data.details[0],
    },
    revalidate: 60 * 60 * 24 // 1 Dia
  }
};

export default Home;