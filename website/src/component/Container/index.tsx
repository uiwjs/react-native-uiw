import { Fragment } from 'react';
import Header from '../Header';
import SubMenus, { MenuData } from '../SubMenus';
import styles from './index.module.less';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: MenuData[];
  path?: string;
}

export default function Container(props: ContainerProps) {
  const { data, children, path = '' } = props;
  return (
    <Fragment>
      <Header enableStyle={/\/(team)/.test(path)} showBorder={/\/(home)/.test(path)} path={path} />
      <div className={styles.warpper}>
        {data && data.length > 0 && <SubMenus data={data} />}
        <div className={styles.content} style={{ flex: 1, overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </Fragment>
  );
}
