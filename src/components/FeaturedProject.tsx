import Image from "next/image";

import { IProject } from "@lib/graphcms";

import HandWEBP from '@public/images/hand.webp';

import styles from '@styles/components/FeaturedProjects.module.scss';

interface FeaturedProjectProps {
  project: IProject;
};

export const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <div className={styles.featuredProjectContainer}>
      <div className={styles.content}>
        <div className={styles.thumb}>
          <Image src={HandWEBP} alt='icon' />
        </div>
        <div className={styles.details}>
          <h3>{ project.name }</h3>
          <p>{ project.description }</p>
        </div>
      </div>
    </div>
  )
};