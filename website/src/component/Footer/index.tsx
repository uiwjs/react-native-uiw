import styles from './index.module.less';
import logo from '../../assets/logo-dark.svg';

const data = [
  {
    title: 'Product',
    childrens: [
      {
        href : 'https://github.com/uiwjs/react-native-uiw',
        title: 'React Native UIW on GitHub'
      },
      {
        href : 'https://github.com/uiwjs/react-native-template',
        title: 'React Native Template'
      },
      {
        href : 'https://github.com/uiwjs/uiw',
        title: 'UIW on GitHub'
      },
      {
        href : 'https://gitee.com/uiw/react-native-uiw',
        title: '国内镜像站点 🇨🇳'
      },
    ]
  },
  {
    title: '相关资源',
    childrens: [
      {
        href : 'https://uiwjs.github.io/icons',
        title: 'Preview Icons'
      },
      {
        href : 'https://github.com/uiwjs/react-native-uiw',
        title: 'React Native Upgrade Helper'
      },
      {
        href : 'https://github.com/jondot/awesome-react-native',
        title: 'Awesome React Native'
      },
    ]
  },
  {
    title: '相关组件',
    childrens: [
      {
        href : 'https://github.com/react-navigation/react-navigation',
        title: 'React Navigation'
      },
      {
        href : 'https://github.com/rematch/rematch',
        title: 'Rematch.js'
      },
    ]
  },
  {
    title: '其它资料',
    childrens: [
      {
        href : 'https://github.com/facebook/react',
        title: 'React'
      },
      {
        href : 'https://github.com/facebook/react-native',
        title: 'React Native'
      },
      {
        href : 'https://github.com/jaywcjlove/mocker-api',
        title: 'Mocker API'
      },
    ]
  }
];

type FooterProps = {
  placement?: 'center' | 'left';
}

export default function Footer(props: FooterProps) {
  const { placement } = props;
  return (
    <footer className={styles.warpper}>
      <div className={styles.inner} style={{ ...(placement === 'left' ? { margin: 'inherit' } : {})}}>
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
                          <a href={child.href} target="__blank">{child.title}</a>
                        </li>
                      )
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
              <img src={logo} alt="uiw logo" style={{ height: 27 }}/>
            </a>
            <a href="https://github.com/uiwjs/react-native-uiw" target="__blank">
              <svg width="20px" height="20px" viewBox="0 0 20 20" role="img">
                <path d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z" />
              </svg>
            </a>
            <a href="https://gitee.com/uiw/react-native-uiw" target="__blank">
              <svg viewBox="0 0 1024 1024" width="20" height="20">
                <path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" fill="#C71D23" />
              </svg>
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
          <p>Copyright © 2021 uiwjs. All rights reserved.</p>
        </section>
      </div>
    </footer>
  );
}