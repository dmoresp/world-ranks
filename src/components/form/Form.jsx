import styles from './Form.module.css';

function Form({ id, action, children }) {
  return (
    <form
      id={id}
      onSubmit={action}
      className={styles.form}
    >
      {children}
    </form>
  );
}

export default Form;
