import { PropsWithChildren, ComponentType } from 'react';
import { Rationale, ModalProps, ImageURISource, ImageRequireSource } from 'react-native';
import { CameraOptions, ImagePickerResponse, ErrorCode } from 'react-native-image-picker';
export declare type ImageSource = ImageURISource | ImageRequireSource;
export interface File {
  fileName: string;
  fileType: string;
  uri: string;
  fileSize?: number;
}
export declare type ImagePickerProps = PropsWithChildren<{
  /** 宽度 */
  width?: number;
  /** 高度 */
  height?: number;
  /** 当前选择的图片uri */
  value?: string[];
  /** 其他图片自定义配置,详细参考react-native-image-picker的option配置 */
  options?: CameraOptions;
  /** 上传图片后是否在背景图展示，如果为 true 上传后会自动展示上传图片(此时只能上传一张) */
  showUploadImg?: boolean;
  /** 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传,同时可以在里面执行一些上传提示操作 */
  beforeUpload?: (file: File[]) => boolean | ((file: File) => Promise<boolean>);
  /** 上传 */
  upload?: (file: File[]) => Promise<string[]>;
  /** 上传完成 */
  uploadFinish?: (result?: string[] | undefined) => void;
  /** 取消上传事件回调 */
  onCancel?: (response: ImagePickerResponse) => void;
  /** 上传失败事件回调 */
  onFail?: (response: ImagePickerResponse) => void;
  /** 授权失败的回调 */
  onGrantFail?: () => void;
  /** 预览时长按图片保存回调 */
  onSave?: ((image: any) => void) | undefined;
  /** 删除图片回调 */
  onDelete?: (files: string[]) => void;
  /** 打开相册授权的文本 */
  libraryRationale?: Rationale;
  /** 打开摄像头授权的文本 */
  cameraRationale?: Rationale;
  /** 打开相册文本 */
  launchLibraryText?: string;
  /** 打开摄像头文本 */
  launchCameraText?: string;
  /** 从相册选择多少张图片 */
  selectionLimit?: number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 上传数量限制 */
  maxCount?: number | undefined;
  /** 预览图片，长按时调用的函数 */
  onLongPress?: (image: ImageSource) => void;
  /** 预览图片，更改图像索引时调用的函数 */
  onImageIndexChange?: (imageIndex: number) => void;
  /** 预览图片，Modal presentation style: default: fullScreen Android:用于overFullScreen隐藏StatusBar */
  presentationStyle?: ModalProps['presentationStyle'];
  /** 预览图片，动画模态呈现：默认fade */
  animationType?: ModalProps['animationType'];
  /** 预览图片，背景色（#000000EE） */
  backgroundColor?: string;
  /** 预览图片，向上或向下滑动关闭模式：默认true */
  swipeToCloseEnabled?: boolean;
  /** 预览图片，通过双击缩放图像：默认true */
  doubleTapToZoomEnabled?: boolean;
  /** 预览图片，在调用 onLongPress 之前以毫秒为单位的延迟：默认800 */
  delayLongPress?: number;
  /** 预览图片，标头组件，imageIndex作为道具获取当前 */
  HeaderComponent?: ComponentType<{
    imageIndex: number;
  }>;
  /** 预览图片，页脚组件，imageIndex作为道具获取当前 */
  FooterComponent?: ComponentType<{
    imageIndex: number;
  }>;
}>;

export type useImageProps = {
  /** 成功回调 */
  onSuccess?: (files: File[]) => void;
  /** 取消回调 */
  onCancel?: () => void;
  /** 错误回调 */
  onError?: (error: ErrorCode) => void;
  /** 授权失败的回调 */
  onGrantFail?: () => void;
  /** 其他图片自定义配置,详细参考react-native-image-picker的option配置 */
  options?: CameraOptions;
  onDelete?: (files: string[]) => void;
};
