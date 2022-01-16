import { IPostDetails } from '@lib/graphcms';

import { date } from 'src/utils';

import { Link } from './Link';

import styles from '@styles/components/PostCard.module.scss';

interface PostCardProps {
  post: IPostDetails;
};

export const PostCard = ({ post }: PostCardProps) => {
  const publishedDate = date(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={styles.postCardContainer}
    >
      <time dateTime={post.date}>{ publishedDate }</time>
      <h3>{ post.title }</h3>
      <p>{ post.excerpt }</p>
    </Link>
  )
};