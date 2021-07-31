import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/docs">文档</NavLink>
          <NavLink to="/components/">RN组件</NavLink>
          <a target="__blank" href="https://github.com/uiwjs/react-native-uiw/issues">问题反馈</a>
          <a target="__blank" href="https://uiwjs.github.io">Web 组件</a>
          <a target="__blank" href="https://github.com/uiwjs/react-native-uiw">GitHub</a>
        </div>
      </div>
    </header>
  )
}