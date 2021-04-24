import * as React from 'react';
import styles from '../scss/app-bar.scss';
import {Avatar, IconButton} from "@material-ui/core";
import { NotificationsOutlined as NotificationIcon, HelpOutline as HelpIcon } from '@material-ui/icons';

export const AppBar: React.FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <header className={styles.appBar}>
      <div className={styles.gap} />
      <Avatar color={"#C5CEE0"} className={styles.avatar} />
      <div className={styles.userName}>Kishore</div>
      <IconButton style={{ fontSize: '22px' }}>
        <NotificationIcon />
      </IconButton>
      <IconButton>
        <HelpIcon />
      </IconButton>
    </header>
  )
}