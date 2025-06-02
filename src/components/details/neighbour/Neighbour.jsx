import styles from './Neighbour.module.css';
import { use } from 'react';
import { Link } from 'react-router';
import Flag from '../../flag/Flag.jsx';

function Neighbour({ neighbour, link }) {
  let content;
  if (neighbour instanceof Promise) {
    content = use(neighbour);
  } else {
    content = neighbour;
  }
  return (
    <div className={styles.neighbour}>
      <Link to={link}>
        <div className={styles.content}>
          <Flag flag={content.flag} className={styles.flag} />
          <span>{content.name}</span>
        </div>
      </Link>
    </div>
  );
}

export default Neighbour;
