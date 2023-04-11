import {PropsWithChildren} from 'react';
import {Rationale} from 'react-native';
import {CameraOptions, ImagePickerResponse} from 'react-native-image-picker';
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
  beforeUpload?: (file: File) => boolean | ((file: File) => Promise<boolean>);
  /** 上传 */
  upload?: (file: File) => Promise<string>;
  /** 上传完成 */
  uploadFinish?: (result?: string) => void;
  /** 取消上传事件回调 */
  onCancel?: (response: ImagePickerResponse) => void;
  /** 上传失败事件回调 */
  onFail?: (response: ImagePickerResponse) => void;
  /** 授权失败的回调 */
  onGrantFail?: () => void;
  /** 打开相册授权的文本 */
  libraryRationale?: Rationale;
  /** 打开摄像头授权的文本 */
  cameraRationale?: Rationale;
  /** 打开相册文本 */
  launchLibraryText?: string;
  /** 打开摄像头文本 */
  launchCameraText?: string;
  /** 预览图片文本 */
  previewImgText?: string;
  /** 删除图片文本 */
  deleteImgText?: string;
}>;
declare const ImagePicker: ({
  width,
  height,
  value,
  options,
  showUploadImg,
  beforeUpload,
  upload,
  uploadFinish,
  onCancel,
  onFail,
  onGrantFail,
  cameraRationale,
  libraryRationale,
  launchLibraryText,
  launchCameraText,
  previewImgText,
  deleteImgText,
}: ImagePickerProps) => JSX.Element;
export default ImagePicker;
