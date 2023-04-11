/// <reference types="react" />
import type {ImagePickerProps} from '.';
export default function useImagePicker({
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
}: ImagePickerProps): {
  currentImgSource: string[];
  current: number;
  loading: boolean;
  launchLibrary: () => Promise<void>;
  launchCamera: () => Promise<void>;
  launchVisible: boolean;
  previewImage: () => void;
  deleteImage: () => void;
  handlePress: () => void;
  handleLongPress: () => void;
  previewVisible: boolean;
  visible: boolean;
  setVisibleFalse: () => void;
  setLaunchVisibleFalse: () => void;
  setPreviewVisibleFalse: () => void;
  setCurrent: import('react').Dispatch<import('react').SetStateAction<number>>;
};
