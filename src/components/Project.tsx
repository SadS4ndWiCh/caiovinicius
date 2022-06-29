import { Link } from "./Link";
import { FiArrowUpRight } from 'react-icons/fi';
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export interface IProject {
  id: string;
  name: string;
  description: string;
  tags: string[];
  sourceCode: string;
  demo: string;
  image: {
    width: number;
    height: number;
    url: string;
  }[]
};

type Props = {
  project: IProject
};

export const Project = ({ project }: Props) => {
  return (
    <div className='flex flex-col gap-7 md:flex-row'>
      <div className='relative flex-1 aspect-video bg-primary-600'>
        <Image
          src={project.image[0].url}
          layout='fill'
          objectFit='cover'
          alt={project.name}
        />
      </div>
      <div className='flex-1'>
        <header>
          <div className='flex items-center gap-2'>
            { project.tags.map(tag => (
              <div key={tag} className='w-fit bg-identity rounded-full px-[0.125rem] py-[0.125rem]'>
                <span
                  className='block text-[10px] px-3 py-[0.125rem] rounded-full bg-primary-900 text-white uppercase tracking-widest'
                >
                  { tag }
                </span>
              </div>
            )) }
          </div>
          <h3
            className='text-4xl font-bold text-heading'
          >
            { project.name }
          </h3>
        </header>
        <p className='mt-4'>
          { project.description }
        </p>
        <footer className='flex items-center justify-between mt-4'>
          <Link
            href={project.sourceCode}
            className='flex items-center gap-2 text-xs px-3 py-2 text-white border border-primary-300 rounded-full transition-colors hover:bg-primary-300'
          >
            Source Code <FaGithub size={16} />
          </Link>
          <Link
            href={project.demo}
            className='flex items-center gap-1 text-xs px-3 py-2 text-white border border-primary-300 rounded-full bg-primary-300 transition-colors hover:bg-primary-900'
          >
            View Demo <FiArrowUpRight size={16} />
          </Link>
        </footer>
      </div>
    </div>
  )
};