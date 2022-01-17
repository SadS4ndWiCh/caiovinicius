import styles from '@styles/components/NoResults.module.scss';

interface NoResultsProps {
  message?: string;
};

export const NoResults = ({ message='No results found' }: NoResultsProps) => {
  return (
    <div className={styles.noResultsContainer}>
      <h3>Whoops!</h3>
      <p>{ message }</p>
    </div>
  )
};