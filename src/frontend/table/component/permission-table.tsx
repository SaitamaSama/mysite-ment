import * as React from 'react';
import {
  IconButton,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import styles from '../scss/table.scss';
import { AccessLevel, AccessLevelChip } from './access-level-chip';
import { formatDistance } from 'date-fns';
import { RemoveRedEyeOutlined as ViewIcon } from '@material-ui/icons';

export type TableData = {
  roleOrDepartment: string;
  accessLevel: AccessLevel;
  memberCount: number;
  lastUpdated: Date;
  onSelect: (roleOrDepartment: string) => unknown;
};

export interface TableProps {
  data: Array<TableData>;
}

export const PermissionTable: React.FC<TableProps> = ({
  data,
}): JSX.Element => {
  return (
    <Table className={styles.permissionTable}>
      <TableHead>
        <TableRow>
          <TableCell className={styles.headerCell} />
          <TableCell className={`${styles.headerCell} ${styles.primary}`}>
            Department/Role Name
          </TableCell>
          <TableCell className={styles.headerCell}>Access Level</TableCell>
          <TableCell className={styles.headerCell}>No of members</TableCell>
          <TableCell className={styles.headerCell}>Last Updated</TableCell>
          <TableCell className={styles.headerCell} />
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className={styles.bodyCell}>
              <Radio
                style={{
                  opacity: row.roleOrDepartment !== 'Super Admin' ? 1 : 0,
                  cursor:
                    row.roleOrDepartment !== 'Super Admin'
                      ? 'pointer'
                      : 'default',
                }}
                color={'primary'}
              />
            </TableCell>
            <TableCell className={`${styles.bodyCell} ${styles.primary}`}>
              {row.roleOrDepartment}
            </TableCell>
            <TableCell className={styles.bodyCell}>
              <AccessLevelChip level={row.accessLevel} />
            </TableCell>
            <TableCell className={styles.bodyCell}>{row.memberCount}</TableCell>
            <TableCell
              className={styles.bodyCell}
              style={{ textTransform: 'capitalize' }}
            >
              {formatDistance(row.lastUpdated, new Date(), { addSuffix: true })}
            </TableCell>
            <TableCell className={styles.bodyCell}>
              <IconButton onClick={() => row.onSelect(row.roleOrDepartment)}>
                <ViewIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
