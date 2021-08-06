import Markdown, { importAll } from '../../../component/Markdown';

export default class Page extends Markdown {
  path="/packages/core/src/Timeline/README.md"
  getMarkdown = async () => {
    const md = await import('@uiw/react-native/lib/Timeline/README.md');
    // 支持 markdown 中，相对于当前 index.tsx 相对路径引入图片资源
    importAll((require as any).context('./', true, /\.(png|gif|jpg)$/), this.imageFiles);
    return md.default || md;
  }
}