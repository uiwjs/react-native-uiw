import { NavLink } from 'react-router-dom';
import styles from './index.module.less';

export type MenuData = {
  name: string;
  path?: string;
  divider?: boolean;
}

interface SubmenuProps {
  data: MenuData[]
}

export default function Submenu(props: SubmenuProps) {
  const { data = [] } = props;
  return (
    <div className={styles.warpper}>
      <div style={{ overflow: 'auto', height: '100%' }}>
        {data.map((data, key) => {
          if (data.divider) {
            return <div key={key} className={styles.divider}>{data.name}</div>
          }
          if (data.path) {
            return <NavLink to={data.path} key={key}>{data.name}</NavLink>
          }
          return (
            <div key={key}>data</div>
          )
        })}
      </div>
    </div>
  )
}