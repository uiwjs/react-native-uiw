import Preview from 'src/component/Preview';
import md from './README.md';

<<<<<<< HEAD
const transformImageUri = (url: string) => {
  const reqImage = (require as any).context!('./', true, /\.(png|gif|jpg|svg)$/)
  const urlAddr = reqImage(url)
  return urlAddr
}

const DEMO = () => <Preview {...md} transformImageUri={transformImageUri} />;
=======
const DEMO = () => <Preview {...md} />;
>>>>>>> 3905857c (docs: 更新文档预览方式)
export default DEMO;
