import { ReactComponent as LinkSVG } from '../SubMenus/link.svg';
import styles from './index.module.less';

export interface SnackPlayerProps {
  platform?: 'android' | 'web' | 'ios' | 'mydevice';
  theme?: 'light' | 'dark';
  buttonTitle?: string;
  preview?: boolean;
  name?: string;
  sdkVersion?: string;
  description?: string;
  loading?: 'auto' | 'lazy' | 'eager';
  dependencies?: string;
  templateId?: string;
  contentHidden?: boolean;
  /**
   * ```js
   * {
   *   "AppTest.js": {
   *     "type": "CODE",
   *     "contents": "console.log(\"www\")"
   *   }
   * }
   * ```
   */
  files?: string;
}

export function SnackPlayer(props: SnackPlayerProps) {
  const {
    platform = 'web',
    buttonTitle = 'Try this Example on Snack',
    name = 'Example',
    sdkVersion = '42.0.0',
    dependencies = '@uiw/react-native@2.2.0,react-native-svg',
    files = '{}',
  } = props;

  return (
    <form action="https://snack.expo.dev" method="POST" target="_blank" className={styles.form}>
      <input type="hidden" name="platform" value={platform} />
      <input type="hidden" name="name" value={name} />
      {dependencies && <input type="hidden" name="dependencies" value={dependencies} />}
      <input type="hidden" name="sdkVersion" value={sdkVersion} />
      <input type="hidden" name="files" value={files} />
      <button className={styles.button}>
        <LinkSVG fill="currentColor" />
        {buttonTitle}
      </button>
    </form>
  );
}
