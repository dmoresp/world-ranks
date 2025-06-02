import styles from './Panel.module.css';
import { classnames } from '../../directives/cssDirectives.js';

function Panel({ children, className }) {
  return (
    <div
      className={classnames({ [styles.panel]: true, [className]: className })}
    >
      {children}
    </div>
  );
}

export default Panel;
