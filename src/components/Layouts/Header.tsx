import { useRouter } from 'next/router';

import { Seo, SeoProps } from '../Seo';
import { Link } from '../Link';

import ArrowSVG from '@public/icons/arrow.svg';

import styles from '@styles/components/Layouts/Header.module.scss';
import Image from 'next/image';

interface HeaderProps {
  seo: SeoProps;
};

export const Header = ({ seo }: HeaderProps) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const navLinks = [
    { label: 'Home', destination: '/' },
    { label: 'Projects', destination: '/projects' },
  ];

  const isCurrentPath = (href: string) => {
    if (href === '/') return currentPath === href;
    return currentPath.startsWith(href);
  };

  return (
    <header className={styles.headerContainer}>
      <Seo 
        title={seo.title}
        description={seo.description}
        ogImage={seo.ogImage}
        keywords={seo.keywords}
      />

      <nav>
        <ul className={styles.navLinks}>
          { navLinks.map(link => (
            <li key={link.label} className={styles.link}>
              <Link
                href={link.destination}
                className={isCurrentPath(link.destination) ? styles.linkHighlight : ''}
              >
                { link.label }
              </Link>
            </li>
          )) }
          <li className={styles.downloadCv}>
            <a 
              href='https://drive.google.com/file/d/1hIkxHtyOTsq8psVqeNdZ6v-uHbXiMFBH/view?usp=sharing'
            >
              Download CV
              <Image
                src={ArrowSVG}
                width={15}
                height={15}
                alt='Arrow down icon'
                className={styles.arrowSvg}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>    
  )
};