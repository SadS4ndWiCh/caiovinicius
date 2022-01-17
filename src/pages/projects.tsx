import type { GetStaticProps, NextPage } from "next";

import { GraphApi, Types } from "@lib/graphcms";

import { Layout } from "@components/Layouts/Layout";
import { ProjectCard } from "@components/ProjectCard";
import { NoResults } from "@components/NoResults";

import styles from '@styles/pages/Projects.module.scss';

interface ProjectsProps {
  allProjects: Types.IProject[],
};

const Projects: NextPage<ProjectsProps> = ({ allProjects }) => {
  return (
    <Layout
      seo={{
        title: 'Projects',
        description: 'List of my projects'
      }}
      className={styles.container}
    >
      <h1>All Projects</h1>

      <main>
        { allProjects.length > 0 ? (
          <ul className={styles.projectsList}>
            { allProjects.map(project => (
              <li key={project.slug}>
                <ProjectCard project={project}/>
              </li>
            )) }
          </ul>
        ) : (
          <NoResults />
        ) }
      </main>
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const allProjects = await GraphApi.getAllProjects();

  return {
    props: {
      allProjects,
    },
    revalidate: 60 * 60 * 24 // Revalidate every 24h
  }
};

export default Projects;