import React from 'react';
import { DefaultProps } from '../../../';
import Markdown from '../../../component/Markdown';

export default function Page(props: DefaultProps) {
  return (
    <Markdown
      path="https://github.com/uiwjs/react-native-uiw/tree/master/website/src/pages/docs/README.md"
      renderPage={async () => {
        const md = await import('./README.md');
        return md.default || md;
      }}
    />
  );
}
