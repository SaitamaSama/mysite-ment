import * as React from 'react';
import styles from '../scss/link.scss';

export interface LinkProps {
  icon: React.ReactElement;
  label: string;
  active?: boolean;
  href: string;
}

export const Link: React.FC<LinkProps> = ({ icon, label, active, href }): JSX.Element => {
  return (
    <a className={`${styles.link} ${active && styles.active}`} href={href}>
      <div className={styles.icon}>
        {icon}
      </div>
      <section className={styles.label}>
        {label}
      </section>
    </a>
  )
}