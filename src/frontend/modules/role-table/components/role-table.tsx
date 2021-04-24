import * as React from 'react';
import styles from '../scss/role-table.scss';
import { Toolbar } from './toolbar';
import { Paper, TableContainer } from '@material-ui/core';
import {
  PermissionTable,
  TableData,
} from '../../../table/component/permission-table';

export interface RoleTableProps {
  onSelect: (department: string) => unknown;
}

export const RoleTable: React.FC<RoleTableProps> = ({
  onSelect,
}): JSX.Element => {
  const data: Array<TableData> = [
    {
      roleOrDepartment: 'Management Team',
      accessLevel: 'all',
      memberCount: 4,
      lastUpdated: new Date(),
      onSelect,
    },
    {
      roleOrDepartment: 'Procurement Team',
      accessLevel: 'restricted',
      memberCount: 8,
      lastUpdated: new Date(),
      onSelect,
    },
    {
      roleOrDepartment: 'Project Team',
      accessLevel: 'restricted',
      memberCount: 16,
      lastUpdated: new Date(),
      onSelect,
    },
    {
      roleOrDepartment: 'IT Team',
      accessLevel: 'restricted',
      memberCount: 4,
      lastUpdated: new Date(),
      onSelect,
    },
    {
      roleOrDepartment: 'Super Admin',
      accessLevel: 'all',
      memberCount: 1,
      lastUpdated: new Date(),
      onSelect,
    },
  ];
  return (
    <section className={styles.roleTable}>
      <Toolbar />
      <TableContainer component={Paper}>
        <PermissionTable data={data} />
      </TableContainer>
    </section>
  );
};
