import { gql, GraphQLClient } from 'graphql-request';

export type ProjectImage = {
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
