import { gql, GraphQLClient } from 'graphql-request';

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
  sourceCode: string;
  demo: string;
  images: ProjectImage[];
};

export interface IFeaturedProject {
  slug: string;
  name: string;
  description: string;
}
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
        createdAt,
        slug,
        name,
        description,
        sourceCode,
        demo,
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