import * as React from 'react';
import styles from '../scss/view-tabs.scss';
import { ViewTab } from './view-tab';

export interface ViewTabsProps {
  tabs: Array<{
    id: any;
    label: string;
    icon?: React.ReactElement;
  }>;
  active: any;
  onChange: (id: any) => unknown;
  additionalContent?: any;
}

export const ViewTabs: React.FC<ViewTabsProps> = ({
  tabs,
  active,
  onChange,
  additionalContent,
}): JSX.Element => {
  return (
    <nav className={styles.viewTabs}>
      {tabs.map((tab, index) => (
        <>
          <ViewTab
            label={tab.label}
            icon={tab.icon}
            onClick={() => onChange(tab.id)}
            active={active === tab.id}
          />
          {index !== tabs.length - 1 && <div className={styles.separator} />}
        </>
      ))}
      <div className={styles.gap} />
      {additionalContent}
    </nav>
  );
};
