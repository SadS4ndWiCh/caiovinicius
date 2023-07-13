import { Icons } from '~/components/Icons';

type Props = {
  data: {
    sourceCode: string;
    demo?: string;
  }
};

export const Footer = ({ data }: Props) => {
  return (
    <footer
      className='flex items-center justify-between mt-4'
    >

      <a
        href={data.sourceCode}
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2 px-4 py-[6px] text-xs text-white border border-primary-300 rounded-full bg-primary-900 transition-colors hover:bg-primary-300'
      >
        <Icons.github className='w-5 h-5 fill-white' />
        Source Code
      </a>

      {data.demo && (
        <a
          href={data.demo}
          target='_blank'
          rel='noreferrer'
          className='flex items-center gap-2 px-4 py-[6px] text-xs text-white border border-primary-300 rounded-full bg-primary-900 transition-colors hover:bg-primary-300'
        >
          View Demo
          <Icons.arrow className='w-5 h-5 text-white -rotate-45' />
        </a>
      )}
    </footer>
  )
}