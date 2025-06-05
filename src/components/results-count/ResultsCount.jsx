import styles from './ResultsCount.module.css';

function ResultsCount({ count = 0 }) {
  return <span className={styles.counter}>Found {count} countries</span>;
}

export default ResultsCount;
