import Image from "next/image";

import { Types } from "@lib/graphcms";

import styles from '@styles/components/FeaturedProjects.module.scss';

interface FeaturedProjectProps {
  project: Types.IFeaturedProject;
};

export const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  const createdYear = (new Date(project.createdAt)).getFullYear();

  return (
    <div className={styles.featuredProjectContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          { project.icon && (
            <div className={styles.thumb}>
              <Image src={project.icon.url} width={25} height={25} alt='icon' />
            </div>
          ) }
          <h3>{ project.name }</h3>
          <span className={styles.createdAt}>{ createdYear }</span>
        </div>

        <p className={styles.description}>{ project.description }</p>
      </div>
    </div>
  )
};