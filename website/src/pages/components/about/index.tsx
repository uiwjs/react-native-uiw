import Preview from 'src/component/Preview';
import md from '@uiw/react-native/README.md';

const Demo = () => <Preview {...md} path="/packages/core/README.md" />;

export default Demo;
