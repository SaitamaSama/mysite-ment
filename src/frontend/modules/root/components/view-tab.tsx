import * as React from 'react';
import styles from '../scss/view-tab.scss';

export interface ViewTabProps {
  active?: boolean;
  label: string;
  icon?: React.ReactElement;
  onClick: () => unknown;
  //
}

export const ViewTab: React.FC<ViewTabProps> = ({
  active,
  label,
  icon,
  onClick,
}): JSX.Element => {
  return (
    <div
      role="button"
      className={`${styles.viewTab} ${active && styles.active}`}
      onClick={onClick}
    >
      <section className={styles.label}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <span style={!icon ? { margin: '12px' } : {}}>{label}</span>
      </section>
      <div className={styles.pillBottom} />
    </div>
  );
};
