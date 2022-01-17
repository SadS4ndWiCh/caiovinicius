import { gql, GraphQLClient } from 'graphql-request';

import * as Types from './GraphCMS.types';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string);

export const getAllProjects = async (): Promise<Types.IProject[]> => {
  const query = gql`
    query Projects {
      projects {
        createdAt,
        slug,
        name,
        description,
        sourceCode,
        demo,
        icon {
          url,
        }
        image {
          id,
          url,
          width,
          height,
        }
      }
    }
  `;

  const data = await client.request(query);
  const allProjects = data.projects.map((project: any) => ({
    ...project,
    images: project.image,
  }));

  return allProjects;
};

export const getAllFeaturedProjects = async (): Promise<Types.IFeaturedProject[]> => {
  const query = gql`
    query FeaturedProjects {
      projects(where:{ featured: true }) {
        createdAt,
        id,
        name,
        description,
        icon {
          url,
        }
      }
    }
  `;

  const data = await client.request(query);

  return data.projects;
};

export const getAllPosts = async (): Promise<Types.IPostDetails[]> => {
  const query = gql`
    query Posts {
      posts {
        slug,
        title,
        excerpt,
        date,
      }
    }
  `;

  const data = await client.request(query);

  return data.posts;
};

export const getAllFeaturedPosts = async (): Promise<Types.IPostDetails[]> => {
  const query = gql`
    query FeaturedPosts {
      posts(where:{ featured: true }) {
        slug,
        title,
        excerpt,
        date,
      }
    }
  `;

  const data = await client.request(query);

  return data.posts;
};

export const getPostsSlugs = async (): Promise<{ slug: string }[]> => {
  const query = gql`
    query PostsSlugs {
      posts {
        slug
      }
    }
  `;

  const data = await client.request(query);
  
  return data.posts;
};

export const getPostBySlug = async (slug: string): Promise<Types.IPost> => {
  const query = gql`
    query PostBySlug {
      post(where:{ slug:"${slug}" }) {
        title,
        excerpt,
        content,
        tags,
        date,
        coverImage {
          url
        }        
      }
    }
  `;

  const data = await client.request(query);

  return data.post;
};