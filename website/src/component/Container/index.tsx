import { Fragment } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import SubMenus, { MenuData } from '../SubMenus';
import styles from './index.module.less';
import { componentMenus, docsMenus } from '../../routes/menus';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: MenuData[];
  path?: string;
}

export default function Container(props: ContainerProps) {
  const { path = '' } = props;
  const { pathname } = useLocation();
  let data: MenuData[] = [];
  if (/^\/components/.test(pathname)) {
    data = componentMenus;
  }
  if (/^\/docs/.test(pathname)) {
    data = docsMenus;
  }
  return (
    <Fragment>
      <Header enableStyle={/\/(team)/.test(path)} showBorder={/\/(home)/.test(path)} path={path} />
      <div className={styles.warpper}>
        {data && data.length > 0 && <SubMenus data={data} />}
        <div className={styles.content} style={{ flex: 1, overflow: 'hidden' }}>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}
