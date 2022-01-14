import Image from "next/image";

import { IProject } from "@lib/graphcms";

import HandWEBP from '@public/images/hand.webp';

import styles from '@styles/components/FeaturedProjects.module.scss';

interface FeaturedProjectProps {
  project: IProject;
};

export const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  const createdYear = (new Date(project.createdAt)).getFullYear();

  return (
    <div className={styles.featuredProjectContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.thumb}>
            <Image src={HandWEBP} alt='icon' />
          </div>
          <h3>{ project.name }</h3>
          <span className={styles.createdAt}>{ createdYear }</span>
        </div>

        <p className={styles.description}>{ project.description }</p>
      </div>
    </div>
  )
};