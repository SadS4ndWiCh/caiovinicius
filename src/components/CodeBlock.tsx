import { HTMLProps } from 'react';

import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import styles from '@styles/components/CodeBlock.module.scss';

export const CodeBlock = ({ children }: HTMLProps<HTMLElement>) => {
  return (
    <div className={styles.code}>
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
    </div>
  ) 
};