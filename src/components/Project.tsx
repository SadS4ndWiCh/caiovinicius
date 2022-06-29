import { Link } from "./Link";
import { FiArrowUpRight } from 'react-icons/fi';
import { FaGithub } from "react-icons/fa";

export const Project = () => {
  return (
    <div className='flex flex-col gap-7 md:flex-row'>
      <div className='flex-1 aspect-video bg-primary-600' />
      <div className='flex-1'>
        <header>
          <div>
            <div
              className='w-fit bg-identity rounded-full px-[0.125rem] py-[0.125rem]'
            >
              <span
                className='block text-[10px] px-3 py-[0.125rem] rounded-full bg-primary-900 text-white uppercase tracking-widest'
              >
                Figma
              </span>
            </div>
          </div>
          <h3
            className='text-4xl font-bold text-heading'
          >
            Plataforma de Eventos
          </h3>
        </header>
        <p className='mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis leo, dui nunc, sit montes, volutpat interdum 
          etiam phasellus.<br /><br />
          Sed amet, eleifend turpis dignissim suscipit auctor tempor. Mollis sem varius tellus morbi aliquam bibendum 
          sit egestas. Netus ac habitant iaculis et, dui, massa placerat ullamcorper.
        </p>
        <footer className='flex items-center justify-between mt-4'>
          <Link
            href='#'
            className='flex items-center gap-2 text-xs px-3 py-2 text-white border border-primary-300 rounded-full transition-colors hover:bg-primary-300'
          >
            Source Code <FaGithub size={16} />
          </Link>
          <Link
            href='#'
            className='flex items-center gap-1 text-xs px-3 py-2 text-white border border-primary-300 rounded-full bg-primary-300 transition-colors hover:bg-primary-900'
          >
            View Demo <FiArrowUpRight size={16} />
          </Link>
        </footer>
      </div>
    </div>
  )
};