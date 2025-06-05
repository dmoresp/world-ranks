import styles from './Field.module.css';

function Field({ children, id, label, legend }) {
  if (legend) {
    return (
      <fieldset className={styles.field}>
        {legend && <legend>{legend}</legend>}
        {children}
      </fieldset>
    )
  }
  if (label) {
    return (
      <div className={styles.field}>
        {label && <label htmlFor={id}>{label}</label>}
        {children}
      </div>
    )
  }
}

export default Field;