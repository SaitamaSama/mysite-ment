import * as React from 'react';
import styles from '../scss/logo.scss';
import logoImg from '../../../assets/logo.svg';
import logoText from '../../../assets/logo-text.svg';

export interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}): JSX.Element => {
  return (
    <section className={styles.logo}>
      <img src={logoImg} className={styles.logoImg} alt={"logo image"} />
      <img src={logoText} className={styles.logoText} alt={"logo text"} />
    </section>
  )
}
