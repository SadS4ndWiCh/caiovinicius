import Image from "next/image";

import { IProject } from "@lib/graphcms";

import HandWEBP from '@public/images/hand.webp';
import GithubSVG from '@public/icons/github.svg';
import OpenSVG from '@public/icons/open.svg';

import styles from '@styles/components/ProjectCard.module.scss';

interface ProjectCardProps {
  project: IProject;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.thumb}>
        <Image src={HandWEBP} alt='icon' />
      </div>
      <div className={styles.details}>
        <h3>{ project.name }</h3>
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