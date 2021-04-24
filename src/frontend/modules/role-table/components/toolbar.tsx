import * as React from 'react';
import styles from '../scss/toolbar.scss';
import { Button, IconButton } from '@material-ui/core';
import {
  Add as AddIcon,
  DeleteOutline as DeleteIcon,
  EditOutlined as EditIcon,
} from '@material-ui/icons';

export const Toolbar: React.FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <section className={styles.toolbar}>
      <section className={styles.buttonContainer}>
        <Button
          variant={'contained'}
          color={'primary'}
          startIcon={<AddIcon />}
          style={{ width: 190 }}
        >
          Add Role
        </Button>
      </section>
      <div className={styles.space} />
      <IconButton className={styles.iconButton}>
        <EditIcon />
      </IconButton>
      <IconButton className={styles.iconButton}>
        <DeleteIcon />
      </IconButton>
    </section>
  );
};
