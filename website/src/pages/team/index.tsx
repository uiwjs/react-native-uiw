import { Fragment } from 'react';
import { DefaultProps } from '../../';
import styles from './index.module.less';
import FooterTitle from '../../component/Footer';

const data: { username: string; nickname?: string; }[] = [
  { username: 'yaochuxia' },
  { username: 'xingyuefeng', nickname: 'xyf' },
  { username: 'ChenlingasMx', nickname: "Chenling" },
  { username: 'matuancc', nickname: 'cc' },
  { username: 'wj0990', nickname: 'wangjie' },
  { username: 'yaob421123', nickname: 'yaobin' },
  { username: 'jaywcjlove', nickname: '小弟调调™' },
  { username: 'didiboji', nickname: 'didiboji' },
  { username: 'Amber-Nan', nickname: 'Amber-Nan' },
  { username: 'zuojiahui', nickname: '左嘉辉' },
];

export default function Team(props: DefaultProps) {
  return (
    <Fragment>
      <section className={styles.warpper}>
        <header className={styles.header}>
          <h2>Development & Design team</h2>
        </header>
        <ul className={styles.team}>
          {data.map(({ username, nickname }, idx) => (
            <li key={idx}>
              <a href={`https://github.com/${username}`} target="__blank">
                <img src={`https://github.com/${username}.png?size=90`} alt={nickname || username} />
                <span>{nickname || username}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      < FooterTitle />
    </Fragment>
  );
}
