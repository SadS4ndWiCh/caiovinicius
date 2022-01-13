import Image from "next/image";

import GithubSVG from '@public/icons/github.svg';
import TwitterSVG from '@public/icons/twitter.svg';

import styles from '@styles/components/Contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <a
        href="https://github.com/SadS4ndWiCh"
        target='_blank'
        rel='noreferrer'
        title='Github'
      >
        <Image src={GithubSVG} alt='My github' />
      </a>
      <a
        href="https://twitter.com/"
        target='_blank'
        rel='noreferrer'
        title='Twitter'
      >
        <Image src={TwitterSVG} alt='My twitter' />
      </a>
      <a
        href="mailto://caiocamargo.ct@gmail.com"
        title='Gmail'
        className={styles.emailMe}
      >
        Email me
      </a>
    </div>
  )
};