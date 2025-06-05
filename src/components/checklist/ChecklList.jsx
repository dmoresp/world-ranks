import styles from './CheckList.module.css';

import { CHECKLIST_TYPES } from './constants.js';

function CheckList({ options, type = CHECKLIST_TYPES.CHECKBOX, onChange, checkedValues }) {
  return (
    <>
      {options.map(option => (
        <div
          key={option.value}
          className={`${styles.option} ${type === CHECKLIST_TYPES.BUTTON ? styles.buttonOption : styles.checkBoxOption}`}
        >
          <input
            className={type === CHECKLIST_TYPES.BUTTON ? 'visually-hidden' : ''}
            type="checkbox"
            name={option.value}
            id={option.value}
            onChange={e => onChange(e)}
            checked={checkedValues.includes(option.value)}
          />
          <label
            className={type === CHECKLIST_TYPES.BUTTON ? styles.button : ''}
            htmlFor={option.value}
          >
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
}

export default CheckList;
