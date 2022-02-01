import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import * as GraphApi from '@lib/graphcms';

import { Layout } from '@components/Layouts/Layout';
import { Link } from '@components/Link';
import { Contacts } from '@components/Contacts';
import { ProjectCard } from '@components/ProjectCard';
import { NoResults } from '@components/NoResults';

import HandWEBP from '@public/images/hand.webp';
import ArrowSVG from '@public/icons/arrow.svg';

import styles from '@styles/pages/Home.module.scss';

interface HomeProps {
  allProjects: GraphApi.IProject[];
};

const Home: NextPage<HomeProps> = ({ allProjects }) => {
  return (
    <Layout
      seo={{
        description: 'This is my portfolio where I detail my projects.'
      }}
      className={styles.container}
    >
      <main className={styles.introduction}>
        <h2>
          Hello World! 
          <Image src={HandWEBP} alt='waving'/>
        </h2>
        <p>
          I&apos;m <strong>Caio Vinícius</strong>, an 18 year old Brazilian web developer.
        </p>
        <p>
          I don&apos;t work at the moment but I&apos;m looking for one. I am studying <strong>Systems Analysis and 
          Development</strong> at <strong>FATEC</strong> in <strong>Presidente Prudente</strong>.
        </p>

        <Contacts />
      </main>

      <section className={styles.allProjects}>
        <header>
          <h2>Projects</h2>
          { allProjects.length > 0 && (
            <Link href='/projects'>
              See all
              <Image
                src={ArrowSVG}
                width={15}
                height={15}
                alt='See all'
              />
            </Link>
          ) }
        </header>

        { allProjects.length > 0 ? (
          <ul className={styles.allProjectsList}>
            { allProjects.map(project => (
              <li
                key={project.slug}
              >
                <ProjectCard project={project} />
              </li>
            )) }
          </ul>
        ) : (
          <NoResults />
        ) }
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allProjects = await GraphApi.getAllProjects();

  return {
    props: {
      allProjects: allProjects.slice(0, 3),
    },
    revalidate: 60 * 60 * 24 // Revalidate every 24h
  }
};

export default Home;
