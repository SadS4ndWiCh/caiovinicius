import type { GetStaticProps, NextPage } from "next";

import * as GraphCMS from "@lib/graphcms";

import { Layout } from "@components/Layouts/Layout";
import { PostCard } from "@components/PostCard";

import styles from '@styles/pages/Blog/Blog.module.scss';

interface BlogProps {
  allPosts: GraphCMS.IPostDetails[]
};

const Blog: NextPage<BlogProps> = ({ allPosts }) => {
  return (
    <Layout 
      seo={{
        title: 'Blog',
        description: 'My tech blog'
      }}
      className={styles.container}
    >
      <h1>Blog</h1>

      <main>
        <ul className={styles.postsList}>
          { allPosts.map(post => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          )) }
        </ul>
      </main>
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await GraphCMS.getAllPosts();
  
  return {
    props: {
      allPosts
    },
    revalidate: 60 * 60 * 24 // Revalidate every 24h
  };
};

export default Blog;