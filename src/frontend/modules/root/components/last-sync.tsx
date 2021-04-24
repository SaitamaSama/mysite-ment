import * as React from 'react';
import styles from '../scss/last-sync.scss';
import {Sync as SyncIcon} from '@material-ui/icons';

export const LastSync: React.FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <section className={styles.lastSync}>
      <section className={styles.icon}>
        <SyncIcon style={{ fontSize: 'inherit' }} />
      </section>
      <span className={styles.label}>
        Last synced 15 mins ago
      </span>
    </section>
  )
}