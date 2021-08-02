import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultProps } from '../../';
import styles from './index.module.less';

export default function Team(props: DefaultProps) {
  return (
    <div className={styles.warpper}>
      团队
      <p>
        <Link to="/components/about">查看组件文档</Link>
      </p>
    </div>
  );
}
