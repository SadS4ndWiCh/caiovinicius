import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { groq } from "next-sanity";

import { Header } from "@components/layout/Header";
import { Introduction } from "@components/layout/Introduction";
import { Projects } from "@components/layout/Projects";
import { Footer } from "@components/layout/Footer";
import { About } from "@components/layout/About";
import { Background } from "@components/layout/Background";

import { client } from "@lib/sanity.client";

type Props = {
  projects: Project[];
  about: {
    summary: string;
    aboutMe: string;
  }
};

const Home: NextPage<Props> = ({ projects, about }) => {
  return (
    <div
      className='flex flex-col min-h-screen relative before:sticky before:top-0 before:left-0 before:right-0 before:content-[""] before:z-50 before:block before:w-full before:h-1 before:bg-identity'
    >
      <Head>
        <title>Caio Vinícius</title>
        <meta name="description" content={about.summary} />
      </Head>

      <Background />

      <div className='h-full lg:px-0'>
        <Header />
        <Introduction summary={about.summary} />
        <Projects projects={projects} />
        <About about={about.aboutMe} />
        <Footer />
      </div>
    </div>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const query = groq`
    {
      "projects": *[_type == 'project'] {
        _id,
        title,
        thumb,
        categories[]->{
          title
        },
        description,
        sourceCode,
        demo
      } | order(_createdAt desc),
      "about": *[_type == 'about'] {
        summary,
        aboutMe
      }[0]
    }
  `;

  const { projects, about } = await client.fetch(query);
  
  return {
    props: {
      projects,
      about,
    },
    revalidate: 60 * 60 * 24 // 1 Dia
  }
};

export default Home;