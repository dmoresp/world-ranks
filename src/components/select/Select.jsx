import styles from './Select.module.css';

function Select({ options, id, onChange }) {
  return (
    <div className={styles.select}>
      <select id={id} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
