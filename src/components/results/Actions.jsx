import styles from './Results.module.css';
import { classnames } from '../../directives/cssDirectives.js';
import chevronIcon from '../../assets/icons/Chevron.svg';
import usePagination from '../../providers/countriesSearch/usePagination.jsx';

function Actions() {
  const { pagination, incrementPage, decrementPage } = usePagination();
  const { page, pages } = pagination;
  return (
    <div className={styles.actions}>
      <button
        className={classnames({
          [styles.previous]: true,
          [styles.button]: true,
        })}
        type="button"
        onClick={decrementPage}
        disabled={page === 0}
        title="Previous"
      >
        <img src={chevronIcon} alt="Previous" />
      </button>
      <span className={styles.pageCount}>
        {page + 1}/{pages}
      </span>
      <button
        className={classnames({ [styles.next]: true, [styles.button]: true })}
        type="button"
        onClick={incrementPage}
        disabled={page === pages - 1}
        title="Next"
      >
        <img src={chevronIcon} alt="Next" />
      </button>
    </div>
  );
}

export default Actions;
