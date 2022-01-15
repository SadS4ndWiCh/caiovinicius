import { useRouter } from 'next/router';

import { Seo, SeoProps } from '../Seo';
import { Link } from '../Link';

import styles from '@styles/components/Layouts/Header.module.scss';

interface HeaderProps {
  seo: SeoProps;
};

export const Header = ({ seo }: HeaderProps) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const navLinks = [
    { label: 'Home', destination: '/' },
    { label: 'Projects', destination: '/projects' },
    { label: 'Blog', destination: '/blog' },
  ];

  const isCurrentPath = (href: string) => {
    if (href === '/') return currentPath === href;
    return currentPath === href;
  };

  return (
    <header className={styles.headerContainer}>
      <Seo title={seo.title} description={seo.description} ogImage={seo.ogImage} />

      <nav>
        <ul>
          { navLinks.map(link => (
            <li key={link.label}>
              <Link
                href={link.destination}
                className={isCurrentPath(link.destination) ? styles.linkHighlight : ''}
              >
                { link.label }
              </Link>
            </li>
          )) }
        </ul>
      </nav>
    </header>    
  )
};