import Image from "next/image";

import * as GraphCMS from "@lib/graphcms";

import GithubSVG from '@public/icons/github.svg';
import OpenSVG from '@public/icons/arrow.svg';

import styles from '@styles/components/ProjectCard.module.scss';

interface ProjectCardProps {
  project: GraphCMS.IProject;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const createdYear = (new Date(project.createdAt)).getFullYear();

  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.cardHeader}>
        { project.icon && (
          <div className={styles.thumb}>
            <Image src={project.icon.url} width={25} height={25} alt='icon' />
          </div>
        ) }
        <h3>{ project.name }</h3>
        <span className={styles.createdAt}>{ createdYear }</span>
      </div>
      <div className={styles.details}>
        <p>{ project.description }</p>

        <div className={styles.screenshots}>
          { project.images.map(image => (
            <Image
              key={image.id}
              src={image.url}
              width={350}
              height={200}
              alt={`${project.name} screenshot`}
              layout='responsive'
              className={styles.screenshot}
            />
          )) }
        </div>

        <div className={styles.links}>
          <a
            href={project.sourceCode}
            title='Source code'
            className={styles.sourceCode}
          >
            <Image src={GithubSVG} width={22} height={22} alt='Source code' />
          </a>

          <a
            href={project.demo}
            title={`Visit ${project.name}`}
            target='_blank'
            rel="noreferrer"
            className={styles.demoLink}
          >
            <Image
              src={OpenSVG}
              width={15}
              height={15} 
              alt={`Visit ${project.name}`}
              className={styles.demoLinkImage}
            />
          </a>
        </div>
      </div>
    </div>
  )
};