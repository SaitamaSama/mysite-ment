import * as React from 'react';
import styles from '../scss/sidebar.scss';
import {Logo} from "./logo";
import {DashboardOutlined as ProjectIcon, WorkOutline as OrgIcon, Security as ACIcon} from '@material-ui/icons';
import {Link} from "./link";

export interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}): JSX.Element => {
  const links = [{
    icon: <ProjectIcon style={{ fontSize: 'inherit' }} />,
    label: "Projects",
    href: "#"
  }, {
    icon: <OrgIcon style={{ fontSize: 'inherit' }} />,
    label: "Organisation Profile",
    href: "#"
  }, {
    icon: <ACIcon style={{ fontSize: 'inherit' }} />,
    label: "Access Control",
    active: true,
    href: "#"
  }];
  return (
    <aside className={styles.sidebar}>
      <Logo />
      {links.map(link => (
        <Link {...link} />
      ))}
    </aside>
  )
}
