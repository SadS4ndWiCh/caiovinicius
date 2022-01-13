import { Contacts } from '@components/Contacts';

import styles from '@styles/components/Layouts/Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.siteDetails}>
        <p>Designed <em>(Inspired by others)</em> and developed by Caio Vinícius.</p>
        <p>
          Built with <strong>Next.js</strong> and hosted on <strong>Vercel</strong>.
        </p>
      </div>

      <Contacts />
    </footer>    
  )
};