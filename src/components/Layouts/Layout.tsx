import { HTMLProps } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

import styles from '@styles/components/Layout.module.scss';

export const Layout = ({ children, className='' }: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />

      <div className={className}>
        { children }
      </div>

      <Footer />
    </div>
  )
};