import type { GetStaticProps, NextPage } from "next";

import { getAllProjects, IProject } from "@lib/graphcms";

import { Layout } from "@components/Layouts/Layout";
import { ProjectCard } from "@components/ProjectCard";

import styles from '@styles/pages/Projects.module.scss';

interface ProjectsProps {
  allProjects: IProject[],
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

      <ul className={styles.projectsList}>
        { allProjects.map(project => (
          <li key={project.slug}>
            <ProjectCard project={project}/>
          </li>
        )) }
      </ul>
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const allProjects = await getAllProjects();

  return {
    props: {
      allProjects,
    }
  }
};

export default Projects;