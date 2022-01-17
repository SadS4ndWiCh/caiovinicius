import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from 'next/image';

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { GraphApi } from "@lib/graphcms";
import { date } from "src/utils";

import { Layout } from "@components/Layouts/Layout";
import { CodeBlock } from "@components/CodeBlock";

import styles from '@styles/pages/Blog/Post.module.scss';

interface PostProps {
  postDetails: {
    title: string;
    excerpt: string;
    coverImage: {
      url: string;
    };
    tags: string[];
    date: string;
  };
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const PostImage = ({ src, alt }: any) => (
  <Image src={src} width={800} height={420} layout='responsive' alt={alt} />
)

const components = {
  code: CodeBlock,
  img: PostImage,
};

const Post: NextPage<PostProps> = ({ postDetails, content }) => {
  const publishedDate = date(postDetails.date);

  return (
    <Layout
      seo={{
        title: postDetails.title,
        description: postDetails.excerpt,
        keywords: postDetails.tags,
        ogImage: postDetails.coverImage.url,
      }}
      className={styles.container}
    >
      <article>
        <header>
          <h1 className={styles.title}>{ postDetails.title }</h1>
          <time>{ publishedDate }</time>
          <PostImage src={postDetails.coverImage.url} alt={postDetails.title} />
          <p className={styles.excerpt}>{ postDetails.excerpt }</p>
        </header>
        
        <main className={styles.postContent}>
          <MDXRemote {...content} components={components} />
        </main>

        <footer>
          <div className={styles.tagsList}>
            { postDetails.tags.map((tag, i) => (
              <span key={i}>{ tag }</span>
            )) }
          </div>
        </footer>
      </article>
    </Layout>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPostsSlugs = await GraphApi.getPostsSlugs();
  return {
    paths: allPostsSlugs.map(({ slug }: any) => ({ params: { slug } })),
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const post = await GraphApi.getPostBySlug(slug);

  const content = await serialize(post.content);

  return {
    props: {
      postDetails: {
        title: post.title,
        excerpt: post.excerpt,
        coverImage: post.coverImage,
        tags: post.tags,
        date: post.date,
      },
      content
    },
    revalidate: 60 * 60 * 24 // Revalidate every 24h
  }
};

export default Post;