import * as React from 'react';
import styles from '../scss/access-control-table.scss';
import { IconButton, Paper, TableContainer } from '@material-ui/core';
import {
  ArrowBack as BackIcon,
  EditOutlined as EditIcon,
} from '@material-ui/icons';
import { AclTable, AclTableData } from '../../table/component/acl-table';
import { ViewTabs } from '../../modules/root/components/view-tabs';

export interface AccessControlTableProps {
  clearDepartment: () => unknown;
  department: string;
}

export const AccessControlTable: React.FC<AccessControlTableProps> = ({
  clearDepartment,
  department,
}): JSX.Element => {
  const data: Array<AclTableData> = [
    {
      role: 'Budget',
      accessLevel: 'all',
      permission: {
        view: true,
        create: true,
        edit: true,
        delete: true,
      },
      lastUpdated: new Date(),
      changePermission: () => {},
    },
    {
      role: 'Bidding',
      accessLevel: 'none',
      permission: {
        view: false,
        create: false,
        edit: false,
        delete: false,
      },
      lastUpdated: new Date(),
      changePermission: () => {},
    },
    {
      role: 'Vendor Portal',
      accessLevel: 'restricted',
      permission: {
        view: true,
        create: true,
        edit: false,
        delete: false,
      },
      lastUpdated: new Date(),
      changePermission: () => {},
    },
    {
      role: 'Purchase Order/Work Order',
      accessLevel: 'restricted',
      permission: {
        view: true,
        create: true,
        edit: false,
        delete: false,
      },
      lastUpdated: new Date(),
      changePermission: () => {},
    },
    {
      role: 'Organisational Profile',
      accessLevel: 'all',
      permission: {
        view: true,
        create: true,
        edit: true,
        delete: true,
      },
      lastUpdated: new Date(),
      changePermission: () => {},
    },
    {
      role: 'Permissions & Access Control',
      accessLevel: 'none',
      permission: {
        view: false,
        create: false,
        edit: false,
        delete: false,
      },
      lastUpdated: new Date(),
      changePermission: () => {},
    },
  ];

  const tabs = [
    {
      id: 'access',
      label: 'Access Control',
    },
    {
      id: 'assigned',
      label: 'Assigned Members',
    },
  ];
  const [activeTab, setActiveTab] = React.useState<string>('access');

  return (
    <section className={styles.accessControlTable}>
      <section className={styles.navBar}>
        <IconButton onClick={clearDepartment} className={styles.backIcon}>
          <BackIcon />
        </IconButton>
        <div className={styles.department}>{department}</div>
        <IconButton className={styles.backIcon}>
          <EditIcon />
        </IconButton>
      </section>
      <section className={styles.tableContainer}>
        <ViewTabs
          tabs={tabs}
          active={activeTab}
          onChange={(id: string) => setActiveTab(id)}
        />
        <TableContainer component={Paper} style={{ marginTop: 21 }}>
          <AclTable data={data} />
        </TableContainer>
      </section>
    </section>
  );
};
