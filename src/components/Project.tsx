import { Link } from "./Link";

export const Project = () => {
  return (
    <div className='flex gap-7'>
      <div className='flex-1 aspect-video bg-primary-600' />
      <div className='flex-1'>
        <header>
          <div>
            <span className='text-xs px-2 py-[0.125rem] border border-indigo-700 rounded-full text-white'>
              React
            </span>
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
            className='text-xs px-3 py-1 text-white border border-primary-300 rounded-full'
          >
            Source Code
          </Link>
          <Link
            href='#'
            className='text-xs px-3 py-1 text-white border border-primary-300 rounded-full bg-primary-300'
          >
            View Demo
          </Link>
        </footer>
      </div>
    </div>
  )
};