import { gql, GraphQLClient } from 'graphql-request';

export interface IProject {
  slug: string;
  name: string;
  description: string;
};

export interface IFeaturedPost {
  slug: string;
  title: string;
  createdAt: string;
}

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string);

export const getAllProjects = async (): Promise<IProject[]> => {
  const query = gql`
    query Projects {
      projects {
        slug,
        name,
        description,
      }
    }
  `;

  const data = await client.request(query);

  return data.projects;
};

export const getAllPosts = async (): Promise<IFeaturedPost[]> => {
  const query = gql`
    query Posts {
      posts {
        slug,
        title,
        createdAt,
      }
    }
  `;

  const data = await client.request(query);

  return data.posts;
};