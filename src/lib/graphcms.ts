import { gql, GraphQLClient } from 'graphql-request';
// @ts-ignore
import faker from '@faker-js/faker';

type ProjectImage = {
  id: string,
  url: string,
  width: string,
  height: string,
};
export interface IProject {
  createdAt: string;
  slug: string;
  name: string;
  description: string;
  icon: {
    url: string;
  }
  sourceCode: string;
  demo: string;
  images: ProjectImage[];
};

export interface IFeaturedProject {
  createdAt: string;
  id: string;
  name: string;
  description: string;
  icon: { 
    url: string
  };
}
export interface IPostDetails {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export interface IPost {
  title: string;
  content: string;
  tags: string[];
  coverImage: {
    url: string;
  }
  date: string;
  excerpt: string;
}

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string);

export const getAllProjects = async (): Promise<IProject[]> => {
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

export const getAllFeaturedProjects = async (): Promise<IFeaturedProject[]> => {
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

export const getAllPosts = async (): Promise<IPostDetails[]> => {
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

export const getAllFeaturedPosts = async (): Promise<IPostDetails[]> => {
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

export const getPostBySlug = async (slug: string): Promise<IPost> => {
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