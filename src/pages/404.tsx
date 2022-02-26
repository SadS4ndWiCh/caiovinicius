import { NextPage } from "next";

import { Layout } from "@components/Layouts/Layout";
import { Link } from "@components/Link";

import styles from '@styles/pages/NotFound.module.scss';

const NotFound: NextPage = () => {
  return (
    <Layout
      seo={{}}
      className={styles.container}
    >
      <h1>404</h1>
      <p>Oops... Page not found</p>
      
      <Link href='/'>Go to home</Link>
    </Layout>
  )
};

export default NotFound;