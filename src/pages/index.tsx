import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import * as GraphCMS from '@lib/graphcms';

import { Layout } from '@components/Layouts/Layout';
import { Contacts } from '@components/Contacts';
import { FeaturedProject } from '@components/FeaturedProject';
import { FeaturedPost } from '@components/FeaturedPost';

import HandWEBP from '@public/images/hand.webp';

import styles from '@styles/pages/Home.module.scss';

interface HomeProps {
  featuredProjects: GraphCMS.IProject[];
  featuredPosts: GraphCMS.IFeaturedPost[];
};

const Home: NextPage<HomeProps> = ({ featuredProjects, featuredPosts }) => {
  return (
    <Layout className={styles.container}>
      <main className={styles.introduction}>
        <h2>
          Hello! 
          <Image src={HandWEBP} alt='waving'/>
        </h2>
        <p>
          I&apos;m Caio Vinícius, an 18 year old Brazilian web developer.
        </p>
        <p>
          I don&apos;t work at the moment but I&apos;m looking for one. I am studying Systems Analysis and 
          Development at FATEC in Presidente Prudente.
        </p>

        <Contacts />
      </main>

      <section className={styles.featuredProjects}>
        <h2>Featured Projects</h2>

        <ul className={styles.featuredProjectsList}>
          { featuredProjects.map(project => (
            <li
              key={project.slug}
            >
              <FeaturedProject project={project} />
            </li>
          )) }
        </ul>
      </section>

      <section className={styles.featuredPosts}>
        <h2>Featured Posts</h2>

        <ul className={styles.featuredPostsList}>
          { featuredPosts.map(post => (
            <li 
              key={post.slug}
            >
              <FeaturedPost post={post} />
            </li>
          )) }
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredProjects = await GraphCMS.getAllProjects();
  const featuredPosts = await GraphCMS.getAllPosts();

  return {
    props: {
      featuredProjects: featuredProjects.slice(0, 3),
      featuredPosts: featuredPosts.slice(0, 3),
    },
  }
};

export default Home;
