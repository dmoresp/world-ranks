import styles from './TextInput.module.css';

function TextInput({ form, icon, name, value, placeholder, onKeyUp }) {

  return (
    <div className={styles.container}>
      <label className="visually-hidden" htmlFor={name}>{name}</label>
      {icon ? <img src={icon} alt="icon" className={styles.icon} /> : null}
      <input
        form={form}
        className={styles.input}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}

TextInput.propTypes = {

}

export default TextInput;
