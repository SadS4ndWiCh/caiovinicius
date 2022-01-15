import { HTMLProps } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { SeoProps } from '@components/Seo';

import styles from '@styles/components/Layouts/Layout.module.scss';

interface LayoutProps extends HTMLProps<HTMLDivElement> {
  seo: SeoProps;
};

export const Layout = ({ seo, children, className='' }: LayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <Header seo={seo} />

      <div className={className}>
        { children }
      </div>

      <Footer />
    </div>
  )
};