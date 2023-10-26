import Preview from 'src/component/Preview';
import md from './README.md';

const transformImageUri = (url: string) => {
  const reqImage = (require as any).context!('./', true, /\.(png|gif|jpg|svg)$/)
  const urlAddr = reqImage(url)
  return urlAddr
}

export const Component = () => <Preview {...md} transformImageUri={transformImageUri} path="website/src/pages/docs/environment-setup/ios/README.md" />;
