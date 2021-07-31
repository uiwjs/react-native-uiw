import { DefaultProps } from '../../../';
import Markdown from '../../../component/Markdown';

export default function Page(props: DefaultProps) {
  return (
    <Markdown
      path="/packages/core/src/Badge/README.md"
      renderPage={async () => {
        const md = await import('@uiw/react-native/lib/Badge/README.md');
        return md.default || md;
      }}
    />
  );
}
