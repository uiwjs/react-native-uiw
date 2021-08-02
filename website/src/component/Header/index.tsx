import { Link, NavLink } from 'react-router-dom';
import pkg from '@uiw/react-native/package.json';
import styles from './index.module.less';
import { ReactComponent } from '../../assets/logo-dark.svg';

type HeaderProps = {
  showBorder?: boolean;
  path?: string;
}

export default function Header(props: HeaderProps) {
  const { showBorder = true } = props;
  // @ts-ignore
  // eslint-disable-next-line
  const version = pkg.version || '2.0.0';
  return (
    <header className={styles.warpper} style={{ ...(showBorder ? {} : { borderBottom: 0, boxShadow: 'initial' })}}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <ReactComponent height="38" width="38" />
          <span className={styles.title} style={{ display: 'flex' }}>
            <span>
              React Native UIW
            </span>
            <span>v{version}</span>
          </span>
        </Link>
        <div className={styles.menus}>
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/docs/">文档</NavLink>
          <NavLink to="/components/">RN组件</NavLink>
          <a target="__blank" href="https://github.com/uiwjs/react-native-uiw/issues">问题反馈</a>
          <a target="__blank" href="https://uiwjs.github.io">Web 组件</a>
          <NavLink to="/team">团队</NavLink>
          <a target="__blank" href="https://github.com/uiwjs/react-native-uiw">GitHub</a>
        </div>
      </div>
    </header>
  )
}