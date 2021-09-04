import styles from './index.module.less';
import { ReactComponent as Logo } from '../../assets/logo-dark.svg';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Gitee } from '../../assets/gitee.svg';

const data = [
  {
    title: 'Product',
    childrens: [
      {
        href: 'https://github.com/uiwjs/react-native-uiw',
        title: 'React Native UIW',
      },
      {
        href: 'https://github.com/uiwjs/react-native-template',
        title: 'React Native Template',
      },
      {
        href: 'https://github.com/uiwjs/react-native-alipay',
        title: 'React Native Alipay',
      },
      {
        href: 'https://github.com/uiwjs/react-native-amap-geolocation',
        title: 'React Native AMap Geolocation',
      },
      {
        href: 'https://uiw.gitee.io/react-native-uiw/',
        title: '国内镜像站点 🇨🇳',
      },
    ],
  },
  {
    title: '相关资源',
    childrens: [
      {
        href: 'https://uiwjs.github.io/icons',
        title: 'Preview Icons',
      },
      {
        href: 'https://github.com/react-native-community/upgrade-helper',
        title: 'React Native Upgrade Helper',
      },
      {
        href: 'https://github.com/jondot/awesome-react-native',
        title: 'Awesome React Native',
      },
      {
        href: 'https://github.com/uiwjs/uiw',
        title: 'UIW on GitHub',
      },
    ],
  },
  {
    title: '相关组件',
    childrens: [
      {
        href: 'https://github.com/react-navigation/react-navigation',
        title: 'React Navigation',
      },
      {
        href: 'https://github.com/rematch/rematch',
        title: 'Rematch.js',
      },
    ],
  },
  {
    title: '其它资料',
    childrens: [
      {
        href: 'https://github.com/facebook/react',
        title: 'React',
      },
      {
        href: 'https://github.com/facebook/react-native',
        title: 'React Native',
      },
      {
        href: 'https://github.com/jaywcjlove/mocker-api',
        title: 'Mocker API',
      },
      {
        href: 'https://www.pgyer.com/',
        title: 'App 应用内测分发托管',
      },
    ],
  },
  {
    title: '学习资料',
    childrens: [
      {
        href: 'https://www.reactnative.express/',
        title: 'React Native Express',
      },
      {
        href: 'https://www.react.express/',
        title: 'React Express',
      },
      {
        href: 'https://jskatas.org/',
        title: 'JavaScript Katas',
      },
      {
        href: 'https://www.typescriptlang.org/',
        title: 'TypeScript',
      },
      {
        href: 'https://es6.ruanyifeng.com/',
        title: 'ES6 入门教程',
      },
    ],
  },
];

type FooterProps = {
  placement?: 'center' | 'left';
};

export default function Footer(props: FooterProps) {
  const { placement } = props;
  return (
    <footer className={styles.warpper}>
      <div className={styles.inner} style={{ ...(placement === 'left' ? { margin: 'inherit' } : {}) }}>
        <div className={styles.nav}>
          {data.map((item, idx) => {
            return (
              <nav key={idx}>
                <div>
                  <label>{item.title}</label>
                  <ul>
                    {item.childrens.map((child, _idx) => {
                      return (
                        <li key={_idx}>
                          <a href={child.href} target="__blank">
                            {child.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            );
          })}
        </div>
        <section>
          <div className={styles.icons}>
            <a href="https://uiwjs.github.io/react-native-uiw/" target="__blank">
              <Logo height="27" width="27" />
            </a>
            <a href="https://github.com/uiwjs/react-native-uiw" target="__blank">
              <Github />
            </a>
            <a href="https://gitee.com/uiw/react-native-uiw" target="__blank">
              <Gitee />
            </a>
          </div>
          <div className={styles.icons}>
            <a href="https://github.com/uiwjs/react-native-uiw/issues" target="__blank">
              <img src="https://img.shields.io/github/issues/uiwjs/react-native-uiw.svg" alt="Github Issues" />
            </a>
            <a href="https://github.com/uiwjs/react-native-uiw/network" target="__blank">
              <img src="https://img.shields.io/github/forks/uiwjs/react-native-uiw.svg" alt="Github Forks" />
            </a>
            <a href="https://github.com/uiwjs/react-native-uiw/stargazers" target="__blank">
              <img src="https://img.shields.io/github/stars/uiwjs/react-native-uiw.svg" alt="Github Stars" />
            </a>
            <a href="https://github.com/uiwjs/react-native-uiw/releases" target="__blank">
              <img src="https://img.shields.io/github/release/uiwjs/react-native-uiw.svg" alt="Github Release" />
            </a>
            <a href="https://github.com/uiwjs/react-native-uiw" target="__blank">
              <img src="https://img.shields.io/dub/l/vibe-d.svg" alt="License MIT" />
            </a>
            <a href="https://www.npmjs.com/package/@uiw/react-native" target="__blank">
              <img src="https://img.shields.io/npm/v/@uiw/react-native.svg" alt="npm" />
            </a>
          </div>
          <p>
            Copyright © 2021{' '}
            <a href="https://github.com/uiwjs" target="__blank">
              uiwjs
            </a>
            . All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
}
