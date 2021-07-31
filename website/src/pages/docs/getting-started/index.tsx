import React from 'react';
import { DefaultProps } from '../../../';
import Markdown from '../../../component/Markdown';

export default function Page(props: DefaultProps) {
  return (
    <Markdown
      path="/website/src/pages/docs/getting-started/README.md"
      renderPage={async () => {
        const md = await import('./README.md');
        return md.default || md;
      }}
    />
  );
}
