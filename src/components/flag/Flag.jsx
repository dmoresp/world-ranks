import styles from '../flag/Flag.module.css';
import { classnames } from '../../directives/cssDirectives.js';

const Flag = ({ flag, className }) => {
  return flag ? (
    <div
      className={classnames({ [styles.flag]: true, [className]: className })}
    >
      <img src={flag.src} alt={flag.alt} />
    </div>
  ) : (
    ''
  );
};

export default Flag;
