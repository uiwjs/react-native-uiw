import { Link } from 'react-router-dom';
import Footer from '../../component/Footer';
import { DefaultProps } from '../../';
import styles from './index.module.less';

export default function Home(props: DefaultProps) {
  return (
    <div className={styles.warpper}>
      <header className={styles.header}>
        <div>
          <h2>UIW Mobile RN</h2>
          <p>
            一个基于 React Native 的 UI 组件库
          </p>
        </div>
        <Link to="/docs/getting-started">开始使用</Link>
        <Link to="/components/about">组件文档</Link>
      </header>
      <Footer />
    </div>
  );
}
