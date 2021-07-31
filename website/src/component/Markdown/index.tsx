import React, { useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
// @ts-ignore
import rehypeAttr from 'rehype-attr';
import { useEffect } from 'react';

export interface MarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
  path?: string;
  renderPage?: () => Promise<string>;
}

export default function Markdown(props: MarkdownProps) {
  const { renderPage, style } = props;
  const [mdStr, setMdStr] = useState('');
  useEffect(() => {
    if (renderPage) {
      renderPage()
        .then((str) => {
          setMdStr(str);
        })
        .catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div style={style}>
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
    </div>
  )
}