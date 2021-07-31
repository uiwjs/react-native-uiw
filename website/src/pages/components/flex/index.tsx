import { DefaultProps } from '../../../';
import Markdown from '../../../component/Markdown';

export default function Page(props: DefaultProps) {
  return (
    <Markdown
      path="https://github.com/uiwjs/react-native-uiw/tree/master/packages/core/src/Flex/README.md"
      renderPage={async () => {
        const md = await import('@uiw/react-native/lib/Flex/README.md');
        return md.default || md;
      }}
    />
  );
}
