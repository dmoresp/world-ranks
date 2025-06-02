import styles from './Details.module.css';
import { DETAIL_FIELDS } from '../../data/services/constants.js';
import { capitalize, formatNumber } from '../../directives/textDirectives.js';
import i18next from 'i18next';

function Pill({ label, value }) {
  return (
    <div className={styles.pill}>
      <span className={styles.label}>
        {label === DETAIL_FIELDS.area
          ? capitalize(i18next.t(label))
          : capitalize(label)}
      </span>
      <span className={styles.value}>
        {typeof value === 'number' ? formatNumber(value) : value}
      </span>
    </div>
  );
}

export default Pill;
