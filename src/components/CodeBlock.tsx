import { HTMLProps } from 'react';

import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeBlock = ({ children }: HTMLProps<HTMLElement>) => {
  return (
    <SyntaxHighlighter
      language='javascript'
      style={dracula}
      customStyle={{
        border: '1px solid var(--clr-gray-2)',
        borderRadius: '.8rem',
        fontSize: '1.5rem',
        backgroundColor: 'transparent',
      }}
    >
      { children }
    </SyntaxHighlighter>
  ) 
};