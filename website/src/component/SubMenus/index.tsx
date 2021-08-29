import { NavLink } from 'react-router-dom';
import styles from './index.module.less';
import { ReactComponent as LinkSVG } from './link.svg';

export interface MenuData
  extends React.RefAttributes<HTMLAnchorElement>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  path?: string;
  divider?: boolean;
}

interface SubmenuProps {
  data: MenuData[];
}

export default function Submenu(props: SubmenuProps) {
  const { data = [] } = props;
  return (
    <div className={styles.warpper}>
      <div className={styles.inner} style={{}}>
        {data.map((data, key) => {
          if (data.divider) {
            return (
              <div key={key} className={styles.divider}>
                {data.name}
              </div>
            );
          }
          if (data.href) {
            return (
              <a href={data.href} key={key} {...data}>
                {data.name} <LinkSVG />
              </a>
            );
          }
          if (data.path) {
            return (
              <NavLink to={data.path} key={key} {...data}>
                {data.name}
              </NavLink>
            );
          }
          return <div key={key}>data</div>;
        })}
      </div>
    </div>
  );
}
