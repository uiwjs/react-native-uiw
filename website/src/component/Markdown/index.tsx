import React, { Component, Fragment } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
// @ts-ignore
import rehypeAttr from 'rehype-attr';
import Contributors from '../Contributors';
import Footer from '../Footer';
import styles from './index.module.less';

interface MarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
  path?: string;
  renderPage?: () => Promise<string>;
}

interface MarkdownState {
  markdown: string;
  message?: string;
}

// utilitary function to create a dictionary of packaged files 
// based on the output of require.context()
// https://forum.ionicframework.com/t/react-app-loading-lots-of-markdown-html-fragments-with-images/188072/3
export const importAll = (r: any, cache: {[key: string]: string}) => r.keys().forEach((key: string) => cache[key] = r(key));
// const imageFiles: {[key: string]: string} = {};
// importAll((require as any).context('../..', true, /\.(png|gif|jpg)$/), imageFiles);

export default class Markdown extends Component<MarkdownProps, MarkdownState> {
  path?: string;
  imageFiles: { [key: string]: string; } = {};
  getMarkdown?: () => Promise<string>;
  constructor(props: MarkdownProps) {
    super(props);
    this.state = {
      markdown: ''
    }
    if (this.getMarkdown) {
      this.getMarkdown = this.getMarkdown.bind(this);
    }
  }
  async componentDidMount() {
    this.importAll();
    this.setState({ markdown: '' });
    if (this.getMarkdown) {
      try {
        const markdown = await this.getMarkdown();
        this.setState({ markdown });
      } catch (error) {
        this.setState({ markdown: '页面加载失败！请刷新页面' });
      }
    }
  }
  importAll() {
    importAll((require as any).context('../..', true, /\.(png|gif|jpg|svg)$/), this.imageFiles);
  }
  transformImageUri(uri: string) {
    if (this.imageFiles[uri]) {
      return (this.imageFiles[uri] as any).default || this.imageFiles[uri]
    }
    return uri;
  }
  render() {
    const {style} = this.props;
    if (this.state.message) {
      return (
        <div className={styles.warpper} style={style}>
          {this.state.message}
          <Contributors path={this.path}/>
        </div>
      );
    }
    return (
      <Fragment>
        <div className={styles.warpper} style={style}>
          <MarkdownPreview
            source={this.state.markdown}
            rehypePlugins={[[rehypeAttr as any, { properties: 'attr' }]]}
            transformImageUri={this.transformImageUri.bind(this)}
            components={{
              /**
               * bgWhite 设置代码预览背景白色，否则为格子背景。
               * noCode 不显示代码编辑器。
               * noPreview 不显示代码预览效果。
               * noScroll 预览区域不显示滚动条。
               * codePen 显示 Codepen 按钮，要特别注意 包导入的问题，实例中的 import 主要用于 Codepen 使用。
               */
              code: ({
                inline,
                node,
                noPreview,
                noScroll,
                bgWhite,
                noCode,
                codePen,
                codeSandbox,
                ...props
              }) => {
                return <code {...props} />;
              },
            }}
          />
          <Contributors path={this.path}/>
        </div>
        <Footer placement="left" />
      </Fragment>
    );
  }
}