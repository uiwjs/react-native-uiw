import { PermissionsAndroid, Platform } from 'react-native';
import {
  CameraOptions,
  ImagePickerResponse,
  launchImageLibrary,
  launchCamera as launchRNCamera,
} from 'react-native-image-picker';
import { useSafeState } from 'ahooks';
import type { File, useImageProps } from './types';

export default function useImage({ onSuccess, onCancel, onError, onGrantFail, options }: useImageProps) {
  /** loading */
  const [loading, setLoading] = useSafeState(false);

  const libraryRationale = {
    title: '获取读取文件权限',
    message: '若不允许，您将无法访问图库',
    buttonPositive: '同意',
    buttonNegative: '取消',
    buttonNeutral: '下次再说',
  };

  const cameraRationale = {
    title: '获取摄像头权限',
    message: '若不允许，您将无法使用摄像头功能',
    buttonPositive: '同意',
    buttonNegative: '取消',
    buttonNeutral: '下次再说',
  };

  // 初始化图片上传配置
  const initialOptions: CameraOptions = {
    mediaType: 'photo',
    includeBase64: true,
    quality: 1,
    saveToPhotos: false,
    durationLimit: 15,
    videoQuality: 'high',
  };

  /** 打开相册 */
  const launchLibrary = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        libraryRationale,
      );
      if (result !== 'granted') {
        onGrantFail?.();
        return;
      }
    }
    setTimeout(() => {
      launchImageLibrary(
        {
          selectionLimit: 1,
          ...initialOptions,
          ...options,
        },
        handleCallback,
      );
    }, 200);
  };

  const launchCamera = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, cameraRationale);
      if (result !== 'granted') {
        onGrantFail?.();
        return;
      }
    }
    setTimeout(() => {
      launchRNCamera(
        {
          ...initialOptions,
          ...options,
        },
        handleCallback,
      );
    }, 200);
  };

  /** 打开相册或者摄像头的回调函数 */
  const handleCallback = async (response: ImagePickerResponse) => {
    try {
      if (response.didCancel) {
        // 用户取消上传 回调
        onCancel?.();
      } else if (response.errorCode) {
        onError?.(response.errorCode);
      } else {
        if (!response.assets || response.assets.length === 0) return;
        setLoading(true);
        let imageFiles: File[] = [];
        response.assets.forEach((item) => {
          const file: File = {
            fileName: item.fileName!,
            fileType: item.type!,
            uri: item.uri!,
            fileSize: item.fileSize!,
          };
          imageFiles.push(file);
        });
        onSuccess?.(imageFiles);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      throw new Error('图片选择器出问题了');
    }
  };
  return {
    loading,
    launchLibrary,
    launchCamera,
  };
}
