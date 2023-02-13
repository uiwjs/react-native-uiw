// import Markdown, { importAll } from '../../../component/Markdown';
import Preview from 'src/component/Preview';
import md from '@uiw/react-native/lib/TextArea/README.md';

const DEMO = () => <Preview {...md} path="/packages/core/src/TextArea/README.md" />;
export default DEMO;
