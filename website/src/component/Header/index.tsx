import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.less';
import logo from '../../assets/logo-dark.svg';

export default function Header() {
  return (
    <header className={styles.warpper}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="uiw logo" />
          <span>
            React Native UIW
          </span>
        </Link>
        <div className={styles.menus}>
          <Link to="/">首页</Link>
          <Link to="/docs">文档</Link>
          <Link to="/components/about">组件</Link>
        </div>
      </div>
    </header>
  )
}