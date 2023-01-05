// import Markdown, { importAll } from '../../../component/Markdown';
import Preview from 'src/component/Preview';
import md from '@uiw/react-native/lib/Button/README.md';

const DEMO = () => <Preview {...md} />;
export default DEMO;
// export default class Page extends Markdown {
//   path = '/packages/core/src/Button/README.md';
//   getMarkdown = async () => {
//     const md = await import('@uiw/react-native/lib/Button/README.md');
//     // 支持 markdown 中，相对于当前 index.tsx 相对路径引入图片资源
//     importAll((require as any).context('./', true, /\.(png|gif|jpg|svg)$/), this.imageFiles);
//     return md.default || md;
//   };
// }
