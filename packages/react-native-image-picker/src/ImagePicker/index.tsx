import React, { PropsWithChildren, useMemo } from 'react';
import { View, StyleSheet, Rationale, TouchableOpacity, Dimensions, Image } from 'react-native';
import { CameraOptions, ImagePickerResponse } from 'react-native-image-picker';
import { Theme, Flex, ActionSheet, ActionSheetItem, MaskLayer, TransitionImage, Icon, Text } from '@uiw/react-native';
import { useTheme } from '@shopify/restyle';
import useImagePicker from './useImagePicker';

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
}>;

const ImagePicker = ({
  width = 100,
  height = 100,
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
  launchCameraText = '打开摄像头',
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
    previewSrc,
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
                PlaceholderContent={<Text color="text">加载失败</Text>}
                transition={true}
              />
              <View style={styles.previewBox}>
                <TouchableOpacity disabled={loading} onPress={() => previewImage(index)} style={styles.previewIcon}>
                  <Icon name="eye" color={theme.colors.primary_background || '#3578e5'} size={16} />
                </TouchableOpacity>
                <TouchableOpacity disabled={loading} onPress={() => deleteImage(index)} style={styles.previewIcon}>
                  <Icon name="delete" color={theme.colors.primary_background || '#3578e5'} size={16} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Flex.Item>
      ));
    }
    return null;
  }, [showUploadImg, JSON.stringify(currentImgSource)]);

  return (
    <View>
      <Flex justify="start" wrap="wrap">
        <Flex.Item>
          <View style={styles.box}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={handlePress}
              disabled={loading}
              style={{ justifyContent: 'center', alignItems: 'center', width, height }}
            >
              <Icon name="plus-square-o" color="#A9A9A9" size={20} />
            </TouchableOpacity>
          </View>
        </Flex.Item>
        {pictureList}
      </Flex>
      <ActionSheet onCancel={setLaunchVisibleFalse} visible={launchVisible} style={{ zIndex: 99 }}>
        <ActionSheetItem onPress={launchLibrary}>{launchLibraryText}</ActionSheetItem>
        <ActionSheetItem onPress={launchCamera}>{launchCameraText}</ActionSheetItem>
      </ActionSheet>
      <MaskLayer visible={previewVisible} style={{ zIndex: 999 }} onDismiss={closePreviewImage} opacity={0.9}>
        <View style={styles.content}>
          <Image style={styles.image} source={{ uri: previewSrc }} />
        </View>
      </MaskLayer>
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
    content: {
      marginTop: Dimensions.get('window').width / 3 - 20,
      height: Dimensions.get('window').height / 3 - 20,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    previewBox: {
      position: 'absolute',
      left: 0,
      top: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      width: width,
    },
    previewIcon: {
      alignItems: 'center',
      justifyContent: 'center',
      width: width * 0.375,
      height: height * 0.375,
    },
  });
}

export default ImagePicker;
