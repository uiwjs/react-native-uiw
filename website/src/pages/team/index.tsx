import { Fragment } from 'react';
import { DefaultProps } from '../../';
import styles from './index.module.less';
import FooterTitle from '../../component/Footer';

const data = [
  { username: 'yaochuxia' },
  { username: 'xingyuefeng' },
  { username: 'ChenlingasMx' },
  { username: 'matuancc' },
  { username: 'wj0990' },
  { username: 'yaob421123', nickname: 'yaobin' },
  { username: 'jaywcjlove' },
];

export default function Team(props: DefaultProps) {
  return (
    <Fragment>
      <section className={styles.warpper}>
        <header className={styles.header}>
          <h2>Development & Design team</h2>
        </header>
        <ul className={styles.team}>
          {data.map((item, idx) => (
            <li key={idx}>
              <a href={`https://github.com/${item.username}`} target="__blank">
                <img src={`https://github.com/${item.username}.png?size=90`} alt={item.username} />
                <span>{item.username}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      < FooterTitle />
    </Fragment>
  );
}
