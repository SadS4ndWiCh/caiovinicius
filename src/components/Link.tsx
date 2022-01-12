import { HTMLProps } from 'react';
import NextLink from 'next/link';

export const Link = ({ href, children, className='', ...rest }: HTMLProps<HTMLAnchorElement>) => {
  return (
    <NextLink href={href as string}>
      <a className={className} { ...rest }>
        { children }
      </a>
    </NextLink>
  )
};