import { DETAIL_FIELDS } from '../../data/services/constants.js';
import styles from './Details.module.css';
import { capitalize } from '../../directives/textDirectives.js';

function Entry({ label, value }) {
  let _value;
  if (value) {
    if (label === DETAIL_FIELDS.currencies) {
      _value = Object.values(value)
        .map((currency) => currency.name)
        .join(', ');
    } else if (label === DETAIL_FIELDS.languages) {
      _value = Object.values(value).join(', ');
    } else if (Array.isArray(value)) {
      _value = value.join(', ');
    } else {
      _value = value;
    }
  }
  return (
    <div className={styles.entry}>
      <span className={styles.label}>{capitalize(label)}</span>
      <span className={styles.value}>{_value}</span>
    </div>
  );
}

export default Entry;
