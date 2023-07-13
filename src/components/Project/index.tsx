import Image from "next/image";

import { urlForImage } from "~/sanity/lib/image";
import { IProject } from "~/types";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  project: IProject
};

export const Project = ({ project }: Props) => {
  return (
    <div
      className='grid grid-cols-1 gap-7 md:grid-cols-2 md:items-start'
    >
      <div className='relative w-full h-60'>
        <Image
          src={urlForImage(project.thumb).url()}
          className='object-cover object-left w-full aspect-video rounded-md duration-500'
          loading='lazy'
          alt={project.title}
          fill
        />
      </div>

      <div className='flex-1'>
        <Header
          data={{
            tags: project.categories,
            name: project.title,
            description: project.description,
          }}
        />

        <Footer
          data={{ sourceCode: project.sourceCode, demo: project.demo }}
        />
      </div>
    </div>
  )
};