import * as React from 'react';
import { AclTableData, Permissions } from './acl-table';
import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
} from '@material-ui/core';
import styles from '../scss/acl-table-row.scss';
import {
  AddCircleOutline as OpenIcon,
  RemoveCircleOutline as CloseIcon,
} from '@material-ui/icons';
import { AccessLevelChip } from './access-level-chip';
import { formatDistance } from 'date-fns';
import { IOSSwitch } from '../../common/components/ios-switch';
import { AclDetails } from './acl-details';

function permissionToString(permissions: Permissions): string {
  const permLabel: Array<string> = [];
  if (permissions.view) {
    permLabel.push('View');
  }
  if (permissions.create) {
    permLabel.push('Create');
  }
  if (permissions.edit) {
    permLabel.push('Edit');
  }
  if (permissions.delete) {
    permLabel.push('Delete');
  }

  return permLabel.join(' | ');
}

export const AclTableRow: React.FC<AclTableData> = ({
  ...row
}): JSX.Element => {
  const [openDetails, setOpenDetails] = React.useState<boolean>(false);

  return (
    <>
      <TableRow
        className={`${styles.aclTableRow} ${openDetails && styles.open}`}
      >
        <TableCell className={styles.bodyCell}>
          <IconButton onClick={() => setOpenDetails(!openDetails)}>
            {openDetails ? <CloseIcon /> : <OpenIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={`${styles.bodyCell} ${styles.primary}`}>
          {row.role}
          {openDetails && (
            <section className={styles.about}>
              All aspects in the above module
            </section>
          )}
        </TableCell>
        <TableCell className={styles.bodyCell}>
          {!openDetails && <AccessLevelChip level={row.accessLevel} />}
        </TableCell>
        <TableCell className={styles.bodyCell} align={'center'}>
          {!openDetails && permissionToString(row.permission)}
        </TableCell>
        <TableCell
          className={styles.bodyCell}
          style={{ textTransform: 'capitalize' }}
        >
          {formatDistance(row.lastUpdated, new Date(), { addSuffix: true })}
        </TableCell>
        <TableCell className={styles.bodyCell}>
          <IOSSwitch checked={row.accessLevel !== 'none'} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} />
        <TableCell colSpan={5} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={openDetails} timeout={'auto'} unmountOnExit>
            <AclDetails {...row} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
