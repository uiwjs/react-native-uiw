import React, { useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
// @ts-ignore
import rehypeAttr from 'rehype-attr';
import { useEffect } from 'react';
import Contributors from '../Contributors';
import styles from './index.module.less';

export interface MarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
  path?: string;
  renderPage?: () => Promise<string>;
}

export default function Markdown(props: MarkdownProps) {
  const { renderPage, path, style } = props;
  const [mdStr, setMdStr] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (renderPage) {
      setMessage('')
      renderPage()
        .then((str) => {
          setMdStr(str);
        })
        .catch(() => {
          setMessage('页面加载失败！请刷新页面')
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (message) {
    return (
      <div className={styles.warpper} style={style}>
        {message}
        <Contributors path={path}/>
      </div>
    );
  }
  return (
    <div className={styles.warpper} style={style}>
      <MarkdownPreview
        source={mdStr}
        // className={styles.markdown}
        rehypePlugins={[[rehypeAttr as any, { properties: 'attr' }]]}
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
      <Contributors path={path}/>
    </div>
  )
}