import * as React from 'react';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import styles from '../scss/acl-table.scss';
import { AccessLevel, AccessLevelChip } from './access-level-chip';
import { AddCircleOutline as AddIcon } from '@material-ui/icons';
import { formatDistance } from 'date-fns';
import { IOSSwitch } from '../../common/components/ios-switch';
import { AclTableRow } from './acl-table-row';

export type Permissions = {
  view: boolean;
  edit: boolean;
  create: boolean;
  delete: boolean;
};

export type AclTableData = {
  role: string;
  accessLevel: AccessLevel;
  permission: {
    view: boolean;
    edit: boolean;
    create: boolean;
    delete: boolean;
  };
  changePermission: (permission: Permissions, value: boolean) => unknown;
  lastUpdated: Date;
};

export interface AclTableProps {
  data: Array<AclTableData>;
}

export const AclTable: React.FC<AclTableProps> = ({ data }): JSX.Element => {
  return (
    <Table className={styles.aclTable}>
      <TableHead>
        <TableRow>
          <TableCell className={styles.headerCell} />
          <TableCell className={`${styles.headerCell} ${styles.primary}`}>
            Department/Role Name
          </TableCell>
          <TableCell className={styles.headerCell}>Access Level</TableCell>
          <TableCell className={styles.headerCell} align={'center'}>
            Summary
          </TableCell>
          <TableCell className={styles.headerCell}>Last Updated</TableCell>
          <TableCell className={styles.headerCell} />
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <AclTableRow {...row} key={index} />
        ))}
      </TableBody>
    </Table>
  );
};
