import { useEffect, useState } from 'react';
import { Alert, Keyboard, PermissionsAndroid, Platform } from 'react-native';
import {
  CameraOptions,
  ImagePickerResponse,
  launchImageLibrary,
  launchCamera as launchRNCamera,
} from 'react-native-image-picker';
import { useBoolean, useSafeState } from 'ahooks';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import type { File, ImagePickerProps } from './types';

function getSource(value?: string) {
  if (value && (value.startsWith('http') || value.startsWith('file:') || value.startsWith('https'))) {
    return value;
  }
  return '';
}

function filterSource(source: string[] = []) {
  if (source) {
    return source.map((value) => getSource(value));
  }
  return [];
}

export default function useImagePicker({
  value,
  options,
  selectionLimit,
  beforeUpload,
  upload,
  uploadFinish,
  onCancel,
  onFail,
  onGrantFail,
  cameraRationale,
  libraryRationale,
  onDelete,
}: ImagePickerProps) {
  /** 打开相册或者摄像头的ActionSheet */
  const [launchVisible, { setTrue: setLaunchVisibleTrue, setFalse: setLaunchVisibleFalse }] = useBoolean(false);
  /** 打开预览图片的弹窗 */
  const [previewVisible, { setTrue: setPreviewVisibleTrue, setFalse: setPreviewVisibleFalse }] = useBoolean(false);
  /** 图片url集合 */
  const [currentImgSource, setCurrentImgSource] = useSafeState<string[]>(filterSource(value));
  /** loading */
  const [loading, setLoading] = useSafeState(false);
  /** 预览照片地址 */
  const [current, setCurrent] = useSafeState<number | undefined>(undefined); // 选中的图片下标
  // 刷新
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (value && value.length > 0) {
      const source = value.map((value: string | undefined) => getSource(value));
      setCurrentImgSource(source);
    }
  }, [value]);

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
          selectionLimit: selectionLimit,
          ...initialOptions,
          ...options,
        },
        handleCallback,
      );
    }, 200);
  };

  /** 打开摄像头 */
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
        onCancel?.(response);
      } else if (response.errorCode) {
        // 上传失败 回调
        onFail?.(response);
      } else {
        if (!response.assets || response.assets.length === 0) return;
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
        // 执行上传前的操作及判断
        if (beforeUpload) {
          const result = await beforeUpload(imageFiles);
          if (!result) {
            return;
          }
        }
        setLoading(true);
        const result = await upload?.(imageFiles);
        setLoading(false);
        uploadFinish?.(result);
        setLaunchVisibleFalse();
        if (result && result.length > 0) {
          const datas = [...currentImgSource, ...result];
          setCurrentImgSource(datas);
        }
      }
    } catch (error) {
      setLoading(false);
      throw new Error('图片选择器出问题了');
    }
  };

  // 预览照片
  const previewImage = (key: number) => {
    setCurrent(key);
    setPreviewVisibleTrue();
  };

  // 关闭预览照片
  const closePreviewImage = () => {
    setCurrent(undefined);
    setPreviewVisibleFalse();
  };

  // 删除照片
  const deleteImage = (key: number) => {
    currentImgSource.splice(key, 1);
    setCurrentImgSource(currentImgSource);
    // 刷新页面
    setRefresh(!refresh);
    uploadFinish?.(undefined);
    onDelete?.(currentImgSource);
  };

  // 打开上传
  const handlePress = () => {
    Keyboard.dismiss();
    setLaunchVisibleTrue();
  };

  // 保存图片
  const saveImage = async (url?: string | undefined) => {
    // 检查android权限
    if (Platform.OS === 'android') {
      // const permission =
      //   Platform.Version >= 33
      //     ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
      //     : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      const granted = await PermissionsAndroid.request(permission);
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        // 如果权限未获得，进行提示或者打开应用设置页面
        return;
      }
    }
    if (url) {
      try {
        await CameraRoll.save(getSource(url));
        Alert.alert('保存成功', '', [{ text: '确定' }]);
      } catch (error) {
        Alert.alert('保存失败！\n' + error, '', [{ text: '确定' }]);
      }
    }
  };

  return {
    currentImgSource,
    current,
    loading,
    launchLibrary,
    launchCamera,
    launchVisible,
    previewVisible,
    previewImage,
    closePreviewImage,
    deleteImage,
    handlePress,
    setLaunchVisibleFalse,
    saveImage,
  };
}
