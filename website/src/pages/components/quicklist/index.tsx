import Markdown, { importAll } from '../../../component/Markdown';

export default class Page extends Markdown {
  path = '/packages/core/src/QuickList/README.md';
  getMarkdown = async () => {
    const md = await import('@uiw/react-native/lib/QuickList/README.md');
    // 支持 markdown 中，相对于当前 index.tsx 相对路径引入图片资源
    importAll((require as any).context('./', true, /\.(png|gif|jpg|svg)$/), this.imageFiles);
    const result = md.default || md;
    const index = result.indexOf('### 基础示例');
    const abc =
      result.substr(0, index) +
      "\n<image src='./index.gif' alt='QuickList' style='zoom:33%;' />\n\n" +
      result.substr(index);
    return abc;
  };
}
