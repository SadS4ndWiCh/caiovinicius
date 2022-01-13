import { IFeaturedPost } from "@lib/graphcms";

import { date } from "src/utils";

import { Link } from "./Link";

import styles from '@styles/components/FeaturedPost.module.scss';

interface FeaturedPostProps {
  post: IFeaturedPost;
};

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const parsedDate = date(post.createdAt);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={styles.featuredPostContainer}
    >
      <time dateTime={post.createdAt}>{ parsedDate }</time>
      <h3>{ post.title }</h3>
    </Link>
  )
};