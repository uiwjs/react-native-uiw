import { Link, NavLink } from 'react-router-dom';
import pkg from '@uiw/react-native/package.json';
import styles from './index.module.less';
import DarkMode from '../DarkMode';
import { ReactComponent } from '../../assets/logo-dark.svg';
import { ReactComponent as Github } from '../../assets/github.svg';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  showBorder?: boolean;
  enableStyle?: boolean;
  path?: string;
}

export default function Header(props: HeaderProps) {
  const { showBorder = true, enableStyle, style = {} } = props;
  // @ts-ignore
  // eslint-disable-next-line
  const version = pkg.version || '2.0.0';

  if (showBorder || enableStyle) {
    style.border = 0;
    style.boxShadow = 'initial';
  }
  if (enableStyle) {
    style.background = '#f7f7f7';
  }
  return (
    <header className={styles.warpper} style={style}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <ReactComponent height="38" width="38" />
          <span className={styles.title} style={{ display: 'flex' }}>
            <span>React Native UIW</span>
            <span>v{version}</span>
          </span>
        </Link>
        <div className={styles.menus}>
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/docs/">文档</NavLink>
          <NavLink to="/components/">RN组件</NavLink>
          <a target="__blank" href="https://github.com/uiwjs/react-native-uiw/issues">
            问题反馈
          </a>
          <a target="__blank" href="https://uiwjs.github.io/#/components">
            Web 组件
          </a>
          <NavLink to="/team">团队</NavLink>
          <DarkMode />
          <a target="__blank" href="https://github.com/uiwjs/react-native-uiw">
            <Github />
          </a>
        </div>
      </div>
    </header>
  );
}
