import styles from './Hero.module.css';

import logo from '../../assets/Logo.svg';
import { Link } from 'react-router';

function Hero() {
  return (
    <Link to="/">
      <header className={styles.hero}>
        <img src={logo} alt="World Ranks" />
      </header>
    </Link>
  );
}

export default Hero;
