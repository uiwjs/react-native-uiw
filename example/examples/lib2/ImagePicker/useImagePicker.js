import {useEffect} from 'react';
import {Keyboard, PermissionsAndroid, Platform} from 'react-native';
import {launchImageLibrary, launchCamera as launchRNCamera} from 'react-native-image-picker';
import {useBoolean, useSafeState} from 'ahooks';
function getSource(value) {
  if (value && (value.startsWith('http') || value.startsWith('file:'))) {
    return value;
  }
  return '';
}
function filterSource(source = []) {
  if (source) {
    return source.map(value => getSource(value));
  }
  return [];
}
export default function useImagePicker({
  value,
  options,
  showUploadImg = true,
  beforeUpload,
  upload,
  uploadFinish,
  onCancel,
  onFail,
  onGrantFail,
  cameraRationale,
  libraryRationale,
}) {
  /** 打开相册或者摄像头的ActionSheet */
  const [launchVisible, {setTrue: setLaunchVisibleTrue, setFalse: setLaunchVisibleFalse}] = useBoolean(false);
  /** 打开预览图片的弹窗 */
  const [previewVisible, {setTrue: setPreviewVisibleTrue, setFalse: setPreviewVisibleFalse}] = useBoolean(false);
  /** 图片url集合 */
  const [currentImgSource, setCurrentImgSource] = useSafeState(filterSource(value));
  /** loading */
  const [loading, setLoading] = useSafeState(false);
  /** 预览照片地址 */
  const [previewSrc, setPreviewSrc] = useSafeState(''); // 选中的图片下标

  useEffect(() => {
    if (value && value.length > 0) {
      const source = value.map(value => getSource(value));
      setCurrentImgSource(source);
    }
  }, [value]);

  // 初始化图片上传配置
  const initialOptions = {
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
      const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, libraryRationale);
      if (result !== 'granted') {
        onGrantFail?.();
        return;
      }
    }
    setTimeout(() => {
      launchImageLibrary(
        {
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
  const handleCallback = async response => {
    try {
      if (response.didCancel) {
        // 用户取消上传 回调
        onCancel?.(response);
      } else if (response.errorCode) {
        // 上传失败 回调
        onFail?.(response);
      } else {
        if (!response.assets || response.assets.length === 0) return;
        const file = {
          fileName: response.assets[0].fileName,
          fileType: response.assets[0].type,
          uri: response.assets[0].uri,
          fileSize: response.assets[0].fileSize,
        };
        // 执行上传前的操作及判断
        if (beforeUpload) {
          const result = await beforeUpload(file);
          if (!result) {
            return;
          }
        }
        setLoading(true);
        const result = await upload?.(file);
        setLoading(false);
        uploadFinish?.(result);
        setLaunchVisibleFalse();
        if (result) {
          const datas = [...currentImgSource, result];
          setCurrentImgSource(datas);
        }
      }
    } catch (error) {
      setLoading(false);
      throw new Error('图片选择器出问题了');
    }
  };

  // 预览照片
  const previewImage = key => {
    setPreviewSrc(currentImgSource[key]);
    setPreviewVisibleTrue();
  };

  // 删除照片
  const deleteImage = key => {
    currentImgSource.splice(key, 1);
    setCurrentImgSource(currentImgSource);
    uploadFinish?.('');
  };

  // 打开上传
  const handlePress = () => {
    Keyboard.dismiss();
    setLaunchVisibleTrue();
  };
  return {
    currentImgSource,
    previewSrc,
    loading,
    launchLibrary,
    launchCamera,
    launchVisible,
    previewImage,
    deleteImage,
    handlePress,
    previewVisible,
    setLaunchVisibleFalse,
    setPreviewVisibleFalse,
    setPreviewSrc,
  };
}
