import * as React from 'react';
import { AclTableData } from './acl-table';
import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import styles from '../scss/acl-details.scss';

export const AclDetails: React.FC<AclTableData> = ({
  ...data
}): JSX.Element => {
  return (
    <Box margin={1} component="section" className={styles.aclDetails}>
      <section className={`${styles.control} ${styles.col}`}>
        <Typography variant="body1" gutterBottom>
          Access Control
        </Typography>
        <RadioGroup value={data.accessLevel} className={styles.radioGroup}>
          <FormControlLabel
            control={<Radio color={'primary'} />}
            value={'all'}
            label={
              <>
                <Typography
                  color="textPrimary"
                  variant="body2"
                  className={styles.radioLabel}
                >
                  All Access
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body2"
                  className={styles.radioLabel}
                >
                  Can access all the items
                </Typography>
              </>
            }
            className={styles.radio}
          />
          <FormControlLabel
            control={<Radio color={'primary'} />}
            value={'restricted'}
            label={
              <>
                <Typography
                  color="textPrimary"
                  variant="body2"
                  className={styles.radioLabel}
                >
                  Restricted Access
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body2"
                  className={styles.radioLabel}
                >
                  Can access only assigned or created items
                </Typography>
              </>
            }
            className={styles.radio}
          />
        </RadioGroup>
      </section>
      <section className={`${styles.col} ${styles.perms}`}>
        <Typography variant="body1" gutterBottom>
          Permissions
        </Typography>
        <List dense>
          <ListItem className={styles.listItem}>
            <ListItemIcon>
              <Checkbox
                checked={data.permission.view}
                onChange={() => {}}
                color={'primary'}
              />
            </ListItemIcon>
            <ListItemText primary={'View items in access'} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                checked={data.permission.edit}
                onChange={() => {}}
                color={'primary'}
              />
            </ListItemIcon>
            <ListItemText primary={'Edit items in access'} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                checked={data.permission.create}
                onChange={() => {}}
                color={'primary'}
              />
            </ListItemIcon>
            <ListItemText primary={'Create items in access'} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                checked={data.permission.delete}
                onChange={() => {}}
                color={'primary'}
              />
            </ListItemIcon>
            <ListItemText primary={'Delete items in access'} />
          </ListItem>
        </List>
      </section>
    </Box>
  );
};
