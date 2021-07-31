import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultProps } from '../../';
import styles from './index.module.less';

export default function Home(props: DefaultProps) {
  return (
    <div className={styles.warpper}>
      首页正在建设中....
      <p>
        <Link to="/components/about">查看组件文档</Link>
      </p>
    </div>
  );
}
