import React, { PropsWithChildren, useMemo, ComponentType } from 'react';
import {
  View,
  StyleSheet,
  Rationale,
  TouchableOpacity,
  ModalProps,
  ImageURISource,
  ImageRequireSource,
} from 'react-native';
import { CameraOptions, ImagePickerResponse } from 'react-native-image-picker';
import { Theme, Flex, ActionSheet, ActionSheetItem, TransitionImage, Icon } from '@uiw/react-native';
import ImageView from 'react-native-image-viewing';
import { useTheme } from '@shopify/restyle';
import useImagePicker from './useImagePicker';

export type ImageSource = ImageURISource | ImageRequireSource;
export interface File {
  fileName: string;
  fileType: string;
  uri: string;
  fileSize?: number;
}

export type ImagePickerProps = PropsWithChildren<{
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
  upload?: (file: File[]) => string[];
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
  // ImageViewProps
  onLongPress?: (image: ImageSource) => void;
  onImageIndexChange?: (imageIndex: number) => void;
  presentationStyle?: ModalProps['presentationStyle'];
  animationType?: ModalProps['animationType'];
  backgroundColor?: string;
  swipeToCloseEnabled?: boolean;
  doubleTapToZoomEnabled?: boolean;
  delayLongPress?: number;
  HeaderComponent?: ComponentType<{
    imageIndex: number;
  }>;
  FooterComponent?: ComponentType<{
    imageIndex: number;
  }>;
}>;

const ImagePicker = ({
  width = 100,
  height = 100,
  selectionLimit = 1,
  value = [],
  options,
  showUploadImg = true,
  beforeUpload,
  upload,
  uploadFinish,
  onCancel,
  onFail,
  onGrantFail,
  cameraRationale = {
    title: '获取摄像头权限',
    message: '若不允许，您将无法使用摄像头功能',
    buttonPositive: '同意',
    buttonNegative: '取消',
    buttonNeutral: '下次再说',
  },
  libraryRationale = {
    title: '获取读取文件权限',
    message: '若不允许，您将无法访问图库',
    buttonPositive: '同意',
    buttonNegative: '取消',
    buttonNeutral: '下次再说',
  },
  launchLibraryText = '打开相册',
  launchCameraText = '打开相机',
  ...others
}: ImagePickerProps) => {
  const theme = useTheme<Theme>();
  const styles = createStyles({
    width: width,
    height: height,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.mask,
  });

  const {
    currentImgSource,
    current,
    loading,
    launchLibrary,
    launchCamera,
    launchVisible,
    previewImage,
    closePreviewImage,
    deleteImage,
    handlePress,
    previewVisible,
    setLaunchVisibleFalse,
  } = useImagePicker({
    value,
    options,
    beforeUpload,
    upload,
    uploadFinish,
    onCancel,
    onFail,
    onGrantFail,
    cameraRationale,
    libraryRationale,
    selectionLimit,
  });

  const pictureList = useMemo(() => {
    if (showUploadImg && currentImgSource && currentImgSource.length > 0) {
      return currentImgSource.map((item, index) => (
        <Flex.Item key={index}>
          <View style={styles.box}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width, height }}>
              <TransitionImage
                source={{ uri: item }}
                style={{ width, height, borderRadius: 2 }}
                transition={true}
                disabled={loading}
                onPress={() => previewImage(index)}
              />
              <View style={styles.deleteBox}>
                <TouchableOpacity disabled={loading} onPress={() => deleteImage(index)}>
                  <Icon name="close" color="#fff" size={10} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Flex.Item>
      ));
    }
    return null;
  }, [showUploadImg, JSON.stringify(currentImgSource)]);

  const previewImages = useMemo(() => {
    return currentImgSource.map((item) => ({ uri: item }));
  }, [JSON.stringify(currentImgSource), current]);

  return (
    <View>
      <Flex justify="start" wrap="wrap">
        {pictureList}
        <Flex.Item>
          <View style={styles.box}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={handlePress}
              disabled={loading}
              style={{ justifyContent: 'center', alignItems: 'center', width, height }}
            >
              <Icon name="camera-o" color={theme.colors.gray300 || '#ccc'} size={24} />
            </TouchableOpacity>
          </View>
        </Flex.Item>
      </Flex>
      <ActionSheet onCancel={setLaunchVisibleFalse} visible={launchVisible}>
        <ActionSheetItem disabled={loading} onPress={launchLibrary}>
          {launchLibraryText}
        </ActionSheetItem>
        <ActionSheetItem disabled={loading} onPress={launchCamera}>
          {launchCameraText}
        </ActionSheetItem>
      </ActionSheet>
      <ImageView
        visible={previewVisible}
        onRequestClose={closePreviewImage}
        imageIndex={current || 0}
        images={previewImages}
        {...others}
      />
    </View>
  );
};

function createStyles({ width = 100, height = 100, borderColor = '#CCCCCC', backgroundColor = '#fff' }) {
  return StyleSheet.create({
    box: {
      width: width,
      height: height,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: borderColor,
      borderRadius: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: backgroundColor,
      margin: 4,
    },
    deleteBox: {
      position: 'absolute',
      right: 0,
      top: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 18,
      width: 18,
      backgroundColor: 'rgba(0, 0, 0, .7)',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 12,
    },
  });
}

export default ImagePicker;
