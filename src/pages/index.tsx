import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { GraphApi, Types } from '@lib/graphcms';

import { Layout } from '@components/Layouts/Layout';
import { Link } from '@components/Link';
import { Contacts } from '@components/Contacts';
import { FeaturedProject } from '@components/FeaturedProject';
import { PostCard } from '@components/PostCard';

import HandWEBP from '@public/images/hand.webp';
import OpenSVG from '@public/icons/open.svg';

import styles from '@styles/pages/Home.module.scss';

interface HomeProps {
  featuredProjects: Types.IFeaturedProject[];
  featuredPosts: Types.IPostDetails[];
};

const Home: NextPage<HomeProps> = ({ featuredProjects, featuredPosts }) => {
  return (
    <Layout
      seo={{
        description: 'This is my portfolio and blog where I detail my projects and document what I did along the way.'
      }}
      className={styles.container}
    >
      <main className={styles.introduction}>
        <h2>
          Hello! 
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

      <section className={styles.featuredProjects}>
        <div>
          <h2>Featured Projects</h2>
          <Link href='/projects'>
            See all
            <Image
              src={OpenSVG}
              width={15}
              height={15}
              alt='See all'
            />
          </Link>
        </div>

        <ul className={styles.featuredProjectsList}>
          { featuredProjects.map(project => (
            <li
              key={project.id}
            >
              <FeaturedProject project={project} />
            </li>
          )) }
        </ul>
      </section>

      <section className={styles.featuredPosts}>
        <div>
          <h2>Featured Posts</h2>
          <Link href='/blog'>
            See all
            <Image
              src={OpenSVG}
              width={15}
              height={15}
              alt='See all'
            />
          </Link>
        </div>

        <ul className={styles.featuredPostsList}>
          { featuredPosts.map(post => (
            <li 
              key={post.slug}
            >
              <PostCard post={post} />
            </li>
          )) }
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredProjects = await GraphApi.getAllFeaturedProjects();
  const featuredPosts = await GraphApi.getAllFeaturedPosts();

  return {
    props: {
      featuredProjects: featuredProjects,
      featuredPosts: featuredPosts,
    },
    revalidate: 60 * 60 * 24 // Revalidate every 24h
  }
};

export default Home;
