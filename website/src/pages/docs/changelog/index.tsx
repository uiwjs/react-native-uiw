import Preview from 'src/component/Preview';
import md from './README.md';

const DEMO = () => <Preview {...md} path="/website/src/pages/docs/changelog/README.md" />;
export default DEMO;
