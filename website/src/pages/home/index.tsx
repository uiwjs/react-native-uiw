import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ButtonStyle from '../../component/ButtonStyle';
import Footer from '../../component/Footer';
import { DefaultProps } from '../../';
import styles from './index.module.less';
import { ReactComponent as Waves } from './waves.svg';

export default function Home(props: DefaultProps) {
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.innerHeader}>
          <header className={styles.headerContent}>
            <div>
              <h2>UIW Mobile RN</h2>
              <p>一个基于 React Native 的 UI 组件库</p>
            </div>
            <ButtonStyle>
              <Link to="/docs/getting-started">开始使用</Link>
            </ButtonStyle>
            <ButtonStyle>
              <Link to="/components/about">组件文档</Link>
            </ButtonStyle>
          </header>
        </div>
        <div>
          <Waves className={styles.waves} />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
