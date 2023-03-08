import MarkdownPreview from '@uiw/react-markdown-preview';
import styled from 'styled-components';
import { BackTop, Circle, Icon } from 'uiw';
import { getMetaId, isMeta, getURLParameters } from 'markdown-react-code-preview-loader';
import CodeLayout from 'react-code-preview-layout';
import { useRef } from 'react';
import Footer from '../Footer';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  .w-rcpl-preview {
    white-space: normal;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Markdown = styled(MarkdownPreview)`
  padding: 50px 50px 120px 50px;
  /* max-width: 1024px; */
  width: 1024px;
`;

const getBooleanValue = (param, field, defaultValue) => {
  if (Reflect.has(param, field)) {
    const newValue = Reflect.get(param, field);
    return newValue === 'true';
  }
  return defaultValue;
};

const Preview = ({ path, ...mdData }) => {
  const $dom = useRef(null);
  return (
    <Wrapper ref={$dom}>
      <Markdown
        {...mdData}
        disableCopy={true}
        // transformImageUri={transformImageUri}
        source={mdData.source}
        rehypeRewrite={(node, index, parent) => {
          if (node.type === 'element' && node.tagName === 'pre' && node.children[0].data?.meta) {
            const meta = node.children[0].data?.meta;
            if (isMeta(meta)) {
              node.tagName = 'div';
              if (!node.properties) {
                node.properties = {};
              }
              node.properties['data-md'] = meta;
              node.properties['data-meta'] = 'preview';
            }
          }
        }}
        components={{
          div: ({ node, ...props }) => {
            const { 'data-meta': meta, 'data-md': metaData } = props;
            if (meta === 'preview') {
              const line = node.position?.start.line;
              const metaId = getMetaId(meta) || String(line);
              const Child = mdData.components[`${metaId}`];
              if (metaId && typeof Child === 'function') {
                const code = mdData.data[metaId].value || '';
                const param = getURLParameters(metaData);
                return (
                  <CodeLayout
                    disableCheckered={getBooleanValue(param, 'disableCheckered', true)}
                    disableToolbar={getBooleanValue(param, 'disableToolbar', false)}
                    disableCode={getBooleanValue(param, 'disableCode', false)}
                    disablePreview={getBooleanValue(param, 'disablePreview', false)}
                    bordered={getBooleanValue(param, 'bordered', true)}
                    copied={getBooleanValue(param, 'copied', true)}
                    background={param.background}
                    toolbar={param.title || '示例'}
                    codeProps={{ style: { padding: 0 } }}
                    style={{ padding: 0 }}
                    code={<pre {...props} />}
                    text={code}
                  >
                    <Child />
                  </CodeLayout>
                );
              }
            }
            return <div {...props} />;
          },
        }}
      />
      <Footer path={path} />
      <BackTop speed={500}>
        {({ percent, scrollToTop }) => (
          <Circle
            width={50}
            onClick={() => scrollToTop()}
            format={() => <Icon type="arrow-up" />}
            percent={percent}
          ></Circle>
        )}
      </BackTop>
    </Wrapper>
  );
};
export default Preview;
