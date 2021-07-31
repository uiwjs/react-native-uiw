import { DefaultProps } from '../../..';
import Markdown from '../../../component/Markdown';

export default function Page(props: DefaultProps) {
  return (
    <Markdown
      path="/packages/core/src/Toast/README.md"
      renderPage={async () => {
        const md = await import('@uiw/react-native/lib/Toast/README.md');
        return md.default || md;
      }}
    />
  );
}
