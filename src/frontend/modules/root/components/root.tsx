import * as React from 'react';
import styles from '../scss/root.scss';
import { Sidebar } from '../../sidebar/components/sidebar';
import { AppBar } from '../../app-bar/components/app-bar';
import { MuiThemeProvider } from '@material-ui/core';
import { getTheme } from './mui-theme';
import {
  RssFeed as PermIcon,
  ViewModuleOutlined as ApprovalIcon,
} from '@material-ui/icons';
import { ViewTabs } from './view-tabs';
import { LastSync } from './last-sync';
import { RoleTable } from '../../role-table/components/role-table';
import { Toolbar } from '../../role-table/components/toolbar';
import { AccessControlTable } from '../../../access-control-table/components/access-control-table';

export const Root: React.FC<Record<string, unknown>> = ({}): JSX.Element => {
  const [view, setView] = React.useState<string>('permission');
  const [department, setDepartment] = React.useState<string>();

  const tabs = [
    {
      icon: <PermIcon style={{ fontSize: 'inherit' }} />,
      label: 'Permission',
      id: 'permission',
    },
    {
      icon: <ApprovalIcon style={{ fontSize: 'inherit' }} />,
      label: 'Approval Matrix',
      id: 'approval',
    },
  ];

  const renderTableView = () => {
    if (!department) {
      return <RoleTable onSelect={department => setDepartment(department)} />;
    }
    return (
      <AccessControlTable
        clearDepartment={() => setDepartment(undefined)}
        department={department}
      />
    );
  };

  return (
    <MuiThemeProvider theme={getTheme()}>
      <section className={styles.container}>
        <Sidebar />
        <main className={styles.contentContainer}>
          <AppBar />
          <ViewTabs
            tabs={tabs}
            active={view}
            onChange={(id: any) => setView(id)}
            additionalContent={<LastSync />}
          />
          {renderTableView()}
        </main>
      </section>
    </MuiThemeProvider>
  );
};
